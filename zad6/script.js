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

const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    document.getElementById('firstNameError').textContent = '';
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    let isValid = true;
    const hasNumbers = /\d/;

    if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'Pole Imię jest wymagane.';
        isValid = false;
    } else if (hasNumbers.test(firstName)) {
        document.getElementById('firstNameError').textContent = 'Imię nie może zawierać cyfr.';
        isValid = false;
    }

    if (lastName === '') {
        document.getElementById('lastNameError').textContent = 'Pole Nazwisko jest wymagane.';
        isValid = false;
    } else if (hasNumbers.test(lastName)) {
        document.getElementById('lastNameError').textContent = 'Nazwisko nie może zawierać cyfr.';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Pole E-mail jest wymagane.';
        isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').textContent = 'Podaj poprawny adres e-mail.';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'Wiadomość nie może być pusta.';
        isValid = false;
    }

    if (isValid) {
        alert('Formularz wysłany poprawnie! (Numer indeksu: 77319)');
        form.reset(); 
    }
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response error');
            }
            return response.json();
        })
        .then(data => {
            const skillsList = document.getElementById('skillsList');
            data.umiejetnosci.forEach(umiejetnosc => {
                const li = document.createElement('li');
                li.textContent = umiejetnosc;
                skillsList.appendChild(li);
            });

            const projectsList = document.getElementById('projectsList');
            data.projekty.forEach(projekt => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${projekt.nazwa}:</strong> ${projekt.opis}`;
                projectsList.appendChild(li);
            });
        })
        .catch(error => {
            const skillsList = document.getElementById('skillsList');
            skillsList.innerHTML = '<li style="color:red;">Data load error</li>';
        });
});
