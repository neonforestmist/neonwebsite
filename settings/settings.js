document.addEventListener('DOMContentLoaded', function() {
    // Switch between tabs
    const tabs = document.querySelectorAll('.settings-menu ul li');
    const tabContents = document.querySelectorAll('.settings-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));

            // Show the corresponding tab content
            const activeTab = document.getElementById(tab.dataset.tab);
            activeTab.classList.add('active');
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('change', function() {
        if (darkModeToggle.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    // Mist Effect Toggle
    const mistToggle = document.getElementById('mist-toggle');
    mistToggle.addEventListener('change', function() {
        if (mistToggle.checked) {
            document.body.classList.add('mist-effect');
        } else {
            document.body.classList.remove('mist-effect');
        }
    });

    // Rain Animation Toggle
    const rainToggle = document.getElementById('rain-toggle');
    rainToggle.addEventListener('change', function() {
        if (rainToggle.checked) {
            document.body.classList.add('rain-animation');
        } else {
            document.body.classList.remove('rain-animation');
        }
    });

    // Background Music Toggle
    const backgroundMusicToggle = document.getElementById('background-music-toggle');
    backgroundMusicToggle.addEventListener('change', function() {
        const audio = document.querySelector('audio');
        if (backgroundMusicToggle.checked) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});
