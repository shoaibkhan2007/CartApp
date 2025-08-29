let user = JSON.parse(localStorage.getItem("loggedInUser"));
if(!user){
  window.location.href = "cartify-login.html";
}



let cartItems = JSON.parse(localStorage.getItem('cart')) || [];


let displayCart = () => {
  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = '';

  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p style="text-align: center;"> Your cart is empty.</p>';
    return;
  } 
  else {
  const cartHTML = cartItems.map(item => `
    <div class="somethingCrazy">
      <div id="spec" class="image-container2">
        <img src="${item.image}" class="prod-img2" />
      </div>
       <div class="fortxt">
      <h4>${item.name}</h4>
      <p class="subtotal-amount">Subtotal: ${item.price * item.quantity}</p>
      <div class="quantity-controls" >
      <button class="ws" onclick="increaseQuantity('${item.id}')">+</button> 
      <p class="quantity" > ${item.quantity}</span></p>
      <button class="tf" style="display: ${item.quantity <= 1 ? 'none' : 'inline-block'};" data-id="${item.id}" onclick="decreaseQuantity('${item.id}')">-</button>
      </div>
      <div>
      <button class="del" onclick="removeItem('${item.id}')">Remove</button>
    </div>
    </div>
  </div>
`).join("");

  let totalAmount = 0;
  cartItems.forEach(item => {
    totalAmount += item.price * item.quantity;
  });

  cartContainer.innerHTML = cartHTML + `
    <div class="total-amount">
      <h3 style="text-align:center">Total Rs: ${totalAmount}</h3>
    </div>
    <div class="container-buy">
    <button class="buy-btn" onclick="proceedToPayment()"> Proceed to Pay </button>
    </div>
  `;  
}

}

let decreaseQuantity = (productId) => {
  console.log("decrease working")
  let foundItem = cartItems.find(item => item.id === productId);
  if (foundItem.quantity > 1) {
    foundItem.quantity--;
  } 
  localStorage.setItem('cart', JSON.stringify(cartItems));
  displayCart();
}



let increaseQuantity = (productId) => {

  let foundItem = cartItems.find(item => item.id === productId);
  if (foundItem) {
    foundItem.quantity++;
  } else {
    console.log("Item not found.");
  }

  localStorage.setItem('cart', JSON.stringify(cartItems));
  displayCart();        
}









let removeItem = (productId) => {
  cartItems.splice(productId, 1);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  displayCart();
}

// displayCart();

let proceedToPayment = () => {
  alert("Proceeding to payment...");
  window.location.href = "cartify-payment.html";
  cartItems.splice(0, cartItems.length);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  displayCart();
}

displayCart();

let btn = document.getElementById("SignOutbtn")

btn.addEventListener("click", function () {
  localStorage.removeItem("loggedInUser");
  location.href = "cart.html";
});