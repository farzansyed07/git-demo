function toggleDarkMode() {
    var stylesheet = document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'styles.css') {
        stylesheet.setAttribute('href', 'dark-mode.css'); // Change to dark mode stylesheet
        document.body.classList.add('dark-mode'); // Add dark-mode class to body
    } else {
        stylesheet.setAttribute('href', 'styles.css'); // Change back to light mode stylesheet
        document.body.classList.remove('dark-mode'); // Remove dark-mode class from body
    }
}
