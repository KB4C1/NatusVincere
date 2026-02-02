const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });
cards.forEach(card => observer.observe(card));

document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();

    const card = button.closest('.card');
    const moreText = card.querySelector('.more-text');

    const isOpen = moreText.classList.contains('open');

    moreText.classList.toggle('open');
    button.textContent = isOpen ? 'Show more' : 'Show less';
  });
});
