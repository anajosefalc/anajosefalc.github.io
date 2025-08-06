// script.js

// 1) Import your shared modules
import { initSiteButtons } from './buttons/site-button.js';
import { loadSite }        from './sites/site.js';

console.log('script.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded fired');

  // 2) Grab your hero elements
  const blurLayer      = document.getElementById('blur-layer');
  const heroText       = document.getElementById('heroText');
  const secondaryText  = document.getElementById('secondaryText');
  const pickSite       = document.getElementById('pickSite');
  const heroDots       = document.getElementById('heroDots');
  const siteHeader     = document.getElementById('siteHeader');
  const learnMore      = document.getElementById('learnMore');
  const body           = document.getElementById('mainBody');
  const about          = document.getElementById('aboutSection');
  const curiousMessage = document.getElementById('curiousMessage');
  const backButton     = document.getElementById('backButton');
  const siteImg        = document.getElementById('site1-img');

  // 3) Initialize your “SITE 1” (and others) button row
  initSiteButtons();

  // 4) Hero intro animation sequence
  setTimeout(() => { heroText.classList.add('show'); }, 1000);
  setTimeout(() => { secondaryText.classList.add('show'); }, 2000);
  setTimeout(() => {
    heroText.classList.remove('show');
    secondaryText.classList.remove('show');
    blurLayer.classList.add('fade-out');
  }, 4000);
  setTimeout(() => {
    pickSite.classList.add('show');
    heroDots.classList.add('show');
    siteHeader.classList.add('show');
  }, 5000);
  setTimeout(() => {
    learnMore.classList.add('visible');
    learnMore.style.pointerEvents = 'auto';
  }, 6500);

  // 5) Fade‐in the site perimeter image
  setTimeout(() => {
    siteImg.classList.add('show');
  }, 5000);

  // 6) “Learn More” → show About panel
  learnMore.addEventListener('click', () => {
    body.classList.remove('lock-scroll');
    about.classList.remove('hidden');
    about.classList.add('show');
    curiousMessage.classList.add('hidden');
    backButton.classList.remove('hidden');
  });

  // 7) “Back to Map” from About → hide About
  backButton.addEventListener('click', () => {
    about.classList.remove('show');
    setTimeout(() => {
      about.classList.add('hidden');
    }, 1500);
    curiousMessage.classList.remove('hidden');
    backButton.classList.add('hidden');
    body.classList.add('lock-scroll');
  });

  // 8) Site 1 outline click → load Site 1 panel
  siteImg.addEventListener('click', () => {
    loadSite(1);
  });

  // (Optional) If you inject buttons for Site 1, hook them up too:
  document.querySelectorAll('.btn--site[data-site]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.getAttribute('data-site'));
      loadSite(id);
    });
  });
});
