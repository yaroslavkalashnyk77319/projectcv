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
        form.reset(); // Czyści formularz po wysłaniu
    }
});
