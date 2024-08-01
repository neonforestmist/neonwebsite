function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
        document.getElementById('menu').style.borderBottomRightRadius = '0';
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '10px';
    }
}

// manages the themes
function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}
// loads themes
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'theme1';
    setTheme(savedTheme);

    const themeRadio = document.getElementById(savedTheme);
    if (themeRadio) {
        themeRadio.checked = true;
    }

    const themeRadios = document.querySelectorAll('input[name="theme"]');
    themeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            setTheme(this.value);
        });
    });
});