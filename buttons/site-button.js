// buttons/site-button.js

export function initSiteButtons() {
  const container = document.getElementById('siteButtonsContainer');
  if (!container) return;

  // Show the container
  container.classList.remove('hidden');
  container.classList.add('flex', 'gap-4', 'absolute', 'bottom-10', 'left-1/2', 'transform', '-translate-x-1/2', 'z-20');

  // === Create Site 1 button ===
  const btn = document.createElement('button');
  btn.dataset.site = '1';
  btn.textContent = 'SITE 1';

  // Tailwind classes for default state
  btn.className = [
    'btn--site',                  // optional, for targeting via script
    'text-[1vw]',
    'font-medium',
    'bg-[rgba(255,255,234,0.8)]',
    'text-[#1e1e1e]',
    'px-4', 'py-2', 'rounded',
    'transition',
    'duration-200',
    'ease-in-out',
    'hover:-translate-y-0.5',
    'cursor-pointer'
  ].join(' ');

  container.appendChild(btn);

  // === Activate click handlers ===
  const buttons = container.querySelectorAll('.btn--site');

  buttons.forEach(b => {
    b.addEventListener('click', () => {
      // 1. Remove active styles from all buttons
      buttons.forEach(x => {
        x.classList.remove('bg-accent', 'text-yellow-50');
        x.classList.add('bg-[rgba(255,255,234,0.8)]', 'text-[#1e1e1e]');
      });

      // 2. Add active styles to clicked button
      b.classList.remove('bg-[rgba(255,255,234,0.8)]', 'text-[#1e1e1e]');
      b.classList.add('bg-accent', 'text-yellow-50');

      // 3. Update hash or call map logic
      window.location.hash = `#site${b.dataset.site}`;
      // Optional: call your site loading logic here
      // loadSiteProposal(b.dataset.site);
    });
  });
}
