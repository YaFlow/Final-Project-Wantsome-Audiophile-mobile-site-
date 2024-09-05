document.addEventListener('DOMContentLoaded', function () {
    // Get the Homepage link element
    let homepageLink = document.querySelector('footer a[href="/Speakers.html"]');

    // Am adaugat event listener la click
    homepageLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Calculeaza pozitia de scroll a targetului
        let targetElement = document.querySelector('body');
        let targetPosition = targetElement.offsetTop;

        // Smooth scroll spre top-ul paginii
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});