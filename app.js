// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

// Function to handle the fade-in effect for sections
function handleScroll() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom >= 0;
      if (inView) {
        section.classList.add('in-view');
      } else {
        section.classList.remove('in-view');
      }
    });
  }

// Attach the scroll event listener to apply the fade-in effect
window.addEventListener('scroll', handleScroll);

// Call handleScroll on page load to apply initial animations
window.addEventListener('load', handleScroll);

// Function to handle the fade-in effect for separators
function handleSeparatorScroll() {
    const separators = document.querySelectorAll('.separator');
    separators.forEach(separator => {
      const rect = separator.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom >= 0;
      if (inView) {
        separator.classList.add('in-view');
      } else {
        separator.classList.remove('in-view');
      }
    });
  }

// Attach the scroll event listener to apply the fade-in effect to separators
window.addEventListener('scroll', handleSeparatorScroll);

// Call handleSeparatorScroll on page load to apply initial animations
window.addEventListener('load', handleSeparatorScroll);

// JavaScript function to toggle the navigation menu
function toggleNav() {
    const header = document.querySelector('.header');
    header.classList.toggle('show-nav');
}
