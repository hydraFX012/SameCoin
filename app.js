// app.js — demo interactions only
document.addEventListener('DOMContentLoaded', () => {
  const buyBtn = document.getElementById('buyBtn');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');
  const learnBtn = document.getElementById('learnBtn');

  buyBtn.addEventListener('click', () => {
    // show the demo modal with explicit warnings
    modal.classList.remove('hidden');
    // focus for accessibility
    closeModal.focus();
  });

  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Extra behavior: learn more shows a short mock tokenomics explanation
  learnBtn.addEventListener('click', () => {
    alert('This is a mock page. Real tokenomics require legal compliance and clear disclosures.');
  });

  // Accessibility: escape closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  });
});
