/* ============ DATOS ============ */

// Recomendaciones por espacio (grid 3x2)
const recomendaciones = [
  { titulo:"Sala de estar", texto:"Plantas grandes de hoja como la Palmera Areca o el Ficus aportan frescura y llenan espacios amplios con luz indirecta.", img:"https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?auto=format&fit=crop&w=500&q=80" },
  { titulo:"Dormitorio", texto:"Elige especies que purifiquen el aire durante la noche, como la Sansevieria o el Aloe Vera, ideales para descansar mejor.", img:"https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=500&q=80" },
  { titulo:"Cocina", texto:"Hierbas aromáticas como el Romero y la Menta crecen bien cerca de una ventana y están siempre a la mano para cocinar.", img:"https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=500&q=80" },
  { titulo:"Baño", texto:"La humedad favorece a plantas tropicales como el Potos o la Cinta, que prosperan con poca luz y ambientes húmedos.", img:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80" },
  { titulo:"Oficina en casa", texto:"El Cactus y la Suculenta requieren poco mantenimiento y aportan un toque verde sin distraer de tu jornada de trabajo.", img:"https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=500&q=80" },
  { titulo:"Balcón o terraza", texto:"Geranios, Bromelias y Gardenias disfrutan de luz solar directa y le dan color a tus espacios exteriores.", img:"https://images.unsplash.com/photo-1598880940639-8c0aca2a2d18?auto=format&fit=crop&w=500&q=80" },
];

// Catálogo de plantas (grid 3x4)
const plantas = [
  { nombre:"Anthurium", desc:"Hojas brillantes en forma de corazón, ideal para interiores luminosos sin sol directo.", tag:"Interior", img:"https://images.unsplash.com/photo-1526397751294-331021109fbd?auto=format&fit=crop&w=400&q=80" },
  { nombre:"Begonia", desc:"Flores coloridas y follaje decorativo, perfecta para espacios con luz filtrada.", tag:"Flor", img:"https://images.unsplash.com/photo-1587592302891-3f4a1bc7c22e?auto=format&fit=crop&w=400&q=80" },
  { nombre:"Crotón", desc:"Hojas multicolores que aportan un estilo tropical y vibrante a cualquier ambiente.", tag:"Tropical", img:"https://images.unsplash.com/photo-1509937528035-ad76254b0356?auto=format&fit=crop&w=400&q=80" },
  { nombre:"Hiedra", desc:"Enredadera de crecimiento rápido, perfecta para colgar o cubrir estanterías.", tag:"Colgante", img:"https://images.unsplash.com/photo-1631377307698-9c1c9e0e4a1c?auto=format&fit=crop&w=400&q=80" },
  { nombre:"Palmera Areca", desc:"Aporta frescura y humedad, excelente purificadora de aire para salas amplias.", tag:"Purificadora", img:"https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=400&q=80" },
  { nombre:"Gardenia", desc:"Flores blancas de aroma intenso, ideal para balcones con buena luz solar.", tag:"Aromática", img:"https://images.unsplash.com/photo-1567748157439-651aca2ff064?auto=format&fit=crop&w=400&q=80" },
  { nombre:"Jade", desc:"Suculenta de hojas gruesas, símbolo de buena fortuna y muy fácil de cuidar.", tag:"Suculenta", img:"https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=400&q=80" },
  { nombre:"Bromelia", desc:"Colores vivos y forma exótica, prospera con humedad ambiental y luz indirecta.", tag:"Tropical", img:"https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=400&q=80" },
  { nombre:"Naranjo", desc:"Árbol frutal en maceta que llena tu hogar de aroma cítrico y frescura.", tag:"Frutal", img:"https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=400&q=80" },
  { nombre:"Romero", desc:"Hierba aromática resistente, perfecta para cocina y de fácil mantenimiento.", tag:"Aromática", img:"https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=400&q=80" },
  { nombre:"Menta", desc:"Crecimiento rápido y refrescante, ideal en maceta cerca de una ventana soleada.", tag:"Aromática", img:"https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=400&q=80" },
  { nombre:"Geranio", desc:"Flores llamativas todo el año, perfecto para balcones y terrazas soleadas.", tag:"Flor", img:"https://images.unsplash.com/photo-1599598177991-ec67b5c37318?auto=format&fit=crop&w=400&q=80" },
];

// Guía de cuidados (feed vertical)
const cuidados = [
  { nombre:"Anthurium", img:"https://images.unsplash.com/photo-1526397751294-331021109fbd?auto=format&fit=crop&w=300&q=80", riego:"1 vez por semana", luz:"Indirecta media", temp:"18°C - 27°C" },
  { nombre:"Palmera Areca", img:"https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=300&q=80", riego:"2 veces por semana", luz:"Indirecta brillante", temp:"18°C - 24°C" },
  { nombre:"Jade", img:"https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=300&q=80", riego:"Cada 2-3 semanas", luz:"Directa parcial", temp:"15°C - 24°C" },
  { nombre:"Gardenia", img:"https://images.unsplash.com/photo-1567748157439-651aca2ff064?auto=format&fit=crop&w=300&q=80", riego:"2 veces por semana", luz:"Sol directo suave", temp:"16°C - 22°C" },
  { nombre:"Romero", img:"https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=300&q=80", riego:"1 vez por semana", luz:"Sol directo", temp:"12°C - 26°C" },
  { nombre:"Bromelia", img:"https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=300&q=80", riego:"Agua en la roseta", luz:"Indirecta brillante", temp:"18°C - 28°C" },
  { nombre:"Geranio", img:"https://images.unsplash.com/photo-1599598177991-ec67b5c37318?auto=format&fit=crop&w=300&q=80", riego:"2-3 veces por semana", luz:"Sol directo", temp:"15°C - 25°C" },
  { nombre:"Menta", img:"https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=300&q=80", riego:"Mantener tierra húmeda", luz:"Indirecta brillante", temp:"15°C - 24°C" },
];

// Beneficios (grid 4x2)
const beneficios = [
  { ic:"🌬️", titulo:"Purifican el aire", texto:"Filtran toxinas y liberan oxígeno fresco." },
  { ic:"😌", titulo:"Reducen el estrés", texto:"El verde en casa calma la mente y baja la ansiedad." },
  { ic:"🎨", titulo:"Decoran el espacio", texto:"Aportan textura, color y vida a cualquier ambiente." },
  { ic:"💧", titulo:"Aumentan la humedad", texto:"Equilibran el ambiente, ideal en climas secos." },
  { ic:"🧠", titulo:"Mejoran la concentración", texto:"Ayudan a enfocar la mente en el trabajo y estudio." },
  { ic:"❤️", titulo:"Bienestar emocional", texto:"Cuidar plantas genera calma y sensación de logro." },
  { ic:"🔇", titulo:"Filtran el ruido", texto:"Amortiguan el sonido en espacios interiores." },
  { ic:"😴", titulo:"Mejoran el sueño", texto:"Algunas especies favorecen un descanso más profundo." },
];

/* ============ RENDER ============ */

function renderRecomendaciones(){
  const grid = document.getElementById('recGrid');
  grid.innerHTML = recomendaciones.map(r => `
    <div class="rec-card">
      <img src="${r.img}" alt="${r.titulo}" loading="lazy">
      <div class="rec-card-body">
        <h3>${r.titulo}</h3>
        <p>${r.texto}</p>
      </div>
    </div>
  `).join('');
}

let plantasVisibles = 6;
function renderPlantas(lista){
  const grid = document.getElementById('plantGrid');
  const mostrar = lista.slice(0, plantasVisibles);
  if(mostrar.length === 0){
    grid.innerHTML = `<div class="no-results">No encontramos plantas que coincidan con tu búsqueda 🌱</div>`;
    document.getElementById('loadMoreBtn').style.display = 'none';
    return;
  }
  grid.innerHTML = mostrar.map(p => `
    <div class="plant-card">
      <img src="${p.img}" alt="${p.nombre}" loading="lazy">
      <div class="plant-card-body">
        <h3>${p.nombre}</h3>
        <p>${p.desc}</p>
        <span class="plant-tag">${p.tag}</span>
      </div>
    </div>
  `).join('');
  document.getElementById('loadMoreBtn').style.display = lista.length > plantasVisibles ? 'inline-flex' : 'none';
}

function renderCuidados(){
  const list = document.getElementById('careList');
  list.innerHTML = cuidados.map(c => `
    <div class="care-item">
      <img src="${c.img}" alt="${c.nombre}" loading="lazy">
      <div>
        <h3>${c.nombre}</h3>
        <div class="care-meta">
          <div>💧 <strong>Riego:</strong>&nbsp;${c.riego}</div>
          <div>☀️ <strong>Luz:</strong>&nbsp;${c.luz}</div>
          <div>🌡️ <strong>Temperatura:</strong>&nbsp;${c.temp}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderBeneficios(){
  const grid = document.getElementById('benefitGrid');
  grid.innerHTML = beneficios.map(b => `
    <div class="benefit-card">
      <div class="benefit-ic">${b.ic}</div>
      <h3>${b.titulo}</h3>
      <p>${b.texto}</p>
    </div>
  `).join('');
}

renderRecomendaciones();
renderPlantas(plantas);
renderCuidados();
renderBeneficios();

/* ============ BUSCADOR / FILTRO ============ */
const searchInput = document.getElementById('plantSearch');
searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  plantasVisibles = 6; // reinicia paginación al buscar
  const filtradas = plantas.filter(p =>
    p.nombre.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q) ||
    p.tag.toLowerCase().includes(q)
  );
  renderPlantas(filtradas);
});

/* ============ CARGAR MÁS ============ */
document.getElementById('loadMoreBtn').addEventListener('click', () => {
  plantasVisibles += 6;
  const q = searchInput.value.trim().toLowerCase();
  const filtradas = plantas.filter(p =>
    p.nombre.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q) ||
    p.tag.toLowerCase().includes(q)
  );
  renderPlantas(filtradas);
});

/* ============ FORMULARIO DE CONTACTO ============ */
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.classList.add('show');
  contactForm.reset();
  setTimeout(() => formMsg.classList.remove('show'), 6000);
});

/* ============ MENÚ MÓVIL ============ */
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});
document.querySelectorAll('#mainNav a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});
