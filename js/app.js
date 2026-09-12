
/* ================================================================
   DEFAULTS — Fallback si fetch() falla (ej. file://)
   ================================================================ */
const DEFAULTS = {
  texts:{coverTitle:"La Receta de Nuestra Amistad",coverSubtitle:"Álbum de Recetas & Cartas",coverDedication:"Dedicado a",coverButton:"Abrir Recetario",pageNames:["PORTADA","COMANDA","MISE EN PLACE","ÁLBUM","CARTAS","RECUERDOS","COMANDA FINAL"],page1Quote:"Para quien entiende que cocinar no es solo templar ingredientes, sino entregar el alma en cada servicio.",page2Title:"La Mesa del Chef",page2Desc:"Todo gran plato nace en una preparación impecable",page2Quote:"En la cocina profesional, como en la vida, el orden de la partida define el triunfo del banquete.",page3Title:"Álbum de Recetas",page3Desc:"Haz clic en cada foto para ver la historia completa",page3Quote:"Una foto vale más que mil palabras, pero una foto compartida vale más que mil banquetes.",page4Title:"Cartas de los Nuestros",page4Desc:"Cada carta es un abrazo. Toca para leer la completa.",page5Title:"Recuerdos: Tu Camino a lo que Eres Hoy",page5Desc:"Cada foto es un capítulo de tu historia. Toca para revivirlo.",page5Quote:"Los recuerdos son los ingredientes que dan sabor a quien somos.",page6Title:"La Comanda Real",page6Desc:"Un boleto intransferible garantizado"},
  chef:{name:"Chef Juanjo - Chesito",title:"Chef Ejecutivo & Maestro del Fuego",emoji:"👨‍🍳",noteKicker:"CHEF · NOTA PERSONAL",noteTitle:"La Receta de Nuestra Amistad",noteText:"¡Prueba siempre antes de servir! Nunca mandes un plato que no comas tú primero.",noteFoot:"CHESITO · LA RECETA DE NUESTRA AMISTAD",noteStamp:"Sello del Chef"},
  comanda:{mesa:"Amigos de por Vida",comensales:2,fecha:""},
  ingredientes:[
    {id:"lealtad",emoji:"🛡️",photo:"fotos/ing-lealtad.jpg",title:"Lealtad Añejada",desc:"Nunca se corta ante el calor del servicio pesado.",anecdota:"En el turno más caótico, una sola mirada de confianza nos devolvió la calma."},
    {id:"humor",emoji:"😂",photo:"fotos/ing-humor.jpg",title:"Humor Ácido",desc:"Doble fermentación que cura cualquier turno de 14 horas.",anecdota:"Inventamos los chistes peores del mundo. Y fue la mejor terapia jamás pagada."},
    {id:"resiliencia",emoji:"🌶️",photo:"fotos/ing-resiliencia.jpg",title:"Resiliencia a Fuego Vivo",desc:"La pizca justa de picante para romper la rutina cotidiana.",anecdota:"No nos rendimos. Lo rehicimos juntos, más fuerte, más sabor."},
    {id:"proyectos",emoji:"🧂",photo:"fotos/ing-proyectos.jpg",title:"Proyectos a Futuro",desc:"Saca a relucir lo mejor de cada uno sin enmascarar nada.",anecdota:"De esas sobremesas nacieron los mejores planes."}
  ],
  fotos:[{src:"fotos/receta-1.jpg",title:"Primer Servicio",story:"El primer plato que nos unió."},{src:"fotos/receta-2.jpg",title:"Sobremesa",story:"Los planes nacieron en la mesa."},{src:"fotos/receta-3.jpg",title:"Gran Banquete",story:"200 personas, sin perder la sonrisa."},{src:"fotos/receta-4.jpg",title:"Receta Familiar",story:"Tradición que se hereda."}],
  cartas:[{from:"Mamá Lucía",seal:"👩‍👧",photo:"fotos/carta-mama.jpg",text:"Estoy orgullosa de ambos."},{from:"Compa Marco",seal:"🤜",photo:"fotos/carta-marco.jpg",text:"La cocina nos unió, la vida nos hermanó."},{from:"Chef Rosa",seal:"👩‍🍳",photo:"fotos/carta-rosa.jpg",text:"Sigue encendiendo esos fogones."},{from:"Junior",seal:"👦",photo:"fotos/carta-junior.jpg",text:"Te quiero, hermano."},{from:"Comadre Diana",seal:"🤰",photo:"fotos/carta-diana.jpg",text:"Tus hijos tienen la mejor figura de hermandad: tú."}],
  galeria:[{src:"fotos/recuerdo-1.jpg",titulo:"Primeros fogones",pie:"2015 — Cuando todo comenzó"},{src:"fotos/recuerdo-2.jpg",titulo:"El primer servicio",pie:"2017 — Nerves y triunfos"},{src:"fotos/recuerdo-3.jpg",titulo:"Sobremesa de planificación",pie:"2019 — Soñando con nuestro lugar"},{src:"fotos/recuerdo-4.jpg",titulo:"Gran banquete",pie:"2022 — 200 comensales, una familia"}],
  certificado:"Por el arte de alimentar el cuerpo y el espíritu.",
  ticketItems:[{desc:"Cena Completa",note:"100% Pagada"},{desc:"Pack de Cervezas",note:"Artesanales y bajo cero"},{desc:"Charla Ilimitada",note:"Sin mirar el reloj"},{desc:"Vigencia",note:"Sin fecha de expiración"}],
  musica:{titulo:"Música del Chef",tracks:[{id:"fondo",titulo:"Fondo Culinario",src:"music/fondo.mp3"},{id:"tema2",titulo:"Sobremesa",src:"music/tema-2.mp3"},{id:"tema3",titulo:"Noche de Servicio",src:"music/tema-3.mp3"}]},
  quiz:[{q:"¿Cómo calificarías este banquete fraternal?",opts:["★★★★★ Exquisito, sin palabras","★★★★ Fantástico, repetiré","El plato principal fue su amistad"],feedback:"✨ Calificación Máxima. Este banquete es patrimonio gastronómico de la amistad eterna."}]
};

