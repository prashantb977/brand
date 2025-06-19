// Animated Counters
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;
    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// Popup on Scroll
window.addEventListener('scroll', () => {
  const popup = document.getElementById('popup');
  if (window.scrollY > 500) {
    popup.style.display = 'block';
  }
});

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
