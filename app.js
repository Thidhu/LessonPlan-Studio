(function(){

/* ---------------- Dzongkha font (DDC Joyig) ----------------
   Place the font file next to index.html/app.js and name it "DDCJoyig.ttf"
   (or edit DZ_FONT_FILENAME below to match whatever filename you upload). */
const DZ_FONT_FAMILY = 'DDC Joyig';
const DZ_FONT_FILENAME = 'DDC_Joyig.woff2';
const DZ_FONT_URL = (function(){
  try{ return new URL(DZ_FONT_FILENAME, document.baseURI).href; }catch(e){ return DZ_FONT_FILENAME; }
})();
function dzFontFaceCss(){
  return `@font-face{font-family:'${DZ_FONT_FAMILY}';src:url('${DZ_FONT_URL}') format('truetype');font-weight:normal;font-style:normal;font-display:swap;}`;
}
function injectDzFont(){
  const style = document.createElement('style');
  style.textContent = `
    ${dzFontFaceCss()}
    html[data-lang="dz"] body,
    html[data-lang="dz"] h1, html[data-lang="dz"] h2, html[data-lang="dz"] h3, html[data-lang="dz"] .display,
    html[data-lang="dz"] .doc-h, html[data-lang="dz"] .doc-sub, html[data-lang="dz"] .doc-dz-table th{
      font-family:'${DZ_FONT_FAMILY}', 'Noto Sans Tibetan', sans-serif !important;
    }
  `;
  document.head.appendChild(style);
}
injectDzFont();

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
    secPrior:"Prior Knowledge", secResources:"Resources", secResourcesDz:"Resources",
    secStages:"Lesson Stages", addPhase:"Add stage",
    secStagesDz:"Lesson Stages (table)", addRow:"Add row",
    secReflection:"Teaching Reflection",
    phaseHint:'Tip: start a line with "- " for a bullet point, "1. " for a numbered point, or "## " for a bold sub-heading (e.g. Activity 1).',
    phaseHintDz:'Tip: start a line with "- " for a bullet point inside any box.',
    save:"Save Plan", exportWord:"Export to Word", printBtn:"Print", newBtn:"Clear",
    preview:"Preview",
    stageName:"Stage name", stageTime:"Time", stageContent:"Content",
    colTopic:"Main Topic / Stage", colSkill:"Skill & Objective Focus", colTeacher:"Teacher's Activity & Method",
    colStudent:"Student's Activity / Learning Experience", colTime:"Duration", colAssessment:"Assessment Tools & Method",
    savedEmpty:"No saved lesson plans yet — save one from “New Plan” to see it here.",
    open:"Open", duplicate:"Duplicate", del:"Delete", exportShort:"Word",
    confirmDelete:"Delete this lesson plan? This can't be undone.",
    savedToast:"Lesson plan saved", deletedToast:"Lesson plan deleted", duplicatedToast:"Duplicated",
    docUntitled:"Untitled Lesson", docSubject:"Subject", docClass:"Class", docDuration:"Duration", docStrand:"Strand",
    docCompetency:"Competency", docTopic:"Topic", docObjectives:"Objectives",
    docPrior:"Prior Knowledge", docResources:"Resources", docResourcesDz:"Resources", docDescription:"Lesson Description",
    docLessonNo:"Lesson Plan No.", docPeriod:"Period", docDate:"Date", docPedagogy:"Pedagogy", docTeachingStrategies:"Teaching Strategies",
    docGNH:"GNH Principles and Values", docVenue:"Venue", docReflection:"Teaching Reflection",
    emptyPreviewHint:"Fill in the form to see your lesson plan take shape here.",
    searchPlaceholder:"Search saved plans...",
    creditLine:"From Lesson Plan Studio",
    addOwn:"+ Add", ownPlaceholder:"Type and press Enter", removeOpt:"Remove this option",
    gnhDomains:"GNH Domains", gnhValues:"Values", today:"Today", tomorrow:"Tomorrow",
    tabSyllabus:"Syllabus", tabWeek:"Week Planner", nextLesson:"Next lesson", importBtn:"Import",
    templates:"Templates", saveTpl:"+ Save current as template", tplNamePh:"Template name, press Enter",
    libHint:"From your earlier plans — tap to reuse", synPick:"Next topics from your syllabus",
    stAll:"All", stTodo:"Not yet taught", stDone:"Taught", useTopic:"Plan this topic",
    addTopicBtn:"Add topic", topicPh:"Topic / unit", strandPh:"Strand (optional)",
    importSyl:"Import list (CSV, Excel, Word, text)", exportCsv:"Export CSV",
    noTopics:"No topics here yet — add one above or import a list.",
    selectAll:"Select all", exportSel:"Export selected as one Word file", backup:"Backup",
    weekStart:"Week starting (Monday)",
    weekHint:"Tap the periods you teach. Subject, class, GNH and the stages are taken from the plan on your New Plan tab.",
    weekFill:"Fill topics from the syllabus", weekGo:"Create draft plans", weekNone:"Tap at least one period first",
    weekDone:"draft plans created", openPlan:"Open", exportAllWord:"Export all as one Word file",
    draftRestored:"Your unsaved draft was restored", importedReview:"Imported — please check the details, then Save",
    importFail:"Could not read this file", importBinary:"This looks like an old binary .doc — open it in Word, Save As .docx, then import again",
    nextReady:"Next lesson ready", savedTpl:"Template saved", tplApplied:"Template applied",
    confirmTpl:"Replace the lesson stages with this template?", importedMany:"plans imported", restored:"Backup restored",
    needNet:"The Word reader needs an internet connection the first time", topicsAdded:"topics added", dropHint:"Tip: you can also drop a Word / .json file on this form to import it."
  },
  dz:{
    appTitle:"སློབ་སྟོན་འཆར་གཞི།", appTagline:"སློབ་སྟོན་པ་ཚུ་གི་དོན་ལུ་བཟོ་ཡོད་ཡོདཔ་ཨིན།",
    tabNew:"འཆར་གཞི་གསརཔ།", tabSaved:"གསོག་འཇོག་འབད་ཡོད་མི་འཆར་གཞི།/Saved Plans",
    secBasics:"སྤྱིར་བཏང་གནས་ཚུལ།", lessonTitle:"སློབ་སྟོན་གྱི་དོན་ཚན་ངོ་མ།", subject:"ཆོས་ཚན།", class:"སློབ་རིམ།", duration:"དུས་ཡུན།",
    date:"སྤྱི་ཚེས།", strand:"ཡན་ལག", teacher:"སློབ་དཔོན།", competency:"ལྕོགས་གྲུབ།", topic:"དོན་ཚན་/བརྗོད་དོན།", gnh:"རྒྱལ་ཡོངས་དགའ་སྐྱིད་དཔལ་འཛོམས་ཀྱི་གཞི་རྩ་/ལྟ་བ།",
    secEnDetails:"གནད་དོན་ཁ་སྐོང་།", lessonNumber:"སློབ་སྟོན་འཆར་གཞི་ཨང་།", period:"ཐུན་ཚན།", pedagogy:"སློབ་སྟོན་ཐབས་ལམ།", teachingStrategies:"སློབ་སྟོན་ཐབས་རིག",
    secDzDetails:"གནད་དོན་ཁ་སྐོང་།", venue:"ས་གོ",
    secObjectives:"ལས་དོན།", addObjective:"ལས་དོན་ཁ་སྐོང་།",
    secPrior:"སློབ་སྟོན་ཧེ་མའི་ཤེས་ཚད།", secResources:"མཐུན་རྐྱེན།", secResourcesDz:"སློབ་སྟོན་མཁོ་ཆས།",
    secStages:"སློབ་སྟོན་གྱི་རིམ་པ།", addPhase:"རིམ་པ་ཁ་སྐོང་།",
    secStagesDz:"སློབ་སྟོན་གྱི་རིམ་པ།", addRow:"དོན་ཚན་ཁ་སྐོང་།",
    secReflection:"སློབ་སྟོན་ཞིབ་འཇུག།",
    phaseHint:'དོན་ཚན་ཁ་སྐོང་ཡོད་པ་ཅིན་ བཙུགས་ས་ཨིན།',
    phaseHintDz:'གྲོགས་རམ: ཚིག་གྲལ་ "- " ལས་འགོ་བཙུགས་པ་ཅིན་ཚུད་ཚིག་ཅིག་འབྱུང་།',
    save:"Save།", exportWord:"Wordན་ལུ་བཏོན།", printBtn:"དཔར་བསྐྲུན།", newBtn:"གསར་བསྐྲུན།",
    preview:"སྔོན་ལྟ།",
    stageName:"གནས་རིམ།", stageTime:"དུས་ཚོད།", stageContent:"ནང་དོན།",
    colTopic:"དོན་ཚན་གཙོ་བོ།", colSkill:"རིག་རྩལ་དང་དམིགས་གཏད།", colTeacher:"སློབ་དཔོན་གྱི་སྦྱོང་ལཱ་དང་ཐབས་ཤེས།<br>(སློབ་སྟོན་ཐབས་ལམ།)",
    colStudent:"སློབ་ཕྲུག་གི་སྦྱོང་ལཱ།", colTime:"དུས་ཡུན།", colAssessment:"དབྱེ་ཞིབ་ཀྱི་མཁོ་ཆས་དང་ཐབས་རིག།",
    savedEmpty:"ད་ལྟོ་ འཆར་གཞི་བསག་བཞག་བཞགཔ་མིན་འདུག། \u201cའཆར་གཞི་གསརཔ\u201dའདི་Saveའབད་བཞག།.",
    open:"ཁ་ཕྱེ།", duplicate:"འདྲ་བཤུས་རྐྱབ།", del:"བཏོད་གཏང་/Delete", exportShort:"Word",
    confirmDelete:"འཆར་གཞི་འདི་བཏོན་གཏང་ནི་ཨིན་ན? ལོག་འཐོབ་མི་ཚུགསཔ་མས།",
    savedToast:"འཆར་གཞི་འདི་Saveའབད་བཞག་ཡི།", deletedToast:"འཆར་གཞི་བཏོན་བཏང་ཡི།", duplicatedToast:"འདྲ་བཤུས་འབད་ཡི།",
    docUntitled:"མིང་མེད་པའི་སློབ་སྟོན།", docSubject:"ཆོས་ཚན།", docClass:"སློབ་རིམ།", docDuration:"དུས་ཡུན།", docStrand:"ཡན་ལག",
    docCompetency:"ལྕོགས་གྲུབ།", docTopic:"དོན་ཚན།", docObjectives:"ལས་དོན།",
    docPrior:"སློབ་སྟོན་ཧེ་མའི་ཤེས་ཚད།", docResources:"མཁོ་ཆས།", docResourcesDz:"སློབ་སྟོན་མཁོ་ཆས་", docDescription:"འགྲེལ་བཤད།",
    docLessonNo:"སློབ་སྟོན་འཆར་གཞི་ཨང་།", docPeriod:"ཐུན་ཚན།", docDate:"སྤྱི་ཚེས།", docPedagogy:"སློབ་སྟོན་ཐབས་ལམ།", docTeachingStrategies:"སློབ་སྟོན་ཐབས་རིག",
    docGNH:"རྒྱལ་ཡོངས་དགའ་སྐྱིད་དཔལ་འཛོམས་ཀྱི་ལྟ་བ་དང་གཞི་རྩ།", docVenue:"ས་གོ།", docReflection:"སློབ་སྟོན་ཞིབ་འཇུག།",
    docPlanType:"ཉིན་བསྟར་སློབ་སྟོན་འཆར་གཞི།",
    emptyPreviewHint:"འཆར་གཞི་བཟོ་ནིའི་དོན་ལུ་ གནད་དོན་དང་འཁྲིལ་ ཐིག་ཁྲམ་བཀང་དགོ།",
    searchPlaceholder:"གསོག་འཇོག་འབད་ཡོད་མི་འཆར་གཞི་འཚོལ།",
    creditLine:"བཀྲ་ཤིས་བདེ་ལེགས་ཕུན་སུམ་ཚོགས་པར་ཤོག། ",
    addOwn:"+ ཁ་སྐོང་།", ownPlaceholder:"ཡི་གུ་Typeའབད་ཞིན་ན་Enterཨེབ།།", removeOpt:"གདམ་ཁ་རྐྱབ།",
    nhDomains:"དོན་ཚན་དང་འབྲེལ་བའི་ གཞི་རྩ་གདམ་ཁ་རྐྱབ།", gnhValues:"བརྩི་མཐོང་།", today:"ད་རིས།", tomorrow:"ནངས་པ།",
    tabSyllabus:"སློབ་ཚན་ཐོ།", tabWeek:"བདུན་ཕྲག་གི་འཆར་གཞི།", nextLesson:"སློབ་སྟོན་ཤུལ་མམ།", importBtn:"ནང་འདྲེན།",
    templates:"དཔེ་གཞི།/Templete", saveTpl:"+Save Templete", tplNamePh:"དཔེ་གཞིའི་མིང་བཀོད།",
    libHint:"ཧེ་མའི་འཆར་གཞི་ནང་ལས། ཨེབ་ཏེ་ལོག་ལག་ལེན་འཐབ།", synPick:"སློབ་ཚན་ཐོ་ནང་གི་ ཤུལ་མའི་དོན་ཚན།",
    stAll:"ཆ་མཉམ།", stTodo:"སློབ་སྟོན་མ་འབད་མི།", stDone:"སློབ་སྟོན་འབད་ཚར་མི།", useTopic:"དོན་ཚན་འདིའི་ཐོག་ལུ་ འཆར་གཞི་བཟོ།",
    addTopicBtn:"དོན་ཚན་ཁ་སྐོང་།", topicPh:"དོན་ཚན།", strandPh:"ཡན་ལག (ངེས་པ་མེད།)",
    importSyl:"ཐོ་ནང་འདྲེན། (CSV, Excel, Word)", exportCsv:"CSV ཕྱིར་འདྲེན།/Export",
    noTopics:"ད་ལྟོ་དོན་ཚན་མིན་འདུག། ཁ་སྐོང་བཀལ།/ནང་འདྲེན་འབད།",
    selectAll:"ཆ་མཉམ་འདམ།", exportSel:"འདམ་ཁ་འབད་མི་ Word ཡིག་ཆ་གཅིག་ནང་།", backup:"Backup",
    weekStart:"བདུན་ཕྲག་འགོ་བཙུགས་ས། (ཟླ་བ།)",
    weekHint:"ཐུན་ཚན་གཅིག་དང་ སློབ་རིམ་ དགའ་སྐྱིད་དཔལ་འཛོམས་ཀྱི་ལྟ་བ་དང་གཞི་རྩ་གཅིག་འདི་ གདམ་ཁ་རྐྱབ་དགོ། /Tap the periods you teach. Subject, class, GNH and the stages are taken from the plan on your New Plan tab.",
    weekFill:"སློབ་ཚན་དོན་ཚན་ནང་ལས་ དོན་ཚན་བཀང་།/Fill topics from the syllabus", weekGo:"འཆར་གཞི་བཟོ།", weekNone:"ཐུན་ཚན་གཅིག་འདི་ ངེས་པར་དུ་དགོ།",
    weekDone:"འཆར་གཞི་བཟོ་ཡི།", openPlan:"ཁ་ཕྱེ།/Open", exportAllWord:"ཆ་མཉམ་ Word ཡིག་ཆ་གཅིག་ནང་ཕྱིར་འདྲེན།",
    draftRestored:"Your unsaved draft was restored", importedReview:"Imported — please check the details, then Save",
    importFail:"Could not read this file", importBinary:"This looks like an old binary .doc — open it in Word, Save As .docx, then import again",
    confirmTpl:"Replace the lesson stages with this template?", importedMany:"plans imported", restored:"Backup restored",
    needNet:"The Word reader needs an internet connection the first time", topicsAdded:"topics added", dropHint:"Tip: you can also drop a Word / .json file on this form to import it."
  }
};
let lang = 'dz';
function t(key){ return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key; }
function applyI18n(){
  document.documentElement.setAttribute('data-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.getElementById('searchSaved').placeholder = t('searchPlaceholder');
  bindSimpleFields();
  renderObjectives(); renderPhases(); renderDzRows(); renderPreview(); renderSaved();
  renderTemplates(); renderSyllabus(); renderWeek();
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
function newDzRow(){
  return {name:'', skillFocus:'', teacherActivity:'', studentActivity:'', time:'', assessment:'',
          skillSel:[], teacherSel:[], studentSel:[], assessSel:[]};
}
function blankPlan(){
  return {
    id: 'lp_' + Date.now().toString(36) + Math.random().toString(36).slice(2,7),
    format: lang,
    title:'', subject:'', className:'', duration:'', date:isoLocal(new Date()), strand:'', teacher:'',
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
    venue:'', reflection:'', resourcesDz:'', gnhSel:[], resSel:[], resDzSel:[], syllabusId:'',
    phasesDz:[ newDzRow() ],
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
/* Only these are typed. Everything else (class, duration, strand, GNH, period, pedagogy,
   strategies, resources, venue, stage names/times, activities, assessment) is tap-to-select. */
const simpleFields = ['title','teacher','competency','topic','lessonNumber','prior','reflection'];
const fieldIdMap = {
  title:'f_title', teacher:'f_teacher', competency:'f_competency', topic:'f_topic',
  lessonNumber:'f_lessonNumber', prior:'f_prior', reflection:'f_reflection'
};

/* Subjects taught from PP through Class XII in the Bhutanese curriculum (REC) — English format only. */
const BHUTAN_SUBJECTS = [
  'Dzongkha','English','Mathematics','Additional Mathematics','Science','Physics','Chemistry','Biology',
  'DTI (Digital Technology and Innovation)','Environmental Studies (EVS)','Social Studies','History','Geography','Economics','Accountancy',
  'Business Studies / Commerce','Bhutan History, Civics & Citizenship Education',
  'ICT (Information & Communication Technology)','Computer Science','Agriculture / Food Science (AgFS)',
  'Arts Education','Health & Physical Education','Design and Technology','Media Studies','Statistics'
];
const OTHER_SUBJECT_VALUE = '__other__';
const DZONGKHA_SUBJECT_LABEL = 'རྫོང་ཁ།';

/* Subject field.
   - Dzongkha format: locked to Dzongkha only (shown as one fixed chip, no other options).
   - English format: a dropdown of subjects (+ "Other" fallback). */
function setupSubjectField(){
  const wrap = document.getElementById('subjectWrap');
  if(!wrap) return;
  wrap.innerHTML = '';

  if(lang === 'dz'){
    plan.subject = DZONGKHA_SUBJECT_LABEL;
    const box = document.createElement('div');
    box.className = 'chips';
    const chip = document.createElement('span');
    chip.className = 'chip on locked';
    chip.textContent = DZONGKHA_SUBJECT_LABEL;
    box.appendChild(chip);
    wrap.appendChild(box);
    return;
  }

  // coming back from the Dzongkha format: map the Dzongkha label to the English subject
  if(plan.subject === DZONGKHA_SUBJECT_LABEL) plan.subject = 'Dzongkha';

  const select = document.createElement('select');
  select.id = 'f_subject';
  select.innerHTML = '<option value=""></option>' +
    BHUTAN_SUBJECTS.map(s=>`<option value="${escHtml(s)}">${escHtml(s)}</option>`).join('') +
    `<option value="${OTHER_SUBJECT_VALUE}">Other (please specify)</option>`;

  const otherInput = document.createElement('input');
  otherInput.type = 'text';
  otherInput.id = 'f_subject_other';
  otherInput.placeholder = 'Enter subject name';
  otherInput.style.marginTop = '8px';
  otherInput.style.display = 'none';

  wrap.appendChild(select);
  wrap.appendChild(otherInput);

  select.onchange = ()=>{
    if(select.value === OTHER_SUBJECT_VALUE){
      otherInput.style.display = '';
      otherInput.value = '';
      plan.subject = '';
      otherInput.focus();
    } else {
      otherInput.style.display = 'none';
      plan.subject = select.value;
    }
    renderStrand();
    renderPreview();
  };
  otherInput.oninput = ()=>{ plan.subject = otherInput.value; renderStrand(); renderPreview(); };
  syncSubjectField();
}

function syncSubjectField(){
  const select = document.getElementById('f_subject');
  const otherInput = document.getElementById('f_subject_other');
  if(!select || select.tagName !== 'SELECT' || !otherInput) return;
  const known = BHUTAN_SUBJECTS.includes(plan.subject);
  if(plan.subject && !known){
    select.value = OTHER_SUBJECT_VALUE;
    otherInput.value = plan.subject;
    otherInput.style.display = '';
  } else {
    select.value = plan.subject || '';
    otherInput.style.display = 'none';
    otherInput.value = '';
  }
}

/* ---------------- Dzongkha numerals & pure-Dzongkha date field ---------------- */
const TIB_DIGITS = ['༠','༡','༢','༣','༤','༥','༦','༧','༨','༩'];
function toTibetanNumeral(n){
  return String(n).split('').map(ch => /[0-9]/.test(ch) ? TIB_DIGITS[+ch] : ch).join('');
}

/* =====================================================================
   OPTION LISTS  — edit these to change what appears as tap-to-select chips.
   (Dzongkha wording below is a draft: please review and correct as needed.)
   ===================================================================== */
const dzMin = n => 'སྐར་མ་ ' + toTibetanNumeral(n);
const STRANDS_EN = {
  'English': ['Listening and Speaking','Reading and Literature','Writing','Grammar'],
  'Mathematics': ['Number','Measurement','Geometry','Algebra','Data and Statistics'],
  'Science': ['Living Things','Matter and Materials','Energy and Forces','Earth and Space'],
  'DTI (Digital Technology and Innovation)': ['Digital Literacy','Safety and Ethics','Computational Thinking','Productivity Tools'],
  'ICT (Information & Communication Technology)': ['Digital Literacy','Safety and Ethics','Computational Thinking','Productivity Tools']
};
const OPTIONS = {
  en:{
    classes:['PP','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'],
    durations:['30 minutes','35 minutes','40 minutes','45 minutes','50 minutes','60 minutes'],
    periods:['1st','2nd','3rd','4th','5th','6th','7th','8th','Extra'],
    pedagogy:['Collaborative','Inquiry-based','Experiential','Place-based','Project-based','Problem-based','Learner-centred','Differentiated','Reflective'],
    strategies:['Discussion','Group work','Pair work','Think-Pair-Share','Demonstration','Brainstorming','Role play','Storytelling','Question and answer','Gallery walk','Games','Presentation'],
    resources:['Board and chalk','Textbook','Worksheet','Laptop / computer','Projector','Charts / posters','Flashcards','Real objects','Internet','Audio / video','Storybook','Dictionary'],
    gnhDomains:['Psychological Wellbeing','Health','Education','Cultural Diversity and Resilience','Time Use','Good Governance','Community Vitality','Ecological Diversity and Resilience','Living Standards'],
    gnhValues:['Mindfulness','Compassion','Respect','Honesty and Integrity','Responsibility','Cooperation','Interdependence','Gratitude','Tha-damtshig','Ley-judrey','Environmental Care'],
    stageNames:['Introduction','Presentation','Learning Experience / Activities','Practice','Consolidation','Assessment / Closure'],
    stageTimes:['5 mins','10 mins','15 mins','20 mins','25 mins','30 mins','35 mins'],
    stems:['identify','define','explain','describe','list','compare','apply','demonstrate','solve','create','discuss','classify']
      .map(v=>({label:v, text:'Students will be able to '+v+' |'}))
  },
  dz:{
        classes:['བློ་གསར།','དང་པ།','གཉིས་པ།','གསུམ་པ།','བཞི་པ།','ལྔ་པ།','དྲུག་པ།','བདུན་པ།','བརྒྱད་པ།','དགུ་པ།','བཅུ་པ།','བཅུ་གཅིག་པ།','བཅུ་གཉིས་པ།'],
    durations:[30,35,40,45,50,60].map(dzMin),
    venues:['སློབ་ཁང་།','གློག་རིག་ཁང་།','དཔེ་མཛོད།','རྩེད་ཐང་།','སློབ་གྲྭའི་ཕྱི་ཁར།','ཚན་རིག་བརྟག་ཞིབ་ཁང་།', 'ཡིག་ཚང་',],
    resources:['སློབ་དེབ།','འཕར་གཟུགས་སྟོན་འཕྲུལ།','ལཱ་ཤོག།','པར་རིས།','ཤོག་བྱང་།','ཚིག་མཛོད།','གློག་རིག་ཀམ་པིའུ་ཊར།','ཤོག་ཁྲམ།'],
    gnhDomains:['སེམས་ཀྱི་བདེ་སྐྱིད།','འཕྲོད་བསྟེན།','ཤེས་རིག་ཡོན་ཏན།','སྐད་ཡིག་དང་ལམ་སྲོལ།','དུས་ཚོད་ལག་ལེན།','མི་སྡེ་དང་མཐུན་ལམ།','བློ་སྤོབས།','མཐའ་འཁོར་གནས་སྟངས་ལུ་དག་སྣང་།','འཚོ་བའི་གནས་སྟངས།'],
    gnhValues:['དྲན་ཤེས།','བྱམས་པ་དང་སྙིང་རྗེ།','གུས་བཀུར།','དྲང་བདེན།','འགན་འཁུར།','མཉམ་འབྲེལ།','རྟེན་འབྲེལ།','དྲིན་ཤེས།','ཐ་དམ་ཚིག།','ལས་འབྲས།','མཐའ་འཁོར་སྲུང་སྐྱོབ།'],
    strands:['ཉན་སླབ།','འབྲི་ལྷག།','བརྡ་སྤྲོད།',],
    stageNames:['ངོ་སྤྲོད།','སློབ་སྟོན།','སྦྱོང་ལཱ།','སྦྱོང་ལཱ་བཀོད་རྒྱ།','མཇུག་བསྡུ།','དབྱེ་ཞིབ།'],
    stageTimes:[5,10,15,20,25,30,35,40].map(dzMin),
    skill:['ཉན་ནིའི་རིག་རྩལ།','སླབ་ནིའི་རིག་རྩལ།','བྲི་ནིའི་རིག་རྩལ།','ལྷག་ནིའི་རིག་རྩལ','བསམ་ཞིབ།','མཉམ་འབྲེལ་འབད་ནི།'],
    teacher:['འགྲེལ་བཤད་རྐྱབ་ནི།','བཤད་པ་རྐྱབ་ནི།','དྲི་བ་དྲི་ནི།','སྡེ་ཚན་བཟོ་ནི།','དཔེ་སྟོན་འབད་ནི།','ལྷག་བྱིན་ནི།','ལྟ་རྟོག་འབད་ནི།'],
    student:['ཉན་ནི།','ལན་སླབ་ནི།','ལྷག་ནི།','བྲི་ནི།','སྡེ་ཚན་ནང་བཅའ་མར་གཏོགས་ནི།','བསམ་འཆར་བཤད་ནི།','བསམ་ཞིབ་འདབ་ནི།','གྲོས་བསྡུར་འབད་ནི།','གསར་བཟོ་འབད་ནི།','ལྷག་བྱིན་འབད་ནི།'],
    assessment:['ལྟ་རྟོག།','དྲི་བ་དྲི་ནི།','སྤྱན་ཞུ་འབད་བཅུག་ནི།','འབྲི་བཅུག་ནི།','སྡེ་ཚན་སྦྱོང་ལཱ།'],
    stems:[{label:'སློབ་སྟོན་འདི་མཇུག་བསྡུཝ་ད་ སློབ་ཕྲུག་རེ་རེ་བཞིན་དུ་གིས་', text:'སློབ་ཕྲུག་ཚུ་གིས་|ཚུགསཔ་འོང་།'}]
  }
};
function opt(name){ return (OPTIONS[lang] && OPTIONS[lang][name]) || []; }
function ck(name){ return name + ':' + lang; }   // custom-option key (kept per language)

/* ---------------- custom options the teacher adds with "+ Add" (remembered) ---------------- */
let customLib = {};
async function loadCustom(){
  try{
    let raw = null;
    if(hasArtifactStorage){ const r = await window.storage.get('lp_custom_options', false); raw = r && r.value; }
    else raw = localStorage.getItem('lp_custom_options');
    customLib = raw ? JSON.parse(raw) : {};
  }catch(e){ customLib = {}; }
}
async function persistCustom(){
  try{
    const str = JSON.stringify(customLib);
    if(hasArtifactStorage) await window.storage.set('lp_custom_options', str, false);
    else localStorage.setItem('lp_custom_options', str);
  }catch(e){ console.error('custom options storage error', e); }
}

/* ---------------- value helpers ---------------- */
function lineText(l){ return l.trim().replace(/^[-•]\s+/,''); }
function bulletLines(v){ return (v||'').split('\n').map(lineText).filter(Boolean); }
function hasLine(v,label){ return bulletLines(v).includes(label); }
function addLine(v,label){ return ((v && v.trim()) ? v.replace(/\s+$/,'') + '\n' : '') + '- ' + label; }
function removeLine(v,label){ return (v||'').split('\n').filter(l=>lineText(l)!==label).join('\n'); }
function splitList(v){ return (v||'').split(',').map(x=>x.trim()).filter(Boolean); }
function isoLocal(d){ return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0'); }

/* ---------------- the chip group (tap to select) ----------------
   cfg: { options[], key (custom-option key or null), isOn(label), toggle(label), extraOn() } */
function chipGroup(host, cfg){
  if(!host) return {render(){}};
  host.classList.add('chips');
  function render(){
    host.innerHTML = '';
    const lib = cfg.key ? (customLib[cfg.key] || []) : [];
    const base = cfg.options.slice();
    const libOnly = lib.filter(x=>!base.includes(x));
    const known = base.concat(libOnly);
    const extra = (cfg.extraOn ? cfg.extraOn() : []).filter(x=>!known.includes(x));

    known.concat(extra).forEach(label=>{
      const removable = libOnly.includes(label) || extra.includes(label);
      const b = document.createElement('button');
      b.type = 'button';
      const on = cfg.isOn(label);
      b.className = 'chip' + (on ? ' on' : '');
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.appendChild(document.createTextNode(label));
      b.onclick = ()=>{ cfg.toggle(label); render(); };
      if(removable){
        const x = document.createElement('span');
        x.className = 'chip-x'; x.textContent = '×'; x.title = t('removeOpt');
        x.onclick = e=>{
          e.stopPropagation();
          if(libOnly.includes(label)){
            customLib[cfg.key] = (customLib[cfg.key]||[]).filter(v=>v!==label);
            persistCustom();
          }
          if(cfg.isOn(label)) cfg.toggle(label);
          render();
        };
        b.appendChild(x);
      }
      host.appendChild(b);
    });

    if(cfg.key){
      const add = document.createElement('button');
      add.type = 'button'; add.className = 'chip chip-add'; add.textContent = t('addOwn');
      add.onclick = ()=>{
        const wrap = document.createElement('span');
        wrap.className = 'chip-input';
        const inp = document.createElement('input');
        inp.type = 'text'; inp.placeholder = t('ownPlaceholder');
        wrap.appendChild(inp);
        add.replaceWith(wrap);
        inp.focus();
        let done = false;
        const commit = ()=>{
          if(done) return; done = true;
          const val = inp.value.replace(/,/g,' ').trim();
          if(val){
            const all = cfg.options.concat(customLib[cfg.key] || []);
            if(!all.includes(val)){
              (customLib[cfg.key] = customLib[cfg.key] || []).push(val);
              persistCustom();
            }
            if(!cfg.isOn(val)) cfg.toggle(val);
          }
          render();
        };
        inp.onkeydown = e=>{
          if(e.key === 'Enter'){ e.preventDefault(); commit(); }
          else if(e.key === 'Escape'){ done = true; render(); }
        };
        inp.onblur = ()=>setTimeout(commit, 120);
      };
      host.appendChild(add);
    }
  }
  render();
  return {render};
}

/* ---------------- chip configs for each kind of stored value ---------------- */
// one value in plan[field] (class, duration, strand, venue, period)
function singleCfg(field, options, key){
  return { options, key,
    isOn: l => plan[field] === l,
    toggle: l => { plan[field] = (plan[field] === l) ? '' : l; renderPreview(); },
    extraOn: () => (plan[field] && !options.includes(plan[field])) ? [plan[field]] : [] };
}
// several values joined with ", " (pedagogy, teaching strategies)
function commaCfg(field, options, key){
  return { options, key,
    isOn: l => splitList(plan[field]).includes(l),
    toggle: l => {
      const a = splitList(plan[field]); const i = a.indexOf(l);
      if(i >= 0) a.splice(i,1); else a.push(l);
      plan[field] = a.join(', '); renderPreview();
    },
    extraOn: () => splitList(plan[field]).filter(x=>!options.includes(x)) };
}
// several values kept as an array of selections (GNH, resources, activities, assessment).
// They are shown one after another on ONE line in the preview / Word / print.
function selCfg(getArr, setArr, options, key, knownExtra, showUnknown){
  const known = options.concat(knownExtra || []);
  return { options, key,
    isOn: l => getArr().includes(l),
    toggle: l => {
      const a = getArr().slice(); const i = a.indexOf(l);
      if(i >= 0) a.splice(i,1); else a.push(l);
      setArr(a);
    },
    extraOn: showUnknown ? (()=>getArr().filter(x=>!known.includes(x))) : null };
}
// single value tied to a text box (stage name / time)
function textCfg(get, set, options){
  return { options, key:null,
    isOn: l => get() === l,
    toggle: l => { set(get() === l ? '' : l); renderPreview(); },
    extraOn: null };
}

/* ---------------- render all the tap-to-select fields ---------------- */
function renderStrand(){
  const host = document.getElementById('c_strand');
  if(!host) return;
  if(lang === 'dz'){
    chipGroup(host, singleCfg('strand', opt('strands'), ck('strand')));
  } else {
    const list = STRANDS_EN[plan.subject] || [];
    chipGroup(host, singleCfg('strand', list, ck('strand') + ':' + (plan.subject || '')));
  }
}

function renderGnh(){
  const host = document.getElementById('c_gnh');
  if(!host) return;
  host.innerHTML = '';
  host.classList.remove('chips');
  const get = ()=>plan.gnhSel, set = a=>{ plan.gnhSel = a; renderPreview(); };
  const domains = opt('gnhDomains'), values = opt('gnhValues');

  const sub1 = document.createElement('div'); sub1.className = 'chip-sub'; sub1.textContent = t('gnhDomains');
  const g1 = document.createElement('div');
  const sub2 = document.createElement('div'); sub2.className = 'chip-sub'; sub2.textContent = t('gnhValues');
  const g2 = document.createElement('div');
  host.appendChild(sub1); host.appendChild(g1); host.appendChild(sub2); host.appendChild(g2);

  chipGroup(g1, selCfg(get, set, domains, null, null, false));
  chipGroup(g2, selCfg(get, set, values, ck('gnh'), domains, true));
}

function renderDateQuick(){
  const host = document.getElementById('dateQuick');
  if(!host) return;
  host.innerHTML = '';
  [[t('today'),0],[t('tomorrow'),1]].forEach(([label,off])=>{
    const d = new Date(); d.setDate(d.getDate() + off);
    const iso = isoLocal(d);
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip' + (plan.date === iso ? ' on' : '');
    b.textContent = label;
    b.onclick = ()=>{ plan.date = iso; setupDateField(); renderDateQuick(); renderPreview(); };
    host.appendChild(b);
  });
}

function renderChipFields(){
  const $ = id => document.getElementById(id);
  chipGroup($('c_class'), singleCfg('className', opt('classes'), null));
  chipGroup($('c_duration'), singleCfg('duration', opt('durations'), ck('duration')));
  renderStrand();
  renderGnh();
  renderDateQuick();
  if(lang === 'dz'){
    chipGroup($('c_venue'), singleCfg('venue', opt('venues'), ck('venue')));
    chipGroup($('c_resourcesDz'), selCfg(()=>plan.resDzSel, a=>{ plan.resDzSel = a; renderPreview(); }, opt('resources'), ck('resources'), null, true));
  } else {
    chipGroup($('c_period'), singleCfg('period', opt('periods'), null));
    chipGroup($('c_pedagogy'), commaCfg('pedagogy', opt('pedagogy'), ck('pedagogy')));
    chipGroup($('c_strategies'), commaCfg('teachingStrategies', opt('strategies'), ck('strategies')));
    chipGroup($('c_resources'), selCfg(()=>plan.resSel, a=>{ plan.resSel = a; renderPreview(); }, opt('resources'), ck('resources'), null, true));
  }
}

/* When the language is switched, drop tap-selected values that belong to the other
   language's option lists. Typed text (title, topic, competency, objectives, notes) is never touched. */
function pruneForLang(){
  if(lang === 'en' && plan.subject === DZONGKHA_SUBJECT_LABEL) plan.subject = 'Dzongkha';
  if(lang === 'dz') plan.subject = DZONGKHA_SUBJECT_LABEL;
  const inLib = (k,v)=>(customLib[k]||[]).includes(v);
  const single = (field, list, key)=>{ if(plan[field] && !list.includes(plan[field]) && !(key && inLib(key, plan[field]))) plan[field] = ''; };
  const arr = (field, list, key)=>{ plan[field] = (plan[field]||[]).filter(x=>list.includes(x) || (key && inLib(key,x))); };
  single('className', opt('classes'), null);
  single('duration', opt('durations'), ck('duration'));
  arr('gnhSel', opt('gnhDomains').concat(opt('gnhValues')), ck('gnh'));
  if(lang === 'dz'){
    single('strand', opt('strands'), ck('strand'));
    single('venue', opt('venues'), ck('venue'));
    arr('resDzSel', opt('resources'), ck('resources'));
  } else {
    single('strand', STRANDS_EN[plan.subject] || [], ck('strand') + ':' + (plan.subject || ''));
    single('period', opt('periods'), null);
    arr('resSel', opt('resources'), ck('resources'));
  }
}

function buildDzDateSelects(oldEl){
  const group = document.createElement('div');
  group.id = 'f_date';
  group.className = 'dz-date-group';
  group.style.display = 'flex';
  group.style.gap = '6px';

  const daySel = document.createElement('select');
  daySel.className = 'dz-date-day';
  daySel.innerHTML = '<option value=""></option>' +
    Array.from({length:31}, (_,i)=>i+1).map(d=>`<option value="${d}">${toTibetanNumeral(String(d).padStart(2,'0'))}</option>`).join('');

  const slash1 = document.createElement('span');
  slash1.textContent = '/';
  slash1.style.alignSelf = 'center';

  const monthSel = document.createElement('select');
  monthSel.className = 'dz-date-month';
  monthSel.innerHTML = '<option value=""></option>' +
    Array.from({length:12}, (_,i)=>i+1).map(m=>`<option value="${m}">${toTibetanNumeral(String(m).padStart(2,'0'))}</option>`).join('');

  const slash2 = document.createElement('span');
  slash2.textContent = '/';
  slash2.style.alignSelf = 'center';

  const yearSel = document.createElement('select');
  yearSel.className = 'dz-date-year';
  const curYear = new Date().getFullYear();
  const years = [];
  for(let y = curYear - 3; y <= curYear + 3; y++) years.push(y);
  yearSel.innerHTML = '<option value=""></option>' +
    years.map(y=>`<option value="${y}">${toTibetanNumeral(y)}</option>`).join('');

  group.appendChild(daySel); group.appendChild(slash1); group.appendChild(monthSel); group.appendChild(slash2); group.appendChild(yearSel);
  oldEl.replaceWith(group);

  const commit = ()=>{
    const d = daySel.value, m = monthSel.value, y = yearSel.value;
    plan.date = (d && m && y) ? (y + '-' + String(m).padStart(2,'0') + '-' + String(d).padStart(2,'0')) : '';
    renderDateQuick();
    renderPreview();
  };
  daySel.onchange = commit; monthSel.onchange = commit; yearSel.onchange = commit;
}

function syncDzDateSelects(){
  const group = document.getElementById('f_date');
  if(!group || group.tagName !== 'DIV') return;
  const daySel = group.querySelector('.dz-date-day');
  const monthSel = group.querySelector('.dz-date-month');
  const yearSel = group.querySelector('.dz-date-year');
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(plan.date || '');
  if(m){
    yearSel.value = String(parseInt(m[1],10));
    monthSel.value = String(parseInt(m[2],10));
    daySel.value = String(parseInt(m[3],10));
  } else {
    yearSel.value=''; monthSel.value=''; daySel.value='';
  }
}

function buildEnDateInput(oldEl){
  const input = document.createElement('input');
  input.type = 'date';
  input.id = 'f_date';
  oldEl.replaceWith(input);
}

/* The Dzongkha-format plan gets a fully Dzongkha day/month/year picker
   (Tibetan numerals, no Gregorian digits); the English-format plan keeps
   the native browser date picker. */
function setupDateField(){
  const existing = document.getElementById('f_date');
  if(!existing) return;

  if(lang === 'dz'){
    if(existing.tagName !== 'DIV'){ buildDzDateSelects(existing); }
    syncDzDateSelects();
  } else {
    if(existing.tagName !== 'INPUT'){ buildEnDateInput(existing); }
    const input = document.getElementById('f_date');
    input.value = plan.date || '';
    input.onchange = ()=>{ plan.date = input.value; renderDateQuick(); renderPreview(); };
  }
}

function bindSimpleFields(){
  setupSubjectField();
  setupDateField();
  simpleFields.forEach(key=>{
    const el = document.getElementById(fieldIdMap[key]);
    if(!el) return;
    el.value = plan[key] || '';
    const handler = ()=>{ plan[key] = el.value; if(key==='lessonNumber') syncLessonNumberInputs(); renderPreview(); };
    if(el.tagName==='SELECT'){ el.onchange = handler; }
    else{ el.oninput = handler; }
  });
  bindLessonNumberDz();
  renderChipFields();
}

/* The Lesson Plan Number can be shown in both the English and Dzongkha
   "Additional Details" panels via two separate inputs (f_lessonNumber and
   f_lessonNumberDz) — keep them in sync so editing either one updates both. */
function bindLessonNumberDz(){
  const el = document.getElementById('f_lessonNumberDz');
  if(!el) return;
  el.value = plan.lessonNumber || '';
  el.oninput = ()=>{ plan.lessonNumber = el.value; syncLessonNumberInputs(); renderPreview(); };
}
function syncLessonNumberInputs(){
  document.querySelectorAll('.mirror-lessonNumber').forEach(el=>{ el.value = plan.lessonNumber || ''; });
}

function renderObjectives(){ renderStringList('objectivesList','objectives'); renderStems(); }

/* Tap a starter to begin a new objective, then just finish the sentence. */
function renderStems(){
  const host = document.getElementById('objStems');
  if(!host) return;
  host.innerHTML = '';
  opt('stems').forEach(st=>{
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'chip'; b.textContent = st.label;
    b.onclick = ()=>{
      const caret = st.text.indexOf('|');
      const val = st.text.replace('|','');
      let idx = plan.objectives.findIndex(o=>!o.trim());
      if(idx < 0){ plan.objectives.push(''); idx = plan.objectives.length - 1; }
      plan.objectives[idx] = val;
      renderStringList('objectivesList','objectives');
      renderPreview();
      const inp = document.querySelectorAll('#objectivesList input')[idx];
      if(inp){ inp.focus(); inp.setSelectionRange(caret, caret); }
    };
    host.appendChild(b);
  });
}

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

/* English free-form phase cards (name + time are tap-to-select) */
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
      <div class="chips chips-tight ph-name-chips"></div>
      <div class="chips chips-tight ph-time-chips" style="margin-top:8px"></div>
      <div class="field" style="margin-top:12px"><label>${t('stageContent')}</label><textarea class="ph-content" style="min-height:110px" placeholder="- point one&#10;## Activity 1: ...&#10;1. question one">${escHtml(ph.content)}</textarea></div>
    `;
    const nameIn = card.querySelector('.ph-name'), timeIn = card.querySelector('.ph-time');
    const nameG = chipGroup(card.querySelector('.ph-name-chips'),
      textCfg(()=>plan.phasesEn[i].name, v=>{ plan.phasesEn[i].name = v; nameIn.value = v; }, opt('stageNames')));
    const timeG = chipGroup(card.querySelector('.ph-time-chips'),
      textCfg(()=>plan.phasesEn[i].time, v=>{ plan.phasesEn[i].time = v; timeIn.value = v; }, opt('stageTimes')));
    nameIn.oninput = e=>{ plan.phasesEn[i].name = e.target.value; nameG.render(); renderPreview(); };
    timeIn.oninput = e=>{ plan.phasesEn[i].time = e.target.value; timeG.render(); renderPreview(); };
    card.querySelector('.ph-content').oninput = e=>{ plan.phasesEn[i].content = e.target.value; renderPreview(); };
    card.querySelector('.ph-del').onclick = ()=>{ plan.phasesEn.splice(i,1); renderPhases(); renderPreview(); };
    wrap.appendChild(card);
  });
}

/* Dzongkha colour-coded table-row editor (everything is tap-to-select; the boxes stay open for extra notes) */
function renderDzRows(){
  const wrap = document.getElementById('dzRowsList');
  wrap.innerHTML = '';
  plan.phasesDz.forEach((row, i)=>{
    const card = document.createElement('div');
    card.className = 'dzrow-card';
    card.innerHTML = `
      <div class="phase-head">
        <div class="field"><label>${t('colTopic')}</label><input type="text" class="dz-name" value="${escAttr(row.name)}"></div>
        <div class="field time-field dz-tint dz-tint-time"><label>${t('colTime')}</label><input type="text" class="dz-time" value="${escAttr(row.time)}" placeholder="${escAttr(dzMin(15))}"></div>
        <button class="mini-btn dz-del" type="button" title="${t('del')}"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS.trash}</svg></button>
      </div>
      <div class="chips chips-tight g-name"></div>
      <div class="chips chips-tight g-time" style="margin-top:8px"></div>
      <div class="row2" style="margin-top:12px">
        <div class="field dz-tint dz-tint-skill"><label>${t('colSkill')}</label><div class="g-skill"></div><textarea class="dz-skill" style="margin-top:8px">${escHtml(row.skillFocus)}</textarea></div>
        <div class="field dz-tint dz-tint-assess"><label>${t('colAssessment')}</label><div class="g-assess"></div><textarea class="dz-assess" style="margin-top:8px">${escHtml(row.assessment)}</textarea></div>
      </div>
      <div class="row2">
        <div class="field dz-tint dz-tint-teacher"><label>${t('colTeacher')}</label><div class="g-teacher"></div><textarea class="dz-teacher" style="margin-top:8px">${escHtml(row.teacherActivity)}</textarea></div>
        <div class="field dz-tint dz-tint-student"><label>${t('colStudent')}</label><div class="g-student"></div><textarea class="dz-student" style="margin-top:8px">${escHtml(row.studentActivity)}</textarea></div>
      </div>
    `;
    const R = ()=>plan.phasesDz[i];
    const nameIn = card.querySelector('.dz-name'), timeIn = card.querySelector('.dz-time');

    const nameG = chipGroup(card.querySelector('.g-name'),
      textCfg(()=>R().name, v=>{ R().name = v; nameIn.value = v; }, opt('stageNames')));
    const timeG = chipGroup(card.querySelector('.g-time'),
      textCfg(()=>R().time, v=>{ R().time = v; timeIn.value = v; }, opt('stageTimes')));
    nameIn.oninput = e=>{ R().name = e.target.value; nameG.render(); renderPreview(); };
    timeIn.oninput = e=>{ R().time = e.target.value; timeG.render(); renderPreview(); };

    // chips store selections (shown one after another on one line); the box is only for extra notes
    function bindArea(groupSel, areaSel, selField, txtField, optName){
      const ta = card.querySelector(areaSel);
      chipGroup(card.querySelector(groupSel),
        selCfg(()=>R()[selField], a=>{ R()[selField] = a; renderPreview(); }, opt(optName), ck('dz_'+optName), null, true));
      ta.oninput = e=>{ R()[txtField] = e.target.value; renderPreview(); };
    }
    bindArea('.g-skill',   '.dz-skill',   'skillSel',   'skillFocus',      'skill');
    bindArea('.g-assess',  '.dz-assess',  'assessSel',  'assessment',      'assessment');
    bindArea('.g-teacher', '.dz-teacher', 'teacherSel', 'teacherActivity', 'teacher');
    bindArea('.g-student', '.dz-student', 'studentSel', 'studentActivity', 'student');

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
function formatDateDisplay(raw, useLang){
  if(!raw) return '';
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(raw);
  if(!m) return raw; // not an ISO date (e.g. legacy free-text plan) — show as typed
  const y = parseInt(m[1],10), mo = parseInt(m[2],10), d = parseInt(m[3],10);
  if(useLang==='dz'){
    return toTibetanNumeral(String(d).padStart(2,'0')) + '/' + toTibetanNumeral(String(mo).padStart(2,'0')) + '/' + toTibetanNumeral(y);
  }
  return d + ordinalSuffix(d) + ' ' + MONTHS_EN[mo-1] + ', ' + y;
}

/* ---------------- lesson number auto-numbering ---------------- */
function maxLessonNumber(){
  let max = 0;
  savedPlans.forEach(p=>{
    const n = parseInt(p.lessonNumber, 10);
    if(!isNaN(n) && n>max) max = n;
  });
  return max;
}
function nextLessonNumber(){ return String(maxLessonNumber()+1); }

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
  const items = (arr||[]).filter(x=>x && x.trim());
  if(items.length===0) return `<p class="doc-empty">—</p>`;
  return `<ul class="doc-ul">${items.map(i=>`<li>${inlineBold(linkify(escHtml(i)))}</li>`).join('')}</ul>`;
}

/* ---------------- preview ---------------- */
function renderPreview(){
  document.getElementById('docPreview').innerHTML = (lang==='dz') ? previewDz(plan) : previewEn(plan);
  renderLib();
  scheduleDraft();
}

/* Selections are written one after another on a single line (saves pages), followed by any typed notes. */
function joinSel(arr, L){
  const a = (arr||[]).map(x=>String(x).trim()).filter(Boolean);
  if(L === 'dz') return a.map(x=>/[།༎]$/.test(x) ? x : x + '།').join(' ');
  return a.join(', ');
}
function renderSel(sel, notes, L){
  const j = joinSel(sel, L);
  const hasNotes = notes && notes.trim();
  if(!j && !hasNotes) return `<p class="doc-empty">—</p>`;
  return (j ? `<p class="doc-p">${escHtml(j)}</p>` : '') + (hasNotes ? renderContentBlock(notes) : '');
}
function rowHas(r){
  return !!(r.name || r.time || r.skillFocus || r.teacherActivity || r.studentActivity || r.assessment ||
    (r.skillSel&&r.skillSel.length) || (r.teacherSel&&r.teacherSel.length) || (r.studentSel&&r.studentSel.length) || (r.assessSel&&r.assessSel.length));
}

function previewEn(p){
  const L = I18N.en, T = k => L[k] || k;
  return `
    <div class="doc-ribbon">
      <div class="eyebrow">${escHtml(p.subject || T('subject'))} · ${escHtml(p.className? (T('class')+' '+p.className): '')}</div>
      <h2>${escHtml(p.title) || T('docUntitled')}</h2>
      <div class="sub">${escHtml(p.topic || '')}</div>
    </div>
    <div class="doc-body">
      <div class="doc-lessonno"><b>${T('docLessonNo')}:</b> ${escHtml(p.lessonNumber)||'—'}</div>
      <div class="doc-meta doc-meta-3">
        <div><b>${T('docClass')}:</b> ${escHtml(p.className)||'—'}</div>
        <div><b>${T('docSubject')}:</b> ${escHtml(p.subject)||'—'}</div>
        <div><b>${T('docPeriod')}:</b> ${escHtml(p.period)||'—'}</div>
        <div><b>${T('docDuration')}:</b> ${escHtml(p.duration)||'—'}</div>
        <div><b>${T('docDate')}:</b> ${escHtml(formatDateDisplay(p.date,'en'))||'—'}</div>
        <div><b>${T('docStrand')}:</b> ${escHtml(p.strand)||'—'}</div>
        <div><b>${T('docPedagogy')}:</b> ${escHtml(p.pedagogy)||'—'}</div>
        <div><b>${T('docTeachingStrategies')}:</b> ${escHtml(p.teachingStrategies)||'—'}</div>
      </div>

      <div class="doc-h">${T('docCompetency')}</div>
      ${renderContentBlock(p.competency)}

      <div class="doc-h">${T('docGNH')}</div>
      ${renderSel(p.gnhSel, p.gnh, 'en')}

      <div class="doc-h">${T('docObjectives')}</div>
      ${renderBulletArray(p.objectives)}

      <div class="doc-h">${T('docPrior')}</div>
      ${renderContentBlock(p.prior)}

      <div class="doc-h">${T('docResources')}</div>
      ${renderSel(p.resSel, p.resources, 'en')}

      ${(p.phasesEn||[]).map(ph=>`
        <div class="doc-h"><span>${escHtml(ph.name)||'—'}</span>${ph.time? `<span class="time">${escHtml(ph.time)}</span>`:''}</div>
        ${renderContentBlock(ph.content)}
      `).join('')}
    </div>
  `;
}

function previewDz(p){
  const L = I18N.dz, T = k => L[k] || k;
  const all = p.phasesDz || [];
  const rows = all.filter(rowHas);
  const tableRows = (rows.length? rows : all).map(r=>`
    <tr>
      <td class="dzc-0"><strong>${escHtml(r.name)||'—'}</strong></td>
      <td class="dzc-1">${renderSel(r.skillSel, r.skillFocus, 'dz')}</td>
      <td class="dzc-2">${renderSel(r.teacherSel, r.teacherActivity, 'dz')}</td>
      <td class="dzc-3">${renderSel(r.studentSel, r.studentActivity, 'dz')}</td>
      <td class="dzc-4">${escHtml(r.time)||'—'}</td>
      <td class="dzc-5">${renderSel(r.assessSel, r.assessment, 'dz')}</td>
    </tr>
  `).join('');

  return `
    <div class="doc-ribbon">
      <div class="doc-plantype">${escHtml(T('docPlanType'))}</div>
      <div class="eyebrow">${escHtml(p.subject || T('subject'))} · ${escHtml(p.className? (T('class')+' '+p.className): '')}</div>
      <h2>${escHtml(p.title) || T('docUntitled')}</h2>
      <div class="sub">${escHtml(p.topic || '')}</div>
    </div>
    <div class="doc-body">
      <div class="doc-lessonno"><b>${T('docLessonNo')}:</b> ${escHtml(p.lessonNumber)||'—'}</div>
      <div class="doc-meta">
        <div><b>${T('docClass')}:</b> ${escHtml(p.className)||'—'}</div>
        <div><b>${T('docSubject')}:</b> ${escHtml(p.subject)||'—'}</div>
        <div><b>${T('docDate')}:</b> ${escHtml(formatDateDisplay(p.date,'dz'))||'—'}</div>
        <div><b>${T('docDuration')}:</b> ${escHtml(p.duration)||'—'}</div>
        <div><b>${T('docVenue')}:</b> ${escHtml(p.venue)||'—'}</div>
        <div><b>${T('docStrand')}:</b> ${escHtml(p.strand)||'—'}</div>
      </div>

      <div class="doc-h">${T('docCompetency')}</div>
      ${renderContentBlock(p.competency)}

      <div class="doc-h">${T('docObjectives')}</div>
      ${renderBulletArray(p.objectives)}

      <div class="doc-h">${T('docGNH')}</div>
      ${renderSel(p.gnhSel, p.gnh, 'dz')}

      <div class="doc-h">${T('docResourcesDz')}</div>
      ${renderSel(p.resDzSel, p.resourcesDz, 'dz')}

      <div class="doc-h">${T('secStagesDz')}</div>
      <table class="doc-dz-table">
        <thead><tr>
          <th class="dzc-0">${T('colTopic')}</th>
          <th class="dzc-1">${T('colSkill')}</th>
          <th class="dzc-2">${T('colTeacher')}</th>
          <th class="dzc-3">${T('colStudent')}</th>
          <th class="dzc-4">${T('colTime')}</th>
          <th class="dzc-5">${T('colAssessment')}</th>
        </tr></thead>
        <tbody>${tableRows}</tbody>
      </table>

      <div class="doc-h">${T('docReflection')}</div>
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
  harvestLib();
  captureDefaults();
  markSyllabusTaught();
  const ok = await persistSaved();
  if(ok){ toast(t('savedToast')); renderSaved(); renderSyllabus(); }
  return ok;
}

function newPlan(){
  plan = blankPlan();
  applyDefaults(plan);
  plan.lessonNumber = nextLessonNumber();
  editingExistingId = null;
  applyI18n();
}

function loadPlanIntoForm(p){
  plan = normPlan(JSON.parse(JSON.stringify(p)));
  editingExistingId = p.id;
  lang = plan.format === 'dz' ? 'dz' : 'en';
  syncLangToggle();
  applyI18n();
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
let selectedIds = new Set();
function updateExportSelLabel(){
  const b = document.getElementById('btnExportSel');
  if(b) b.querySelector('span').textContent = t('exportSel') + (selectedIds.size ? ' (' + selectedIds.size + ')' : '');
}
function renderSaved(){
  const grid = document.getElementById('savedGrid');
  const q = (document.getElementById('searchSaved').value || '').toLowerCase().trim();
  const list = savedPlans.filter(p=>{
    if(!q) return true;
    return [p.title,p.subject,p.className,p.topic].join(' ').toLowerCase().includes(q);
  });
  updateExportSelLabel();
  if(list.length===0){
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16v16H4z" opacity=".0"/><path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M9 12h6M9 16h6M9 8h3"/></svg>
      <div>${t('savedEmpty')}</div>
    </div>`;
    return;
  }
  const svg = (name)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;
  grid.innerHTML = list.map(p=>{
    const fmt = (p.format==='dz') ? 'DZ' : 'EN';
    const dateTxt = p.date ? formatDateDisplay(p.date, p.format==='dz' ? 'dz' : 'en') : new Date(p.updatedAt||p.createdAt).toLocaleDateString();
    return `
    <div class="plan-card">
      <div class="tag"><label class="plan-pick"><input type="checkbox" data-pick="${p.id}" ${selectedIds.has(p.id)?'checked':''}></label><span class="fmt">${fmt}</span>${escHtml(p.subject)||'—'}${p.className? ' · '+escHtml(p.className):''}</div>
      <h3>${escHtml(p.title) || t('docUntitled')}</h3>
      <div class="meta">${escHtml(p.topic)||''}</div>
      <div class="meta">${p.lessonNumber ? '№ '+escHtml(p.lessonNumber)+' · ' : ''}${escHtml(dateTxt)}</div>
      <div class="actions">
        <button class="icon-btn" data-act="open" data-id="${p.id}" title="${t('open')}">${svg('edit')}</button>
        <button class="icon-btn" data-act="dup" data-id="${p.id}" title="${t('duplicate')}">${svg('copy')}</button>
        <button class="icon-btn" data-act="word" data-id="${p.id}" title="${t('exportShort')}">${svg('download')}</button>
        <button class="icon-btn" data-act="print" data-id="${p.id}" title="${t('printBtn')}">${svg('print')}</button>
        <button class="icon-btn" data-act="del" data-id="${p.id}" title="${t('del')}">${svg('trash')}</button>
      </div>
    </div>`;
  }).join('');

  grid.querySelectorAll('[data-pick]').forEach(cb=>{
    cb.onchange = ()=>{
      const id = cb.getAttribute('data-pick');
      if(cb.checked) selectedIds.add(id); else selectedIds.delete(id);
      updateExportSelLabel();
    };
  });
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
  const items = (arr||[]).filter(x=>x && x.trim());
  if(items.length===0) return '<p>—</p>';
  return `<ul>${items.map(i=>`<li>${inlineBold(escHtml(i))}</li>`).join('')}</ul>`;
}
/* selections on one line + typed notes */
function selToWord(sel, notes, L){
  const j = joinSel(sel, L);
  const hasNotes = notes && notes.trim();
  if(!j && !hasNotes) return '<p>—</p>';
  return (j ? `<p>${escHtml(j)}</p>` : '') + (hasNotes ? contentToWordHtml(notes) : '');
}

const WORD_STYLE = `
  ${dzFontFaceCss()}
  @page WordSection1{ size:21.0cm 29.7cm; margin:1.4cm 1.5cm 1.4cm 1.5cm; }
  div.WordSection1{ page:WordSection1; }
  body{ font-family:Calibri, 'Noto Sans Tibetan', sans-serif; font-size:10.5pt; color:#101B34; }
  .dz-doc, .dz-doc .sec-title, .dz-doc .sub-h, .dz-doc .dz-table th, .dz-doc h1, .dz-doc .meta-table{ font-family:'${DZ_FONT_FAMILY}', 'Noto Sans Tibetan', sans-serif; }
  table{ border-collapse:collapse; width:100%; margin-bottom:8px; }
  td, th{ border:1px solid #93C5FD; padding:4px 7px; vertical-align:top; }
  .hero{ background:#2563EB; color:#F7FAFF; padding:9px 14px; }
  .hero .plan-type{ font-size:9.5pt; letter-spacing:.1em; text-transform:uppercase; font-weight:700; margin-bottom:3px; }
  .hero h1{ font-family:Georgia,serif; font-size:16pt; margin:0 0 2px; }
  .hero .sub{ font-size:10pt; }
  .meta-table td{ font-size:10pt; }
  .sec-title{ font-family:Georgia,serif; font-weight:700; color:#1D4ED8; font-size:11.5pt; margin:8px 0 3px; border-bottom:1px solid #38BDF8; padding-bottom:2px; }
  ul,ol{ margin:2px 0 4px; padding-left:18px; }
  li{ margin-bottom:2px; }
  .sub-h{ font-weight:700; color:#1E3A8A; margin:4px 0 2px; }
  p{ margin:0 0 3px; }
  .dz-table th, .dz-table td{ font-size:9.5pt; }
  .dz-table .c0{ background:#F8FAFC; } .dz-table th.c0{ background:#EEF2F8; }
  .dz-table .c1{ background:#E4F3FC; } .dz-table th.c1{ background:#B9E1F7; }
  .dz-table .c2{ background:#FDEEDA; } .dz-table th.c2{ background:#FBD9A2; }
  .dz-table .c3{ background:#E3F7E6; } .dz-table th.c3{ background:#BBEAC4; }
  .dz-table .c4{ background:#EDE4FA; } .dz-table th.c4{ background:#D3C0F2; }
  .dz-table .c5{ background:#DCF6F2; } .dz-table th.c5{ background:#AEE9E1; }
  .reflect-box{ min-height:34px; border:1px dashed #B7C6DE; background:#F8FAFC; }
  .credit-line{ text-align:center; font-size:8.5pt; color:#94A3B8; margin-top:12px; }
`;

function encodePlans(plans){ return btoa(unescape(encodeURIComponent(JSON.stringify(plans)))); }
function decodePlans(b64){
  const v = JSON.parse(decodeURIComponent(escape(atob(b64))));
  return Array.isArray(v) ? v : [v];
}

function wordBodyEN(p){
  const L = I18N.en;
  const phasesHtml = (p.phasesEn||[]).map(ph=>`
    <tr>
      <td style="width:80%;">
        <div style="font-family:Georgia,serif;font-weight:700;color:#1D4ED8;font-size:11pt;margin-bottom:2px;">${escHtml(ph.name)}</div>
        ${contentToWordHtml(ph.content)}
      </td>
      <td style="width:20%;color:#0369A1;font-weight:600;">${escHtml(ph.time)||''}</td>
    </tr>
  `).join('');
  return `<div class="plan-block">
    <div class="hero"><h1>${escHtml(p.title)||L.docUntitled}</h1><div class="sub">${escHtml(p.topic)||''}</div></div>
    <table class="meta-table">
      <tr><td><b>${L.docLessonNo}:</b> ${escHtml(p.lessonNumber)||'—'}</td><td><b>${L.docClass}:</b> ${escHtml(p.className)||'—'}</td><td><b>${L.docSubject}:</b> ${escHtml(p.subject)||'—'}</td></tr>
      <tr><td><b>${L.docPeriod}:</b> ${escHtml(p.period)||'—'}</td><td><b>${L.docDuration}:</b> ${escHtml(p.duration)||'—'}</td><td><b>${L.docDate}:</b> ${escHtml(formatDateDisplay(p.date,'en'))||'—'}</td></tr>
      <tr><td><b>${L.docStrand}:</b> ${escHtml(p.strand)||'—'}</td><td><b>${L.docPedagogy}:</b> ${escHtml(p.pedagogy)||'—'}</td><td><b>${L.docTeachingStrategies}:</b> ${escHtml(p.teachingStrategies)||'—'}</td></tr>
    </table>

    <div class="sec-title">${L.docCompetency}</div>
    ${contentToWordHtml(p.competency)}

    <div class="sec-title">${L.docGNH}</div>
    ${selToWord(p.gnhSel, p.gnh, 'en')}

    <div class="sec-title">${L.docObjectives}</div>
    ${bulletArrayToWordHtml(p.objectives)}

    <div class="sec-title">${L.docPrior}</div>
    ${contentToWordHtml(p.prior)}

    <div class="sec-title">${L.docResources}</div>
    ${selToWord(p.resSel, p.resources, 'en')}

    <div class="sec-title">${L.secStages}</div>
    <table>${phasesHtml}</table>
  </div>`;
}

function wordBodyDZ(p){
  const L = I18N.dz;
  const all = p.phasesDz || [];
  const rows = all.filter(rowHas);
  const src = rows.length ? rows : all;
  const tableRows = src.map(r=>`
    <tr>
      <td class="c0"><strong>${escHtml(r.name)||'—'}</strong></td>
      <td class="c1">${selToWord(r.skillSel, r.skillFocus, 'dz')}</td>
      <td class="c2">${selToWord(r.teacherSel, r.teacherActivity, 'dz')}</td>
      <td class="c3">${selToWord(r.studentSel, r.studentActivity, 'dz')}</td>
      <td class="c4">${escHtml(r.time)||'—'}</td>
      <td class="c5">${selToWord(r.assessSel, r.assessment, 'dz')}</td>
    </tr>
  `).join('');
  return `<div class="plan-block dz-doc">
    <div class="hero">${L.docPlanType ? `<div class="plan-type">${escHtml(L.docPlanType)}</div>` : ''}<h1>${escHtml(p.title)||L.docUntitled}</h1><div class="sub">${escHtml(p.topic)||''}</div></div>
    <table class="meta-table">
      <tr><td><b>${L.docLessonNo}:</b> ${escHtml(p.lessonNumber)||'—'}</td><td><b>${L.docClass}:</b> ${escHtml(p.className)||'—'}</td><td><b>${L.docSubject}:</b> ${escHtml(p.subject)||'—'}</td></tr>
      <tr><td><b>${L.docDate}:</b> ${escHtml(formatDateDisplay(p.date,'dz'))||'—'}</td><td><b>${L.docDuration}:</b> ${escHtml(p.duration)||'—'}</td><td><b>${L.docVenue}:</b> ${escHtml(p.venue)||'—'}</td></tr>
      <tr><td colspan="3"><b>${L.docStrand}:</b> ${escHtml(p.strand)||'—'}</td></tr>
    </table>

    <div class="sec-title">${L.docCompetency}</div>
    ${contentToWordHtml(p.competency)}

    <div class="sec-title">${L.docObjectives}</div>
    ${bulletArrayToWordHtml(p.objectives)}

    <div class="sec-title">${L.docGNH}</div>
    ${selToWord(p.gnhSel, p.gnh, 'dz')}

    <div class="sec-title">${L.docResourcesDz}</div>
    ${selToWord(p.resDzSel, p.resourcesDz, 'dz')}

    <div class="sec-title">${L.secStagesDz}</div>
    <table class="dz-table">
      <tr>
        <th class="c0">${L.colTopic}</th><th class="c1">${L.colSkill}</th><th class="c2">${L.colTeacher}</th>
        <th class="c3">${L.colStudent}</th><th class="c4">${L.colTime}</th><th class="c5">${L.colAssessment}</th>
      </tr>
      ${tableRows}
    </table>

    <div class="sec-title">${L.docReflection}</div>
    ${p.reflection && p.reflection.trim() ? contentToWordHtml(p.reflection) : '<div class="reflect-box"></div>'}
  </div>`;
}

function wordPlanBody(p){ return (p.format==='dz') ? wordBodyDZ(p) : wordBodyEN(p); }

function wrapWord(title, inner, plans){
  const credit = (plans.some(p=>p.format==='dz') ? I18N.dz : I18N.en).creditLine;
  return `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
  <head>
    <meta charset="utf-8">
    <title>${escHtml(title)}</title>
    <!--LPS-DATA:${encodePlans(plans)}-->
    <!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View><w:Zoom>100</w:Zoom></w:WordDocument></xml><![endif]-->
    <style>${WORD_STYLE}</style>
  </head>
  <body>
    <div class="WordSection1">
      ${inner}
      <p class="credit-line">${escHtml(credit)}</p>
    </div>
  </body>
  </html>`;
}
function planToDocHtml(p){ return wrapWord(p.title || 'Lesson plan', wordPlanBody(p), [p]); }
function plansToDocHtml(plans){
  const inner = plans.map(wordPlanBody).join(`<br clear="all" style="page-break-before:always">`);
  return wrapWord('Lesson plans', inner, plans);
}

/* ---------------- print ----------------
   Printing is done by opening a standalone, self-contained HTML page in a
   new tab (same blob+anchor technique as the Word export, which already
   works reliably here) and triggering window.print() once it has loaded.
   This avoids relying on window.print() inside the app's own iframe/tab,
   which some hosts block or ignore. */
const PRINT_CSS = `${dzFontFaceCss()}
.doc.dz-doc, .doc.dz-doc .doc-h, .doc.dz-doc .doc-sub, .doc.dz-doc .doc-dz-table th{font-family:'${DZ_FONT_FAMILY}', 'Noto Sans Tibetan', sans-serif;}
.doc{background:#ffffff; color:#101B34; border-radius:16px; overflow:hidden;
    box-shadow:0 18px 40px rgba(15,23,42,0.28); border:1px solid rgba(15,23,42,0.06);}
.doc-ribbon{background:linear-gradient(120deg, #2563EB, #38BDF8 85%);
    color:#F7FAFF; padding:20px 24px 18px; position:relative; overflow:hidden;}
.doc-ribbon::after{content:''; position:absolute; right:-30px; top:-30px; width:140px; height:140px; border-radius:50%;
    background:radial-gradient(circle, rgba(255,255,255,.30), transparent 70%);}
.doc-ribbon .doc-plantype{font-size:11px; letter-spacing:.13em; text-transform:uppercase; font-weight:700; opacity:.92; margin-bottom:8px;}
.doc-ribbon .eyebrow{font-size:10.5px; letter-spacing:.14em; text-transform:uppercase; opacity:.8; margin-bottom:6px;}
.doc-ribbon h2{margin:0 0 4px; font-size:16.5px; font-weight:600; color:#ffffff;}
.doc-ribbon .sub{font-size:12.5px; opacity:.9;}
.doc-lessonno{font-size:12.5px; margin:0 0 12px;}
.doc-lessonno b{color:#2563EB; font-weight:700;}
.doc-body{padding:22px 24px 26px; font-size:13.6px; line-height:1.62;}
.doc-meta{display:grid; grid-template-columns:1fr 1fr; gap:8px 20px; margin-bottom:16px; font-size:13px;}
.doc-meta.doc-meta-3{grid-template-columns:1fr 1fr 1fr;}
.doc-meta div b{color:#2563EB; font-weight:700;}
.doc-h{font-family:'Fraunces','Noto Sans Tibetan',serif; font-size:14.5px; font-weight:700; color:#1D4ED8;
    margin:16px 0 6px; padding-bottom:4px; border-bottom:1px solid rgba(37,99,235,0.2);
    display:flex; justify-content:space-between; align-items:baseline; gap:10px;}
.doc-h .time{font-family:'JetBrains Mono',monospace; font-size:11px; font-weight:600; color:#0369A1; background:rgba(56,189,248,0.16); padding:2px 9px; border-radius:999px; white-space:nowrap;}
.doc-p{margin:0 0 8px;}
.doc-ul{margin:0 0 10px; padding-left:0; list-style:none;}
.doc-ul li{position:relative; padding-left:20px; margin-bottom:5px;}
.doc-ul li::before{content:''; position:absolute; left:0; top:6px; width:9px; height:9px; background:linear-gradient(120deg,#2563EB,#38BDF8); border-radius:2px; transform:rotate(45deg);}
.doc-ol{margin:0 0 10px; padding-left:22px;}
.doc-ol li{margin-bottom:5px;}
.doc-sub{font-weight:700; color:#1E3A8A; margin:8px 0 4px;}
.doc-empty{color:#94A3B8; font-style:italic;}
.doc a{color:#2563EB;}
/* Dzongkha colour-coded stage table (mirrors the DDC template) */
  .doc-dz-table{width:100%; border-collapse:collapse; margin:6px 0 12px; font-size:12.6px;}
.doc-dz-table th, .doc-dz-table td{border:1px solid #C3D3EA; padding:9px 10px; vertical-align:top; text-align:left;}
.doc-dz-table th{font-family:'Fraunces','Noto Sans Tibetan',serif; font-weight:700; color:#1D3557; font-size:12px;}
.doc-dz-table .dzc-0{background:#F8FAFC;}
.doc-dz-table td.dzc-1{background:#E4F3FC;}
.doc-dz-table th.dzc-1{background:#B9E1F7;}
.doc-dz-table td.dzc-2{background:#FDEEDA;}
.doc-dz-table th.dzc-2{background:#FBD9A2;}
.doc-dz-table td.dzc-3{background:#E3F7E6;}
.doc-dz-table th.dzc-3{background:#BBEAC4;}
.doc-dz-table td.dzc-4{background:#EDE4FA;}
.doc-dz-table th.dzc-4{background:#D3C0F2;}
.doc-dz-table td.dzc-5{background:#DCF6F2;}
.doc-dz-table th.dzc-5{background:#AEE9E1;}
.doc-dz-table .doc-ul, .doc-dz-table .doc-ol{margin-bottom:0;}
.doc-dz-table .doc-p:last-child{margin-bottom:0;}
.doc-reflect-box{min-height:46px; border:1px dashed #B7C6DE; border-radius:8px; background:#F8FAFC;}
.doc-credit{ text-align:center; font-size:11px; color:#94A3B8; padding:10px 24px 18px; letter-spacing:.02em; }
.doc, .doc *{visibility:visible;}
.doc{position:absolute; top:0; left:0; width:100%; box-shadow:none; border:none; border-radius:0;}
  html,body{ margin:0; padding:0; background:#EEF2F8; }
  body{ font-family:'Inter','Noto Sans Tibetan',sans-serif; display:flex; justify-content:center; padding:24px 12px; }
  .doc{ width:100%; max-width:820px; box-shadow:none; border:1px solid #E2E8F0; border-radius:0; }
  @media print{
    html,body{ background:#fff; padding:0; }
    .doc{ max-width:none; border:none; }
  }
  @page{ margin:14mm; }
`;

function printPlan(p){
  const L = (p.format==='dz') ? I18N.dz : I18N.en;
  const bodyHtml = (p.format==='dz') ? previewDz(p) : previewEn(p);
  const docHtml = `<!DOCTYPE html><html lang="${p.format==='dz'?'dz':'en'}"><head><meta charset="utf-8">
<title>${escHtml(p.title)||'Lesson Plan'}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&family=Noto+Sans+Tibetan:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${PRINT_CSS}</style>
</head><body>
<div class="doc${p.format==='dz' ? ' dz-doc' : ''}">${bodyHtml}<div class="doc-credit">${escHtml(L.creditLine)}</div></div>
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

function downloadBlob(blob, filename){
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url), 4000);
}
function safeFileName(s, fb){ return ((s || fb || 'lesson-plan').replace(/[^\w\-]+/g,'_').slice(0,60)) || 'lesson-plan'; }
function exportWord(p){
  downloadBlob(new Blob(['\ufeff', planToDocHtml(p)], {type:'application/msword'}), safeFileName(p.title) + '.doc');
}
/* several plans in ONE Word file (sorted by date, then lesson number) */
function exportWordMany(plans, name){
  const sorted = plans.slice().sort((a,b)=> String(a.date||'').localeCompare(String(b.date||'')) || ((parseInt(a.lessonNumber,10)||0)-(parseInt(b.lessonNumber,10)||0)));
  downloadBlob(new Blob(['\ufeff', plansToDocHtml(sorted)], {type:'application/msword'}), safeFileName(name, 'lesson-plans') + '.doc');
}

/* =====================================================================
   GENERIC STORAGE (same Artifact-storage / localStorage switch as before)
   ===================================================================== */
async function kvGet(key, fb){
  try{
    let raw = null;
    if(hasArtifactStorage){ const r = await window.storage.get(key, false); raw = r && r.value; }
    else raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fb;
  }catch(e){ return fb; }
}
async function kvSet(key, val){
  try{
    const str = JSON.stringify(val);
    if(hasArtifactStorage) await window.storage.set(key, str, false);
    else localStorage.setItem(key, str);
    return true;
  }catch(e){ console.error('storage error', key, e); return false; }
}
function newId(prefix){ return (prefix||'lp') + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
function syncLangToggle(){
  document.getElementById('langToggle').querySelectorAll('button').forEach(b=>b.classList.toggle('active', b.getAttribute('data-val')===lang));
  document.documentElement.setAttribute('data-lang', lang);
}
function downloadText(text, filename, mime){ downloadBlob(new Blob(['\ufeff', text], {type:mime||'text/plain'}), filename); }

let defaults = {}, templates = [], planLib = {}, syllabus = [];

/* =====================================================================
   OLD PLANS -> NEW FORMAT  (selections are stored as arrays; typed text stays text)
   ===================================================================== */
function normPlan(p){
  const L = p.format === 'dz' ? 'dz' : 'en';
  const O = OPTIONS[L];
  const known = O.gnhDomains.concat(O.gnhValues, O.resources);
  const toItems = txt => {
    const out = [];
    bulletLines(txt).forEach(l=>{
      if(l.includes(',') && !known.includes(l)) l.split(',').forEach(x=>{ x = x.trim(); if(x) out.push(x); });
      else out.push(l);
    });
    return out;
  };
  if(!Array.isArray(p.gnhSel)){ p.gnhSel = toItems(p.gnh); p.gnh = ''; }
  if(!Array.isArray(p.resSel)){ p.resSel = toItems(p.resources); p.resources = ''; }
  if(!Array.isArray(p.resDzSel)){ p.resDzSel = toItems(p.resourcesDz); p.resourcesDz = ''; }
  if(!Array.isArray(p.phasesEn)) p.phasesEn = blankPlan().phasesEn;
  if(!Array.isArray(p.phasesDz) || !p.phasesDz.length) p.phasesDz = [newDzRow()];
  if(!Array.isArray(p.objectives) || !p.objectives.length) p.objectives = [''];
  p.syllabusId = p.syllabusId || '';
  p.phasesDz.forEach(r=>{
    [['skillSel','skillFocus','skill'],['teacherSel','teacherActivity','teacher'],['studentSel','studentActivity','student'],['assessSel','assessment','assessment']]
    .forEach(([sel, txt, optName])=>{
      if(!Array.isArray(r[sel])){
        r[sel] = []; const keep = [];
        (r[txt]||'').split('\n').forEach(l=>{
          const x = lineText(l);
          if(x && (O[optName]||[]).includes(x)) r[sel].push(x); else keep.push(l);
        });
        r[txt] = keep.join('\n').trim();
      }
    });
  });
  return p;
}

/* =====================================================================
   1. LAST-USED DEFAULTS
   ===================================================================== */
function captureDefaults(){
  const d = { className: plan.className, duration: plan.duration, teacher: plan.teacher, gnhSel: (plan.gnhSel||[]).slice() };
  if(lang === 'dz'){ d.venue = plan.venue; d.resDzSel = (plan.resDzSel||[]).slice(); }
  else { d.subject = plan.subject; d.pedagogy = plan.pedagogy; d.teachingStrategies = plan.teachingStrategies; d.resSel = (plan.resSel||[]).slice(); }
  defaults[lang] = d;
  defaults._lang = lang;
  kvSet('lp_defaults', defaults);
}
function applyDefaults(p){
  const d = defaults[p.format || lang]; if(!d) return;
  Object.keys(d).forEach(k=>{ p[k] = Array.isArray(d[k]) ? d[k].slice() : d[k]; });
}
function fillFromDefaults(){
  const d = defaults[lang]; if(!d) return;
  Object.keys(d).forEach(k=>{
    const cur = plan[k];
    const empty = Array.isArray(cur) ? cur.length === 0 : !cur;
    if(empty) plan[k] = Array.isArray(d[k]) ? d[k].slice() : d[k];
  });
}

/* =====================================================================
   2. NEXT LESSON  (+ helper used by the week planner)
   ===================================================================== */
function cloneForNext(src){
  const n = JSON.parse(JSON.stringify(src));
  n.id = newId(); n.title = ''; n.topic = ''; n.objectives = ['']; n.prior = ''; n.reflection = ''; n.syllabusId = '';
  (n.phasesEn||[]).forEach(ph=>{ ph.content = ''; });
  (n.phasesDz||[]).forEach(r=>{ r.skillFocus = ''; r.teacherActivity = ''; r.studentActivity = ''; r.assessment = ''; });
  n.createdAt = n.updatedAt = Date.now();
  return n;
}
function nextTeachingDay(iso){
  const d = iso && /^\d{4}-\d{2}-\d{2}$/.test(iso) ? new Date(iso + 'T00:00:00') : new Date();
  d.setDate(d.getDate() + 1);
  while(d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
  return isoLocal(d);
}
async function nextLesson(){
  if(hasContent(plan)) await savePlan();
  const n = cloneForNext(plan);
  n.lessonNumber = String(Math.max(maxLessonNumber(), parseInt(plan.lessonNumber,10) || 0) + 1);
  n.date = nextTeachingDay(plan.date);
  plan = n; editingExistingId = null;
  applyI18n();
  toast(t('nextReady') + ' — ' + n.lessonNumber);
}

/* =====================================================================
   3. TEMPLATES
   ===================================================================== */
function builtinTemplates(){
  if(lang === 'dz'){
    const D = OPTIONS.dz;
    const R = (name, time, sk, te, st, as)=>Object.assign(newDzRow(), {name, time, skillSel:sk, teacherSel:te, studentSel:st, assessSel:as});
    return [{ id:'b_dz_40', builtin:true, format:'dz', name:'ཚད་ལྡན། ' + dzMin(40), data:{
      duration: dzMin(40),
      phasesDz:[
        R(D.stageNames[0], dzMin(5),  [D.skill[0]], [D.teacher[2]], [D.student[1]], [D.assessment[0]]),
        R(D.stageNames[1], dzMin(30), [D.skill[1]], [D.teacher[0], D.teacher[1]], [D.student[0], D.student[5]], [D.assessment[0]]),
        R(D.stageNames[3], dzMin(5),  [], [D.teacher[2]], [D.student[1]], [D.assessment[1]])
      ]}}];
  }
  return [{ id:'b_en_40', builtin:true, format:'en', name:'Standard 40-min lesson', data:{
    duration:'40 minutes', pedagogy:'Collaborative', teachingStrategies:'Discussion, Group work',
    phasesEn:[
      {name:'Introduction', time:'5 mins', content:'- Greeting and recap of the previous lesson\n- Share the objectives'},
      {name:'Learning Experience / Activities', time:'30 mins', content:'- Teacher explains and demonstrates\n- Learners practise in pairs / groups'},
      {name:'Assessment / Closure', time:'5 mins', content:'- Quick questions to check understanding\n- Summary of the lesson'}
    ]}}];
}
function applyTemplate(tpl){
  const hasWork = (plan.phasesEn||[]).some(p=>p.content && p.content.trim()) ||
    (plan.phasesDz||[]).some(r=>r.skillFocus || r.teacherActivity || r.studentActivity || r.assessment || (r.teacherSel && r.teacherSel.length));
  if(hasWork && !confirm(t('confirmTpl'))) return;
  const d = JSON.parse(JSON.stringify(tpl.data));
  Object.keys(d).forEach(k=>{ plan[k] = d[k]; });
  normPlan(plan);
  applyI18n();
  toast(t('tplApplied'));
}
function saveTemplate(name){
  const data = {
    duration: plan.duration, pedagogy: plan.pedagogy, teachingStrategies: plan.teachingStrategies, venue: plan.venue,
    gnhSel: (plan.gnhSel||[]).slice(), resSel: (plan.resSel||[]).slice(), resDzSel: (plan.resDzSel||[]).slice(),
    phasesEn: JSON.parse(JSON.stringify(plan.phasesEn||[])), phasesDz: JSON.parse(JSON.stringify(plan.phasesDz||[]))
  };
  templates.push({ id:newId('tpl'), format:lang, name, data });
  kvSet('lp_templates', templates);
  renderTemplates();
  toast(t('savedTpl'));
}
function renderTemplates(){
  const host = document.getElementById('tplBar');
  if(!host) return;
  host.innerHTML = '';
  builtinTemplates().concat(templates.filter(x=>x.format === lang)).forEach(tpl=>{
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'chip'; b.appendChild(document.createTextNode(tpl.name));
    b.onclick = ()=>applyTemplate(tpl);
    if(!tpl.builtin){
      const x = document.createElement('span');
      x.className = 'chip-x'; x.textContent = '×'; x.title = t('removeOpt');
      x.onclick = e=>{ e.stopPropagation(); templates = templates.filter(z=>z.id !== tpl.id); kvSet('lp_templates', templates); renderTemplates(); };
      b.appendChild(x);
    }
    host.appendChild(b);
  });
  const add = document.createElement('button');
  add.type = 'button'; add.className = 'chip chip-add'; add.textContent = t('saveTpl');
  add.onclick = ()=>{
    const wrap = document.createElement('span'); wrap.className = 'chip-input';
    const inp = document.createElement('input'); inp.type = 'text'; inp.placeholder = t('tplNamePh');
    wrap.appendChild(inp); add.replaceWith(wrap); inp.focus();
    let done = false;
    const commit = ()=>{ if(done) return; done = true; const v = inp.value.trim(); if(v) saveTemplate(v); else renderTemplates(); };
    inp.onkeydown = e=>{ if(e.key === 'Enter'){ e.preventDefault(); commit(); } else if(e.key === 'Escape'){ done = true; renderTemplates(); } };
    inp.onblur = ()=>setTimeout(commit, 120);
  };
  host.appendChild(add);
}

/* =====================================================================
   4. SAVED COMPETENCIES / OBJECTIVES (per subject + class)
   ===================================================================== */
function libKey(){ return (plan.format || lang) + '|' + (plan.subject || '') + '|' + (plan.className || ''); }
function libItems(kind){
  const k = libKey();
  const exact = (planLib[k] && planLib[k][kind]) || [];
  if(exact.length) return exact;
  const pre = (plan.format || lang) + '|' + (plan.subject || '') + '|';
  const items = [];
  Object.keys(planLib).forEach(kk=>{ if(kk.startsWith(pre)) (planLib[kk][kind]||[]).forEach(x=>{ if(!items.includes(x)) items.push(x); }); });
  return items;
}
function removeLibItem(kind, text){
  const pre = (plan.format || lang) + '|';
  Object.keys(planLib).forEach(kk=>{ if(kk.startsWith(pre) && planLib[kk][kind]) planLib[kk][kind] = planLib[kk][kind].filter(x=>x !== text); });
  kvSet('lp_lib', planLib);
}
function harvestLib(){
  const k = libKey();
  const e = planLib[k] = planLib[k] || {competencies:[], objectives:[]};
  const add = (arr, txt)=>{
    txt = (txt||'').trim();
    if(txt.length < 8 || /^Students will be able to \w+$/.test(txt)) return;
    const i = arr.indexOf(txt); if(i >= 0) arr.splice(i,1);
    arr.unshift(txt); if(arr.length > 40) arr.length = 40;
  };
  add(e.competencies, plan.competency);
  (plan.objectives||[]).slice().reverse().forEach(o=>add(e.objectives, o));
  kvSet('lp_lib', planLib);
}
function renderLibChips(hostId, kind, isOn, onClick){
  const host = document.getElementById(hostId);
  if(!host) return;
  const items = libItems(kind);
  host.innerHTML = '';
  host.style.display = items.length ? '' : 'none';
  if(!items.length) return;
  const cap = document.createElement('div');
  cap.className = 'chip-sub'; cap.style.width = '100%'; cap.style.margin = '0'; cap.textContent = t('libHint');
  host.appendChild(cap);
  items.slice(0,8).forEach(text=>{
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip' + (isOn(text) ? ' on' : '');
    b.title = text;
    b.appendChild(document.createTextNode(text.length > 64 ? text.slice(0,61) + '…' : text));
    b.onclick = ()=>onClick(text);
    const x = document.createElement('span');
    x.className = 'chip-x'; x.textContent = '×'; x.title = t('removeOpt');
    x.onclick = e=>{ e.stopPropagation(); removeLibItem(kind, text); renderLib(); };
    b.appendChild(x);
    host.appendChild(b);
  });
}
function renderLib(){
  renderLibChips('libComp', 'competencies', text=>plan.competency === text, text=>{
    plan.competency = (plan.competency === text) ? '' : text;
    const el = document.getElementById('f_competency'); if(el) el.value = plan.competency;
    renderPreview();
  });
  renderLibChips('libObj', 'objectives', text=>(plan.objectives||[]).includes(text), text=>{
    const i = plan.objectives.indexOf(text);
    if(i >= 0){ plan.objectives.splice(i,1); if(!plan.objectives.length) plan.objectives.push(''); }
    else {
      const e = plan.objectives.findIndex(o=>!o.trim());
      if(e >= 0) plan.objectives[e] = text; else plan.objectives.push(text);
    }
    renderStringList('objectivesList','objectives');
    renderPreview();
  });
  renderSynPick();
}

/* =====================================================================
   5. DRAFT AUTO-SAVE
   ===================================================================== */
let draftEnabled = false, draftTimer = null;
function hasContent(p){
  return !!(p.title || p.topic || p.competency ||
    (p.objectives||[]).some(o=>o && o.trim()) ||
    (p.phasesEn||[]).some(x=>x.content && x.content.trim()) ||
    (p.phasesDz||[]).some(r=>r.name || r.skillFocus || r.teacherActivity || r.studentActivity || r.assessment));
}
function stripVol(p){ const c = JSON.parse(JSON.stringify(p)); delete c.updatedAt; delete c.createdAt; return JSON.stringify(normPlan(c)); }
function sameAsSaved(p){ const sv = savedPlans.find(x=>x.id === p.id); return !!sv && stripVol(sv) === stripVol(p); }
function flushDraft(){ if(draftEnabled) kvSet('lp_draft', {plan, lang, ts:Date.now()}); }
function scheduleDraft(){
  if(!draftEnabled) return;
  clearTimeout(draftTimer);
  draftTimer = setTimeout(flushDraft, 600);
}

/* =====================================================================
   6. SYLLABUS
   ===================================================================== */
let synFilter = {status:'todo', className:'', subject:''};
function planned(it){ return savedPlans.some(p=>p.syllabusId === it.id && p.id !== plan.id); }
function synMatches(it, p){
  return it.format === lang && !it.done && !planned(it) &&
    (!p.subject || !it.subject || it.subject === p.subject) &&
    (!p.className || !it.className || it.className === p.className);
}
function fillFromSyllabus(it, target){
  target.title = it.topic; target.topic = it.topic;
  if(it.strand) target.strand = it.strand;
  if(it.competency) target.competency = it.competency;
  if(it.objectives && it.objectives.length) target.objectives = it.objectives.slice();
  if(it.subject && lang === 'en') target.subject = it.subject;
  if(it.className) target.className = it.className;
  target.syllabusId = it.id;
}
function renderSynPick(){
  const host = document.getElementById('synPick');
  if(!host) return;
  const items = syllabus.filter(it=>synMatches(it, plan)).slice(0,5);
  host.innerHTML = '';
  host.style.display = items.length ? '' : 'none';
  if(!items.length) return;
  const cap = document.createElement('div');
  cap.className = 'chip-sub'; cap.style.width = '100%'; cap.style.margin = '0'; cap.textContent = t('synPick');
  host.appendChild(cap);
  items.forEach(it=>{
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'chip' + (plan.syllabusId === it.id ? ' on' : '');
    b.textContent = it.topic;
    b.onclick = ()=>{ fillFromSyllabus(it, plan); applyI18n(); };
    host.appendChild(b);
  });
}
function markSyllabusTaught(){
  if(!plan.syllabusId) return;
  const it = syllabus.find(x=>x.id === plan.syllabusId);
  if(it && !it.done){ it.done = true; it.doneDate = plan.date || ''; kvSet('lp_syllabus', syllabus); }
}
function renderSyllabus(){
  const view = document.getElementById('view-syllabus');
  if(!view) return;
  const statuses = [['all', t('stAll')], ['todo', t('stTodo')], ['done', t('stDone')]];
  chipGroup(document.getElementById('synStatus'), { options: statuses.map(x=>x[1]), key:null,
    isOn: l => synFilter.status === statuses.find(x=>x[1]===l)[0],
    toggle: l => { synFilter.status = statuses.find(x=>x[1]===l)[0]; renderSyllabus(); }, extraOn:null });
  chipGroup(document.getElementById('synClass'), { options: opt('classes'), key:null,
    isOn: l => synFilter.className === l,
    toggle: l => { synFilter.className = (synFilter.className === l) ? '' : l; renderSyllabus(); }, extraOn:null });

  const subjWrap = document.getElementById('synSubjectWrap');
  if(lang === 'dz'){ subjWrap.style.display = 'none'; }
  else {
    subjWrap.style.display = '';
    const sel = document.getElementById('synSubject');
    if(!sel.options.length){
      sel.innerHTML = '<option value=""></option>' + BHUTAN_SUBJECTS.map(x=>`<option value="${escHtml(x)}">${escHtml(x)}</option>`).join('');
      sel.onchange = ()=>{ synFilter.subject = sel.value; renderSyllabus(); };
    }
    sel.value = synFilter.subject;
  }

  const items = syllabus.filter(it=>
    it.format === lang &&
    (synFilter.status === 'all' || (synFilter.status === 'done') === !!it.done) &&
    (!synFilter.className || it.className === synFilter.className) &&
    (lang === 'dz' || !synFilter.subject || it.subject === synFilter.subject));

  const list = document.getElementById('synList');
  list.innerHTML = '';
  if(!items.length){ list.innerHTML = `<div class="empty-state" style="padding:30px 10px">${t('noTopics')}</div>`; return; }
  items.forEach(it=>{
    const row = document.createElement('div');
    row.className = 'syn-row' + (it.done ? ' done' : '');
    const meta = [it.subject, it.className, it.strand].filter(Boolean).map(escHtml).join(' · ');
    row.innerHTML = `
      <label class="syn-check"><input type="checkbox" ${it.done?'checked':''}></label>
      <div class="syn-main"><div class="syn-topic">${escHtml(it.topic)}</div><div class="syn-meta">${meta}</div></div>
      <button type="button" class="chip syn-use">${t('useTopic')}</button>
      <button type="button" class="mini-btn syn-del" title="${t('del')}"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS.trash}</svg></button>`;
    row.querySelector('input').onchange = e=>{ it.done = e.target.checked; if(it.done) it.doneDate = isoLocal(new Date()); kvSet('lp_syllabus', syllabus); renderSyllabus(); };
    row.querySelector('.syn-use').onclick = ()=>{
      const n = blankPlan(); n.format = lang; applyDefaults(n); fillFromSyllabus(it, n);
      n.lessonNumber = nextLessonNumber();
      plan = n; editingExistingId = null; applyI18n(); switchTab('new');
    };
    row.querySelector('.syn-del').onclick = ()=>{ syllabus = syllabus.filter(z=>z.id !== it.id); kvSet('lp_syllabus', syllabus); renderSyllabus(); };
    list.appendChild(row);
  });
}
function addSyllabusItems(rows){
  let added = 0;
  rows.forEach(r=>{
    if(!r.topic || !r.topic.trim()) return;
    const it = { id:newId('syl'), format:lang,
      subject: lang === 'dz' ? DZONGKHA_SUBJECT_LABEL : (r.subject || synFilter.subject || ''),
      className: r.className || synFilter.className || '', topic: r.topic.trim(), strand: r.strand || '',
      competency: r.competency || '', objectives: r.objectives || [], done: !!r.done };
    if(syllabus.some(z=>z.format===it.format && z.subject===it.subject && z.className===it.className && z.topic===it.topic)) return;
    syllabus.push(it); added++;
  });
  kvSet('lp_syllabus', syllabus);
  renderSyllabus();
  return added;
}
function rowsToSyllabus(rows){
  if(!rows.length) return [];
  const head = rows[0].map(c=>String(c||'').trim().toLowerCase());
  const find = re => head.findIndex(h=>re.test(h));
  const idx = { subject:find(/subject|ཆོས་ཚན/), className:find(/class|grade|སློབ་རིམ/), topic:find(/topic|unit|lesson|chapter|title|དོན་ཚན|བརྗོད་དོན/),
    strand:find(/strand|ཡན་ལག/), competency:find(/competenc|ལྕོགས་གྲུབ/), objectives:find(/objective|ལས་དོན/), done:find(/taught|done|status/) };
  const hasHeader = idx.topic >= 0;
  const body = hasHeader ? rows.slice(1) : rows;
  return body.map(r=>{
    const cell = i => i >= 0 ? String(r[i]==null ? '' : r[i]).trim() : '';
    if(!hasHeader){
      const parts = r.map(x=>String(x==null?'':x).trim()).filter(Boolean);
      return { topic: parts.join(' – ') };
    }
    const d = cell(idx.done).toLowerCase();
    return { subject:cell(idx.subject), className:cell(idx.className).replace(/^(class|grade)\s*/i,''), topic:cell(idx.topic), strand:cell(idx.strand),
      competency:cell(idx.competency), objectives:cell(idx.objectives).split(/\s*[|\n]\s*/).filter(Boolean),
      done: /^(y|yes|true|1|taught|done)/.test(d) };
  });
}
function parseCSV(text){
  const rows = []; let row = [], cur = '', q = false;
  for(let i=0;i<text.length;i++){
    const c = text[i];
    if(q){ if(c === '"'){ if(text[i+1] === '"'){ cur += '"'; i++; } else q = false; } else cur += c; }
    else if(c === '"') q = true;
    else if(c === ',' || c === '\t'){ row.push(cur); cur = ''; }
    else if(c === '\n' || c === '\r'){ if(c === '\r' && text[i+1] === '\n') i++; row.push(cur); rows.push(row); row = []; cur = ''; }
    else cur += c;
  }
  if(cur !== '' || row.length){ row.push(cur); rows.push(row); }
  return rows.filter(r=>r.some(x=>String(x).trim()));
}
async function importSyllabusFile(file){
  const ext = file.name.toLowerCase().split('.').pop();
  let rows = [];
  if(ext === 'xlsx' || ext === 'xls'){
    await loadScriptOnce(SHEETJS_URL);
    const wb = window.XLSX.read(await file.arrayBuffer(), {type:'array'});
    rows = window.XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {header:1, defval:''});
  } else if(ext === 'docx'){
    const blocks = htmlToBlocks(await docxToHtml(file));
    blocks.forEach(b=>{ if(b.type === 'row') rows.push(b.cells.map(c=>c.text)); else if(b.text) rows.push([b.text.replace(/^[-•]\s+/,'')]); });
  } else {
    const txt = await readText(file);
    rows = (ext === 'csv') ? parseCSV(txt) : txt.split(/\r?\n/).map(l=>l.trim()).filter(Boolean).map(l=>[l.replace(/^[-•*\d.)\s]+/,'')]);
  }
  const n = addSyllabusItems(rowsToSyllabus(rows));
  toast(n + ' ' + t('topicsAdded'));
}
function exportSyllabusCsv(){
  const esc = v => '"' + String(v==null?'':v).replace(/"/g,'""') + '"';
  const lines = [['Subject','Class','Topic','Strand','Competency','Objectives','Taught'].map(esc).join(',')];
  syllabus.filter(it=>it.format === lang).forEach(it=>lines.push([it.subject, it.className, it.topic, it.strand, it.competency, (it.objectives||[]).join(' | '), it.done ? 'yes' : ''].map(esc).join(',')));
  downloadText(lines.join('\r\n'), 'syllabus.csv', 'text/csv');
}

/* =====================================================================
   7. WEEK PLANNER
   ===================================================================== */
const WEEK_DAYS = { en:['Mon','Tue','Wed','Thu','Fri'], dz:['ཟླ་བ།','མིག་དམར།','ལྷག་པ།','ཕུར་བུ།','པ་སངས།'] };
const WEEK_PERIODS = 8;
let week = { start:'', cells:{}, created:[] };
function mondayOf(d){ const x = new Date(d); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x; }
function weekInit(){ if(!week.start) week.start = isoLocal(mondayOf(new Date())); }
function renderWeek(){
  const host = document.getElementById('weekGrid');
  if(!host) return;
  weekInit();
  const input = document.getElementById('weekStart');
  input.value = week.start;
  input.onchange = ()=>{
    const d = new Date(input.value + 'T00:00:00');
    if(!isNaN(d)) week.start = isoLocal(mondayOf(d));
    input.value = week.start; renderWeek();
  };
  document.getElementById('weekSummary').textContent =
    [plan.subject, plan.className, plan.duration].filter(Boolean).join(' · ') || '—';
  host.innerHTML = '';
  WEEK_DAYS[lang].forEach((dayName, di)=>{
    const row = document.createElement('div'); row.className = 'week-row';
    const d = new Date(week.start + 'T00:00:00'); d.setDate(d.getDate() + di);
    const lab = document.createElement('div'); lab.className = 'week-day';
    lab.textContent = dayName + ' ' + (lang === 'dz' ? toTibetanNumeral(d.getDate()) : d.getDate());
    row.appendChild(lab);
    const chips = document.createElement('div'); chips.className = 'chips chips-tight';
    for(let n = 1; n <= WEEK_PERIODS; n++){
      const key = di + '-' + n;
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'chip' + (week.cells[key] ? ' on' : '');
      b.textContent = lang === 'dz' ? toTibetanNumeral(n) : String(n);
      b.onclick = ()=>{ week.cells[key] = !week.cells[key]; renderWeek(); };
      chips.appendChild(b);
    }
    row.appendChild(chips);
    host.appendChild(row);
  });
  const res = document.getElementById('weekResult');
  res.innerHTML = '';
  const made = week.created.map(id=>savedPlans.find(p=>p.id === id)).filter(Boolean);
  if(made.length){
    const head = document.createElement('div');
    head.className = 'chip-sub'; head.textContent = made.length + ' ' + t('weekDone');
    res.appendChild(head);
    made.forEach(p=>{
      const r = document.createElement('div'); r.className = 'syn-row';
      r.innerHTML = `<div class="syn-main"><div class="syn-topic">№ ${escHtml(p.lessonNumber)} · ${escHtml(p.title || t('docUntitled'))}</div><div class="syn-meta">${escHtml(formatDateDisplay(p.date, p.format==='dz'?'dz':'en'))}${p.period ? ' · ' + escHtml(p.period) : ''}</div></div>`;
      const b = document.createElement('button'); b.type = 'button'; b.className = 'chip'; b.textContent = t('openPlan');
      b.onclick = ()=>loadPlanIntoForm(p);
      r.appendChild(b); res.appendChild(r);
    });
    const ex = document.createElement('button');
    ex.type = 'button'; ex.className = 'btn btn-ghost'; ex.style.marginTop = '10px'; ex.textContent = t('exportAllWord');
    ex.onclick = ()=>exportWordMany(made, 'week-' + week.start);
    res.appendChild(ex);
  }
}
async function weekGenerate(){
  const cells = [];
  WEEK_DAYS.en.forEach((_, di)=>{ for(let n = 1; n <= WEEK_PERIODS; n++) if(week.cells[di + '-' + n]) cells.push({di, n}); });
  if(!cells.length){ toast(t('weekNone')); return; }
  const useSyl = document.getElementById('weekSyl').checked;
  const topics = useSyl ? syllabus.filter(it=>synMatches(it, plan)) : [];
  let num = Math.max(maxLessonNumber(), parseInt(plan.lessonNumber,10) || 0) + 1;
  const made = [];
  cells.forEach((c, i)=>{
    const n = cloneForNext(plan);
    const d = new Date(week.start + 'T00:00:00'); d.setDate(d.getDate() + c.di);
    n.date = isoLocal(d); n.period = OPTIONS.en.periods[c.n - 1] || ''; n.lessonNumber = String(num++);
    if(topics[i]) fillFromSyllabus(topics[i], n);
    made.push(n);
  });
  savedPlans = made.slice().reverse().concat(savedPlans);
  await persistSaved();
  week.created = made.map(p=>p.id); week.cells = {};
  renderWeek(); renderSaved();
  toast(made.length + ' ' + t('weekDone'));
}

/* =====================================================================
   8. IMPORT  (Word .docx, our own .doc exports, .html, .txt, .json backups)
   ===================================================================== */
const MAMMOTH_URL = 'https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js';
const SHEETJS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
const _loaded = {};
function loadScriptOnce(url){
  return new Promise((res, rej)=>{
    if(_loaded[url]) return res();
    const sc = document.createElement('script');
    sc.src = url; sc.onload = ()=>{ _loaded[url] = 1; res(); };
    sc.onerror = ()=>rej(new Error('load'));
    document.head.appendChild(sc);
  });
}
async function docxToHtml(file){
  try{ await loadScriptOnce(MAMMOTH_URL); }catch(e){ toast(t('needNet')); throw e; }
  const r = await window.mammoth.convertToHtml({arrayBuffer: await file.arrayBuffer()});
  return r.value;
}
function readText(file){
  return new Promise((res, rej)=>{ const fr = new FileReader(); fr.onload = ()=>res(fr.result); fr.onerror = rej; fr.readAsText(file); });
}

function cellText(el){
  const c = el.cloneNode(true);
  c.querySelectorAll('br').forEach(b=>b.replaceWith('\n'));
  c.querySelectorAll('li').forEach(li=>li.prepend('\n- '));
  c.querySelectorAll('p,div,h1,h2,h3,h4').forEach(p=>p.append('\n'));
  return c.textContent.replace(/[ \t\u00a0]+/g,' ').replace(/\n\s*\n+/g,'\n').trim();
}
function htmlToBlocks(html){
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const blocks = [];
  const BLOCKY = 'table,ul,ol,p,h1,h2,h3,h4,h5,h6,div';
  (function walk(node){
    Array.from(node.children).forEach(el=>{
      const tag = el.tagName.toLowerCase();
      if(tag === 'table'){
        el.querySelectorAll('tr').forEach(tr=>{
          const cells = Array.from(tr.children).filter(c=>/^t[dh]$/i.test(c.tagName)).map(c=>({text: cellText(c)}));
          if(cells.length) blocks.push({type:'row', cells});
        });
      } else if(tag === 'ul' || tag === 'ol'){
        Array.from(el.children).filter(c=>c.tagName.toLowerCase()==='li').forEach(li=>{
          const tx = li.textContent.replace(/\s+/g,' ').trim(); if(tx) blocks.push({type:'li', text:tx});
        });
      } else if(/^(p|h[1-6]|div)$/.test(tag) && !el.querySelector(BLOCKY)){
        const tx = el.textContent.replace(/[ \t\u00a0]+/g,' ').trim();
        if(tx) blocks.push({type: tag[0]==='h' ? 'h' : 'p', text: tx});
      } else if(tag === 'style' || tag === 'script' || tag === 'head'){ /* skip */ }
      else walk(el);
    });
  })(doc.body || doc.documentElement);
  return blocks;
}
function textToBlocks(text){
  return text.split(/\r?\n/).map(l=>l.trim()).filter(Boolean).map(l=>/^[-•*]\s+/.test(l) ? {type:'li', text:l.replace(/^[-•*]\s+/,'')} : {type:'p', text:l});
}

const FIELD_RES = [
  ['lessonNumber', /^(lesson plan (no|number)|lesson (no|number)|plan (no|number)|སློབ་ཚན་ཨང|སློབ་སྟོན་འཆར་གཞི་ཨང)/i],
  ['title', /^(lesson title|title|སློབ་སྟོན་དོན་ཚན|སློབ་སྟོན་གྱི་དོན་ཚན)/i],
  ['topic', /^(topic|unit|chapter|བརྗོད་དོན|དོན་ཚན)/i],
  ['subject', /^(subject|ཆོས་ཚན)/i],
  ['className', /^(class|grade|standard|སློབ་རིམ)/i],
  ['duration', /^(duration|time allotted|དུས་ཡུན)/i],
  ['date', /^(date|སྤྱི་ཚེས)/i],
  ['strand', /^(strand|domain|ཡན་ལག)/i],
  ['period', /^(period|ཐུན་ཚན)/i],
  ['pedagogy', /^(pedagogy|སློབ་སྟོན་ཐབས་ལམ)/i],
  ['teachingStrategies', /^(teaching strategies|strategies|སློབ་སྟོན་ཐབས་རིག)/i],
  ['venue', /^(venue|ས་གོ)/i],
  ['teacher', /^(teacher|སློབ་དཔོན)/i],
  ['competency', /^((learning |key )?competenc|ལྕོགས་གྲུབ)/i],
  ['gnh', /^(gnh|gross national|རྒྱལ་ཡོངས་དགའ་སྐྱིད)/i],
  ['objectives', /^((learning |lesson )?objective|(learning )?outcome|ལས་དོན)/i],
  ['prior', /^(prior knowledge|previous knowledge|སློབ་སྟོན་ཧེ་མའི་ཤེས་ཚད)/i],
  ['resources', /^((teaching.{0,6}learning )?(resource|material)|tlm|མཁོ་ཆས|སློབ་སྟོན་མཁོ་ཆས)/i],
  ['reflection', /^(reflection|སློབ་སྟོན་ཞིབ་འཇུག)/i],
  ['stages', /^(lesson (stages|description|development|procedure)|སློབ་སྟོན་གྱི་རིམ་པ)/i]
];
const SECTION_KEYS = new Set(['competency','gnh','objectives','prior','resources','reflection','stages']);
const STAGE_RE = /^(introduction|presentation|learning experience|activit|practice|consolidation|assessment|closure|conclusion|warm.?up|plenary)/i;
function labelKey(label, loose){
  const l = label.trim();
  for(const [k, re] of FIELD_RES) if(re.test(l)) return k;
  if(loose) for(const [k, re] of FIELD_RES){
    if(SECTION_KEYS.has(k) && new RegExp(re.source.replace(/^\^/, ''), 'i').test(l)) return k;
  }
  return null;
}
function fmtISO(y, mo, d){
  y = +y; mo = +mo; d = +d;
  if(mo < 1 || mo > 12 || d < 1 || d > 31) return '';
  return y + '-' + String(mo).padStart(2,'0') + '-' + String(d).padStart(2,'0');
}
function parseDateLoose(str){
  if(!str) return '';
  str = str.replace(/[༠-༩]/g, d=>String('༠༡༢༣༤༥༦༧༨༩'.indexOf(d)));
  let m = /(\d{4})[-\/.](\d{1,2})[-\/.](\d{1,2})/.exec(str); if(m) return fmtISO(m[1], m[2], m[3]);
  m = /(\d{1,2})[-\/.](\d{1,2})[-\/.](\d{4})/.exec(str); if(m) return fmtISO(m[3], m[2], m[1]);
  m = /(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]{3,9})\.?,?\s+(\d{4})/.exec(str);
  if(m){ const mi = MONTHS_EN.findIndex(x=>x.toLowerCase().startsWith(m[2].toLowerCase().slice(0,3))); if(mi >= 0) return fmtISO(m[3], mi+1, m[1]); }
  return '';
}

/* Best-effort reading of an ordinary lesson-plan document. */
function planFromBlocks(blocks, fname){
  const all = blocks.map(b=>b.type === 'row' ? b.cells.map(c=>c.text).join(' ') : b.text).join(' ');
  const tib = (all.match(/[\u0F00-\u0FFF]/g) || []).length;
  const fmt = tib > all.length * 0.2 ? 'dz' : 'en';
  const p = blankPlan();
  p.format = fmt; p.date = ''; p.phasesEn = []; p.phasesDz = []; p.objectives = [];
  const data = {}, sec = {};
  let cur = null, pending = null, stageCur = null, dzMode = false, firstHeading = '';

  const setF = (k, v)=>{
    v = (v||'').trim(); if(!v || data[k]) return;
    if(k === 'className') v = v.replace(/^(class|grade)\s*/i, '').trim();
    if(k === 'date') v = parseDateLoose(v);
    if(v) data[k] = v;
  };
  const addSec = (k, line)=>{ (sec[k] = sec[k] || []).push(line); };

  const handleLine = (raw, isHeading, isLi)=>{
    const line = raw.trim(); if(!line) return;
    const liLine = isLi || /^[-•]\s+/.test(line);
    const text = line.replace(/^[-•]\s+/, '');
    const mm = /^([^:：]{2,60}?)\s*[:：]\s*(.*)$/.exec(text);
    if(mm){
      const k = labelKey(mm[1]);
      if(k){
        if(SECTION_KEYS.has(k)){ cur = k; stageCur = null; if(mm[2].trim()) addSec(k, mm[2].trim()); }
        else if(mm[2].trim()) setF(k, mm[2]); else pending = k;
        return;
      }
    }
    if(text.length < 45 && text.split(/\s+/).length <= 6 && !/[.!?]$/.test(text)){
      const k = labelKey(text.replace(/[:：།\s]+$/, ''), isHeading);
      if(k && SECTION_KEYS.has(k)){ cur = k; stageCur = null; return; }
    }
    if(pending){ setF(pending, text); pending = null; return; }
    if(!liLine && text.length < 80 && STAGE_RE.test(text) && (isHeading || /\d+\s*(mins?|minutes?)/i.test(text) || cur === 'stages' || cur === 'stage' || !cur)){
      const tm = /\(?\s*(\d+\s*(?:mins?|minutes?))\s*\)?/i.exec(text);
      stageCur = { name: text.replace(/\(?\s*\d+\s*(?:mins?|minutes?)\s*\)?/i, '').replace(/[:\-–\s]+$/, '').trim(), time: tm ? tm[1] : '', content: '' };
      p.phasesEn.push(stageCur); cur = 'stage'; return;
    }
    if(cur === 'stage' && stageCur){ stageCur.content += (stageCur.content ? '\n' : '') + (liLine ? '- ' : '') + text; return; }
    if(cur){ addSec(cur, (liLine ? '- ' : '') + text); return; }
    if(isHeading && !firstHeading) firstHeading = text;
  };

  const handleRow = (cells)=>{
    const c = cells.map(x=>x.trim());
    if(c.length >= 5 && /རིག་རྩལ|skill/i.test(c[1]) && /སློབ་དཔོན|teacher/i.test(c[2])){ dzMode = true; return; }
    if(dzMode && c.length >= 5){
      const row = newDzRow();
      Object.assign(row, { name:c[0], skillFocus:c[1], teacherActivity:c[2], studentActivity:c[3], time:c[4], assessment:c[5] || '' });
      p.phasesDz.push(row); return;
    }
    if(c.length === 2){
      const k0 = labelKey(c[0].replace(/[:：]\s*$/, ''));
      if(k0 && !SECTION_KEYS.has(k0) && !/[:：]\s*\S/.test(c[0])){ setF(k0, c[1]); return; }
      if(!/[:：]/.test(c[1]) && /(\d|[༠-༩])/.test(c[1]) && /(min|མིནཊ|སྐར)/i.test(c[1]) && c[1].length < 25){
        const lines = c[0].split('\n').map(x=>x.trim()).filter(Boolean);
        if(lines.length){ p.phasesEn.push({ name: lines[0], time: c[1], content: lines.slice(1).join('\n') }); return; }
      }
    }
    c.forEach(cellTxt=>cellTxt.split('\n').forEach(l=>handleLine(l, false, false)));
  };

  blocks.forEach(b=>{
    if(b.type === 'row') handleRow(b.cells.map(x=>x.text));
    else b.text.split('\n').forEach(l=>handleLine(l, b.type === 'h', b.type === 'li'));
  });

  const strip = l => l.replace(/^[-•]\s+/, '').replace(/^\d+[.)]\s+/, '');
  const tokens = lines => (lines||[]).flatMap(l=>strip(l).split(/[,;،]\s*/)).map(x=>x.trim()).filter(Boolean);
  ['title','topic','subject','className','duration','date','strand','period','pedagogy','teachingStrategies','venue','teacher','lessonNumber']
    .forEach(k=>{ if(data[k]) p[k] = data[k]; });
  p.competency = (sec.competency||[]).map(strip).join('\n');
  p.gnhSel = tokens(sec.gnh);
  if(fmt === 'dz') p.resDzSel = tokens(sec.resources); else p.resSel = tokens(sec.resources);
  p.objectives = (sec.objectives||[]).map(strip).filter(Boolean);
  p.prior = (sec.prior||[]).map(strip).join('\n');
  p.reflection = (sec.reflection||[]).map(strip).join('\n');
  if(!p.phasesEn.length && sec.stages) p.phasesEn.push({ name:'Lesson', time:'', content:(sec.stages||[]).join('\n') });
  if(!p.phasesEn.length) p.phasesEn = blankPlan().phasesEn;
  if(!p.phasesDz.length) p.phasesDz = [newDzRow()];
  if(!p.objectives.length) p.objectives = [''];
  p.title = p.title || firstHeading || p.topic || (fname || '').replace(/\.[^.]+$/, '');
  p.subject = (fmt === 'dz') ? DZONGKHA_SUBJECT_LABEL : (p.subject || '');
  p.gnh = ''; p.resources = ''; p.resourcesDz = '';
  return normPlan(p);
}

async function parseImportFile(file){
  const ext = file.name.toLowerCase().split('.').pop();
  if(ext === 'json') return { json: JSON.parse(await readText(file)) };
  if(ext === 'docx') return { plans: [planFromBlocks(htmlToBlocks(await docxToHtml(file)), file.name)] };
  if(ext === 'doc' || ext === 'html' || ext === 'htm'){
    const txt = await readText(file);
    const emb = Array.from(txt.matchAll(/LPS-DATA:([A-Za-z0-9+\/=]+)/g));
    if(emb.length){ const plans = []; emb.forEach(m=>decodePlans(m[1]).forEach(x=>plans.push(x))); return { plans }; }
    if(!/<html|<body|<table|<p[ >]/i.test(txt)) throw new Error('binary');
    return { plans: [planFromBlocks(htmlToBlocks(txt), file.name)] };
  }
  return { plans: [planFromBlocks(textToBlocks(await readText(file)), file.name)] };
}
function loadImported(p){
  p = normPlan(p);
  if(!p.id) p.id = newId();
  if(!p.lessonNumber) p.lessonNumber = nextLessonNumber();
  if(!p.date) p.date = isoLocal(new Date());
  plan = p; editingExistingId = null;
  lang = p.format === 'dz' ? 'dz' : 'en';
  syncLangToggle(); applyI18n(); switchTab('new');
  toast(t('importedReview'));
}
async function importFiles(files){
  const found = []; let restoredBackup = false;
  for(const f of Array.from(files)){
    try{
      const r = await parseImportFile(f);
      if(r.json){
        const o = r.json;
        if(o && o.app === 'lps'){ restoreBackup(o); restoredBackup = true; }
        else if(Array.isArray(o)) o.forEach(x=>found.push(x));
        else if(o && (o.phasesEn || o.phasesDz || o.title !== undefined)) found.push(o);
      } else if(r.plans) r.plans.forEach(x=>found.push(x));
    }catch(e){
      console.error(e);
      toast(e.message === 'binary' ? t('importBinary') : t('importFail') + ': ' + f.name);
    }
  }
  if(restoredBackup && !found.length) return;
  if(found.length === 1) loadImported(found[0]);
  else if(found.length > 1){
    found.forEach(x=>{ const p = normPlan(x); if(!p.id) p.id = newId(); const i = savedPlans.findIndex(z=>z.id===p.id); if(i>=0) savedPlans[i] = p; else savedPlans.unshift(p); });
    await persistSaved(); renderSaved(); switchTab('saved');
    toast(found.length + ' ' + t('importedMany'));
  }
}

/* ---------------- backup / restore everything ---------------- */
function backupAll(){
  const data = { app:'lps', version:2, exportedAt:Date.now(), plans:savedPlans, custom:customLib, templates, syllabus, lib:planLib, defaults };
  downloadBlob(new Blob([JSON.stringify(data)], {type:'application/json'}), 'lesson-plan-studio-backup.json');
}
function restoreBackup(o){
  const mergeById = (mine, theirs)=>{ const out = mine.slice(); (theirs||[]).forEach(x=>{ const i = out.findIndex(z=>z.id === x.id); if(i >= 0) out[i] = x; else out.push(x); }); return out; };
  savedPlans = mergeById(savedPlans, (o.plans||[]).map(normPlan));
  templates = mergeById(templates, o.templates);
  syllabus = mergeById(syllabus, o.syllabus);
  Object.keys(o.custom||{}).forEach(k=>{ customLib[k] = Array.from(new Set((customLib[k]||[]).concat(o.custom[k]))); });
  Object.keys(o.lib||{}).forEach(k=>{
    const mine = planLib[k] = planLib[k] || {competencies:[], objectives:[]};
    ['competencies','objectives'].forEach(kind=>{ mine[kind] = Array.from(new Set((mine[kind]||[]).concat(o.lib[k][kind]||[]))); });
  });
  defaults = Object.assign({}, o.defaults||{}, defaults);
  persistSaved(); persistCustom();
  kvSet('lp_templates', templates); kvSet('lp_syllabus', syllabus); kvSet('lp_lib', planLib); kvSet('lp_defaults', defaults);
  renderSaved(); renderSyllabus(); renderTemplates();
  toast(t('restored'));
}

/* ---------------- wire up the new buttons ---------------- */
function wireNewFeatures(){
  const $ = id => document.getElementById(id);
  $('btnNext').onclick = nextLesson;
  const fi = $('fileImport');
  const openImport = ()=>fi.click();
  $('btnImport').onclick = openImport;
  $('btnImportSaved').onclick = openImport;
  fi.onchange = async ()=>{ const files = Array.from(fi.files); fi.value = ''; if(files.length) await importFiles(files); };

  const pane = $('formPane');
  ['dragenter','dragover'].forEach(ev=>pane.addEventListener(ev, e=>{ e.preventDefault(); pane.classList.add('drop'); }));
  ['dragleave','drop'].forEach(ev=>pane.addEventListener(ev, e=>{ e.preventDefault(); pane.classList.remove('drop'); }));
  pane.addEventListener('drop', e=>{ if(e.dataTransfer && e.dataTransfer.files.length) importFiles(e.dataTransfer.files); });

  $('btnSelAll').onclick = ()=>{
    const q = ($('searchSaved').value || '').toLowerCase().trim();
    const vis = savedPlans.filter(p=>!q || [p.title,p.subject,p.className,p.topic].join(' ').toLowerCase().includes(q));
    const allOn = vis.length && vis.every(p=>selectedIds.has(p.id));
    vis.forEach(p=>{ if(allOn) selectedIds.delete(p.id); else selectedIds.add(p.id); });
    renderSaved();
  };
  $('btnExportSel').onclick = ()=>{
    const pick = savedPlans.filter(p=>selectedIds.has(p.id));
    if(!pick.length){ toast(t('selectAll')); return; }
    exportWordMany(pick, 'lesson-plans');
  };
  $('btnBackup').onclick = backupAll;

  $('synAdd').onclick = ()=>{
    const topic = $('synTopic').value, strand = $('synStrand').value;
    if(!topic.trim()) return;
    addSyllabusItems([{ topic, strand }]);
    $('synTopic').value = ''; $('synStrand').value = '';
  };
  $('synTopic').onkeydown = e=>{ if(e.key === 'Enter'){ e.preventDefault(); $('synAdd').click(); } };
  const sf = $('synFile');
  $('synImport').onclick = ()=>sf.click();
  sf.onchange = async ()=>{ const f = sf.files[0]; sf.value = ''; if(f){ try{ await importSyllabusFile(f); }catch(e){ console.error(e); toast(t('importFail')); } } };
  $('synCsv').onclick = exportSyllabusCsv;
  $('btnWeekGo').onclick = weekGenerate;

  window.addEventListener('pagehide', flushDraft);
  document.addEventListener('visibilitychange', ()=>{ if(document.visibilityState === 'hidden') flushDraft(); });
}

/* ---------------- tabs / theme / lang wiring ---------------- */
function switchTab(name){
  document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active', b.getAttribute('data-tab')===name));
  ['new','saved','syllabus','week'].forEach(v=>{
    const el = document.getElementById('view-'+v);
    if(el) el.style.display = (v===name) ? '' : 'none';
  });
  if(name==='new') renderLib();
  if(name==='saved') renderSaved();
  if(name==='syllabus') renderSyllabus();
  if(name==='week') renderWeek();
}
document.querySelectorAll('.tab').forEach(b=> b.onclick = ()=>switchTab(b.getAttribute('data-tab')) );

function setTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('themeIcon');
  icon.innerHTML = theme==='dark' ? ICONS.moon : ICONS.sun;
}
let theme = 'light';
setTheme(theme);
document.getElementById('themeToggle').onclick = ()=>{
  theme = theme==='dark' ? 'light' : 'dark';
  setTheme(theme);
};

document.getElementById('langToggle').querySelectorAll('button').forEach(btn=>{
  btn.onclick = ()=>{
    lang = btn.getAttribute('data-val');
    plan.format = lang;
    pruneForLang();
    fillFromDefaults();
    document.getElementById('langToggle').querySelectorAll('button').forEach(b=>b.classList.toggle('active', b===btn));
    applyI18n();
  };
});

document.getElementById('btnSave').onclick = savePlan;
document.getElementById('btnNew').onclick = ()=>{ if(confirm(lang==='dz'?'འཆར་གཞི་གསར་བསྐྲུན་འབད་ནི་ཨིན་ན?':'Start a new blank plan? Unsaved changes will be lost.')) newPlan(); };
document.getElementById('btnExport').onclick = ()=> exportWord(plan);
document.getElementById('btnPrint').onclick = ()=> printPlan(plan);
document.getElementById('searchSaved').oninput = renderSaved;
document.querySelectorAll('.add-link').forEach(btn=>{
  btn.onclick = ()=>{
    const kind = btn.getAttribute('data-add');
    if(kind==='objectives'){ plan.objectives.push(''); renderObjectives(); }
    else if(kind==='phase'){ plan.phasesEn.push({name:'', time:'', content:''}); renderPhases(); }
    else if(kind==='dzrow'){ plan.phasesDz.push(newDzRow()); renderDzRows(); }
    renderPreview();
  };
});

/* ---------------- init ---------------- */
async function init(){
  document.getElementById('docPreview').innerHTML = `<div class="doc-body"><p class="doc-empty">${t('emptyPreviewHint')}</p></div>`;
  await loadSaved();
  savedPlans = savedPlans.map(normPlan);
  await loadCustom();
  defaults = await kvGet('lp_defaults', {});
  templates = await kvGet('lp_templates', []);
  planLib = await kvGet('lp_lib', {});
  syllabus = await kvGet('lp_syllabus', []);
  if(defaults._lang === 'en' || defaults._lang === 'dz') lang = defaults._lang;

  const d = await kvGet('lp_draft', null);
  let restored = false;
  if(d && d.plan){
    const cand = normPlan(d.plan);
    if(hasContent(cand) && !sameAsSaved(cand)){ plan = cand; lang = d.lang === 'en' ? 'en' : 'dz'; restored = true; }
  }
  if(!restored){
    plan = blankPlan(); plan.format = lang;
    applyDefaults(plan);
    plan.lessonNumber = nextLessonNumber();
  }
  syncLangToggle();
  wireNewFeatures();
  weekInit();
  applyI18n();
  draftEnabled = true;
  if(restored) toast(t('draftRestored'));
}
init();

})();