/* ================================================================
   STATE
   ================================================================ */
let data = null;
let state = {};
window.data = null;

function loadProgress(){
  try{ state = JSON.parse(localStorage.getItem('recetaProgresoV2')) || {}; }catch(e){ state = {}; }
  if(!state.mise) state.mise = {lealtad:false,humor:false,resiliencia:false,proyectos:false};
  if(!state.readLetters) state.readLetters = [];
  if(state.voucherRedeemed === undefined) state.voucherRedeemed = false;
  if(state.quizAnswer === undefined) state.quizAnswer = null;
  if(state.quizDone === undefined) state.quizDone = false;
  state.coverOpen = false;
  state.page = 0;
}
function saveProgress(){
  const toSave = {
    mise: state.mise,
    readLetters: state.readLetters,
    voucherRedeemed: state.voucherRedeemed,
    quizAnswer: state.quizAnswer,
    quizDone: state.quizDone
  };
  localStorage.setItem('recetaProgresoV2', JSON.stringify(toSave));
}
function resetProgress(){
  if(!confirm('¿Reiniciar todo tu avance?')) return;
  localStorage.removeItem('recetaProgresoV2');
  localStorage.removeItem('recetaProgreso');
  state.mise = {lealtad:false,humor:false,resiliencia:false,proyectos:false};
  state.readLetters = [];
  state.voucherRedeemed = false;
  state.quizAnswer = null;
  state.quizDone = false;
  state.coverOpen = false;
  state.page = 0;
  renderBook();
  renderPage();
  showToast('🔄 Avance reiniciado');
}

const PAGE_NAMES_FALLBACK = ['PORTADA','COMANDA','MISE EN PLACE','ÁLBUM','CARTAS','RECUERDOS','COMANDA FINAL'];

/* ================================================================
   DATA — Fetch desde data/receta.json
   ================================================================ */
async function loadData(){
  if(window.SAVED_DATA){
    data = JSON.parse(JSON.stringify(window.SAVED_DATA));
  } else {
    try{
      const r = await fetch('data/receta.json?v='+Date.now());
      if(!r.ok) throw new Error(r.status);
      data = await r.json();
    }catch(e){
      console.warn('No se pudo cargar data/receta.json, usando defaults:', e);
      data = JSON.parse(JSON.stringify(DEFAULTS));
    }
  }
  for(const key of Object.keys(DEFAULTS)){
    if(!(key in data)) data[key] = DEFAULTS[key];
  }
  window.data = data;
}

/* ================================================================
   RENDER
   ================================================================ */
function renderAll(){
  renderBook();
  renderPage();
}

function renderBook(){
  const book = document.getElementById('book');
  book.innerHTML = '<div class="spine"></div>';
  const cover = createLeaf(0,6);
  const coverFace = cover.querySelector('.leaf-face');
  coverFace.classList.add('cover-front');
  coverFace.innerHTML = `<div class="face-inner">${renderCover()}</div>`;
  book.appendChild(cover);
  for(let i=1;i<=6;i++){
    const leaf = createLeaf(i,6-i);
    leaf.querySelector('.leaf-front').innerHTML = `<div class="face-inner">${renderSpread(i)}</div>`;
    book.appendChild(leaf);
  }
}

function createLeaf(pageIdx,zIdx){
  const leaf = document.createElement('div');
  leaf.className = 'leaf';
  leaf.dataset.page = pageIdx;
  leaf.style.zIndex = zIdx;
  leaf.innerHTML = `<div class="leaf-face leaf-front"></div><div class="leaf-face leaf-back"></div>`;
  return leaf;
}

function renderCover(){
  const t = data.texts;
  const chefPhoto = data.chef.photo ? `<img src="${data.chef.photo}" alt="${data.chef.name}" class="p1-chef-photo">` : `<div class="cover-seal">${data.chef.emoji}</div>`;
  const nk = data.chef.noteKicker || 'CHEF · NOTA PERSONAL';
  const nt = data.chef.noteTitle || t.coverTitle;
  const tx = data.chef.noteText || '';
  const ft = data.chef.noteFoot || '';
  const st = data.chef.noteStamp || 'Sello del Chef';
  const noteHTML = tx ? `
    <div class="cn-card">
      <div class="cn-tape"></div>
      <div class="cn-dotted">
        <div class="cn-kicker">${nk}</div>
        <div class="cn-hero">
          <div class="cn-emoji">${data.chef.emoji}</div>
          <div class="cn-title">${nt}</div>
        </div>
      </div>
      <div class="cn-quote">"${tx}"</div>
      <div class="cn-foot"><span>${ft}</span></div>
      <div class="cn-stamp">${st}</div>
    </div>
  ` : '';
  return `
    ${noteHTML}
    ${chefPhoto}
    <h1 class="cover-title">${t.coverTitle.replace(' de<br>',' de<br>')}</h1>
    <p class="cover-subtitle">${t.coverSubtitle}</p>
    <p class="cover-chef">${t.coverDedication} ${data.chef.name}</p>
    <button class="cover-btn" onclick="openCover()">${t.coverButton}</button>
  `;
}

