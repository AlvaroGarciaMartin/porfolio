
document.querySelectorAll('.section').forEach(section => {
  section.addEventListener('mouseenter', () => {
    section.classList.add('expanded');
  });

  section.addEventListener('mouseleave', () => {
    section.classList.remove('expanded');
  });
});

