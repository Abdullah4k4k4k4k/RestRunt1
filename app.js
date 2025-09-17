// simple slider
const slides = document.getElementById('slides');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let idx = 0;
function updateSlider(){
  slides.style.transform = `translateX(-${idx * 100}%)`;
}
next.addEventListener('click', ()=>{ idx = (idx+1) % slides.children.length; updateSlider(); });
prev.addEventListener('click', ()=>{ idx = (idx-1+slides.children.length) % slides.children.length; updateSlider(); });

// auto slide every 6s
setInterval(()=>{ idx = (idx+1) % slides.children.length; updateSlider(); }, 6000);

// search demo
document.getElementById('searchBtn').addEventListener('click', ()=>{
  const q = document.getElementById('searchInput').value.trim();
  if(!q) return alert('اكتب شيء للبحث');
  alert('بحث تجريبي عن: ' + q);
});
