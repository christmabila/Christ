// Slider On-netflix

const slider = document.getElementById('slider');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

function getSlideAndGap() {
  const slide = document.querySelector('.slide');
  const gap = parseInt(getComputedStyle(slider).gap) || 16;
  return { slide, gap };
}

function getScrollAmount() {
  const { slide, gap } = getSlideAndGap();
  return (slide.offsetWidth + gap) * 2;
}

function updateButtons() {
  const scrollLeft = Math.round(slider.scrollLeft);
  const maxScrollLeft = Math.round(slider.scrollWidth - slider.clientWidth);

  leftBtn.classList.toggle('hidden', scrollLeft <= 0);
  rightBtn.classList.toggle('hidden', scrollLeft >= maxScrollLeft - 2 || maxScrollLeft <= 0);
}

leftBtn.addEventListener('click', () => {
  const { slide, gap } = getSlideAndGap();
  const scrollLeft = slider.scrollLeft;
  const slideWidthWithGap = slide.offsetWidth + gap;

  // Calculate how many full slides are off-screen to the left
  const currentIndex = Math.floor(scrollLeft / slideWidthWithGap);
  const newIndex = Math.max(0, currentIndex - 2);
  const newScrollPosition = newIndex * slideWidthWithGap;

  slider.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  const { slide, gap } = getSlideAndGap();
  const scrollLeft = slider.scrollLeft;
  const slideWidthWithGap = slide.offsetWidth + gap;

  // Scroll forward by exactly 2 slides
  const newScrollPosition = scrollLeft + (slideWidthWithGap * 2);
  slider.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
});

slider.addEventListener('scroll', updateButtons);
window.addEventListener('resize', updateButtons);
window.addEventListener('load', updateButtons);


// Button FAQ


const questions = document.querySelectorAll('.faq-question');

questions.forEach(q => {
  q.addEventListener('click', () => {
    const isActive = q.classList.contains('active');

    // Close all
    questions.forEach(btn => {
      btn.classList.remove('active');
      btn.nextElementSibling.style.display = 'none';
    });

    // Toggle current
    if (!isActive) {
      q.classList.add('active');
      q.nextElementSibling.style.display = 'block';
    }
  });
});
