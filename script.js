document.addEventListener('DOMContentLoaded', () => {
  const blurLayer = document.querySelector('.background-blur');
  const heroText = document.querySelector('.hero-text');
  const secondaryText = document.querySelector('.secondary-text');
  const pickSite = document.querySelector('.pick-site');
  const heroDots = document.querySelector('.hero-dots');
  const siteHeader = document.querySelector('.site-header');

  // Show main hero text after 1s
  setTimeout(() => {
    heroText.classList.add('show');
  }, 1000);

  // Show secondary text after 2s
  setTimeout(() => {
    secondaryText.classList.add('show');
  }, 2000);

  // Remove both texts together after 4s
  setTimeout(() => {
    heroText.classList.remove('show');
    secondaryText.classList.remove('show');
  }, 4000);

  // Fade out blur layer after 4s
  setTimeout(() => {
    blurLayer.classList.add('fade-out');
  }, 4000);

  // Show interface elements after 5s
  setTimeout(() => {
    pickSite.classList.add('show');
    heroDots.classList.add('show');
    siteHeader.classList.add('show');
  }, 5000);
});
