// const togglePassword = document.querySelector('#togglePassword');
//   const password = document.querySelector('#id_password');

//   togglePassword.addEventListener('click', function (e) {
//     // toggle the type attribute
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     // toggle the eye slash icon
//     this.classList.toggle('fa-eye-slash');
// });


document.addEventListener('DOMContentLoaded', function () {
    const createAccountButton = this.getElementById('createAccount');

    createAccountButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('merge');
        let firstName = this.getElementById('firstName');
        let lastName = this.getElementById('lastName');
        let emailAdress = this.getElementById('emailAdress');
        let passwordPpl = this.getElementById('passwordPeople');
        let confrimPasswordPpl = this.getElementById('confirmPasswordPeople');
        let confrimCheckBox = this.getElementById('checkbox');
        // console.log('am ajuns inainte de if ' + confrimCheckBox.checked);
        if (!confrimCheckBox.checked) {
            alert("If you want to go further, accept the terms.");
            // createAccountButton.disabled = true;
            return;
        }

        if (confrimPasswordPpl.value != passwordPpl.value) {
            alert("Password does not match with confirmation password");
            return;
        }
        console.log('am ajuns inainte de if ' + confrimPasswordPpl.value);

        let inregistrare = [firstName.value, lastName.value, emailAdress.value, passwordPpl.value];

        if (JSON.parse(localStorage.getItem(emailAdress.value)) != null) {
            alert("This email has been already used.");
            return;
        }

        localStorage.setItem(emailAdress.value, JSON.stringify(inregistrare));
        location.replace("/Pagina-Login.html");




    });


});
