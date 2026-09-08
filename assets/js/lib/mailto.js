/**
 * Builds the service-request email from plain form values.
 *
 * No DOM, no globals: it takes an object and returns strings, which makes it
 * the one piece of this site that can be tested without a browser.
 */

const RECIPIENT = 'KanaEllison@CoreStrengthLogistics.com';
const SUBJECT = 'Service Request – Core Strength Logistics';

/**
 * @typedef {Object} ServiceRequest
 * @property {string} [name]     Name or company.
 * @property {string} [phone]
 * @property {string} [email]
 * @property {string} [service]  Selected service type.
 * @property {string} [pickup]   Pickup area, city or ZIP.
 * @property {string} [delivery] Delivery area, city or ZIP.
 * @property {string} [datetime] Requested date and time.
 * @property {string} [details]  Free-text delivery details.
 */

/**
 * Renders the plain-text email body. Missing fields become empty strings so
 * the reader always sees the full set of labels.
 *
 * @param {ServiceRequest} fields
 * @returns {string} The email body, newline separated.
 */
export function buildRequestBody(fields) {
  return [
    'Core Strength Logistics service request',
    '',
    `Name: ${fields.name || ''}`,
    `Phone: ${fields.phone || ''}`,
    `Email: ${fields.email || ''}`,
    `Service: ${fields.service || ''}`,
    `Pickup area: ${fields.pickup || ''}`,
    `Delivery area: ${fields.delivery || ''}`,
    `Requested date/time: ${fields.datetime || ''}`,
    '',
    'Details:',
    fields.details || ''
  ].join('\n');
}

/**
 * Renders the full mailto: URL the browser hands to the user's mail client.
 *
 * @param {ServiceRequest} fields
 * @returns {string} A mailto: URL with encoded subject and body.
 */
export function buildMailtoUrl(fields) {
  return `mailto:${RECIPIENT}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(buildRequestBody(fields))}`;
}
