// navigation.js
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav a");
  
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();  // Prevent the default anchor behavior
      const targetSection = document.querySelector(this.getAttribute("href"));
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 20,  // Optional: adjust scroll position
          behavior: "smooth"
        });
      }
    });
  });
});
