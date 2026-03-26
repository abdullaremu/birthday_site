
/* ----- Intro Section ----- */
const intro = document.getElementById('intro');
const content = document.getElementById('content');
const enterBtn = document.getElementById('enterBtn');

function enterSite() {
  intro.classList.add('fade-out');
  setTimeout(() => {
    intro.style.display = 'none';
    content.classList.remove('hidden');
    window.scrollTo(0, 0);
    bgMusic.volume = 0.25;
    bgMusic.play().catch(() => {/* browsers may block auto-play */});
  }, 1000);
}
enterBtn.addEventListener('click', enterSite);
setTimeout(enterSite, 4000);  // auto proceed after 4s

/* ----- Fade on Scroll ----- */
const sections = document.querySelectorAll('.story');
const appearOptions = { threshold: 0.3 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

sections.forEach(sec => appearOnScroll.observe(sec));



/* ----- Music Control ----- */
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
bgMusic.volume = 0.25;
let playing = false;

musicToggle.addEventListener('click', () => {
  if (playing) {
    bgMusic.pause();
    musicToggle.textContent = '🎵 Play Music';
  } else {
    bgMusic.play();
    musicToggle.textContent = '⏸ Pause Music';
  }
  playing = !playing;
});
