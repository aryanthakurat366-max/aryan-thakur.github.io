// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 60) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// Hero photo switcher
function switchHero(thumb, src) {
  document.getElementById('heroImg').src = src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

// Auto-rotate hero photos
const photos = ['aryan 1.jpeg.jpeg','aryan 2.jpeg.jfif','aryan3.jpeg.jpeg','aryan4.jpeg.jpeg','aryan5.jpeg.jpeg'];
let idx = 0;
setInterval(() => {
  idx = (idx + 1) % photos.length;
  const thumbs = document.querySelectorAll('.thumb');
  switchHero(thumbs[idx], photos[idx]);
}, 3500);

// Fade-up on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.acad-card, .project-card, .skill-item, .lang-card, .timeline-item')
  .forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });

// Hamburger menu
document.getElementById('hamburger').addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  links.style.flexDirection = 'column';
  links.style.position = 'absolute';
  links.style.top = '60px';
  links.style.left = '0';
  links.style.right = '0';
  links.style.background = 'rgba(0,0,0,0.97)';
  links.style.padding = '1rem 2rem 2rem';
  links.style.gap = '1.5rem';
  links.style.borderBottom = '1px solid #8b0000';
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? '#cc0000' : '';
  });
});
