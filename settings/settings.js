document.addEventListener('DOMContentLoaded', function() {
    // Tab Navigation
    const menuLinks = document.querySelectorAll('.settings-menu a');
    const tabs = document.querySelectorAll('.settings-tab');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            menuLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            const targetTab = this.getAttribute('data-tab');
            tabs.forEach(tab => tab.classList.remove('active'));
            document.getElementById(targetTab).classList.add('active');
        });
    });

    const settings = {
        'dark-mode-toggle': false,
        'mist-toggle': false,
        'rain-toggle': false,
        'background-music-toggle': false
    };

    // Load settings from localStorage
    Object.keys(settings).forEach(id => {
        const toggle = document.getElementById(id);
        const savedState = localStorage.getItem(id);
        if (savedState === 'true') {
            toggle.checked = true;
            applySetting(id, true);
        }
        toggle.addEventListener('change', function() {
            localStorage.setItem(id, toggle.checked);
            applySetting(id, toggle.checked);
        });
    });

    function applySetting(id, state) {
        switch (id) {
            case 'dark-mode-toggle':
                document.body.classList.toggle('dark-mode', state);
                break;
            case 'mist-toggle':
                // Handle mist toggle
                break;
            case 'rain-toggle':
                // Handle rain toggle
                break;
            case 'background-music-toggle':
                handleBackgroundMusic(state);
                break;
        }
    }

    function handleBackgroundMusic(state) {
        if (state) {
            // Check if audio element exists
            let audio = document.getElementById('background-music');
            if (!audio) {
                // Create new audio element
                audio = document.createElement('audio');
                audio.id = 'background-music';
                audio.src = 'path_to_your_music_file.mp3'; // Replace with the actual path to your music file
                audio.loop = true;
                document.body.appendChild(audio);
            }
            audio.play();
        } else {
            const audio = document.getElementById('background-music');
            if (audio) {
                audio.pause();
            }
        }
    }
});