function renderSpread(page){
  return `<div class="spread"><div class="spread-left">${renderLeft(page)}</div><div class="spread-right">${renderRight(page)}</div></div>`;
}

/* ---- LEFT ---- */
function renderLeft(p){
  const t = data.texts;
  if(p===1) return `
    <div class="folio"><span>${t.coverTitle}</span><span>FOLIO 01</span></div>
    <div class="p1-dedication">
      ${data.chef.photo?`<img src="${data.chef.photo}" alt="${data.chef.name}" class="p1-chef-photo">`:`<div class="p1-chef-icon">${data.chef.emoji}</div>`}
      <p class="section-label">Dedicado con honor a</p>
      <h2 class="p1-chef-name">${data.chef.name}</h2>
      <p class="p1-chef-title">"${data.chef.title}"</p>
    </div>
    <div class="p1-quote">"${t.page1Quote}"</div>
    <div class="p1-stars">★ ★ ★</div>
  `;
  if(p===2) return `
    <div class="folio"><span>OPUS I · LA MATERIA PRIMA</span><span>FOLIO 02</span></div>
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px"><span style="font-size:24px">🥗</span><div><h3 class="section-title" style="font-size:18px">${t.page2Title}</h3><p class="section-desc">${t.page2Desc}</p></div></div>
    <div class="mise-count-badge" style="font-family:var(--font-mono);font-size:10px;letter-spacing:0.08em;color:${miseCount()===4?'var(--sage-green)':'var(--copper-ember)'};font-weight:600;text-transform:uppercase">${miseCount()}/4 ingredientes verificados</div>
    <div class="p1-quote" style="text-align:left">"${t.page2Quote}"</div>
  `;
  if(p===3) return `
    <div class="folio"><span>OPUS II · FOTOS Y SABORES</span><span>FOLIO 03</span></div>
    <h3 class="section-title" style="font-size:18px">${t.page3Title}</h3>
    <p class="section-desc">${t.page3Desc}</p>
    <div class="photo-grid">
      ${data.fotos.map((f,i)=>`
        <div class="photo-frame" onclick="openPhoto(${i})">
          <img src="${f.src}" alt="${f.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="photo-placeholder" style="display:none">📸</div>
          <div class="photo-caption">${f.title}</div>
        </div>
      `).join('')}
    </div>
  `;
  if(p===4) return `
    <div class="folio"><span>OPUS III · LAS VOCES DE LA MESA</span><span>FOLIO 04</span></div>
    <h3 class="section-title" style="font-size:18px">${t.page4Title}</h3>
    <p class="section-desc">${t.page4Desc}</p>
    <div class="letters-grid">
      ${data.cartas.map((c,i)=>`
        <div class="letter-card ${state.readLetters.includes(i)?'read':''}" onclick="openLetter(${i})">
          <div class="lc-read-badge">✓ LEÍDA</div>
          ${c.photo?`<img src="${c.photo}" alt="${c.from}" class="lc-avatar" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="lc-avatar-fallback" style="display:none">${c.seal}</div>`:`<div class="lc-seal">${c.seal}</div>`}
          <div class="lc-from">De ${c.from}</div>
          <div class="lc-preview">"${c.text}"</div>
          <div class="lc-cta">${state.readLetters.includes(i)?'Leer de nuevo →':'Leer carta completa →'}</div>
        </div>
      `).join('')}
    </div>
  `;
  if(p===5) return `
    <div class="folio"><span>OPUS IV · RECUERDOS</span><span>FOLIO 05</span></div>
    <p class="section-label">TU CAMINO A LO QUE ERES HOY</p>
    <h3 class="section-title" style="font-size:18px">${t.page5Title}</h3>
    <p class="section-desc">${t.page5Desc}</p>
    <div class="recuerdo-carousel" id="recuerdoCarousel">
      <div class="rc-hero" id="rcHero">
        <img id="rcImg" src="${(data.galeria||[])[0]?.src||''}" alt="" onerror="this.outerHTML='<div class=\\'rc-hero-placeholder\\'>📷</div>'">
        <div class="rc-tape"></div>
      </div>
      <div class="rc-nav">
        <button class="rc-arrow rc-prev" onclick="prevRecuerdo()">‹</button>
        <div class="rc-info">
          <div class="rc-counter" id="rcCounter">1 / ${(data.galeria||[]).length}</div>
          <div class="rc-caption" id="rcCaption">${(data.galeria||[])[0]?.titulo||''}</div>
        </div>
        <button class="rc-arrow rc-next" onclick="nextRecuerdo()">›</button>
      </div>
      <div class="rc-dots" id="rcDots">${(data.galeria||[]).map((_,i)=>`<button class="rc-dot ${i===0?'active':''}" onclick="goToRecuerdo(${i})"></button>`).join('')}</div>
      <div class="rc-thumbs" id="rcThumbs">${(data.galeria||[]).map((r,i)=>`<div class="rc-thumb ${i===0?'active':''}" onclick="goToRecuerdo(${i})"><img src="${r.src}" alt="${r.titulo}" onerror="this.style.display='none'"><span>${r.titulo}</span></div>`).join('')}</div>
    </div>
  `;
  if(p===6) return `
    <div class="folio"><span>OPUS V · EL CONTRATO FRATERNAL</span><span>FOLIO 06</span></div>
    <p class="section-label">VALE OFICIAL CANJEABLE</p>
    <h3 class="section-title" style="font-size:18px">${t.page6Title}</h3>
    <p class="section-desc">${t.page6Desc}</p>
    <div class="ticket-thermal">
      <div class="tl" style="position:relative">
        <div style="display:flex;justify-content:space-between;align-items:start;padding-bottom:8px;border-bottom:1px dashed rgba(0,0,0,0.1);margin-bottom:8px">
          <div><div style="font-size:8px;color:var(--text-muted)">EXPEDIENTE N° 777</div><div style="font-weight:700;color:var(--text-primary);font-family:var(--font-display);font-size:13px">VALE DE CELEBRACIÓN</div></div>
          <span class="ticket-status-badge ${state.voucherRedeemed?'done':'pending'}">${state.voucherRedeemed?'✓ CANJEADO':'PENDIENTE'}</span>
        </div>
        ${data.ticketItems.map(it=>`<div style="padding:4px 0;border-bottom:1px dotted rgba(0,0,0,0.04);font-size:10px">🍽️ <strong>${it.desc}:</strong> ${it.note}</div>`).join('')}
        <button class="ticket-redeem ${state.voucherRedeemed?'redeemed':'active'}" onclick="redeemVoucher()" ${state.voucherRedeemed?'disabled':''}>
          ${state.voucherRedeemed?'✓ Vale Sellado y Registrado':'Sellar y Canjear este Vale ✍️'}
        </button>
      </div>
    </div>
  `;
  return '';
}

