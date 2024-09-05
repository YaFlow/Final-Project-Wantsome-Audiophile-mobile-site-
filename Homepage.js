
document.addEventListener('DOMContentLoaded', function () {
    // Get the Homepage link element
    let homepageLink = document.querySelector('footer a[href="/Homepage.html"]');

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


document.addEventListener("DOMContentLoaded", function () {
    const carouselImages = document.querySelectorAll(".guy");
    let currentImageIndex = 0;

    function showImage(index) {
        carouselImages.forEach(image => image.classList.remove("active"));
        carouselImages[index].classList.add("active");
    }

    function rotateImages() {
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        showImage(currentImageIndex);
    }

    setInterval(rotateImages, 3000);
});




document.addEventListener("DOMContentLoaded", function () {

    let numePersoana = this.getElementById('numeUser');
    let userLocal = JSON.parse(localStorage.getItem('currentUser'));
    if (userLocal != null) {

        numePersoana.textContent = 'Welcome, ' + userLocal[0];

    }


});