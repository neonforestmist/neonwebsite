function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
        document.getElementById('menu').style.borderBottomRightRadius = '0';
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '10px';
    }
}

function setTheme(themeName) {
    // Remove the existing theme class
    document.body.classList.remove('theme1', 'theme2', 'theme3');
    // Add the new theme class
    document.body.classList.add(themeName);
    // Save the selected theme to localStorage
    localStorage.setItem('theme', themeName);
    // Update the checkboxes
    updateThemeCheckboxes(themeName);
}

function updateThemeCheckboxes(themeName) {
    document.getElementById('theme1').checked = themeName === 'theme1';
    document.getElementById('theme2').checked = themeName === 'theme2';
    document.getElementById('theme3').checked = themeName === 'theme3';
}

// On page load, apply the saved theme
window.onload = function() {
    const savedTheme = localStorage.getItem('theme') || 'theme1';
    setTheme(savedTheme);
};