/* ---- RIGHT ---- */
function renderRight(p){
  const t = data.texts;
  if(p===1) return `
    <div class="folio"><span>EXPERIENCIA GASTRONÓMICA</span><span>CAP. I / VI</span></div>
    <p class="section-label">Menú Degustación Michelin</p>
    <h3 class="section-title">${t.coverTitle}</h3>
    <p class="section-desc">Maridaje de 6 Tiempos</p>
    <div class="ticket">
      <div class="ticket-badge">TICKET #001</div>
      <div class="ticket-header"><strong>RESTAURANT FRATERNITÉ</strong><small>Mesa: ${data.comanda.mesa} · ${data.comanda.fecha || new Date().toLocaleDateString('es-MX',{day:'numeric',month:'long',year:'numeric'})}</small></div>
      <div class="ticket-item"><span>1. Portada & Comanda</span><span class="ticket-status done">LISTO</span></div>
      <div class="ticket-item"><span>2. Mise en Place</span><span class="ticket-status ${miseCount()===4?'done':'pending'}">${miseCount()===4?'LISTO':'4 INGR.'}</span></div>
      <div class="ticket-item"><span>3. Álbum de Fotos</span><span class="ticket-status done">★ ★ ★</span></div>
      <div class="ticket-item"><span>4. Cartas</span><span class="ticket-status done">★ ★ ★</span></div>
      <div class="ticket-item"><span>5. Recuerdos</span><span class="ticket-status done">📷</span></div>
      <div class="ticket-item"><span>6. Sobremesa</span><span class="ticket-status done">10/10</span></div>
    </div>
  `;
  if(p===2) return `
    <div class="folio"><span>CAP. II / VI · ESTACIÓN OBLIGATORIA</span><span>${miseCount()===4?'✓ LISTO':'🔒'}</span></div>
    <h3 class="section-title" style="font-size:18px">Ingredientes Fundamentales</h3>
    <p class="section-desc">Haz clic en cada ingrediente para inspeccionarlo</p>
    <div class="ingredient-grid" id="ingredientGrid">
      ${data.ingredientes.map(ing=>`
        <div class="ingredient-card ${state.mise[ing.id]?'checked':''}" id="card-${ing.id}" onclick="openIngredient('${ing.id}')">
          <div class="ic-header"><span class="ic-emoji">${ing.emoji}</span><span class="ic-status ${state.mise[ing.id]?'done':'todo'}">${state.mise[ing.id]?'✓ VERIFICADO':'TOCAR PARA PESAR'}</span></div>
          <div class="ic-title">${ing.title}</div>
          <div class="ic-desc">${ing.desc}</div>
          <div class="ic-cta" style="font-size:8px;color:var(--gold-primary);font-weight:700;margin-top:8px;text-transform:uppercase;letter-spacing:0.08em">${state.mise[ing.id]?'Ver de nuevo →':'Toca para descubrir →'}</div>
        </div>
      `).join('')}
    </div>
  `;
  if(p===3) return `
    <div class="folio"><span>CAP. III / VI · MEMORIAS FOTOGRÁFICAS</span><span>${data.fotos.length} FOTOS</span></div>
    <h3 class="section-title" style="font-size:18px">Detrás de Cada Foto</h3>
    <p class="section-desc">Cada imagen guarda una historia que merece ser contada</p>
    ${data.fotos.slice(0,2).map(f=>`
      <div class="photo-detail">
        <div class="pd-emoji">📷</div>
        <div class="pd-text"><strong>${f.title}</strong>${f.story}</div>
      </div>
    `).join('')}
    <div class="p1-quote" style="text-align:left">"${t.page3Quote}"</div>
  `;
  if(p===4) return `
    <div class="folio"><span>CAP. IV / VI · EL VEREDICTO</span><span>3 ★ ★ ★</span></div>
    <div class="cert">
      <div class="cert-stars"><span class="cert-star">★</span><span class="cert-star">★</span><span class="cert-star">★</span></div>
      <div class="cert-label">CERTIFICADO DEL CHEFSITO</div>
      <h3 class="cert-name">${data.chef.name}</h3>
      <p class="cert-desc">Distinguido con 3 estrellas</p>
      <div class="cert-quote">"${data.certificado}"</div>
      <div class="cert-footer"><span>Vitalicio</span><span style="color:var(--text-primary);font-weight:700">Sello Oficial Michelin</span></div>
      <div class="cert-actions">
        <button class="cert-btn gold" onclick="awardRecognition()">🎉 Otorgar</button>
        <button class="cert-btn dark" onclick="copyCertificate()">📋 Copiar</button>
      </div>
    </div>
  `;
  if(p===5) return `
    <div class="folio"><span>CAP. V / VI · LA LÍNEA DEL TIEMPO</span><span> ${(data.galeria||[]).length} RECUERDOS</span></div>
    <p class="section-label">CRONOLOGÍA</p>
    <h3 class="section-title" style="font-size:18px">Tu Camino a lo que Eres Hoy</h3>
    <div class="rc-timeline">
      ${(data.galeria||[]).map((r,i)=>`
        <div class="rc-tl-item ${i===recuerdoIdx?'active':''}" onclick="goToRecuerdo(${i})">
          <div class="rc-tl-dot"></div>
          <div class="rc-tl-content">
            <div class="rc-tl-pie">${r.pie||''}</div>
            <div class="rc-tl-titulo">${r.titulo||''}</div>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="p1-quote" style="text-align:left;margin-top:12px">"${t.page5Quote}"</div>
  `;
  if(p===6) return `
    <div class="folio"><span>CAP. VI / VI · TEST DEL CRÍTICO</span><span>VEREDICTO</span></div>
    <p class="section-label">EVALUACIÓN ANÓNIMA</p>
    <h3 class="section-title" style="font-size:18px">Test del Crítico Michelin</h3>
    <div class="quiz-box">
      <p class="quiz-q">${data.quiz[0].q}</p>
      <div class="quiz-options">
        ${data.quiz[0].opts.map((o,i)=>`
          <button class="quiz-opt ${state.quizAnswer===i?'selected':''}" onclick="answerQuiz(${i})" ${state.quizDone?'disabled':''}>${String.fromCharCode(65+i)}) ${o}</button>
        `).join('')}
      </div>
      <div class="quiz-feedback ${state.quizDone?'show':''}" id="quizFeedback">
        ${data.quiz[0].feedback||'✨ Calificación Máxima. Este banquete es patrimonio gastronómico de la amistad eterna.'}
      </div>
    </div>
    <div class="final-banner" style="margin-top:12px">
      <div class="fb-title">¡Salud por tu cumpleaños!</div>
      <p class="fb-desc">Gracias por formar parte de nuestras vidas y participar del servicio.</p>
    </div>
  `;
  return '';
}

/* ================================================================
   PAGE RENDER (sin re-render del leaf)
   ================================================================ */
function renderPage(){
  document.querySelectorAll('.leaf').forEach(leaf=>{
    const p = parseInt(leaf.dataset.page);
    if(p <= state.page) leaf.classList.add('flipped');
    else leaf.classList.remove('flipped');
  });
  document.getElementById('btnPrev').disabled = state.page <= 0;
  document.getElementById('btnNext').disabled = state.page >= 6;
  document.getElementById('pageIndicator').textContent = (data.texts.pageNames||PAGE_NAMES_FALLBACK)[state.page]||'PORTADA';
  if(state.page === 0){
    const cover = document.querySelector('.leaf[data-page="0"]');
    if(cover){
      const inner = cover.querySelector('.leaf-front .face-inner');
      if(inner) inner.innerHTML = renderCover();
    }
  } else if(state.page >= 1){
    const leaf = document.querySelector(`.leaf[data-page="${state.page}"]`);
    if(leaf){
      const inner = leaf.querySelector('.leaf-front .face-inner');
      if(inner) inner.innerHTML = renderSpread(state.page);
    }
  }
  saveProgress();
}

/* ================================================================
   NAVIGATION
   ================================================================ */
function openCover(){
  playSound('flip');
  state.coverOpen = true;
  state.page = 1;
  renderPage();
}
function goTo(p){
  if(p<0||p>6) return;
  if(p>1 && miseCount()<4 && state.page<=1){
    showToast('🔒 Inspecciona los 4 ingredientes primero');
    return;
  }
  state.page = p;
  playSound('flip');
  renderPage();
}
function nextPage(){ goTo(state.page+1); }
function prevPage(){ goTo(state.page-1); }

/* ================================================================
   MISE EN PLACE — Mutación directa del DOM (sin re-render)
   ================================================================ */
function miseCount(){ return Object.values(state.mise).filter(Boolean).length; }

function inspectIngredient(id){
  if(state.mise[id]) return;
  state.mise[id] = true;
  const ing = data.ingredientes.find(i=>i.id===id);
  playSound('flip');

  // 1. Marcar tarjeta en grid
  const card = document.getElementById('card-'+id);
  if(card){
    card.classList.add('checked');
    const status = card.querySelector('.ic-status');
    if(status){ status.className='ic-status done'; status.textContent='✓ VERIFICADO'; }
    const cta = card.querySelector('.ic-cta');
    if(cta) cta.textContent='Ver de nuevo →';
  }

  // 2. Actualizar badge folio izquierdo
  const count = miseCount();
  const countBadge = document.querySelector('.mise-count-badge');
  if(countBadge){
    countBadge.textContent = count+'/4 ingredientes verificados';
    countBadge.style.color = count===4?'var(--sage-green)':'var(--copper-ember)';
  }

  // 3. Actualizar badge folio derecho
  const folioBadge = document.querySelector(`.leaf[data-page="2"] .folio span:last-child`);
  if(folioBadge) folioBadge.textContent = count===4?'✓ LISTO':'🔒';

  // 4. Toast
  showToast(ing.emoji+' '+ing.title+' verificado ✓ '+count+'/4');

  // 5. Si completó los 4, celebrar
  if(count===4){
    playSound('success');
    setTimeout(()=>launchConfetti(),300);
  }

  saveProgress();
}

/* ================================================================
   TOAST
   ================================================================ */
function showToast(msg){
  const c = document.getElementById('toastContainer');
  if(!c) return;
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<span class="toast-check">✓</span>${msg}`;
  c.appendChild(t);
  setTimeout(()=>t.remove(),2700);
}

