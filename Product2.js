// // Get the necessary elements
// document.addEventListener('DOMContentLoaded', function () {
//     const decreaseBtn = document.getElementById('decrease-btn');
//     const increaseBtn = document.getElementById('increase-btn');
//     const quantityInput = document.getElementById('quantity-input');

//     // Decrease button event listener
//     decreaseBtn.addEventListener('click', () => {
//         if (quantityInput.value > 1) {
//             quantityInput.value--;
//         }
//     });

//     // Increase button event listener
//     increaseBtn.addEventListener('click', () => {
//         quantityInput.value++;
//     });
// });


// document.addEventListener('DOMContentLoaded', function () {

//     // Get the cart_button element
    


//     // Get the notification element
//     const notification = document.querySelector('.notification');
//     let cartCount = 0;
//     let listaProduse = localStorage.getItem("cart");
//     if (listaProduse != null) {
//         cartCount = listaProduse.length;
//     }

//     // Initialize the cart count

//     // Function to update the notification count
//     const updateCartCount = () => {
//         notification.textContent = cartCount; // Update the notification text
//         notification.style.display = cartCount > 0 ? 'block' : 'none'; // Show/hide the notification is an if
//     };


//     updateCartCount();
// });


// document.addEventListener('DOMContentLoaded', function () {
//     // Get the cart_button element
//     const cartButton = document.querySelector('.cart_button');

//     // Get the close button element
//     const closeButton = document.querySelector('.close');

//     // Open the modal when cart_button is clicked
//     cartButton.addEventListener('click', () => {
//         // Get the modal element
//         const modal = document.getElementById('modal');
//         modal.style.display = 'block';
//         let cart = JSON.parse(localStorage.getItem('cart'));

//         let pretTotal = document.getElementById('pretTotal');
//         if (cart == null) {
//             pretTotal.textContent = "0";
//             return;
//         }
//         let tabel1 = document.getElementById('tableComposition');
//         let tabel2 = document.getElementById('entireTable');
//         while (tabel2.rows.length > 1) {
//             tabel2.deleteRow(1); // Remove the first row (index 1) repeatedly until there are no more rows left

//         }

//         let sumaFinala = 0;

//         for (let i = 0; i < cart.length; i++) {

//             let rand = tabel1.insertRow();

//             let coloana = rand.insertCell();
//             coloana.classList = "w-25";
//             let imagine = document.createElement("img");
//             imagine.src = cart[i][0];
//             imagine.classList = "productImage";
//             coloana.appendChild(imagine);

//             let coloana2 = rand.insertCell();
//             let title = document.createTextNode(cart[i][1]);
//             coloana2.appendChild(title);


//             let coloana3 = rand.insertCell();
//             let price = document.createTextNode(cart[i][2]);
//             coloana3.appendChild(price);

//             let coloana4 = rand.insertCell();
//             let quantity = document.createTextNode(cart[i][3]);
//             coloana4.appendChild(quantity);

//             let coloana5 = rand.insertCell();
//             let total = document.createTextNode(parseInt(quantity.textContent) * parseInt((price.textContent).slice(1)));
//             coloana5.appendChild(total);


//             let coloana6 = rand.insertCell();
//             let deleteObj = document.createElement("button");
//             deleteObj.classList = "deleteProduct";
//             deleteObj.textContent = "X";
//             deleteObj.id = "removeProduct";
//             deleteObj.value = i;
//             coloana6.appendChild(deleteObj);


//             rand.appendChild(coloana);
//             rand.appendChild(coloana2);
//             rand.appendChild(coloana3);
//             rand.appendChild(coloana4);
//             rand.appendChild(coloana5);
//             rand.appendChild(coloana6);
//             tabel1.appendChild(rand);

//             sumaFinala = parseInt(total.textContent) + sumaFinala;


//             deleteObj.addEventListener('click', () => {
//                 // tabel2.deleteRow(deleteObj.value + 1);
//                 console.log(cart);
//                 if (deleteObj.value == 0) {
//                     cart.splice(0, 1);
//                 }
//                 else {
//                     cart.splice(deleteObj.value, deleteObj.value);
//                 }
//                 console.log(cart);
//                 localStorage.setItem("cart", JSON.stringify(cart));
//                 console.log(deleteObj.value);

//                 cartButton.click();
//                 // Function to update the notification count
//                 const notification = document.querySelector('.notification');
//                 notification.textContent = cart.length; // Update the notification text
//                 notification.style.display = cart.length > 0 ? 'block' : 'none'; // Show/hide the notification is an if

//             });

//         }

//         pretTotal.textContent = sumaFinala.toString();

//         console.log(cart);

//     });

//     // Close the modal when the close button is clicked
//     closeButton.addEventListener('click', () => {
//         modal.style.display = 'none';
//     });

//     // Close the modal when the user clicks outside the modal
//     window.addEventListener('click', (event) => {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });
// });


// document.addEventListener('DOMContentLoaded', function () {

//     const addtocart = document.getElementById('Headphonescart');
//     // Open the modal when cart_button is clicked
//     addtocart.addEventListener('click', () => {
//         let cantitate = document.getElementById('quantity-input').value;
//         let pret = document.getElementById('priceHeadphones').textContent;
//         let denumire = document.getElementById('headphonesTitle').textContent;
//         let poza = document.getElementById('pozaXX99').src;
//         let elemente = [poza, denumire, pret, cantitate];
//         let elementVechi = JSON.parse(localStorage.getItem('cart'));
//         if (elementVechi == null) {
//             elementVechi = [];
//         }
//         elementVechi.push(elemente);
//         const notification = document.querySelector('.notification');

//         notification.textContent = elementVechi.length; // Update the notification text
//         notification.style.display = elementVechi.length > 0 ? 'block' : 'none';



//         localStorage.setItem("cart", JSON.stringify(elementVechi));

//     });

// });