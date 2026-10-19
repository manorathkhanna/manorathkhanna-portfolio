const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.work-card')];
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.toggle('active', item === button));
  const value = button.dataset.filter;
  cards.forEach(card => card.hidden = value !== 'all' && !card.dataset.tags.split(' ').includes(value));
}));
const career = {
  icici: { label: 'CURRENT CHAPTER', title: 'ICICI Bank', text: 'Working across product and customer experience in digital banking. Focused on making complex journeys easier to understand and improving how teams act on customer signals.', chips: ['Product', 'Digital banking', 'Customer experience'] },
  gs: { label: '2022 · BUSINESS INTELLIGENCE', title: 'Goldman Sachs', text: 'Worked with business intelligence, translating information into useful analysis and supporting clearer decisions across teams.', chips: ['Business intelligence', 'Analytics', 'Insights'] },
  equiseed: { label: '2021 · STRATEGY & PRODUCT', title: 'Equiseed Wealth', text: 'Explored strategy and product in wealth, helping connect user needs with thoughtful digital experiences.', chips: ['Strategy', 'Product', 'Wealth'] }
};
const panel = document.querySelector('#career-panel');
document.querySelectorAll('.career-tab').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.career-tab').forEach(tab => { const active = tab === button; tab.classList.toggle('selected', active); tab.setAttribute('aria-selected', active); });
  const item = career[button.dataset.career];
  panel.innerHTML = `<div class="panel-label">${item.label}</div><h3>${item.title}</h3><p>${item.text}</p><div class="chips">${item.chips.map(chip => `<span>${chip}</span>`).join('')}</div>`;
}));
document.querySelector('#theme-toggle').addEventListener('click', () => document.body.classList.toggle('dark-mode'));
document.querySelector('#menu-toggle').addEventListener('click', () => document.querySelector('.topbar nav').classList.toggle('open'));
document.querySelectorAll('.topbar nav a').forEach(link => link.addEventListener('click', () => document.querySelector('.topbar nav').classList.remove('open')));
document.querySelector('#year').textContent = new Date().getFullYear();
