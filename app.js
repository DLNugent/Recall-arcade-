(()=>{'use strict';
const modules=window.QUIZ_MODULES||[],el=document.getElementById('app');
const conceptModules=modules.filter(m=>m.learningPath!=='azure-apps-agents');
const azureModules=modules.filter(m=>m.learningPath==='azure-apps-agents');
const makeCombined=(id,title,source,items)=>({id,title,source,topics:items.flatMap(m=>m.topics),questions:items.flatMap(m=>m.questions)});
const conceptCombined=makeCombined('concepts-all','AI concepts — all modules','https://learn.microsoft.com/en-gb/training/paths/ai-concepts/',conceptModules);
const azureCombined=makeCombined('azure-apps-all','AI applications and agents — all modules','https://learn.microsoft.com/en-gb/training/paths/get-started-ai-apps-agents/',azureModules);
const combined=makeCombined('all-modules','All learning paths — combined','https://learn.microsoft.com/en-gb/training/',modules);
const collections=[...conceptModules,...azureModules,conceptCombined,azureCombined,combined];
let selectedModuleId='intro-ai-concepts';
let mod=modules[0];
const selectModule=id=>{selectedModuleId=id;mod=collections.find(m=>m.id===id)||modules[0];};
const STORAGE='recall-arcade-v1';let saved={};try{saved=JSON.parse(localStorage.getItem(STORAGE)||'{}')}catch{};
saved.history??=[];saved.stats??={};saved.best??={};
const persist=()=>{try{localStorage.setItem(STORAGE,JSON.stringify(saved))}catch{}};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuffle=arr=>{const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
// Conservative, token-aware recall matching. Exact approved variants always win.
const norm=s=>String(s??'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').trim().replace(/^(?:(?:it is|it s|this is|this would be|the answer is|i think it is) )+/,'').replace(/^(?:a|an|the) /,'');
const singular=s=>s.split(' ').map(w=>{
 if(w==='corpora')return 'corpus';
 if(w==='indices')return 'index';
 if(w==='matrices')return 'matrix';
 if(w.length>4&&w.endsWith('ies'))return w.slice(0,-3)+'y';
 if(w.length>4&&/(?:ches|shes|xes|sses|zzes)$/.test(w))return w.slice(0,-2);
 if(w.length>3&&w.endsWith('s')&&!/(?:ss|us|is|ous|ness)$/.test(w))return w.slice(0,-1);
 return w;
}).join(' ');
// Explicit UK/US spelling equivalences only; don't rewrite arbitrary words.
const spellingPairs=[
 ['catalogue','catalog'],['catalogues','catalogs'],['cataloguing','cataloging'],['catalogued','cataloged'],
 ['analyse','analyze'],['analyses','analyzes'],['analysed','analyzed'],['analysing','analyzing'],['analyser','analyzer'],['analysers','analyzers'],
 ['organisation','organization'],['organisations','organizations'],['organise','organize'],['organised','organized'],['organising','organizing'],
 ['recognise','recognize'],['recognised','recognized'],['recognising','recognizing'],['recogniser','recognizer'],['recognisers','recognizers'],
 ['behaviour','behavior'],['behaviours','behaviors'],['colour','color'],['colours','colors'],['coloured','colored'],
 ['centre','center'],['centres','centers'],['centralisation','centralization'],
 ['optimise','optimize'],['optimised','optimized'],['optimising','optimizing'],['optimisation','optimization'],
 ['summarise','summarize'],['summarised','summarized'],['summarising','summarizing'],['summarisation','summarization'],
 ['tokenisation','tokenization'],['tokenising','tokenizing'],['tokenised','tokenized'],
 ['diarisation','diarization'],['labelling','labeling'],['labelled','labeled'],
 ['modelling','modeling'],['modelled','modeled'],['customise','customize'],['customised','customized'],
 ['specialised','specialized'],['specialisation','specialization'],['authorisation','authorization'],['authorised','authorized'],
 ['personalisation','personalization'],['personalised','personalized']
];
const spellings=new Map(spellingPairs.map(([british,american])=>[british,american]));
const canonical=s=>singular(norm(s)).split(' ').map(w=>spellings.get(w)||w).join(' ');
const compact=s=>s.replace(/ /g,'');
function editDistance(a,b){
 const rows=Array.from({length:a.length+1},()=>Array(b.length+1).fill(0));
 for(let i=0;i<=a.length;i++)rows[i][0]=i;
 for(let j=0;j<=b.length;j++)rows[0][j]=j;
 for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++){
 rows[i][j]=Math.min(rows[i-1][j]+1,rows[i][j-1]+1,rows[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
 if(i>1&&j>1&&a[i-1]===b[j-2]&&a[i-2]===b[j-1])rows[i][j]=Math.min(rows[i][j],rows[i-2][j-2]+1);
 }return rows[a.length][b.length];
}
function recallCorrect(q,input){
 const value=canonical(input);if(!value||value.length>140)return false;
 const allowed=[...new Set([q.answer,...(q.aliases||[])].map(canonical).filter(Boolean))];
 const wrong=(q.options||[]).filter(o=>o!==q.answer).map(canonical).filter(o=>!allowed.includes(o));
 if(allowed.includes(value))return true;
 const condensed=compact(value);
 if(wrong.some(o=>compact(o)===condensed))return false;
 if(allowed.some(o=>compact(o)===condensed))return true;
 // Only tolerate limited typo edits, maintaining word count and protecting acronyms.
 const distance=(a,b)=>{
  const aa=a.split(' '),bb=b.split(' ');if(aa.length!==bb.length)return Infinity;
  let sum=0;
  for(let i=0;i<aa.length;i++){
   const x=aa[i],y=bb[i];if(x===y)continue;
   if(Math.min(x.length,y.length)<5)return Infinity;
   const d=editDistance(x,y),limit=Math.max(x.length,y.length)>=10?2:1;
   if(d>limit||x[0]!==y[0])return Infinity;
   sum+=d;
  }
  return sum;
 };
 const best=Math.min(...allowed.map(a=>distance(a,value)));
 const limit=condensed.length>=12?2:1;
 if(!Number.isFinite(best)||best>limit)return false;
 // Do not accept a typo that is equally close to a known wrong option.
 return wrong.every(o=>distance(o,value)>best);
}
const icons=['🧠','✨','💬','🎙️','👁️','📄','⚖️','🔎'];
const modeLabels={all:'Mixed challenge',recall:'Classic recall',match:'Clickable match',scenario:'Scenario challenge',weak:'Weak spots'};
let selection={topic:'all',mode:'all',count:20,timed:true},run=null,timer=null;
const qstat=q=>saved.stats[q.id]||{seen:0,correct:0};
const learnt=q=>{let s=qstat(q);return s.seen>0&&s.correct/s.seen>=.8&&s.correct>=2};
const title=t=>t==='all'?'All topics':t;
const numSeen=()=>Object.values(saved.stats).filter(s=>s.seen).length;
const moduleChoices=()=>collections.map(m=>({id:m.id,title:m.title,count:m.questions.length,path:m.learningPath==='azure-apps-agents'?'Azure applications':m.id==='azure-apps-all'?'Azure applications':m.id==='all-modules'?'Both paths':'AI concepts'}));
const isCombined=id=>id==='all-modules'||id==='azure-apps-all'||id==='concepts-all';
function home(){clearInterval(timer);run=null;const mastered=mod.questions.filter(learnt).length;
el.innerHTML=`<section class="hero"><div><div class="eyebrow">Learn it. Recall it. Master it.</div><h1>AI fundamentals,<br><span class="accent">arcade style.</span></h1><p class="lead">Sporcle-inspired practice across two Microsoft Learn learning paths. Study any module or mix questions from a full path.</p><div class="btnrow"><button id="start">Start playing →</button><button class="ghost" id="weakstart">Review weak spots</button></div></div><div class="hero-detail"><span class="muted smalltext">YOUR QUESTION MASTERY</span><strong>${mastered}<span style="color:#788ba7">/${mod.questions.length}</span></strong><div class="progress"><div style="width:${100*mastered/mod.questions.length}%"></div></div><div class="muted smalltext" style="margin-top:9px">${numSeen()} different questions attempted</div></div></section>
<div class="sectionhead"><h2>Choose a Microsoft Learn module</h2><span class="muted smalltext">${modules.length} modules · ${combined.questions.length} questions</span></div>
<div class="grid modulegrid">${moduleChoices().map((m,i)=>{const qs=collections.find(x=>x.id===m.id).questions;const mastered=qs.filter(learnt).length;return `<article tabindex="0" role="button" class="card selectable ${selectedModuleId===m.id?'selectedmodule':''}" data-module="${esc(m.id)}"><div class="topline"><span class="emoji">${isCombined(m.id)?'🏆':icons[i%icons.length]}</span><span class="tag">${mastered}/${qs.length} mastered</span></div><h3>${esc(m.title)}</h3><p>${esc(m.path)} · ${qs.length} reviewed practice questions</p><span class="card-bottom"><span>${selectedModuleId===m.id?'Currently selected':'Select module'}</span><span>↗</span></span></article>`}).join('')}</div>
<div class="sectionhead"><h2>Pick a game mode</h2><span class="muted smalltext">${mod.questions.length} reviewed questions</span></div><div class="grid" id="modes">${[['recall','⌨️','Classic recall','Type the correct term without answer choices. The closest to a classic Sporcle quiz.'],['match','🎯','Clickable match','Choose the best definition or category from four plausible answers.'],['scenario','⚡','Scenario challenge','Solve real-world examples: which AI capability or principle applies?']].map(([k,ico,head,sub])=>`<article tabindex="0" role="button" class="card selectable" data-mode="${k}"><div class="topline"><span class="emoji">${ico}</span><span class="tag">${mod.questions.filter(q=>q.type===k).length} Qs</span></div><h3>${head}</h3><p>${sub}</p><span class="card-bottom"><span>Practice this mode</span><span>↗</span></span></article>`).join('')}</div>
<div class="sectionhead"><h2>Study by topic</h2><span class="muted smalltext">${mod.topics.length} topics · ${mod.questions.length} questions</span></div><div class="grid topics">${mod.topics.map((t,i)=>{const qs=mod.questions.filter(q=>q.topic===t.title),m=qs.filter(learnt).length;return `<article tabindex="0" role="button" class="card selectable" data-topic="${esc(t.title)}"><div class="topline"><span class="emoji">${icons[i%icons.length]}</span><span class="tag">${m}/${qs.length} mastered</span></div><h3>${esc(t.title)}</h3><div class="progress"><div style="width:${100*m/qs.length}%"></div></div><p>Play ${qs.length} questions across recall, matching and scenarios.</p><span class="card-bottom"><span>Launch topic quiz</span><span>↗</span></span></article>`}).join('')}</div>
<div class="sectionhead"><h2>Study source</h2></div><div class="notice">Independent revision aligned to Microsoft Learn teaching units. The original introductory module contains seven supplementary foundation questions. New Azure path questions are tied to specific lesson units. Questions are independently written, not copies of official assessments.</div><p class="source">Study source: <a href="${esc(mod.source)}" target="_blank" rel="noopener noreferrer">${esc(mod.title)} — Microsoft Learn ↗</a></p>`;
el.querySelectorAll('[data-module]').forEach(node=>activate(node,()=>{selectModule(node.dataset.module);selection={...selection,topic:'all',mode:'all',count:20};home();}));document.getElementById('start').onclick=()=>setup();document.getElementById('weakstart').onclick=()=>setup({mode:'weak'});
el.querySelectorAll('[data-mode]').forEach(node=>activate(node,()=>setup({mode:node.dataset.mode})));el.querySelectorAll('[data-topic]').forEach(node=>activate(node,()=>setup({topic:node.dataset.topic})));
}
function activate(node,fn){node.addEventListener('click',fn);node.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();fn()}})}
function available(){return mod.questions.filter(q=>(selection.topic==='all'||q.topic===selection.topic)&&(selection.mode==='all'||selection.mode==='weak'||q.type===selection.mode)&&(selection.mode!=='weak'||qstat(q).seen>0&&(!learnt(q)||qstat(q).correct<qstat(q).seen)))}
function setup(over={}){clearInterval(timer);selection={...selection,...over};const a=available(),n=Math.min(selection.count,a.length);el.innerHTML=`<div class="eyebrow">Configure your challenge</div><h1>Ready to play?</h1><div class="setup"><section class="panel"><div class="field"><label for="module">Module</label><select id="module" class="select">${moduleChoices().map(m=>`<option value="${esc(m.id)}" ${selectedModuleId===m.id?'selected':''}>${esc(m.title)} (${m.count})</option>`).join('')}</select></div><div class="field"><label for="topic">Topic</label><select id="topic" class="select"><option value="all">All topics</option>${mod.topics.map(t=>`<option value="${esc(t.title)}" ${selection.topic===t.title?'selected':''}>${esc(t.title)}</option>`).join('')}</select></div><div class="field"><label for="mode">Game mode</label><select id="mode" class="select">${Object.entries(modeLabels).map(([k,v])=>`<option value="${k}" ${selection.mode===k?'selected':''}>${v}</option>`).join('')}</select></div><div class="field"><label for="custom-count">Number of questions (1–${a.length||1})</label><div class="btnrow" id="lengths">${[5,10,15,20].filter(v=>v<=a.length).map(v=>`<button class="pill ${selection.count===v?'active':''}" data-count="${v}">${v}</button>`).join('')}<button class="pill ${selection.count>=a.length?'active':''}" data-count="${a.length}">All ${a.length} available</button></div><div class="countfield"><span class="muted smalltext">Or choose any number:</span><input id="custom-count" type="number" min="1" max="${Math.max(1,a.length)}" step="1" inputmode="numeric" class="select countinput" value="${Math.max(1,Math.min(selection.count,a.length||1))}" aria-label="Custom number of questions"></div><small>You can choose any whole number up to the questions available in this topic or mode.</small></div><div class="field"><label>Timer</label><div class="btnrow"><button class="pill ${selection.timed?'active':''}" data-timed="true">On · scaled to round length</button><button class="pill ${!selection.timed?'active':''}" data-timed="false">Off · relaxed</button></div></div><div class="btnrow"><button id="begin" ${n<1?'disabled':''}>Play ${n} questions →</button><button class="ghost" id="back">← Home</button></div>${!a.length?'<p class="notice">No previously missed questions in this selection. Try another mode or topic.</p>':''}</section><aside class="panel"><h3>What to expect</h3><p class="muted">Classic recall requires typing; the other modes use clickable answers. Each response is checked before you move on.</p><div class="statstrip"><div class="stat"><strong>${a.length}</strong><span class="smalltext muted">Available</span></div><div class="stat"><strong>${n}</strong><span class="smalltext muted">In round</span></div><div class="stat"><strong>${selection.timed?time(Math.max(480,n*40)):'∞'}</strong><span class="smalltext muted">Time</span></div></div><p class="muted smalltext">Questions you get wrong are remembered for focused revision. Your browser saves scores and mastery automatically.</p></aside></div>`;
el.querySelector('#module').onchange=e=>{selectModule(e.target.value);setup({topic:'all',count:20});};el.querySelector('#topic').onchange=e=>setup({topic:e.target.value});el.querySelector('#mode').onchange=e=>setup({mode:e.target.value});el.querySelectorAll('[data-count]').forEach(b=>b.onclick=()=>setup({count:+b.dataset.count}));const countInput=el.querySelector('#custom-count');countInput.onchange=()=>setup({count:Math.max(1,Math.min(a.length||1,Math.floor(Number(countInput.value)||1)))});countInput.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();countInput.blur()}};el.querySelectorAll('[data-timed]').forEach(b=>b.onclick=()=>setup({timed:b.dataset.timed==='true'}));el.querySelector('#back').onclick=home;el.querySelector('#begin').onclick=begin;
}
function begin(){const pool=available();if(!pool.length)return;const weighted=shuffle(pool).sort((a,b)=>{const sa=qstat(a),sb=qstat(b);return (sa.correct/(sa.seen||1)+Math.min(sa.seen,3)*.1)-(sb.correct/(sb.seen||1)+Math.min(sb.seen,3)*.1)});const questions=weighted.slice(0,Math.min(selection.count,weighted.length));
// Balance correct-answer positions across A-D within each round, and shuffle distractors.
const clickableCount=questions.filter(q=>q.type!=='recall').length;
const correctSlots=shuffle(Array.from({length:clickableCount},(_,i)=>i%4));
let clickableIndex=0;
const optionOrders=questions.map(q=>{
 if(q.type==='recall')return null;
 const choices=shuffle(q.options.filter(o=>o!==q.answer));
 choices.splice(correctSlots[clickableIndex++],0,q.answer);
 return choices;
});
run={questions,optionOrders,index:0,answers:[],started:Date.now(),seconds:selection.timed?Math.max(480,questions.length*40):null,maxSeconds:selection.timed?Math.max(480,questions.length*40):null,locked:false};if(selection.timed){timer=setInterval(()=>{if(!run)return;run.seconds=Math.max(0,run.maxSeconds-Math.floor((Date.now()-run.started)/1000));const t=el.querySelector('#clock');if(t){t.textContent=time(run.seconds);t.classList.toggle('danger',run.seconds<61)}if(run.seconds===0)finish()},250)}renderQuestion()}
const time=s=>`${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
function renderQuestion(){if(!run)return;if(run.index>=run.questions.length){finish();return}const q=run.questions[run.index],i=run.index;run.locked=false;const completed=run.answers.length;
el.innerHTML=`<div class="game-head"><div><div class="eyebrow">${esc(mod.title)} · ${esc(modeLabels[selection.mode])} · ${esc(q.topic)}</div><h2 style="margin:6px 0 0">Question ${i+1} of ${run.questions.length}</h2></div><div><div id="clock" class="timer">${selection.timed?time(run.seconds):'UNTIMED'}</div><div class="muted smalltext">${selection.timed?'Time remaining':'Take your time'}</div></div></div><div class="answergrid">${run.questions.map((_,j)=>`<span class="${j<i?'done':j===i?'current':''}" title="Question ${j+1}">${j<i?'✓':j+1}</span>`).join('')}</div><section class="question"><div class="q-index">${q.type==='recall'?'TYPE THE ANSWER':q.type==='match'?'CLICKABLE MATCH':'APPLIED SCENARIO'}</div><h2>${esc(q.prompt)}</h2>${q.type==='recall'?`<form id="answerform"><label class="muted smalltext" for="recallinput">Your answer</label><input id="recallinput" class="answerinput" autocomplete="off" spellcheck="false" placeholder="Type your answer here..." aria-label="Answer" maxlength="140"><div class="hint">Press <code>Enter</code> to check. Spelling and punctuation are treated flexibly.</div><div class="q-actions"><button id="check" type="submit">Check answer →</button><button type="button" class="ghost" id="skip">Skip / reveal</button></div></form>`:`<div class="answers">${run.optionOrders[i].map((o,j)=>`<button type="button" class="option" data-answer="${j}"><span class="muted smalltext">${String.fromCharCode(65+j)} · </span>${esc(o)}</button>`).join('')}</div><div class="q-actions"><span class="muted smalltext">Select one answer to check it.</span><button type="button" class="ghost" id="skip">Skip / reveal</button></div>`}<div id="feedbackarea"></div></section><p class="source">${q.coverage==='supplementary'?'Supplementary foundation question ·':'Based on the lesson ·'} <a href="${esc(q.sourceUrl||mod.source)}" target="_blank" rel="noopener noreferrer">Microsoft Learn ↗</a></p>`;
if(q.type==='recall'){const f=el.querySelector('#answerform');f.onsubmit=e=>{e.preventDefault();check(el.querySelector('#recallinput').value,false)};el.querySelector('#recallinput').focus()}else el.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>check(run.optionOrders[run.index][+b.dataset.answer],false));el.querySelector('#skip').onclick=()=>check('',true);
}
function check(answer,skipped){if(!run||run.locked)return;const q=run.questions[run.index];if(q.type==='recall'&&!skipped&&!norm(answer))return;run.locked=true;const correct=!skipped&&(q.type==='recall'?recallCorrect(q,answer):answer===q.answer);run.answers.push({question:q,answer:skipped?'(skipped)':answer,correct});const s=saved.stats[q.id]||{seen:0,correct:0};s.seen++;if(correct)s.correct++;saved.stats[q.id]=s;persist();
el.querySelectorAll('.option').forEach(btn=>{btn.disabled=true;const opt=run.optionOrders[run.index][+btn.dataset.answer];if(opt===q.answer)btn.classList.add('correct');else if(opt===answer)btn.classList.add('wrong')});const input=el.querySelector('#recallinput');if(input)input.disabled=true;const form=el.querySelector('#answerform');if(form)form.querySelectorAll('button').forEach(b=>b.disabled=true);const skip=el.querySelector('#skip');if(skip)skip.disabled=true;
el.querySelector('#feedbackarea').innerHTML=`<div class="feedback ${correct?'':'no'}"><strong>${correct?'✓ Correct!':skipped?'↪ Answer revealed':'✕ Not quite'}</strong><div>Answer: <b>${esc(q.answer)}</b></div><div style="margin-top:6px">${esc(q.explanation)}</div>${q.coverage==='supplementary'?'<div class="smalltext" style="margin-top:8px">Supplementary background — not explicitly taught in the short introduction lesson.</div>':''}</div><div class="q-actions"><span class="muted smalltext">${run.answers.filter(a=>a.correct).length} correct so far</span><button id="next">${run.index===run.questions.length-1?'View results →':'Next question →'}</button></div>`;
el.querySelector('#next').onclick=()=>{run.index++;renderQuestion()};el.querySelector('#next').focus();}
function finish(){if(!run)return;clearInterval(timer);const out=run;run=null;const n=out.questions.length,correct=out.answers.filter(a=>a.correct).length,elapsed=Math.floor((Date.now()-out.started)/1000);const percent=n?Math.round(100*correct/n):0;const key=`${selectedModuleId}/${selection.topic}/${selection.mode}/${n}`;const old=saved.best[key];if(!old||percent>old.percent||(percent===old.percent&&elapsed<old.elapsed))saved.best[key]={percent,elapsed};saved.history.unshift({at:new Date().toISOString(),module:selectedModuleId,topic:selection.topic,mode:selection.mode,total:n,correct,elapsed});saved.history=saved.history.slice(0,100);persist();
el.innerHTML=`<section class="results"><div class="eyebrow">Round complete</div><h1>${percent===100?'Perfect round!':percent>=75?'Strong work.':'Keep building mastery.'}</h1><div class="bigscore">${correct}<span style="color:#8495a8">/${n}</span></div><div class="muted">${percent}% correct · ${time(elapsed)} elapsed · ${out.answers.filter(a=>!a.correct).length} to revisit</div><div class="statstrip"><div class="stat"><strong>${percent}%</strong><span class="smalltext muted">Accuracy</span></div><div class="stat"><strong>${mod.questions.filter(learnt).length}</strong><span class="smalltext muted">Mastered in bank</span></div><div class="stat"><strong>${numSeen()}</strong><span class="smalltext muted">Practised</span></div></div><div class="btnrow"><button id="again">Play another round →</button><button class="ghost" id="retry">Repeat missed</button><button class="outline" id="backhome">Home</button></div><div class="sectionhead"><h2>Answer review</h2><span class="muted smalltext">Open any item for an explanation</span></div><div class="review">${out.answers.map((a,i)=>`<details class="review-item" ${a.correct?'':'open'}><summary><span class="${a.correct?'good':'bad'}">${a.correct?'✓':'✕'}</span> ${i+1}. ${esc(a.question.prompt)}</summary><p><b>Your answer:</b> ${esc(a.answer)}<br><b>Expected:</b> ${esc(a.question.answer)}</p><p>${esc(a.question.explanation)}</p></details>`).join('')}</div></section>`;el.querySelector('#again').onclick=()=>setup();el.querySelector('#backhome').onclick=home;el.querySelector('#retry').onclick=()=>{const missed=out.answers.filter(a=>!a.correct).map(a=>a.question);if(!missed.length){setup({mode:'weak'});return}selection={...selection,timed:false};const questions=shuffle(missed);const ct=questions.filter(q=>q.type!=='recall').length;const slots=shuffle(Array.from({length:ct},(_,i)=>i%4));let k=0;const optionOrders=questions.map(q=>{if(q.type==='recall')return null;const choices=shuffle(q.options.filter(o=>o!==q.answer));choices.splice(slots[k++],0,q.answer);return choices;});run={questions,optionOrders,index:0,answers:[],started:Date.now(),seconds:null,locked:false};renderQuestion()};window.scrollTo(0,0);
}
document.getElementById('homeLink').addEventListener('click',home);document.getElementById('homeLink').addEventListener('keydown',e=>{if(e.key==='Enter')home()});document.getElementById('reset').onclick=()=>{if(confirm('Erase all saved quiz progress and scores on this browser?')){saved={history:[],stats:{},best:{}};persist();home()}};home();
})();