/* ================================================================
   OTHER INTERACTIONS
   ================================================================ */
function awardRecognition(){ playSound('applause'); launchConfetti(); }

function copyCertificate(){
  const text = `⭐⭐⭐ CERTIFICADO DE HERMANDAD ⭐⭐⭐\n\nOtorgado a: ${data.chef.name} (${data.chef.title})\n\n"${data.certificado}"\n\n— Calificación: 10/10 Insuperable • Vigencia: Vitalicia`;
  navigator.clipboard.writeText(text).then(()=>showToast('📋 ¡Certificado copiado!')).catch(()=>{
    const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);showToast('📋 ¡Certificado copiado!');
  });
}

function redeemVoucher(){
  state.voucherRedeemed = true;
  playSound('success');
  launchConfetti();
  // Mutación directa: actualizar badge y botón
  const badge = document.querySelector('.ticket-status-badge');
  if(badge){ badge.className='ticket-status-badge done'; badge.textContent='✓ CANJEADO'; }
  const btn = document.querySelector('.ticket-redeem');
  if(btn){ btn.className='ticket-redeem redeemed'; btn.textContent='✓ Vale Sellado y Registrado'; btn.disabled=true; }
  saveProgress();
}

function answerQuiz(i){
  if(state.quizDone) return;
  state.quizAnswer = i;
  state.quizDone = true;
  playSound('success');
  launchConfetti();
  // Mutación directa: marcar opción, deshabilitar todas, mostrar feedback
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((btn,idx)=>{
    btn.disabled = true;
    if(idx===i) btn.classList.add('selected');
  });
  const fb = document.getElementById('quizFeedback');
  if(fb) fb.classList.add('show');
  saveProgress();
}

