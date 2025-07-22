const questions = document.querySelectorAll('.faq__question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const isActive = question.classList.contains('active');

    // Close all
    questions.forEach((btn) => {
      btn.classList.remove('active');
      btn.nextElementSibling.classList.remove('open');
    });

    // Open current
    if (!isActive) {
      question.classList.add('active');
      question.nextElementSibling.classList.add('open');
    }
  });
});
