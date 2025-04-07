// Load banner.html dynamically into the page
fetch('banner.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('banner-placeholder').innerHTML = data;
    });