/* ================================================================
   MODALS
   ================================================================ */
function openIngredient(id){
  const ing = data.ingredientes.find(i=>i.id===id);
  if(!ing) return;
  const isChecked = state.mise[id];
  const hasPhoto = ing.photo && !ing.photo.includes('undefined');
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-ingredient">
      <div class="mi-hero">
        ${hasPhoto?`<img src="${ing.photo}" alt="${ing.title}" onerror="this.outerHTML='<div class=\\'mi-hero-placeholder\\'>${ing.emoji}</div>'">`:`<div class="mi-hero-placeholder">${ing.emoji}</div>`}
        <div class="mi-badge">${ing.emoji}</div>
        <div class="mi-tape"></div>
      </div>
      <div class="mi-label">Ingrediente Verificado ${miseCount()}/4</div>
      <h3 class="mi-title">${ing.title}</h3>
      <p class="mi-desc">${ing.desc}</p>
      <div class="mi-quote"><p>${ing.anecdota}</p></div>
      <div class="mi-status ${isChecked?'done':'pending'}" id="miStatus-${id}" onclick="${isChecked?'':'inspectIngredient(\''+id+'\');closeModal()'}">
        ${isChecked?'✓ Ingrediente verificado':'Marcar como verificado ✓'}
      </div>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('show');
}

function openPhoto(i){
  const f = data.fotos[i];
  const hasImg = f.src && !f.src.includes('undefined');
  // Marcar frame como visto (mutación directa)
  const frames = document.querySelectorAll('.photo-frame');
  if(frames[i]){
    frames[i].style.borderColor = 'var(--gold-primary)';
    frames[i].style.boxShadow = '0 0 12px rgba(212,175,55,0.3)';
  }
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-photo">
      ${hasImg?`<img src="${f.src}" alt="${f.title}" onerror="this.outerHTML='<div class=\\'photo-placeholder-lg\\'>📸</div>'">`:`<div class="photo-placeholder-lg">📸</div>`}
      <figcaption>${f.title}</figcaption>
      <div class="photo-story">${f.story}</div>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('show');
}

function openLetter(i){
  const c = data.cartas[i];
  if(!state.readLetters.includes(i)){
    state.readLetters.push(i);
    const cards = document.querySelectorAll('.letter-card');
    const card = cards[i];
    if(card){
      card.classList.add('read');
      const badge = card.querySelector('.lc-read-badge');
      if(badge) badge.style.opacity='1';
      const cta = card.querySelector('.lc-cta');
      if(cta) cta.textContent='Leer de nuevo →';
    }
    saveProgress();
  }
  const hasPhoto = c.photo && !c.photo.includes('undefined');
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-letter">
      ${hasPhoto?`<div class="ml-hero"><img src="${c.photo}" alt="${c.from}" onerror="this.parentElement.style.display='none'"></div>`:''}
      <div class="ml-from">Carta de ${c.from}</div>
      <div class="ml-text"><p>${c.text}</p></div>
      <div class="ml-sig">— ${c.from}</div>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('show');
}

function closeModal(e){
  if(e && e.target !== document.getElementById('modalOverlay')) return;
  document.getElementById('modalOverlay').classList.remove('show');
}

/* ================================================================
   CONFETTI
   ================================================================ */
