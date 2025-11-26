function toggleResearchInfo() {
            const info = document.getElementById("research-info");
            info.style.display = info.style.display === "block" ? "none" : "block";
        }
        function showSection(sectionId) {
            const sections = document.querySelectorAll('.content-section');
            sections.forEach(section => section.style.display = 'none');
            const selectedSection = document.getElementById(sectionId);
            if (selectedSection) {
                selectedSection.style.display = 'block';
            }
        }
        function cycleRRAImages() {
            const images = document.querySelectorAll('#RRA .image-sequence img');
            let currentIndex = 0;
            function showNextImage() {
                images.forEach(img => img.classList.remove('active'));
                images[currentIndex].classList.add('active');
                currentIndex = (currentIndex + 1) % images.length;
                setTimeout(showNextImage, 4000);
            }
            showNextImage();
        }
        function toggleForm() {
            const formSection = document.getElementById("formSection");
            formSection.style.display = formSection.style.display === "none" ? "block" : "none";
        }
        document.addEventListener('DOMContentLoaded', () => {
            showSection('home');
            fetch('https://raw.githubusercontent.com/bikas-basnet/Experimental-Design-Aanlysis-code/main/HSD-data.html')
                .then(response => response.text())
                .then(data => document.getElementById('hsd-results').innerHTML = data)
                .catch(error => {
                    document.getElementById('hsd-results').innerHTML = 'Failed to load results. <a href="https://github.com/bikas-basnet/Experimental-Design-Aanlysis-code/main/HSD-data.html" target="_blank">View on GitHub</a>';
                });
        });
        function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close mobile menu when clicking a link (optional but nice UX)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-links').classList.remove('active');
            document.querySelector('.hamburger').classList.remove('active');
        }
    });
});