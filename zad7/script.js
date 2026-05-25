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
    visibilityToggleBtn.textContent = doswiadczenieSection.classList.contains('hidden') ? 'Pokaż sekcję "Doświadczenie"' : 'Ukryj sekcję "Doświadczenie"';
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

    if (firstName === '') { document.getElementById('firstNameError').textContent = 'Pole Imię jest wymagane.'; isValid = false; } 
    else if (hasNumbers.test(firstName)) { document.getElementById('firstNameError').textContent = 'Imię nie może zawierać cyfr.'; isValid = false; }

    if (lastName === '') { document.getElementById('lastNameError').textContent = 'Pole Nazwisko jest wymagane.'; isValid = false; } 
    else if (hasNumbers.test(lastName)) { document.getElementById('lastNameError').textContent = 'Nazwisko nie może zawierać cyfr.'; isValid = false; }

    if (email === '') { document.getElementById('emailError').textContent = 'Pole E-mail jest wymagane.'; isValid = false; } 
    else if (!email.includes('@') || !email.includes('.')) { document.getElementById('emailError').textContent = 'Podaj poprawny adres e-mail.'; isValid = false; }

    if (message === '') { document.getElementById('messageError').textContent = 'Wiadomość nie może być pusta.'; isValid = false; }

    if (isValid) {
        alert('Formularz wysłany poprawnie! (Numer indeksu: 77319)');
        form.reset(); 
    }
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(res => res.ok ? res.json() : Promise.reject('Error'))
        .then(data => {
            const skillsList = document.getElementById('skillsList');
            data.umiejetnosci.forEach(u => {
                const li = document.createElement('li'); li.textContent = u; li.style.marginBottom = '5px'; skillsList.appendChild(li);
            });
            const projectsList = document.getElementById('projectsList');
            data.projekty.forEach(p => {
                const li = document.createElement('li'); li.innerHTML = `<strong>${p.nazwa}:</strong> ${p.opis}`; li.style.marginBottom = '5px'; projectsList.appendChild(li);
            });
        })
        .catch(() => document.getElementById('skillsList').innerHTML = '<li style="color:red;">Błąd</li>');

    const notesList = document.getElementById('notesList');
    const addNoteBtn = document.getElementById('addNoteBtn');
    const noteInput = document.getElementById('noteInput');

    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('mojeNotatki')) || [];
        notesList.innerHTML = '';
        notes.forEach((note, index) => {
            const li = document.createElement('li');
            li.style.marginBottom = '8px';
            li.innerHTML = `<span>- ${note}</span><button onclick="deleteNote(${index})" style="background: #b71c1c; color: white; border: none; padding: 4px 8px; cursor: pointer; margin-left: 10px; border-radius: 4px;">Usuń</button>`;
            notesList.appendChild(li);
        });
    }

    addNoteBtn.addEventListener('click', () => {
        const val = noteInput.value.trim();
        if (val !== '') {
            const notes = JSON.parse(localStorage.getItem('mojeNotatki')) || [];
            notes.push(val);
            localStorage.setItem('mojeNotatki', JSON.stringify(notes));
            noteInput.value = '';
            loadNotes();
        }
    });

    window.deleteNote = function(index) {
        const notes = JSON.parse(localStorage.getItem('mojeNotatki')) || [];
        notes.splice(index, 1);
        localStorage.setItem('mojeNotatki', JSON.stringify(notes));
        loadNotes();
    };

    loadNotes();
});
