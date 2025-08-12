export async function loadSite(id) {
  const panelId = `site${id}`;
  let panel = document.getElementById(panelId);

  // If panel doesn't exist yet, fetch and inject it
  if (!panel) {
    try {
      const response = await fetch(`sites/${panelId}.html`);
      const html = await response.text();

      // Create a temporary wrapper to parse HTML
      const temp = document.createElement('div');
      temp.innerHTML = html;

      // Extract the section#siteX
      const section = temp.querySelector(`#${panelId}`);
      if (section) {
        document.body.appendChild(section);
        panel = section;
      } else {
        console.error(`No #${panelId} section found in sites/${panelId}.html`);
        return;
      }
    } catch (err) {
      console.error(`Error loading site ${id}:`, err);
      return;
    }
  }

  // Avoid adding duplicate headers
  if (!panel.querySelector('.site-header.cloned')) {
    const liveHeader = document.getElementById('siteHeader');
    if (liveHeader) {
      const cloned = liveHeader.cloneNode(true);
      cloned.classList.add('cloned');
      cloned.removeAttribute('id');

      // Hide "CURIOUS?" if it exists
      const curious = cloned.querySelector('.curious');
      if (curious) curious.style.display = 'none';

      // Ensure the back-button is visible
      const backBtn = cloned.querySelector('.back-button');
      if (backBtn) {
        backBtn.style.display = 'inline-block';
        backBtn.addEventListener('click', () => {
          panel.classList.remove('show');
          setTimeout(() => panel.classList.add('hidden'), 800);
          document.getElementById('mainBody').classList.add('lock-scroll');
        });
      }

      panel.insertBefore(cloned, panel.firstChild);
    }
  }

  // Show the panel
  panel.classList.remove('hidden');
  setTimeout(() => panel.classList.add('show'), 50);
  document.getElementById('mainBody').classList.remove('lock-scroll');
}
