
document.addEventListener('DOMContentLoaded', function () {
    const show_pw_btn = document.querySelector('#show-passwd')
    const show_pw_icon = show_pw_btn.querySelector('img')
    const pw_input = document.querySelector('#passwordInput')

    show_pw_btn.addEventListener('click', () => {
        pw_input.type = pw_input.type === 'password'
            ? 'text'
            : 'password'

        show_pw_icon.src = show_pw_icon.src.includes('open')
            ? '/Audiophile/assets/eye_closed.svg'
            : '/Audiophile/assets/eye_open.svg'
    })
});


document.addEventListener('DOMContentLoaded', function () {
    const signIn = this.getElementById('Loginbutton');

    signIn.addEventListener('click', (event) => {
        event.preventDefault();//opresc comportamentul default al butonului si execut functia

        let email = this.getElementById('usernameInput').value;
        let pass = this.getElementById('passwordInput').value;
        let inregistrare = JSON.parse(localStorage.getItem(email));
        if (inregistrare == null) {

            alert("Email not used/Wrong Email address");
            return;
        }

        if (inregistrare[3] != pass) {
            alert("Wrong password");
            return;
        }

        localStorage.setItem('currentUser', JSON.stringify(inregistrare));

        location.replace("/Homepage.html");

    });

});

