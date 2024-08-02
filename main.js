function updatemenu() {
    if (document.getElementById('responsive-menu').checked) {
        document.getElementById('menu').style.borderBottomRightRadius = '0';
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '10px';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const themes = document.querySelectorAll('input[name="theme"]');
    themes.forEach((theme) => {
        theme.addEventListener('change', function() {
            document.documentElement.setAttribute('data-theme', this.value);
        });
    });
});
