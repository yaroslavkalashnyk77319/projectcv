const themeToggleBtn = document.getElementById('themeToggleBtn');
const visibilityToggleBtn = document.getElementById('visibilityToggleBtn');
const doswiadczenieSection = document.getElementById('doswiadczenie');

themeToggleBtn.addEventListener('click', function() {
    if (document.body.classList.contains('theme-green')) {
        document.body.classList.replace('theme-green', 'theme-red');
        themeToggleBtn.textContent = 'Zmień motyw na zielony';
    } else {
        document.body.classList.replace('theme-red', 'theme-green');
        themeToggleBtn.textContent = 'Zmień motyw na czerwony';
    }
});

visibilityToggleBtn.addEventListener('click', function() {
    doswiadczenieSection.classList.toggle('hidden');
    
    if (doswiadczenieSection.classList.contains('hidden')) {
        visibilityToggleBtn.textContent = 'Pokaż sekcję "Doświadczenie"';
    } else {
        visibilityToggleBtn.textContent = 'Ukryj sekcję "Doświadczenie"';
    }
});
