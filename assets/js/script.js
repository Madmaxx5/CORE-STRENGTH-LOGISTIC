const menu = document.querySelector('.menu');
const nav = document.querySelector('.navlinks');
if(menu && nav){
  menu.addEventListener('click', ()=>{
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
const quoteForm = document.querySelector('#quote-form');
if(quoteForm){
  quoteForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const f = new FormData(quoteForm);
    const body = [
      'Core Strength Logistics service request',
      '',
      `Name: ${f.get('name') || ''}`,
      `Phone: ${f.get('phone') || ''}`,
      `Email: ${f.get('email') || ''}`,
      `Service: ${f.get('service') || ''}`,
      `Pickup area: ${f.get('pickup') || ''}`,
      `Delivery area: ${f.get('delivery') || ''}`,
      `Requested date/time: ${f.get('datetime') || ''}`,
      '',
      'Details:',
      f.get('details') || ''
    ].join('\n');
    window.location.href = `mailto:KanaEllison@CoreStrengthLogistics.com?subject=${encodeURIComponent('Service Request – Core Strength Logistics')}&body=${encodeURIComponent(body)}`;
  });
}