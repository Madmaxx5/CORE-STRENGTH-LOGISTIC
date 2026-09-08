/** Mobile navigation toggle. Used by every page via main.js. */

/**
 * Wires the hamburger button to show and hide the primary nav, keeping
 * aria-expanded in sync for screen readers. No-ops if either element is absent.
 */
export function initNav() {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.navlinks');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
}
