(function(){

/* ---------------- i18n ---------------- */
const I18N = {
  en:{
    appTitle:"Lesson Plan Studio", appTagline:"Crafted for the classroom",
    tabNew:"New Plan", tabSaved:"Saved Plans",
    secBasics:"Lesson Details", lessonTitle:"Lesson Title", subject:"Subject", class:"Class", duration:"Duration",
    date:"Date", strand:"Strand", teacher:"Teacher", competency:"Competency", topic:"Topic", gnh:"GNH Principles and Values",
    secEnDetails:"Additional Details", lessonNumber:"Lesson Plan Number", period:"Period", pedagogy:"Pedagogy", teachingStrategies:"Teaching Strategies",
    secDzDetails:"Additional Details", venue:"Venue",
    secObjectives:"Objectives", addObjective:"Add objective",
    secPrior:"Prior Knowledge", secResources:"Resources",
    secStages:"Lesson Stages", addPhase:"Add stage",
    secStagesDz:"Lesson Stages (table)", addRow:"Add row",
    secReflection:"Teaching Reflection",
    phaseHint:'Tip: start a line with "- " for a bullet point, "1. " for a numbered point, or "## " for a bold sub-heading (e.g. Activity 1).',
    phaseHintDz:'Tip: start a line with "- " for a bullet point inside any box.',
    save:"Save Plan", exportWord:"Export to Word", printBtn:"Print", newBtn:"Clear",
    preview:"Preview", pickDate:"Select date",
    stageName:"Stage name", stageTime:"Time", stageContent:"Content",
    colTopic:"Main Topic / Stage", colSkill:"Skill & Objective Focus", colTeacher:"Teacher's Activity & Method",
    colStudent:"Student's Activity / Learning Experience", colTime:"Duration", colAssessment:"Assessment Tools & Method",
    savedEmpty:"No saved lesson plans yet — save one from “New Plan” to see it here.",
    open:"Open", duplicate:"Duplicate", del:"Delete", exportShort:"Word",
    confirmDelete:"Delete this lesson plan? This can't be undone.",
    savedToast:"Lesson plan saved", deletedToast:"Lesson plan deleted", duplicatedToast:"Duplicated",
    docUntitled:"Untitled Lesson", docSubject:"Subject", docClass:"Class", docDuration:"Duration", docStrand:"Strand",
    docCompetency:"Competency", docTopic:"Topic", docObjectives:"Objectives",
    docPrior:"Prior Knowledge", docResources:"Resources", docDescription:"Lesson Description",
    docLessonNo:"Lesson Plan No.", docPeriod:"Period", docDate:"Date", docPedagogy:"Pedagogy", docTeachingStrategies:"Teaching Strategies",
    docGNH:"GNH Principles and Values", docVenue:"Venue", docReflection:"Teaching Reflection",
    emptyPreviewHint:"Fill in the form to see your lesson plan take shape here.",
    searchPlaceholder:"Search saved plans..."
  },
  dz:{
    appTitle:"སློབ་ཚན་འཆར་གཞི།", appTagline:"སློབ་ཚན་གྱི་དོན་ལུ་བཟོ་བཏོན་འབད་ཡོད།",
    tabNew:"འཆར་གཞི་གསརཔ།", tabSaved:"ཉར་བཞགཔའི་འཆར་གཞི།",
    secBasics:"སློབ་ཚན་གྱི་གནད་དོན།", lessonTitle:"སློབ་ཚན་གྱི་མགོ་མིང་།", subject:"ཆོས་ཚན།", class:"སློབ་རིམ།", duration:"དུས་ཡུན།",
    date:"སྤྱི་ཚེས།", strand:"ཡན་ལག", teacher:"སློབ་དཔོན།", competency:"ནུས་པ།", topic:"བརྗོད་དོན།", gnh:"རྒྱལ་ཡོངས་དགའ་སྐྱིད་དཔལ་འཛོམས་ཀྱི་གཞི་རྩ/ལྟ་བ།",
    secEnDetails:"གནད་དོན་ཁ་སྐོང་།", lessonNumber:"སློབ་ཚན་ཨང་།", period:"དུས་ཚོད་ཐེངས།", pedagogy:"སློབ་སྟོན་ཐབས་ལམ།", teachingStrategies:"སློབ་སྟོན་ཐབས་རིག",
    secDzDetails:"གནད་དོན་ཁ་སྐོང་།", venue:"ས་གོ / སློབ་ཁང་།",
    secObjectives:"ལས་དོན།", addObjective:"དམིགས་ཡུལ་ཁ་སྣོན།",
    secPrior:"སྔོན་ཤེས།", secResources:"མཁོ་ཆས།",
    secStages:"སློབ་ཚན་གྱི་རིམ་པ།", addPhase:"རིམ་པ་ཁ་སྣོན།",
    secStagesDz:"སློབ་ཚན་གྱི་རིམ་པ (ཐིག་ཁྲམ)", addRow:"རིམ་པ་ཁ་སྐོང་།",
    secReflection:"སློབ་སྟོན་ཞིབ་འཇུག།",
    phaseHint:'གྲོགས་རམ: ཚིག་གྲལ་ "- " ལས་འགོ་བཙུགས་པ་ཅིན་ཚུད་ཚིག་ཅིག་འབྱུང་། "## " ལས་འགོ་བཙུགས་པ་ཅིན་མགོ་མིང་ཚོགས་པ་ཞིག་འབྱུང་།',
    phaseHintDz:'གྲོགས་རམ: ཚིག་གྲལ་ "- " ལས་འགོ་བཙུགས་པ་ཅིན་ཚུད་ཚིག་ཅིག་འབྱུང་།',
    save:"ཉར་ཚགས།", exportWord:"Word ལུ་བཏོན།", printBtn:"དཔར་བསྐྲུན།", newBtn:"གསར་བསྐྲུན།",
    preview:"སྔོན་ལྟ།", pickDate:"སྤྱི་ཚེས་འདེམས།",
    stageName:"རིམ་པའི་མིང་།", stageTime:"དུས་ཚོད།", stageContent:"ནང་དོན།",
    colTopic:"དོན་ཚན་གཙོ་བོ།", colSkill:"རིག་རྩལ་དང་དམིགས་གཏད།", colTeacher:"སློབ་དཔོན་གྱི་སྦྱོང་ལཱ་དང་ཐབས་ཤེས།",
    colStudent:"སློབ་ཕྲུག་གི་སྦྱོང་ལཱ།", colTime:"དུས་ཡུན།", colAssessment:"དབྱེ་ཞིབ་ཀྱི་མཁོ་ཆས་དང་ཐབས་རིག།",
    savedEmpty:"ད་ལྟོའི་བར་ན་ཉར་བཞགཔའི་འཆར་གཞི་མིན་འདུག། \u201cའཆར་གཞི་གསརཔ\u201d་ནང་ལས་ཉར་བཞག.",
    open:"ཁ་ཕྱེ།", duplicate:"འདྲ་བཤུས།", del:"བསུབ།", exportShort:"Word",
    confirmDelete:"འཆར་གཞི་འདི་བསུབ་ནི་ཨིན་ན? ཕྱིར་འབདཝ་མི་ཚུགས།",
    savedToast:"འཆར་གཞི་ཉར་ཚགས་འབད་ཡི།", deletedToast:"འཆར་གཞི་བསུབ་ཡི།", duplicatedToast:"འདྲ་བཤུས་འབད་ཡི།",
    docUntitled:"མིང་མེད་པའི་སློབ་ཚན།", docSubject:"ཆོས་ཚན།", docClass:"སློབ་རིམ།", docDuration:"དུས་ཡུན།", docStrand:"ཡན་ལག",
    docCompetency:"ནུས་པ།", docTopic:"བརྗོད་དོན།", docObjectives:"ལས་དོན།",
    docPrior:"སྔོན་ཤེས།", docResources:"མཁོ་ཆས།", docDescription:"འགྲེལ་བཤད།",
    docLessonNo:"སློབ་ཚན་ཨང་།", docPeriod:"དུས་ཚོད་ཐེངས།", docDate:"སྤྱི་ཚེས།", docPedagogy:"སློབ་སྟོན་ཐབས་ལམ།", docTeachingStrategies:"སློབ་སྟོན་ཐབས་རིག",
    docGNH:"རྒྱལ་ཡོངས་དགའ་སྐྱིད་དཔལ་འཛོམས་ཀྱི་གཞི་རྩ།", docVenue:"ས་གོ།", docReflection:"སློབ་སྟོན་ཞིབ་འཇུག།",
    emptyPreviewHint:"ཐོ་བཀོད་བྱང་བུ་བཀང་སྟེ་སློབ་ཚན་འཆར་གཞི་འདི་གུ་བལྟ།",
    searchPlaceholder:"ཉར་བཞགཔའི་འཆར་གཞི་འཚོལ་ཞིབ..."
  }
};
let lang = 'en';
const DZ_SUBJECT = 'རྫོང་ཁ';
function t(key){ return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key; }
function applySubjectLock(){
  const el = document.getElementById('f_subject');
  if(!el) return;
  if(lang==='dz'){
    plan.subject = DZ_SUBJECT;
    el.value = DZ_SUBJECT;
    el.readOnly = true;
  } else {
    el.readOnly = false;
  }
}
function applyI18n(){
  document.documentElement.setAttribute('data-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.getElementById('searchSaved').placeholder = t('searchPlaceholder');
  applySubjectLock(); bindDateField();
  renderObjectives(); renderPhases(); renderDzRows(); renderPreview(); renderSaved();
}

/* ---------------- icons ---------------- */
const ICONS = {
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
  edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  trash:'<path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>',
  download:'<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
  print:'<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/>'
};

/* ---------------- state ---------------- */
function blankPlan(){
  return {
    id: 'lp_' + Date.now().toString(36) + Math.random().toString(36).slice(2,7),
    format: lang,
    title:'', subject:'', className:'', duration:'', date:'', strand:'', teacher:'',
    competency:'', topic:'', gnh:'',
    objectives:[''],
    // English-only
    lessonNumber:'', period:'', pedagogy:'', teachingStrategies:'',
    prior:'', resources:'',
    phasesEn:[
      {name:'Introduction', time:'10 mins', content:''},
      {name:'Learning Experience / Activities', time:'35 mins', content:''},
      {name:'Assessment / Closure', time:'5 mins', content:''}
    ],
    // Dzongkha-only
    venue:'', reflection:'',
    phasesDz:[
      {name:'', skillFocus:'', teacherActivity:'', studentActivity:'', time:'', assessment:''}
    ],
    createdAt: Date.now(), updatedAt: Date.now()
  };
}
let plan = blankPlan();
let savedPlans = [];
let editingExistingId = null;

/* ---------------- storage ----------------
   Uses the Claude Artifact storage API (window.storage) when available.
   Falls back to the browser's localStorage when this file is hosted on
   its own (e.g. a personal website), so saved plans still work there. */
const hasArtifactStorage = (typeof window !== 'undefined' && window.storage && typeof window.storage.get === 'function');

async function loadSaved(){
  try{
    if(hasArtifactStorage){
      const res = await window.storage.get('lessonplans', false);
      savedPlans = res && res.value ? JSON.parse(res.value) : [];
    } else {
      const raw = localStorage.getItem('lessonplans');
      savedPlans = raw ? JSON.parse(raw) : [];
    }
  }catch(e){
    savedPlans = [];
  }
}
async function persistSaved(){
  try{
    if(hasArtifactStorage){
      await window.storage.set('lessonplans', JSON.stringify(savedPlans), false);
    } else {
      localStorage.setItem('lessonplans', JSON.stringify(savedPlans));
    }
    return true;
  }catch(e){
    console.error('storage error', e);
    return false;
  }
}

/* ---------------- form <-> plan sync ---------------- */
/* 'date' is handled separately by bindDateField() — English uses a native
   <input type="date">, Dzongkha uses a custom Dzongkha-labelled calendar. */
const simpleFields = ['title','subject','className','duration','strand','teacher','competency','topic','gnh',
  'lessonNumber','period','pedagogy','teachingStrategies','prior','resources','venue','reflection'];
const fieldIdMap = {
  title:'f_title',subject:'f_subject',className:'f_class',duration:'f_duration',strand:'f_strand',
  teacher:'f_teacher',competency:'f_competency',topic:'f_topic',gnh:'f_gnh',
  lessonNumber:'f_lessonNumber',period:'f_period',pedagogy:'f_pedagogy',teachingStrategies:'f_teachingStrategies',
  prior:'f_prior',resources:'f_resources',venue:'f_venue',reflection:'f_reflection'
};

function bindSimpleFields(){
  simpleFields.forEach(key=>{
    const el = document.getElementById(fieldIdMap[key]);
    if(!el) return;
    el.value = plan[key] || '';
    const handler = ()=>{ plan[key] = el.value; renderPreview(); };
    if(el.tagName==='SELECT'){ el.onchange = handler; }
    else{ el.oninput = handler; }
  });
  applySubjectLock();
  bindDateField();
}

function renderObjectives(){ renderStringList('objectivesList','objectives'); }

function renderStringList(containerId, key){
  const wrap = document.getElementById(containerId);
  wrap.innerHTML = '';
  plan[key].forEach((val, i)=>{
    const row = document.createElement('div');
    row.className = 'list-row';
    const input = document.createElement('input');
    input.type = 'text'; input.value = val;
    input.placeholder = '...';
    input.oninput = ()=>{ plan[key][i] = input.value; renderPreview(); };
    const del = document.createElement('button');
    del.className='mini-btn'; del.type='button';
    del.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+ICONS.trash+'</svg>';
    del.onclick = ()=>{ plan[key].splice(i,1); if(plan[key].length===0) plan[key].push(''); renderStringList(containerId,key); renderPreview(); };
    row.appendChild(input); row.appendChild(del);
    wrap.appendChild(row);
  });
}

/* English free-form phase cards */
function renderPhases(){
  const wrap = document.getElementById('phasesList');
  wrap.innerHTML = '';
  plan.phasesEn.forEach((ph, i)=>{
    const card = document.createElement('div');
    card.className = 'phase-card';
    card.innerHTML = `
      <div class="phase-head">
        <div class="field"><label>${t('stageName')}</label><input type="text" class="ph-name" value="${escAttr(ph.name)}"></div>
        <div class="field time-field"><label>${t('stageTime')}</label><input type="text" class="ph-time" value="${escAttr(ph.time)}" placeholder="10 mins"></div>
        <button class="mini-btn ph-del" type="button" title="${t('del')}"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS.trash}</svg></button>
      </div>
      <div class="field"><label>${t('stageContent')}</label><textarea class="ph-content" style="min-height:110px" placeholder="- point one&#10;## Activity 1: ...&#10;1. question one">${escHtml(ph.content)}</textarea></div>
    `;
    card.querySelector('.ph-name').oninput = e=>{ plan.phasesEn[i].name = e.target.value; renderPreview(); };
    card.querySelector('.ph-time').oninput = e=>{ plan.phasesEn[i].time = e.target.value; renderPreview(); };
    card.querySelector('.ph-content').oninput = e=>{ plan.phasesEn[i].content = e.target.value; renderPreview(); };
    card.querySelector('.ph-del').onclick = ()=>{ plan.phasesEn.splice(i,1); renderPhases(); renderPreview(); };
    wrap.appendChild(card);
  });
}

/* Dzongkha colour-coded table-row editor */
function renderDzRows(){
  const wrap = document.getElementById('dzRowsList');
  wrap.innerHTML = '';
  plan.phasesDz.forEach((row, i)=>{
    const card = document.createElement('div');
    card.className = 'dzrow-card';
    card.innerHTML = `
      <div class="phase-head">
        <div class="field"><label>${t('colTopic')}</label><input type="text" class="dz-name" value="${escAttr(row.name)}"></div>
        <div class="field time-field dz-tint dz-tint-time"><label>${t('colTime')}</label><input type="text" class="dz-time" value="${escAttr(row.time)}" placeholder="15 mins"></div>
        <button class="mini-btn dz-del" type="button" title="${t('del')}"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS.trash}</svg></button>
      </div>
      <div class="row2">
        <div class="field dz-tint dz-tint-skill"><label>${t('colSkill')}</label><textarea class="dz-skill">${escHtml(row.skillFocus)}</textarea></div>
        <div class="field dz-tint dz-tint-assess"><label>${t('colAssessment')}</label><textarea class="dz-assess">${escHtml(row.assessment)}</textarea></div>
      </div>
      <div class="row2">
        <div class="field dz-tint dz-tint-teacher"><label>${t('colTeacher')}</label><textarea class="dz-teacher">${escHtml(row.teacherActivity)}</textarea></div>
        <div class="field dz-tint dz-tint-student"><label>${t('colStudent')}</label><textarea class="dz-student">${escHtml(row.studentActivity)}</textarea></div>
      </div>
    `;
    card.querySelector('.dz-name').oninput = e=>{ plan.phasesDz[i].name = e.target.value; renderPreview(); };
    card.querySelector('.dz-time').oninput = e=>{ plan.phasesDz[i].time = e.target.value; renderPreview(); };
    card.querySelector('.dz-skill').oninput = e=>{ plan.phasesDz[i].skillFocus = e.target.value; renderPreview(); };
    card.querySelector('.dz-assess').oninput = e=>{ plan.phasesDz[i].assessment = e.target.value; renderPreview(); };
    card.querySelector('.dz-teacher').oninput = e=>{ plan.phasesDz[i].teacherActivity = e.target.value; renderPreview(); };
    card.querySelector('.dz-student').oninput = e=>{ plan.phasesDz[i].studentActivity = e.target.value; renderPreview(); };
    card.querySelector('.dz-del').onclick = ()=>{ plan.phasesDz.splice(i,1); renderDzRows(); renderPreview(); };
    wrap.appendChild(card);
  });
}

function escHtml(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function escAttr(s){ return escHtml(s).replace(/"/g,'&quot;'); }

/* ---------------- date display formatting ---------------- */
function ordinalSuffix(n){
  const v = n % 100;
  if(v>=11 && v<=13) return 'th';
  switch(n % 10){ case 1: return 'st'; case 2: return 'nd'; case 3: return 'rd'; default: return 'th'; }
}
const MONTHS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const TIBETAN_DIGITS = {'0':'༠','1':'༡','2':'༢','3':'༣','4':'༤','5':'༥','6':'༦','7':'༧','8':'༨','9':'༩'};
function toTibetanNumeral(input){ return String(input).replace(/[0-9]/g, d=>TIBETAN_DIGITS[d]); }

function formatDateDisplay(raw, useLang){
  if(!raw) return '';
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(raw);
  if(!m) return raw; // not an ISO date (e.g. legacy free-text plan) — show as typed
  const y = parseInt(m[1],10), mo = parseInt(m[2],10), d = parseInt(m[3],10);
  if(useLang==='dz'){
    const dd = toTibetanNumeral(String(d).padStart(2,'0'));
    const mm = toTibetanNumeral(String(mo).padStart(2,'0'));
    const yy = toTibetanNumeral(y);
    return dd + '/' + mm + '/' + yy;
  }
  return d + ordinalSuffix(d) + ' ' + MONTHS_EN[mo-1] + ', ' + y;
}

/* ---------------- Dzongkha calendar widget ----------------
   English keeps the native <input type="date">. Dzongkha gets a small
   custom calendar (Gregorian dates, Dzongkha month/weekday labels) so the
   picker itself — not just the printed date — reads in Dzongkha. */
const DZ_MONTHS = ['ཟླ་ ༡ པ','ཟླ་ ༢ པ','ཟླ་ ༣ པ','ཟླ་ ༤ པ','ཟླ་ ༥ པ','ཟླ་ ༦ པ','ཟླ་ ༧ པ','ཟླ་ ༨ པ','ཟླ་ ༩ པ','ཟླ་ ༡༠ པ','ཟླ་ ༡༡ པ','ཟླ་ ༡༢ པ'];
const DZ_WEEKDAYS = ['ཉི་མ','ཟླ་བ','མིག་དམར','ལྷག་པ','ཕུར་བུ','པ་སངས','སྤེན་པ']; // Sun..Sat
let dzCalYear = null, dzCalMonth = null;

function pad2(n){ return String(n).padStart(2,'0'); }

function bindDateField(){
  const enInput = document.getElementById('f_date');
  if(enInput) enInput.value = plan.date || '';
  const btn = document.getElementById('dzDateBtn');
  if(btn) btn.textContent = plan.date ? formatDateDisplay(plan.date,'dz') : t('pickDate');
}

function dzCalOutsideClick(e){
  const wrap = document.getElementById('dzDatePicker');
  if(wrap && !wrap.contains(e.target)) closeDzCal();
}
function openDzCal(){
  const iso = /^\d{4}-\d{2}-\d{2}$/.test(plan.date||'') ? plan.date : null;
  const today = new Date();
  if(iso){ dzCalYear = parseInt(iso.slice(0,4),10); dzCalMonth = parseInt(iso.slice(5,7),10)-1; }
  else { dzCalYear = today.getFullYear(); dzCalMonth = today.getMonth(); }
  renderDzCal();
  document.getElementById('dzCalPopup').style.display = 'block';
  setTimeout(()=>document.addEventListener('click', dzCalOutsideClick, true), 0);
}
function closeDzCal(){
  const popup = document.getElementById('dzCalPopup');
  if(popup) popup.style.display = 'none';
  document.removeEventListener('click', dzCalOutsideClick, true);
}
function renderDzCal(){
  const popup = document.getElementById('dzCalPopup');
  if(!popup) return;
  const firstDow = new Date(dzCalYear, dzCalMonth, 1).getDay();
  const daysInMonth = new Date(dzCalYear, dzCalMonth+1, 0).getDate();
  const todayISO = new Date().toISOString().slice(0,10);
  let cells = '';
  for(let i=0;i<firstDow;i++) cells += `<div class="day empty"></div>`;
  for(let d=1; d<=daysInMonth; d++){
    const iso = `${dzCalYear}-${pad2(dzCalMonth+1)}-${pad2(d)}`;
    const cls = ['day'];
    if(iso===plan.date) cls.push('selected');
    if(iso===todayISO) cls.push('today');
    cells += `<div class="${cls.join(' ')}" data-iso="${iso}">${toTibetanNumeral(d)}</div>`;
  }
  popup.innerHTML = `
    <div class="dz-cal-head">
      <button type="button" id="dzCalPrev">‹</button>
      <div class="dz-cal-title">${DZ_MONTHS[dzCalMonth]} · ${toTibetanNumeral(dzCalYear)}</div>
      <button type="button" id="dzCalNext">›</button>
    </div>
    <div class="dz-cal-grid">
      ${DZ_WEEKDAYS.map(w=>`<div class="wd">${w}</div>`).join('')}
      ${cells}
    </div>
  `;
  popup.querySelector('#dzCalPrev').onclick = (e)=>{ e.stopPropagation(); dzCalMonth--; if(dzCalMonth<0){ dzCalMonth=11; dzCalYear--; } renderDzCal(); };
  popup.querySelector('#dzCalNext').onclick = (e)=>{ e.stopPropagation(); dzCalMonth++; if(dzCalMonth>11){ dzCalMonth=0; dzCalYear++; } renderDzCal(); };
  popup.querySelectorAll('.day[data-iso]').forEach(el=>{
    el.onclick = (e)=>{ e.stopPropagation(); plan.date = el.getAttribute('data-iso'); bindDateField(); closeDzCal(); renderPreview(); };
  });
}

/* ---------------- lesson number auto-numbering ---------------- */
function nextLessonNumber(){
  let max = 0;
  savedPlans.forEach(p=>{
    const n = parseInt(p.lessonNumber, 10);
    if(!isNaN(n) && n>max) max = n;
  });
  return String(max+1);
}

/* ---------------- content parsing for preview/export ---------------- */
function linkify(text){
  return text.replace(/(https?:\/\/[^\s]+)/g, url=>`<a href="${url}" target="_blank" rel="noopener">${url}</a>`);
}
function inlineBold(text){
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}
function renderContentBlock(raw){
  if(!raw || !raw.trim()) return `<p class="doc-empty">—</p>`;
  const lines = raw.split('\n');
  let html = ''; let listMode = null; // null | 'ul' | 'ol'
  const closeList = ()=>{ if(listMode){ html += listMode==='ul' ? '</ul>' : '</ol>'; listMode=null; } };
  lines.forEach(line=>{
    const trimmed = line.trim();
    if(trimmed === ''){ closeList(); return; }
    if(trimmed.startsWith('## ')){
      closeList();
      html += `<div class="doc-sub">${inlineBold(linkify(escHtml(trimmed.slice(3))))}</div>`;
    } else if(trimmed.startsWith('- ') || trimmed.startsWith('• ')){
      if(listMode!=='ul'){ closeList(); html += '<ul class="doc-ul">'; listMode='ul'; }
      html += `<li>${inlineBold(linkify(escHtml(trimmed.slice(2))))}</li>`;
    } else if(/^\d+[.)]\s+/.test(trimmed)){
      if(listMode!=='ol'){ closeList(); html += '<ol class="doc-ol">'; listMode='ol'; }
      html += `<li>${inlineBold(linkify(escHtml(trimmed.replace(/^\d+[.)]\s+/,''))))}</li>`;
    } else {
      closeList();
      html += `<p class="doc-p">${inlineBold(linkify(escHtml(trimmed)))}</p>`;
    }
  });
  closeList();
  return html;
}
function renderBulletArray(arr){
  const items = arr.filter(x=>x && x.trim());
  if(items.length===0) return `<p class="doc-empty">—</p>`;
  return `<ul class="doc-ul">${items.map(i=>`<li>${inlineBold(linkify(escHtml(i)))}</li>`).join('')}</ul>`;
}

/* ---------------- preview ---------------- */
function renderPreview(){
  document.getElementById('docPreview').innerHTML = (lang==='dz') ? previewDz(plan) : previewEn(plan);
}

function previewEn(p){
  return `
    <div class="doc-ribbon">
      <div class="eyebrow">${escHtml(p.subject || t('subject'))} · ${escHtml(p.className? (t('class')+' '+p.className): '')}</div>
      <h2>${escHtml(p.title) || t('docUntitled')}</h2>
      <div class="sub">${escHtml(p.topic || '')}</div>
    </div>
    <div class="doc-body">
      <div class="doc-lessonno"><b>${t('docLessonNo')}:</b> ${escHtml(p.lessonNumber)||'—'}</div>
      <div class="doc-meta doc-meta-3">
        <div><b>${t('docClass')}:</b> ${escHtml(p.className)||'—'}</div>
        <div><b>${t('docSubject')}:</b> ${escHtml(p.subject)||'—'}</div>
        <div><b>${t('docPeriod')}:</b> ${escHtml(p.period)||'—'}</div>
        <div><b>${t('docDuration')}:</b> ${escHtml(p.duration)||'—'}</div>
        <div><b>${t('docDate')}:</b> ${escHtml(formatDateDisplay(p.date,'en'))||'—'}</div>
        <div><b>${t('docStrand')}:</b> ${escHtml(p.strand)||'—'}</div>
        <div><b>${t('docPedagogy')}:</b> ${escHtml(p.pedagogy)||'—'}</div>
        <div><b>${t('docTeachingStrategies')}:</b> ${escHtml(p.teachingStrategies)||'—'}</div>
      </div>

      <div class="doc-h">${t('docCompetency')}</div>
      ${renderContentBlock(p.competency)}

      <div class="doc-h">${t('docGNH')}</div>
      ${renderContentBlock(p.gnh)}

      <div class="doc-h">${t('docObjectives')}</div>
      ${renderBulletArray(p.objectives)}

      <div class="doc-h">${t('docPrior')}</div>
      ${renderContentBlock(p.prior)}

      <div class="doc-h">${t('docResources')}</div>
      ${renderContentBlock(p.resources)}

      ${p.phasesEn.map(ph=>`
        <div class="doc-h"><span>${escHtml(ph.name)||'—'}</span>${ph.time? `<span class="time">${escHtml(ph.time)}</span>`:''}</div>
        ${renderContentBlock(ph.content)}
      `).join('')}
    </div>
  `;
}

function previewDz(p){
  const rows = p.phasesDz.filter(r=> r.name || r.skillFocus || r.teacherActivity || r.studentActivity || r.time || r.assessment);
  const tableRows = (rows.length? rows : p.phasesDz).map(r=>`
    <tr>
      <td class="dzc-0"><strong>${escHtml(r.name)||'—'}</strong></td>
      <td class="dzc-1">${renderContentBlock(r.skillFocus)}</td>
      <td class="dzc-2">${renderContentBlock(r.teacherActivity)}</td>
      <td class="dzc-3">${renderContentBlock(r.studentActivity)}</td>
      <td class="dzc-4">${escHtml(r.time)||'—'}</td>
      <td class="dzc-5">${renderContentBlock(r.assessment)}</td>
    </tr>
  `).join('');

  return `
    <div class="doc-ribbon">
      <div class="eyebrow">${escHtml(p.subject || t('subject'))} · ${escHtml(p.className? (t('class')+' '+p.className): '')}</div>
      <h2>${escHtml(p.title) || t('docUntitled')}</h2>
      <div class="sub">${escHtml(p.topic || '')}</div>
    </div>
    <div class="doc-body">
      <div class="doc-meta">
        <div><b>${t('docClass')}:</b> ${escHtml(p.className)||'—'}</div>
        <div><b>${t('docSubject')}:</b> ${escHtml(p.subject)||'—'}</div>
        <div><b>${t('docDate')}:</b> ${escHtml(formatDateDisplay(p.date,'dz'))||'—'}</div>
        <div><b>${t('docDuration')}:</b> ${escHtml(p.duration)||'—'}</div>
        <div><b>${t('docVenue')}:</b> ${escHtml(p.venue)||'—'}</div>
        <div><b>${t('docStrand')}:</b> ${escHtml(p.strand)||'—'}</div>
      </div>

      <div class="doc-h">${t('docCompetency')}</div>
      ${renderContentBlock(p.competency)}

      <div class="doc-h">${t('docObjectives')}</div>
      ${renderBulletArray(p.objectives)}

      <div class="doc-h">${t('docGNH')}</div>
      ${renderContentBlock(p.gnh)}

      <div class="doc-h">${t('secStagesDz')}</div>
      <table class="doc-dz-table">
        <thead><tr>
          <th class="dzc-0">${t('colTopic')}</th>
          <th class="dzc-1">${t('colSkill')}</th>
          <th class="dzc-2">${t('colTeacher')}</th>
          <th class="dzc-3">${t('colStudent')}</th>
          <th class="dzc-4">${t('colTime')}</th>
          <th class="dzc-5">${t('colAssessment')}</th>
        </tr></thead>
        <tbody>${tableRows}</tbody>
      </table>

      <div class="doc-h">${t('docReflection')}</div>
      ${p.reflection && p.reflection.trim() ? renderContentBlock(p.reflection) : '<div class="doc-reflect-box"></div>'}
    </div>
  `;
}

/* ---------------- save / new / duplicate / delete ---------------- */
function toast(msg){
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(()=>el.classList.remove('show'), 2200);
}

async function savePlan(){
  plan.updatedAt = Date.now();
  plan.format = lang;
  const idx = savedPlans.findIndex(p=>p.id===plan.id);
  if(idx>=0){ savedPlans[idx] = JSON.parse(JSON.stringify(plan)); }
  else{ savedPlans.unshift(JSON.parse(JSON.stringify(plan))); }
  const ok = await persistSaved();
  if(ok){ toast(t('savedToast')); renderSaved(); }
}

function newPlan(){
  plan = blankPlan();
  plan.lessonNumber = nextLessonNumber();
  editingExistingId = null;
  bindSimpleFields(); renderObjectives(); renderPhases(); renderDzRows(); renderPreview();
}

function loadPlanIntoForm(p){
  plan = JSON.parse(JSON.stringify(p));
  if(!plan.phasesEn) plan.phasesEn = blankPlan().phasesEn;
  if(!plan.phasesDz) plan.phasesDz = blankPlan().phasesDz;
  editingExistingId = p.id;
  lang = plan.format === 'dz' ? 'dz' : 'en';
  document.getElementById('langToggle').querySelectorAll('button').forEach(b=>b.classList.toggle('active', b.getAttribute('data-val')===lang));
  document.documentElement.setAttribute('data-lang', lang);
  applyI18n();
  bindSimpleFields(); renderObjectives(); renderPhases(); renderDzRows(); renderPreview();
  switchTab('new');
}

async function deletePlan(id){
  if(!confirm(t('confirmDelete'))) return;
  savedPlans = savedPlans.filter(p=>p.id!==id);
  await persistSaved();
  toast(t('deletedToast'));
  renderSaved();
}

async function duplicatePlan(id){
  const src = savedPlans.find(p=>p.id===id);
  if(!src) return;
  const copy = JSON.parse(JSON.stringify(src));
  copy.id = 'lp_' + Date.now().toString(36) + Math.random().toString(36).slice(2,7);
  copy.title = (copy.title || t('docUntitled')) + ' (copy)';
  copy.createdAt = Date.now(); copy.updatedAt = Date.now();
  savedPlans.unshift(copy);
  await persistSaved();
  toast(t('duplicatedToast'));
  renderSaved();
}

/* ---------------- saved list rendering ---------------- */
function renderSaved(){
  const grid = document.getElementById('savedGrid');
  const q = (document.getElementById('searchSaved').value || '').toLowerCase().trim();
  const list = savedPlans.filter(p=>{
    if(!q) return true;
    return [p.title,p.subject,p.className,p.topic].join(' ').toLowerCase().includes(q);
  });
  if(list.length===0){
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16v16H4z" opacity=".0"/><path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M9 12h6M9 16h6M9 8h3"/></svg>
      <div>${t('savedEmpty')}</div>
    </div>`;
    return;
  }
  grid.innerHTML = list.map(p=>{
    const d = new Date(p.updatedAt||p.createdAt);
    const fmt = (p.format==='dz') ? 'DZ' : 'EN';
    return `
    <div class="plan-card">
      <div class="tag"><span class="fmt">${fmt}</span>${escHtml(p.subject)||'—'}${p.className? ' · '+escHtml(p.className):''}</div>
      <h3>${escHtml(p.title) || t('docUntitled')}</h3>
      <div class="meta">${escHtml(p.topic)||''}</div>
      <div class="meta">${d.toLocaleDateString()}</div>
      <div class="actions">
        <button class="icon-btn" data-act="open" data-id="${p.id}" title="${t('open')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS.edit}</svg></button>
        <button class="icon-btn" data-act="dup" data-id="${p.id}" title="${t('duplicate')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS.copy}</svg></button>
        <button class="icon-btn" data-act="word" data-id="${p.id}" title="${t('exportShort')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS.download}</svg></button>
        <button class="icon-btn" data-act="print" data-id="${p.id}" title="${t('printBtn')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS.print}</svg></button>
        <button class="icon-btn" data-act="del" data-id="${p.id}" title="${t('del')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS.trash}</svg></button>
      </div>
    </div>`;
  }).join('');

  grid.querySelectorAll('[data-act]').forEach(btn=>{
    const id = btn.getAttribute('data-id');
    const act = btn.getAttribute('data-act');
    btn.onclick = ()=>{
      const p = savedPlans.find(x=>x.id===id);
      if(act==='open'){ loadPlanIntoForm(p); }
      else if(act==='dup'){ duplicatePlan(id); }
      else if(act==='del'){ deletePlan(id); }
      else if(act==='word'){ exportWord(p); }
      else if(act==='print'){ printPlan(p); }
    };
  });
}

/* ---------------- word export ---------------- */
function contentToWordHtml(raw){
  if(!raw || !raw.trim()) return '<p>—</p>';
  const lines = raw.split('\n'); let html=''; let listMode=null;
  const closeList = ()=>{ if(listMode){ html+= listMode==='ul' ? '</ul>' : '</ol>'; listMode=null; } };
  lines.forEach(line=>{
    const trimmed = line.trim();
    if(trimmed===''){ closeList(); return; }
    if(trimmed.startsWith('## ')){ closeList(); html+=`<div class="sub-h">${inlineBold(escHtml(trimmed.slice(3)))}</div>`; }
    else if(trimmed.startsWith('- ')||trimmed.startsWith('• ')){ if(listMode!=='ul'){closeList();html+='<ul>';listMode='ul';} html+=`<li>${inlineBold(escHtml(trimmed.slice(2)))}</li>`; }
    else if(/^\d+[.)]\s+/.test(trimmed)){ if(listMode!=='ol'){closeList();html+='<ol>';listMode='ol';} html+=`<li>${inlineBold(escHtml(trimmed.replace(/^\d+[.)]\s+/,'')))}</li>`; }
    else { closeList(); html+=`<p>${inlineBold(escHtml(trimmed))}</p>`; }
  });
  closeList();
  return html;
}
function bulletArrayToWordHtml(arr){
  const items = arr.filter(x=>x && x.trim());
  if(items.length===0) return '<p>—</p>';
  return `<ul>${items.map(i=>`<li>${inlineBold(escHtml(i))}</li>`).join('')}</ul>`;
}

const WORD_STYLE = `
  body{ font-family:Calibri, 'Noto Sans Tibetan', sans-serif; font-size:11pt; color:#101B34; }
  table{ border-collapse:collapse; width:100%; margin-bottom:14px; }
  td{ border:1px solid #93C5FD; padding:10px 12px; vertical-align:top; }
  .hero{ background:#2563EB; color:#F7FAFF; padding:16px 18px; }
  .hero h1{ font-family:Georgia,serif; font-size:20pt; margin:0 0 4px; }
  .hero .sub{ font-size:11pt; opacity:.9; }
  .meta-table td{ font-size:10.5pt; }
  .sec-title{ font-family:Georgia,serif; font-weight:700; color:#1D4ED8; font-size:12.5pt; margin:14px 0 6px; border-bottom:1px solid #38BDF8; padding-bottom:3px; }
  ul,ol{ margin:4px 0 8px; padding-left:20px; }
  li{ margin-bottom:4px; }
  .sub-h{ font-weight:700; color:#1E3A8A; margin:6px 0 3px; }
  p{ margin:0 0 6px; }
  .dz-table{ table-layout:fixed; }
  .dz-table th, .dz-table td{ font-size:10pt; word-wrap:break-word; overflow-wrap:break-word; }
  .dz-table .c0{ background:#F8FAFC; } .dz-table th.c0{ background:#EEF2F8; }
  .dz-table .c1{ background:#E4F3FC; } .dz-table th.c1{ background:#B9E1F7; }
  .dz-table .c2{ background:#FDEEDA; } .dz-table th.c2{ background:#FBD9A2; }
  .dz-table .c3{ background:#E3F7E6; } .dz-table th.c3{ background:#BBEAC4; }
  .dz-table .c4{ background:#EDE4FA; } .dz-table th.c4{ background:#D3C0F2; }
  .dz-table .c5{ background:#DCF6F2; } .dz-table th.c5{ background:#AEE9E1; }
  .reflect-box{ min-height:40px; border:1px dashed #B7C6DE; background:#F8FAFC; }
`;

function wordHeader(p, L){
  return `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
  <head>
    <meta charset="utf-8">
    <title>${escHtml(p.title)||L.docUntitled}</title>
    <!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View><w:Zoom>100</w:Zoom></w:WordDocument></xml><![endif]-->
    <style>${WORD_STYLE}</style>
  </head>
  <body>
    <div class="hero">
      <h1>${escHtml(p.title)||L.docUntitled}</h1>
      <div class="sub">${escHtml(p.topic)||''}</div>
    </div>`;
}

function planToDocHtmlEN(p){
  const L = I18N.en;
  const phasesHtml = p.phasesEn.map(ph=>`
    <tr>
      <td style="width:78%;">
        <div style="font-family:Georgia,serif;font-weight:700;color:#1D4ED8;font-size:12.5pt;margin-bottom:4px;">${escHtml(ph.name)}</div>
        ${contentToWordHtml(ph.content)}
      </td>
      <td style="width:22%;color:#0369A1;font-weight:600;">${escHtml(ph.time)||''}</td>
    </tr>
  `).join('');

  return wordHeader(p, L) + `
    <p><b>${L.docLessonNo}:</b> ${escHtml(p.lessonNumber)||'—'}</p>
    <table class="meta-table">
      <tr><td><b>${L.docClass}:</b> ${escHtml(p.className)||'—'}</td><td><b>${L.docSubject}:</b> ${escHtml(p.subject)||'—'}</td><td><b>${L.docPeriod}:</b> ${escHtml(p.period)||'—'}</td></tr>
      <tr><td><b>${L.docDuration}:</b> ${escHtml(p.duration)||'—'}</td><td><b>${L.docDate}:</b> ${escHtml(formatDateDisplay(p.date,'en'))||'—'}</td><td><b>${L.docStrand}:</b> ${escHtml(p.strand)||'—'}</td></tr>
      <tr><td><b>${L.docPedagogy}:</b> ${escHtml(p.pedagogy)||'—'}</td><td><b>${L.docTeachingStrategies}:</b> ${escHtml(p.teachingStrategies)||'—'}</td><td></td></tr>
    </table>

    <div class="sec-title">${L.docCompetency}</div>
    ${contentToWordHtml(p.competency)}

    <div class="sec-title">${L.docGNH}</div>
    ${contentToWordHtml(p.gnh)}

    <div class="sec-title">${L.docObjectives}</div>
    ${bulletArrayToWordHtml(p.objectives)}

    <div class="sec-title">${L.docPrior}</div>
    ${contentToWordHtml(p.prior)}

    <div class="sec-title">${L.docResources}</div>
    ${contentToWordHtml(p.resources)}

    <div class="sec-title">${L.secStages}</div>
    <table>${phasesHtml}</table>
  </body>
  </html>`;
}

function planToDocHtmlDZ(p){
  const L = I18N.dz;
  const COLW = ['13%','15%','20%','20%','8%','24%'];
  const cellStyle = i => `width:${COLW[i]};word-wrap:break-word;overflow-wrap:break-word;`;
  const rows = p.phasesDz.filter(r=> r.name || r.skillFocus || r.teacherActivity || r.studentActivity || r.time || r.assessment);
  const src = rows.length ? rows : p.phasesDz;
  const tableRows = src.map(r=>`
    <tr>
      <td class="c0" style="${cellStyle(0)}"><strong>${escHtml(r.name)||'—'}</strong></td>
      <td class="c1" style="${cellStyle(1)}">${contentToWordHtml(r.skillFocus)}</td>
      <td class="c2" style="${cellStyle(2)}">${contentToWordHtml(r.teacherActivity)}</td>
      <td class="c3" style="${cellStyle(3)}">${contentToWordHtml(r.studentActivity)}</td>
      <td class="c4" style="${cellStyle(4)}">${escHtml(r.time)||'—'}</td>
      <td class="c5" style="${cellStyle(5)}">${contentToWordHtml(r.assessment)}</td>
    </tr>
  `).join('');

  return wordHeader(p, L) + `
    <table class="meta-table">
      <tr><td><b>${L.docClass}:</b> ${escHtml(p.className)||'—'}</td><td><b>${L.docSubject}:</b> ${escHtml(p.subject)||'—'}</td><td><b>${L.docDate}:</b> ${escHtml(formatDateDisplay(p.date,'dz'))||'—'}</td></tr>
      <tr><td><b>${L.docDuration}:</b> ${escHtml(p.duration)||'—'}</td><td><b>${L.docVenue}:</b> ${escHtml(p.venue)||'—'}</td><td><b>${L.docStrand}:</b> ${escHtml(p.strand)||'—'}</td></tr>
    </table>

    <div class="sec-title">${L.docCompetency}</div>
    ${contentToWordHtml(p.competency)}

    <div class="sec-title">${L.docObjectives}</div>
    ${bulletArrayToWordHtml(p.objectives)}

    <div class="sec-title">${L.docGNH}</div>
    ${contentToWordHtml(p.gnh)}

    <div class="sec-title">${L.secStagesDz}</div>
    <table class="dz-table" style="table-layout:fixed;width:100%;">
      <tr>
        <th class="c0" style="${cellStyle(0)}">${L.colTopic}</th><th class="c1" style="${cellStyle(1)}">${L.colSkill}</th><th class="c2" style="${cellStyle(2)}">${L.colTeacher}</th>
        <th class="c3" style="${cellStyle(3)}">${L.colStudent}</th><th class="c4" style="${cellStyle(4)}">${L.colTime}</th><th class="c5" style="${cellStyle(5)}">${L.colAssessment}</th>
      </tr>
      ${tableRows}
    </table>

    <div class="sec-title">${L.docReflection}</div>
    ${p.reflection && p.reflection.trim() ? contentToWordHtml(p.reflection) : '<div class="reflect-box"></div>'}
  </body>
  </html>`;
}

/* ---------------- print ----------------
   Printing is done by opening a standalone, self-contained HTML page in a
   new tab (same blob+anchor technique as the Word export, which already
   works reliably here) and triggering window.print() once it has loaded.
   This avoids relying on window.print() inside the app's own iframe/tab,
   which some hosts block or ignore. */
const PRINT_CSS = `
*{ -webkit-print-color-adjust:exact; print-color-adjust:exact; color-adjust:exact; box-sizing:border-box; }
html,body{ margin:0; padding:0; }
body{
  font-family:'Inter','Noto Sans Tibetan',sans-serif; color:#101B34;
  display:flex; justify-content:center; padding:34px 18px; min-height:100vh;
  background:
    radial-gradient(900px 600px at 10% -10%, rgba(37,99,235,0.20), transparent 60%),
    radial-gradient(800px 550px at 108% 8%, rgba(56,189,248,0.22), transparent 55%),
    radial-gradient(700px 600px at 50% 118%, rgba(167,139,250,0.16), transparent 55%),
    linear-gradient(180deg, #EEF3FC, #E4ECFB 55%, #EEF3FC);
}
.doc{
  width:100%; max-width:820px; border-radius:22px; overflow:hidden;
  background:rgba(255,255,255,0.62);
  -webkit-backdrop-filter:blur(18px) saturate(170%); backdrop-filter:blur(18px) saturate(170%);
  border:1px solid rgba(37,99,235,0.22);
  box-shadow:0 24px 60px rgba(37,99,235,0.20), 0 4px 18px rgba(15,23,42,0.10);
}
.doc-ribbon{background:linear-gradient(120deg, rgba(37,99,235,0.92), rgba(56,189,248,0.88) 85%);
    color:#F7FAFF; padding:20px 24px 18px; position:relative; overflow:hidden;}
.doc-ribbon::after{content:''; position:absolute; right:-30px; top:-30px; width:140px; height:140px; border-radius:50%;
    background:radial-gradient(circle, rgba(255,255,255,.30), transparent 70%);}
.doc-ribbon .eyebrow{font-size:10.5px; letter-spacing:.14em; text-transform:uppercase; opacity:.8; margin-bottom:6px;}
.doc-ribbon h2{margin:0 0 4px; font-size:16.5px; font-weight:600; color:#ffffff;}
.doc-ribbon .sub{font-size:12.5px; opacity:.9;}
.doc-lessonno{font-size:12.5px; margin:0 0 12px;}
.doc-lessonno b{color:#2563EB; font-weight:700;}
.doc-body{padding:22px 24px 26px; font-size:13.6px; line-height:1.62;}
.doc-meta{display:grid; grid-template-columns:1fr 1fr; gap:8px 20px; margin-bottom:16px; font-size:13px;}
.doc-meta.doc-meta-3{grid-template-columns:1fr 1fr 1fr;}
.doc-meta div{background:rgba(37,99,235,0.06); border:1px solid rgba(37,99,235,0.12); border-radius:9px; padding:6px 10px;}
.doc-meta div b{color:#2563EB; font-weight:700;}
.doc-h{font-family:'Fraunces','Noto Sans Tibetan',serif; font-size:14.5px; font-weight:700; color:#1D4ED8;
    margin:16px 0 6px; padding-bottom:4px; border-bottom:1px solid rgba(37,99,235,0.25);
    display:flex; justify-content:space-between; align-items:baseline; gap:10px;}
.doc-h .time{font-family:'JetBrains Mono',monospace; font-size:11px; font-weight:600; color:#0369A1; background:rgba(56,189,248,0.20); padding:2px 9px; border-radius:999px; white-space:nowrap;}
.doc-p{margin:0 0 8px;}
.doc-ul{margin:0 0 10px; padding-left:0; list-style:none;}
.doc-ul li{position:relative; padding-left:20px; margin-bottom:5px;}
.doc-ul li::before{content:''; position:absolute; left:0; top:6px; width:9px; height:9px; background:linear-gradient(120deg,#2563EB,#38BDF8); border-radius:2px; transform:rotate(45deg);}
.doc-ol{margin:0 0 10px; padding-left:22px;}
.doc-ol li{margin-bottom:5px;}
.doc-sub{font-weight:700; color:#1E3A8A; margin:8px 0 4px;}
.doc-empty{color:#94A3B8; font-style:italic;}
.doc a{color:#2563EB;}
/* Dzongkha colour-coded stage table (mirrors the DDC template), tinted translucent to match the glass panel */
.doc-dz-table{width:100%; table-layout:fixed; border-collapse:separate; border-spacing:0; margin:6px 0 12px; font-size:12.6px; border-radius:10px; overflow:hidden;}
.doc-dz-table th, .doc-dz-table td{border:1px solid rgba(37,99,235,0.16); padding:9px 10px; vertical-align:top; text-align:left;
  overflow-wrap:break-word; word-break:break-word; hyphens:auto;}
.doc-dz-table th{font-family:'Fraunces','Noto Sans Tibetan',serif; font-weight:700; color:#1D3557; font-size:12px;}
.doc-dz-table th:nth-child(1), .doc-dz-table td:nth-child(1){width:13%;}
.doc-dz-table th:nth-child(2), .doc-dz-table td:nth-child(2){width:15%;}
.doc-dz-table th:nth-child(3), .doc-dz-table td:nth-child(3){width:20%;}
.doc-dz-table th:nth-child(4), .doc-dz-table td:nth-child(4){width:20%;}
.doc-dz-table th:nth-child(5), .doc-dz-table td:nth-child(5){width:8%;}
.doc-dz-table th:nth-child(6), .doc-dz-table td:nth-child(6){width:24%;}
.doc-dz-table .dzc-0{background:rgba(255,255,255,0.35);}
.doc-dz-table td.dzc-1{background:rgba(56,189,248,0.16);} .doc-dz-table th.dzc-1{background:rgba(56,189,248,0.34);}
.doc-dz-table td.dzc-2{background:rgba(245,158,11,0.14);} .doc-dz-table th.dzc-2{background:rgba(245,158,11,0.32);}
.doc-dz-table td.dzc-3{background:rgba(34,197,94,0.14);} .doc-dz-table th.dzc-3{background:rgba(34,197,94,0.32);}
.doc-dz-table td.dzc-4{background:rgba(167,139,250,0.16);} .doc-dz-table th.dzc-4{background:rgba(167,139,250,0.36);}
.doc-dz-table td.dzc-5{background:rgba(45,212,191,0.16);} .doc-dz-table th.dzc-5{background:rgba(45,212,191,0.34);}
.doc-dz-table .doc-ul, .doc-dz-table .doc-ol{margin-bottom:0;}
.doc-dz-table .doc-p:last-child{margin-bottom:0;}
.doc-reflect-box{min-height:46px; border:1px dashed rgba(37,99,235,0.35); border-radius:8px; background:rgba(255,255,255,0.35);}
@media print{
  body{ padding:0; }
  .doc{ max-width:none; border-radius:0; box-shadow:none; }
}
@page{ margin:10mm; }
`;

function printPlan(p){
  const bodyHtml = (p.format==='dz') ? previewDz(p) : previewEn(p);
  const docHtml = `<!DOCTYPE html><html lang="${p.format==='dz'?'dz':'en'}"><head><meta charset="utf-8">
<title>${escHtml(p.title)||'Lesson Plan'}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&family=Noto+Sans+Tibetan:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${PRINT_CSS}</style>
</head><body>
<div class="doc">${bodyHtml}</div>
<script>
  window.onload = function(){
    setTimeout(function(){ window.print(); }, 350);
  };
<\/script>
</body></html>`;
  const blob = new Blob([docHtml], {type:'text/html'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.target = '_blank'; a.rel = 'noopener';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url), 60000);
}

function exportWord(p){
  const html = (p.format==='dz') ? planToDocHtmlDZ(p) : planToDocHtmlEN(p);
  const blob = new Blob(['\ufeff', html], {type:'application/msword'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const safeName = (p.title || 'lesson-plan').replace(/[^\w\-]+/g,'_').slice(0,60);
  a.href = url; a.download = safeName + '.doc';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url), 4000);
}

/* ---------------- tabs / theme / lang wiring ---------------- */
function switchTab(name){
  document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active', b.getAttribute('data-tab')===name));
  document.getElementById('view-new').style.display = name==='new' ? '' : 'none';
  document.getElementById('view-saved').style.display = name==='saved' ? '' : 'none';
  if(name==='saved') renderSaved();
}
document.querySelectorAll('.tab').forEach(b=> b.onclick = ()=>switchTab(b.getAttribute('data-tab')) );

function setTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('themeIcon');
  icon.innerHTML = theme==='dark' ? ICONS.moon : ICONS.sun;
}
let theme = 'dark';
setTheme(theme);
document.getElementById('themeToggle').onclick = ()=>{
  theme = theme==='dark' ? 'light' : 'dark';
  setTheme(theme);
};

document.getElementById('langToggle').querySelectorAll('button').forEach(btn=>{
  btn.onclick = ()=>{
    lang = btn.getAttribute('data-val');
    plan.format = lang;
    document.getElementById('langToggle').querySelectorAll('button').forEach(b=>b.classList.toggle('active', b===btn));
    applyI18n();
  };
});

document.getElementById('btnSave').onclick = savePlan;
document.getElementById('btnNew').onclick = ()=>{ if(confirm(lang==='dz'?'འཆར་གཞི་གསར་བསྐྲུན་འབད་ནི་ཨིན་ན?':'Start a new blank plan? Unsaved changes will be lost.')) newPlan(); };
document.getElementById('btnExport').onclick = ()=> exportWord(plan);
document.getElementById('btnPrint').onclick = ()=> printPlan(plan);
document.getElementById('searchSaved').oninput = renderSaved;
document.getElementById('f_date').oninput = (e)=>{ plan.date = e.target.value; renderPreview(); };
document.getElementById('dzDateBtn').onclick = (e)=>{
  e.stopPropagation();
  const popup = document.getElementById('dzCalPopup');
  if(popup.style.display==='block'){ closeDzCal(); } else { openDzCal(); }
};
document.querySelectorAll('.add-link').forEach(btn=>{
  btn.onclick = ()=>{
    const kind = btn.getAttribute('data-add');
    if(kind==='objectives'){ plan.objectives.push(''); renderObjectives(); }
    else if(kind==='phase'){ plan.phasesEn.push({name:'', time:'', content:''}); renderPhases(); }
    else if(kind==='dzrow'){ plan.phasesDz.push({name:'', skillFocus:'', teacherActivity:'', studentActivity:'', time:'', assessment:''}); renderDzRows(); }
    renderPreview();
  };
});

/* ---------------- init ---------------- */
async function init(){
  document.getElementById('docPreview').innerHTML = `<div class="doc-body"><p class="doc-empty">${t('emptyPreviewHint')}</p></div>`;
  await loadSaved();
  if(!plan.lessonNumber){ plan.lessonNumber = nextLessonNumber(); }
  bindSimpleFields();
  renderObjectives(); renderPhases(); renderDzRows(); renderPreview();
  renderSaved();
}
init();

})();
