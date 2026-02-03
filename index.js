// Simple interactions for index page
const search = document.getElementById('search');
const toggle = document.getElementById('toggleTheme');
const cards = Array.from(document.querySelectorAll('.card'));

// Staggered reveal
window.addEventListener('DOMContentLoaded',()=>{
  cards.forEach((c,i)=>setTimeout(()=>c.classList.add('show'), i*70));
  // restore theme
  const theme = localStorage.getItem('site-theme');
  if(theme) document.documentElement.setAttribute('data-theme', theme);
});

search?.addEventListener('input', (e)=>{
  const q = (e.target.value || '').toLowerCase().trim();
  cards.forEach(c=>{
    const text = c.textContent.toLowerCase();
    const match = !q || text.includes(q);
    c.style.display = match ? '' : 'none';
  });
});

toggle?.addEventListener('click', ()=>{
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'light' ? null : 'light';
  if(next) document.documentElement.setAttribute('data-theme', next); else document.documentElement.removeAttribute('data-theme');
  localStorage.setItem('site-theme', next || '');
  toggle.setAttribute('aria-pressed', next ? 'true' : 'false');
});
