/**
 * Entry point for contact.html only.
 *
 * The site has no backend, so submitting the form opens the visitor's mail
 * client with the request pre-filled rather than posting anywhere.
 */

import { buildMailtoUrl } from './lib/mailto.js';

const quoteForm = document.querySelector('#quote-form');

quoteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const fields = Object.fromEntries(new FormData(quoteForm));
  window.location.href = buildMailtoUrl(fields);
});
