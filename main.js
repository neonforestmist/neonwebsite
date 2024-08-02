function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
        document.getElementById('menu').style.borderBottomRightRadius = '0';
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '10px';
    }
}

function setTheme(themeName) {
    var themeLink = document.getElementById('theme-link');
    themeLink.href = themeName + ".css";
    localStorage.setItem('theme', themeName);
}

window.onload = function() {
    var theme = localStorage.getItem('theme');
    if (theme) {
        setTheme(theme);
    }
};
