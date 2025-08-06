// sites/site.js

export async function loadSite(id) {
  const panel = document.getElementById(`site${id}`);
  if (!panel) return;

  // … fetch & inject site-content …

  // Clone the main-page header
  const liveHeader = document.getElementById('siteHeader');
  const cloned     = liveHeader.cloneNode(true);
  cloned.removeAttribute('id');

  // Hide the “CURIOUS?” message in the cloned header
  const curious = cloned.querySelector('.curious');
  if (curious) curious.style.display = 'none';

  // Ensure the back-button is visible
  const backBtn = cloned.querySelector('.back-button');
  backBtn.style.display = 'inline-block';

  // Prepend to the panel
  panel.insertBefore(cloned, panel.firstChild);

  // Hook up the back-button
  backBtn.addEventListener('click', () => {
    panel.classList.remove('show');
    panel.classList.add('hidden');
    document.getElementById('mainBody').classList.add('lock-scroll');
  });

  // Show the panel
  panel.classList.remove('hidden');
  panel.classList.add('show');
}
