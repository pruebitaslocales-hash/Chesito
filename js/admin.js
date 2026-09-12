/* ================================================================
   ADMIN PANEL — Solo carga con ?edit en URL
   ================================================================ */
(function(){
  if(!location.search.includes('edit')) return;

  let currentModule = 'chef';
  let admData = null;

  function init(){
    const link = document.createElement('link');
    link.rel='stylesheet'; link.href='css/admin.css?v='+Date.now();
    document.head.appendChild(link);

    const fab = document.createElement('button');
    fab.className='adm-fab'; fab.id='admFab';
    fab.innerHTML='✏️'; fab.title='Abrir Panel Admin';
    fab.onclick=openDrawer;
    document.body.appendChild(fab);

    const overlay = document.createElement('div');
    overlay.className='adm-overlay'; overlay.id='admOverlay';
    overlay.onclick=e=>{ if(e.target===overlay) closeDrawer(); };
    document.body.appendChild(overlay);
  }

  function openDrawer(){
    if(!window.data) return;
    admData = JSON.parse(JSON.stringify(window.data));
    const o = document.getElementById('admOverlay');
    o.innerHTML=`
      <div class="adm-drawer">
        <div class="adm-header">
          <h3>✏️ Panel Admin — Editar Libro</h3>
          <button class="adm-close" onclick="document.getElementById('admOverlay').classList.remove('open')">&times;</button>
        </div>
        <div class="adm-modules" id="admModules"></div>
        <div class="adm-body" id="admBody"></div>
        <div class="adm-footer">
          <button class="adm-btn secondary" onclick="document.getElementById('admOverlay').classList.remove('open')">Cancelar</button>
          <button class="adm-btn primary" id="admSaveBtn" onclick="admSave()">Guardar y Quemar</button>
        </div>
      </div>`;
    renderModules();
    renderModuleForm(currentModule);
    o.classList.add('open');
  }

  function closeDrawer(){ document.getElementById('admOverlay').classList.remove('open'); }

  const MODULES = [
    {id:'chef',icon:'👨‍🍳',label:'Chef / Portada'},
    {id:'texts',icon:'📝',label:'Textos'},
    {id:'musica',icon:'🎵',label:'Música'},
    {id:'comanda',icon:'📋',label:'Comanda'},
    {id:'ingredientes',icon:'🧂',label:'Ingredientes'},
    {id:'fotos',icon:'📸',label:'Fotos'},
    {id:'galeria',icon:'🖼️',label:'Recuerdos'},
    {id:'cartas',icon:'💌',label:'Cartas'},
    {id:'certificado',icon:'📜',label:'Certificado'},
    {id:'ticket',icon:'🎫',label:'Ticket'},
    {id:'quiz',icon:'❓',label:'Quiz'}
  ];

  function renderModules(){
    const c = document.getElementById('admModules');
    c.innerHTML = MODULES.map(m=>
      `<button class="adm-mod-btn ${m.id===currentModule?'active':''}" onclick="admSelectModule('${m.id}')">
        <span class="adm-mod-icon">${m.icon}</span>
        <span class="adm-mod-label">${m.label}</span>
      </button>`
    ).join('');
  }

  window.admSelectModule = function(id){
    currentModule=id;
    renderModules();
    renderModuleForm(id);
  };

  function renderModuleForm(id){
    const b = document.getElementById('admBody');
    switch(id){
      case 'chef': b.innerHTML=formChef(); break;
      case 'texts': b.innerHTML=formTexts(); break;
      case 'musica': b.innerHTML=formMusica(); break;
      case 'comanda': b.innerHTML=formComanda(); break;
      case 'ingredientes': b.innerHTML=formIngredientes(); break;
      case 'fotos': b.innerHTML=formFotos(); break;
      case 'galeria': b.innerHTML=formGaleria(); break;
      case 'cartas': b.innerHTML=formCartas(); break;
      case 'certificado': b.innerHTML=formCertificado(); break;
      case 'ticket': b.innerHTML=formTicket(); break;
      case 'quiz': b.innerHTML=formQuiz(); break;
    }
  }

  /* ---- FORMS ---- */
  function formChef(){
    const c=admData.chef;
    return `
      <div style="margin-bottom:12px;font-family:var(--font-mono);font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:var(--sage-green);font-weight:600">Datos del chef</div>
      ${field('chef.name','Nombre del Chef',c.name,'input','Ej: Chef Juanjo')}
      ${field('chef.title','Título',c.title,'input','Ej: Chef Ejecutivo & Maestro del Fuego')}
      ${field('chef.emoji','Emoji',c.emoji,'input','Ej: 👨‍🍳')}
      ${field('chef.photo','Foto del chef (path)',c.photo||'','input','Ej: fotos/chef.jpeg')}
      <div style="margin:12px 0 8px;font-family:var(--font-mono);font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:var(--sage-green);font-weight:600">Nota personal (recuadro en portada)</div>
      ${field('chef.noteKicker','Kicker',c.noteKicker||'','input','Texto pequeño encima del título')}
      ${field('chef.noteTitle','Título',c.noteTitle||'','input','Título de la nota')}
      ${field('chef.noteText','Texto',c.noteText||c.note||'','textarea','El cuerpo de la nota personal')}
      ${field('chef.noteFoot','Footer',c.noteFoot||'','input','Texto al pie de la nota')}
      ${field('chef.noteStamp','Sello',c.noteStamp||'','input','Texto del sello decorativo')}`;
  }

  function formTexts(){
    const t=admData.texts;
    return `
      <div style="margin-bottom:12px;font-family:var(--font-mono);font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:var(--sage-green);font-weight:600">Portada (página 1)</div>
      ${field('texts.coverTitle','Título portada',t.coverTitle,'input','Título grande de la portada')}
      ${field('texts.coverSubtitle','Subtítulo',t.coverSubtitle,'input','Subtítulo debajo del título')}
      ${field('texts.coverDedication','Dedicación',t.coverDedication,'input','Ej: Dedicado a')}
      ${field('texts.coverButton','Texto botón',t.coverButton,'input','Texto del botón de entrada')}
      <div style="margin:12px 0 8px;font-family:var(--font-mono);font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:var(--sage-green);font-weight:600">Nombres de páginas (barra inferior)</div>
      ${(t.pageNames||[]).map((n,i)=>field(`texts.pageNames.${i}`,`Página ${i+1}`,n,'input',`Nombre de la página ${i+1}`)).join('')}
      <div style="margin:12px 0 8px;font-family:var(--font-mono);font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:var(--sage-green);font-weight:600">Textos por capítulo</div>
      ${field('texts.page1Quote','Cap 1 — Quote (portada)',t.page1Quote,'textarea')}
      ${field('texts.page2Title','Cap 2 — Comanda (título)',t.page2Title)}
      ${field('texts.page2Desc','Cap 2 — Comanda (descripción)',t.page2Desc)}
      ${field('texts.page2Quote','Cap 2 — Comanda (quote)',t.page2Quote,'textarea')}
      ${field('texts.page3Title','Cap 3 — Mise en Place (título)',t.page3Title)}
      ${field('texts.page3Desc','Cap 3 — Mise en Place (descripción)',t.page3Desc)}
      ${field('texts.page3Quote','Cap 3 — Mise en Place (quote)',t.page3Quote,'textarea')}
      ${field('texts.page4Title','Cap 4 — Cartas (título)',t.page4Title)}
      ${field('texts.page4Desc','Cap 4 — Cartas (descripción)',t.page4Desc)}
      ${field('texts.page5Title','Cap 5 — Recuerdos (título)',t.page5Title)}
      ${field('texts.page5Desc','Cap 5 — Recuerdos (descripción)',t.page5Desc)}
      ${field('texts.page5Quote','Cap 5 — Recuerdos (quote)',t.page5Quote||'','textarea')}
      ${field('texts.page6Title','Cap 6 — Comanda Final (título)',t.page6Title)}
      ${field('texts.page6Desc','Cap 6 — Comanda Final (descripción)',t.page6Desc)}`;
  }

  function formMusica(){
    const m=admData.musica||{titulo:'Música del Chef',tracks:[]};
    let h=`${field('musica.titulo','Título playlist',m.titulo)}`;
    h+='<div style="margin:12px 0 8px;font-family:var(--font-mono);font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:var(--sage-green);font-weight:600">Tracks (mp3 en music/)</div>';
    h+='<div class="adm-repeater" id="admRep">';
    (m.tracks||[]).forEach((t,i)=>{
      h+=`<div class="adm-rep-item">
        <div class="adm-rep-header"><span class="adm-rep-title">🎵 ${t.titulo||t.id}</span>
          <button class="adm-rep-remove" onclick="admRemoveItem('musica.tracks',${i})">&times;</button></div>
        ${field(`musica.tracks.${i}.id`,`ID`,t.id)}
        ${field(`musica.tracks.${i}.titulo`,`Título`,t.titulo)}
        ${field(`musica.tracks.${i}.src`,`Path mp3`,t.src)}
      </div>`;
    });
    h+='</div>';
    h+=`<button class="adm-add-btn" onclick="admAddTrack()">+ Agregar track</button>`;
    return h;
  }

  function formComanda(){
    const c=admData.comanda;
    return `
      <div style="margin-bottom:12px;font-family:var(--font-mono);font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:var(--sage-green);font-weight:600">Datos de la mesa</div>
      ${field('comanda.mesa','Nombre de la mesa',c.mesa,'input','Ej: Amigos de por Vida')}
      ${field('comanda.comensales','Comensales',c.comensales,'number','Número de personas')}
      ${field('comanda.fecha','Fecha del evento',c.fecha||'','input','Ej: 11 de septiembre de 2026 (vacío = fecha de hoy)')}`;
  }

  function formIngredientes(){
    let h='<div class="adm-repeater" id="admRep">';
    admData.ingredientes.forEach((ing,i)=>{
      h+=`<div class="adm-rep-item">
        <div class="adm-rep-header"><span class="adm-rep-title">${ing.emoji} ${ing.title}</span>
          <button class="adm-rep-remove" onclick="admRemoveItem('ingredientes',${i})">&times;</button></div>
        ${field(`ingredientes.${i}.id`,`ID`,ing.id)}
        ${field(`ingredientes.${i}.emoji`,`Emoji`,ing.emoji)}
        ${field(`ingredientes.${i}.photo`,`Foto path`,ing.photo||'')}
        ${field(`ingredientes.${i}.title`,`Título`,ing.title)}
        ${field(`ingredientes.${i}.desc`,`Descripción`,ing.desc,'textarea')}
        ${field(`ingredientes.${i}.anecdota`,`Anécdota`,ing.anecdota,'textarea')}
      </div>`;
    });
    h+='</div>';
    h+=`<button class="adm-add-btn" onclick="admAddIngrediente()">+ Agregar ingrediente</button>`;
    return h;
  }

  function formFotos(){
    let h='<div class="adm-repeater" id="admRep">';
    admData.fotos.forEach((f,i)=>{
      h+=`<div class="adm-rep-item">
        <div class="adm-rep-header"><span class="adm-rep-title">📸 ${f.title}</span>
          <button class="adm-rep-remove" onclick="admRemoveItem('fotos',${i})">&times;</button></div>
        ${field(`fotos.${i}.src`,`Path foto`,f.src)}
        ${field(`fotos.${i}.title`,`Título`,f.title)}
        ${field(`fotos.${i}.story`,`Historia`,f.story,'textarea')}
      </div>`;
    });
    h+='</div>';
    h+=`<button class="adm-add-btn" onclick="admAddFoto()">+ Agregar foto</button>`;
    return h;
  }

  function formGaleria(){
    let h='<div class="adm-repeater" id="admRep">';
    (admData.galeria||[]).forEach((r,i)=>{
      h+=`<div class="adm-rep-item">
        <div class="adm-rep-header"><span class="adm-rep-title">🖼️ ${r.titulo||'Recuerdo'}</span>
          <button class="adm-rep-remove" onclick="admRemoveItem('galeria',${i})">&times;</button></div>
        ${field(`galeria.${i}.src`,`Path foto`,r.src)}
        ${field(`galeria.${i}.titulo`,`Título`,r.titulo)}
        ${field(`galeria.${i}.pie`,`Pie (año + descripción)`,r.pie||'')}
      </div>`;
    });
    h+='</div>';
    h+=`<button class="adm-add-btn" onclick="admAddRecuerdo()">+ Agregar recuerdo</button>`;
    return h;
  }

  function formCartas(){
    let h='<div class="adm-repeater" id="admRep">';
    admData.cartas.forEach((c,i)=>{
      h+=`<div class="adm-rep-item">
        <div class="adm-rep-header"><span class="adm-rep-title">${c.seal} ${c.from}</span>
          <button class="adm-rep-remove" onclick="admRemoveItem('cartas',${i})">&times;</button></div>
        ${field(`cartas.${i}.from`,`De`,c.from)}
        ${field(`cartas.${i}.seal`,`Sello emoji`,c.seal)}
        ${field(`cartas.${i}.photo`,`Foto remitente (path)`,c.photo||'')}
        ${field(`cartas.${i}.text`,`Texto`,c.text,'textarea')}
      </div>`;
    });
    h+='</div>';
    h+=`<button class="adm-add-btn" onclick="admAddCarta()">+ Agregar carta</button>`;
    return h;
  }

  function formCertificado(){
    return `${field('certificado','Texto certificado',admData.certificado,'textarea')}`;
  }

  function formTicket(){
    let h='<div class="adm-repeater" id="admRep">';
    admData.ticketItems.forEach((t,i)=>{
      h+=`<div class="adm-rep-item">
        <div class="adm-rep-header"><span class="adm-rep-title">🍽️ ${t.desc}</span>
          <button class="adm-rep-remove" onclick="admRemoveItem('ticketItems',${i})">&times;</button></div>
        ${field(`ticketItems.${i}.desc`,`Descripción`,t.desc)}
        ${field(`ticketItems.${i}.note`,`Nota`,t.note)}
      </div>`;
    });
    h+='</div>';
    h+=`<button class="adm-add-btn" onclick="admAddTicketItem()">+ Agregar item</button>`;
    return h;
  }

  function formQuiz(){
    const q=admData.quiz[0];
    return `
      ${field('quiz.0.q','Pregunta',q.q,'textarea')}
      <label style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.08em;text-transform:uppercase;color:var(--copper-ember);font-weight:600;margin-bottom:4px;display:block">Opciones</label>
      <div class="adm-repeater">
        ${q.opts.map((o,i)=>`<div class="adm-rep-item">
          <div class="adm-rep-header"><span class="adm-rep-title">Opción ${String.fromCharCode(65+i)}</span></div>
          ${field(`quiz.0.opts.${i}`,`Opción ${String.fromCharCode(65+i)}`,o)}
        </div>`).join('')}
      </div>
      ${field('quiz.0.feedback','Feedback tras responder',q.feedback||'','textarea')}`;
  }

  /* ---- HELPERS ---- */
  function field(path,label,val,type,placeholder){
    const t=type||'input';
    const id='adm_'+path.replace(/\./g,'_');
    const ph=placeholder?` placeholder="${esc(placeholder)}"`:'';
    if(t==='textarea'){
      return `<div class="adm-field"><label for="${id}">${label}</label><textarea id="${id}" data-path="${path}" oninput="admUpdate(this)"${ph}>${esc(val)}</textarea></div>`;
    }
    if(t==='number'){
      return `<div class="adm-field"><label for="${id}">${label}</label><input type="number" id="${id}" data-path="${path}" value="${esc(val)}" oninput="admUpdate(this)"${ph}></div>`;
    }
    return `<div class="adm-field"><label for="${id}">${label}</label><input id="${id}" data-path="${path}" value="${esc(val)}" oninput="admUpdate(this)"${ph}></div>`;
  }

  function esc(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;'); }

  function syncAllFields(){
    document.querySelectorAll('#admOverlay [data-path]').forEach(el=>{
      setNested(admData, el.dataset.path, el.value);
    });
  }

  window.admUpdate = function(el){
    const path=el.dataset.path;
    setNested(admData,path,el.value);
    previewCurrentModule();
  };

  function previewCurrentModule(){
    window.data = JSON.parse(JSON.stringify(admData));
    const pg = state.page;
    renderBook();
    state.page = pg;
    renderPage();
  }

  function setNested(obj,path,val){
    const parts=path.split('.');
    let cur=obj;
    for(let i=0;i<parts.length-1;i++){
      const k=isNaN(parts[i])?parts[i]:parseInt(parts[i]);
      cur=cur[k];
    }
    const last=isNaN(parts[parts.length-1])?parts[parts.length-1]:parseInt(parts[parts.length-1]);
    cur[last]=val;
  }

  /* ---- ADD/REMOVE REPEATER ITEMS ---- */
  window.admRemoveItem = function(arr,idx){
    syncAllFields();
    const parts=arr.split('.');
    let target=admData;
    for(let i=0;i<parts.length;i++) target=target[parts[i]];
    target.splice(idx,1);
    renderModuleForm(currentModule);
    previewCurrentModule();
  };

  window.admAddIngrediente = function(){
    syncAllFields();
    admData.ingredientes.push({id:'nuevo',emoji:'🆕',photo:'',title:'Nuevo Ingrediente',desc:'Descripción',anecdota:'Anécdota'});
    renderModuleForm('ingredientes');
    previewCurrentModule();
  };
  window.admAddFoto = function(){
    syncAllFields();
    admData.fotos.push({src:'fotos/receta-1.jpg',title:'Nueva Foto',story:'Historia'});
    renderModuleForm('fotos');
    previewCurrentModule();
  };
  window.admAddRecuerdo = function(){
    syncAllFields();
    if(!admData.galeria) admData.galeria=[];
    admData.galeria.push({src:'fotos/recuerdo-nuevo.jpg',titulo:'Nuevo Recuerdo',pie:'Año — Descripción'});
    renderModuleForm('galeria');
    previewCurrentModule();
  };
  window.admAddCarta = function(){
    syncAllFields();
    admData.cartas.push({from:'Nombre',seal:'💌',photo:'',text:'Texto de la carta'});
    renderModuleForm('cartas');
    previewCurrentModule();
  };
  window.admAddTicketItem = function(){
    syncAllFields();
    admData.ticketItems.push({desc:'Nuevo Item',note:'Nota'});
    renderModuleForm('ticket');
    previewCurrentModule();
  };
  window.admAddTrack = function(){
    syncAllFields();
    if(!admData.musica) admData.musica={titulo:'Música del Chef',tracks:[]};
    if(!admData.musica.tracks) admData.musica.tracks=[];
    admData.musica.tracks.push({id:'track'+(admData.musica.tracks.length+1),titulo:'Nuevo Tema',src:'music/nuevo.mp3'});
    renderModuleForm('musica');
    previewCurrentModule();
  };

  /* ---- SAVE ---- */
  window.admSave = async function(){
    syncAllFields();
    const btn=document.getElementById('admSaveBtn');
    btn.disabled=true; btn.textContent='Guardando...';
    try{
      const r=await fetch('php/save.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(admData)});
      const res=await r.json();
      if(res.ok){
        admToast('Guardado y quemado correctamente','success');
        setTimeout(()=>{ location.href='?edit&v='+Date.now(); },800);
      } else {
        admToast('Error: '+(res.error||'desconocido'),'error');
        btn.disabled=false; btn.textContent='Guardar y Quemar';
      }
    }catch(e){
      admToast('Error de red: '+e.message,'error');
      btn.disabled=false; btn.textContent='Guardar y Quemar';
    }
  };

  function admToast(msg,type){
    const t=document.createElement('div');
    t.className='adm-toast '+type;
    t.textContent=msg;
    document.body.appendChild(t);
    setTimeout(()=>t.remove(),3000);
  }

  /* ---- INIT ---- */
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init);
  } else {
    init();
  }
})();
