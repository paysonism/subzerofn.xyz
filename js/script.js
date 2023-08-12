const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.question');
  const answer = item.querySelector('.answer');
  question.addEventListener('click', () => {
    item.classList.toggle('opened');
    answer.classList.toggle('show');
  });
});