function launchConfetti(){
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#D4AF37','#9E3D2B','#3A7D5E','#A83232','#F3E5AB','#C5A059'];
  const particles = [];
  for(let i=0;i<120;i++){
    particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height*0.3-canvas.height*0.3,vx:(Math.random()-0.5)*6,vy:Math.random()*4+2,w:Math.random()*8+4,h:Math.random()*6+3,color:colors[Math.floor(Math.random()*colors.length)],rot:Math.random()*360,rotV:(Math.random()-0.5)*10,life:1});
  }
  let frame=0;
  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let alive=false;
    particles.forEach(p=>{
      if(p.life<=0) return;
      alive=true;
      p.x+=p.vx;p.y+=p.vy;p.vy+=0.08;p.rot+=p.rotV;p.life-=0.005;
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);ctx.globalAlpha=Math.max(0,p.life);ctx.fillStyle=p.color;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore();
    });
    frame++;
    if(alive&&frame<180) requestAnimationFrame(animate);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  animate();
}

/* ================================================================
   WEB AUDIO
   ================================================================ */
let audioCtx;
function getAudioCtx(){
  if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}
function playSound(type){
  try{
    const ctx = getAudioCtx();
    if(ctx.state==='suspended') ctx.resume();
    if(type==='flip'){
      const buf=ctx.createBuffer(1,ctx.sampleRate*0.08,ctx.sampleRate);const d=buf.getChannelData(0);
      for(let i=0;i<d.length;i++) d[i]=(Math.random()*2-1)*(1-i/d.length)*0.15;
      const src=ctx.createBufferSource();src.buffer=buf;const f=ctx.createBiquadFilter();f.type='highpass';f.frequency.value=2000;src.connect(f).connect(ctx.destination);src.start();
    }
    if(type==='success'){
      [523.25,659.25,783.99].forEach((freq,i)=>{
        const osc=ctx.createOscillator();osc.type='sine';osc.frequency.value=freq;const g=ctx.createGain();g.gain.setValueAtTime(0.12,ctx.currentTime+i*0.12);g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+i*0.12+0.3);osc.connect(g).connect(ctx.destination);osc.start(ctx.currentTime+i*0.12);osc.stop(ctx.currentTime+i*0.12+0.3);
      });
    }
    if(type==='applause'){
      for(let i=0;i<8;i++){
        const buf=ctx.createBuffer(1,ctx.sampleRate*0.15,ctx.sampleRate);const dd=buf.getChannelData(0);
        for(let j=0;j<dd.length;j++) dd[j]=(Math.random()*2-1)*(1-j/dd.length)*0.1;
        const src=ctx.createBufferSource();src.buffer=buf;const f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=800+i*200;f.Q.value=0.5;src.connect(f).connect(ctx.destination);src.start(ctx.currentTime+i*0.08+Math.random()*0.04);
      }
    }
  }catch(e){}
}

/* ================================================================
   RECUERDOS CAROUSEL
   ================================================================ */
let recuerdoIdx = 0;
let rcTouchStartX = 0;

function getGaleria(){ return (data && data.galeria) || []; }

function prevRecuerdo(){
  const g = getGaleria();
  if(!g.length) return;
  recuerdoIdx = recuerdoIdx > 0 ? recuerdoIdx - 1 : g.length - 1;
  updateRecuerdoUI();
}

function nextRecuerdo(){
  const g = getGaleria();
  if(!g.length) return;
  recuerdoIdx = recuerdoIdx < g.length - 1 ? recuerdoIdx + 1 : 0;
  updateRecuerdoUI();
}

function goToRecuerdo(idx){
  const g = getGaleria();
  if(idx<0||idx>=g.length) return;
  recuerdoIdx = idx;
  updateRecuerdoUI();
}

function updateRecuerdoUI(){
  const g = getGaleria();
  if(!g.length) return;
  const r = g[recuerdoIdx];

  // Hero image
  const hero = document.getElementById('rcHero');
  if(hero){
    const oldImg = document.getElementById('rcImg');
    if(oldImg) oldImg.outerHTML = `<img id="rcImg" src="${r.src}" alt="${r.titulo}" onerror="this.outerHTML='<div class=\\'rc-hero-placeholder\\'>📷</div>'">`;
  }

  // Counter + caption
  const counter = document.getElementById('rcCounter');
  if(counter) counter.textContent = `${recuerdoIdx+1} / ${g.length}`;
  const caption = document.getElementById('rcCaption');
  if(caption) caption.textContent = r.titulo;

  // Dots
  const dots = document.getElementById('rcDots');
  if(dots){
    dots.querySelectorAll('.rc-dot').forEach((d,i)=>{
      d.classList.toggle('active', i===recuerdoIdx);
    });
  }

  // Thumbnails
  const thumbs = document.getElementById('rcThumbs');
  if(thumbs){
    thumbs.querySelectorAll('.rc-thumb').forEach((t,i)=>{
      t.classList.toggle('active', i===recuerdoIdx);
    });
  }

  // Timeline
  const tlItems = document.querySelectorAll('.rc-tl-item');
  tlItems.forEach((item,i)=>{
    item.classList.toggle('active', i===recuerdoIdx);
  });
}

// Swipe support
document.addEventListener('DOMContentLoaded',()=>{
  const carousel = document.getElementById('recuerdoCarousel');
  if(!carousel) return;
  carousel.addEventListener('touchstart',e=>{
    rcTouchStartX = e.touches[0].clientX;
  },{passive:true});
  carousel.addEventListener('touchend',e=>{
    const diff = rcTouchStartX - e.changedTouches[0].clientX;
    if(Math.abs(diff) > 40){
      if(diff > 0) nextRecuerdo();
      else prevRecuerdo();
    }
  },{passive:true});
});

