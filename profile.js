// profile.js — small creative interactions
const avatarInput = document.getElementById('avatarInput');
const avatarImg = document.getElementById('avatarImg');
const downloadBtn = document.getElementById('downloadCv');
const toggle = document.getElementById('toggleTheme');

// Avatar upload preview
avatarInput?.addEventListener('change', (e)=>{
  const file = e.target.files && e.target.files[0];
  if(!file) return;
  const url = URL.createObjectURL(file);
  avatarImg.src = url;
});

// Download CV if exists
downloadBtn?.addEventListener('click', ()=>{
  fetch('assets/CV.pdf', {method:'HEAD'})
    .then(res=>{
      if(res.ok){
        window.location.href = 'assets/CV.pdf';
      } else {
        alert('CV not found — drop your CV to assets/CV.pdf and I can wire auto-download.');
      }
    }).catch(()=>alert('CV not found — drop your CV to assets/CV.pdf and I can wire auto-download.'));
});

// Theme toggle: swap data-theme on html
toggle?.addEventListener('click', ()=>{
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'light' ? null : 'light';
  if(next) document.documentElement.setAttribute('data-theme', next); else document.documentElement.removeAttribute('data-theme');
  // small feedback
  toggle.querySelector('.theme-icon').textContent = next ? '☀️' : '🌙';
});

// small animation for skill badges
document.querySelectorAll('.skill-badge').forEach(b=>{
  b.addEventListener('mouseenter', ()=>{ b.animate([{transform:'translateY(0) scale(1)'},{transform:'translateY(-6px) scale(1.06)'}],{duration:260,fill:'forwards'}); });
  b.addEventListener('mouseleave', ()=>{ b.animate([{transform:'translateY(-6px) scale(1.06)'},{transform:'translateY(0) scale(1)'}],{duration:260,fill:'forwards'}); });
});
