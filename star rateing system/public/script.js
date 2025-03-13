document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
  
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const value = parseInt(star.getAttribute('data-value'));
  
        stars.forEach(s => {
          s.classList.toggle('selected', parseInt(s.getAttribute('data-value')) <= value);
        });
      });
    });
  });
  