/* ================================================================
   MUSIC — Full Playlist Player
   ================================================================ */
let musicStarted = false;
let musicCurrentIdx = 0;
let playlistOpen = false;

function getTracks(){ return (data && data.musica && data.musica.tracks) || []; }

function initPlayer(){
  const tracks = getTracks();
  if(!tracks.length) return;
  const audio = document.getElementById('bgMusic');
  audio.src = tracks[musicCurrentIdx].src;
  updatePlayerUI();
  renderPlaylist();
}

function toggleMusic(){
  const audio = document.getElementById('bgMusic');
  const tracks = getTracks();
  if(!tracks.length){ showToast('🎵 Sin temas configurados'); return; }
  if(!musicStarted){
    audio.src = tracks[musicCurrentIdx].src;
    audio.play().then(()=>{
      musicStarted=true; state.audioPlaying=true;
      updatePlayerUI();
    }).catch(()=>showToast('🎵 Toca para iniciar la música'));
  } else {
    if(audio.paused){ audio.play(); state.audioPlaying=true; }
    else { audio.pause(); state.audioPlaying=false; }
    updatePlayerUI();
  }
}

function playTrack(idx){
  const tracks = getTracks();
  if(idx<0||idx>=tracks.length) return;
  const audio = document.getElementById('bgMusic');
  musicCurrentIdx = idx;
  audio.src = tracks[idx].src;
  audio.play().then(()=>{
    musicStarted=true; state.audioPlaying=true;
    updatePlayerUI();
    renderPlaylist();
  }).catch(()=>showToast('⚠️ No se pudo reproducir: '+tracks[idx].src));
}

function prevTrack(){
  const tracks = getTracks();
  if(!tracks.length) return;
  const idx = musicCurrentIdx > 0 ? musicCurrentIdx - 1 : tracks.length - 1;
  playTrack(idx);
}

function nextTrack(){
  const tracks = getTracks();
  if(!tracks.length) return;
  const idx = musicCurrentIdx < tracks.length - 1 ? musicCurrentIdx + 1 : 0;
  playTrack(idx);
}

function stopMusic(){
  const audio = document.getElementById('bgMusic');
  audio.pause();
  audio.currentTime = 0;
  musicStarted = false;
  state.audioPlaying = false;
  updatePlayerUI();
  renderPlaylist();
}

function updatePlayerUI(){
  const audio = document.getElementById('bgMusic');
  const iconPlay = document.querySelector('.player-icon-play');
  const iconPause = document.querySelector('.player-icon-pause');
  const btn = document.getElementById('btnMusic');
  const nameEl = document.getElementById('playerTrackName');
  const tracks = getTracks();

  if(!tracks.length){
    nameEl.textContent = 'Sin temas';
    btn.classList.remove('active');
    return;
  }

  const t = tracks[musicCurrentIdx];
  nameEl.textContent = t.titulo || t.id;

  if(state.audioPlaying && !audio.paused){
    iconPlay.style.display='none'; iconPause.style.display='block';
    btn.classList.add('active');
  } else {
    iconPlay.style.display='block'; iconPause.style.display='none';
    btn.classList.remove('active');
  }
}

function togglePlaylist(){
  playlistOpen = !playlistOpen;
  const pop = document.getElementById('playerPopover');
  if(playlistOpen){
    renderPlaylist();
    pop.classList.add('open');
    document.addEventListener('click', closePlaylistOutside, true);
  } else {
    pop.classList.remove('open');
    document.removeEventListener('click', closePlaylistOutside, true);
  }
}

function closePlaylist(){
  playlistOpen = false;
  document.getElementById('playerPopover').classList.remove('open');
  document.removeEventListener('click', closePlaylistOutside, true);
}

function closePlaylistOutside(e){
  const pw = document.getElementById('playerWidget');
  if(pw && !pw.contains(e.target)) closePlaylist();
}

function renderPlaylist(){
  const body = document.getElementById('playerPopBody');
  if(!body) return;
  const tracks = getTracks();
  if(!tracks.length){
    body.innerHTML='<div class="player-pop-empty">Sin temas. Agrega mp3 en admin.</div>';
    return;
  }
  body.innerHTML = tracks.map((t,i)=>`
    <div class="player-track ${i===musicCurrentIdx?'active':''}" onclick="playTrack(${i})">
      <span class="player-track-num">${i===musicCurrentIdx&&state.audioPlaying?'▸':(i+1)}</span>
      <span class="player-track-title">${t.titulo||t.id}</span>
      <span class="player-track-path">${t.src}</span>
    </div>
  `).join('');
}

// Auto-siguiente al terminar un tema
document.addEventListener('DOMContentLoaded',()=>{
  const audio = document.getElementById('bgMusic');
  audio.addEventListener('ended', nextTrack);
  audio.addEventListener('play', ()=>{ state.audioPlaying=true; updatePlayerUI(); renderPlaylist(); });
  audio.addEventListener('pause', ()=>{ state.audioPlaying=false; updatePlayerUI(); renderPlaylist(); });
});

/* ================================================================
   INIT
   ================================================================ */
window.addEventListener('DOMContentLoaded', async ()=>{
  await loadData();
  loadProgress();
  renderAll();
  initPlayer();
  document.addEventListener('keydown', e=>{
    if(e.key==='ArrowRight'||e.key===' ') nextPage();
    if(e.key==='ArrowLeft') prevPage();
    if(e.key==='Escape') closeModal();
  });
});
