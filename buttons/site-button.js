// site-button.js

export function initSiteButtons() {
  const container = document.getElementById('siteButtonsContainer');
  if (!container) return;

  // Create the Site 1 button
  const btn = document.createElement('button');
  btn.classList.add('btn--site');
  btn.dataset.site = '1';
  btn.textContent = 'SITE 1';

  container.appendChild(btn);

  // All site buttons (we only have one for now)
  const buttons = container.querySelectorAll('.btn--site');

  buttons.forEach(b => {
    b.addEventListener('click', () => {
      // 1) Toggle active state
      buttons.forEach(x => x.classList.remove('active'));
      b.classList.add('active');

      // 2) Handle “go to site” logic:
      // For example, update the URL hash
      window.location.hash = `#site${b.dataset.site}`;

      // Or call your map loader:
      // loadSiteProposal(b.dataset.site);
    });
  });
}
