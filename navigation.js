// JavaScript for Navigation functionality
document.addEventListener("DOMContentLoaded", function() {
    // Select all sections and navigation links
    const sections = document.querySelectorAll('.container'); // All sections in the main content
    const navLinks = document.querySelectorAll('nav a'); // All navigation links

    // Function to hide all sections
    function hideAllSections() {
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    // Add event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior (page jump)

            hideAllSections(); // Hide all sections before displaying the clicked one

            const targetSection = document.querySelector(link.getAttribute('href')); // Get the target section
            targetSection.style.display = 'block'; // Show the clicked section
        });
    });

    // Initially show the 'home' section by default when the page loads
    document.querySelector('#home').style.display = 'block';
});
