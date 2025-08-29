let user = JSON.parse(localStorage.getItem("loggedInUser"));
if (!user) {
  window.location.href = "cartify-login.html";
}


const cartItems = [
  { id: 'p1', name: 'Laptop', category: 'Computer Accessories', image: 'Adler Leather Pen Pot - Smoke - Standard Eco-Packaging.jpeg', price: 1200, quantity: 1 },
  { id: 'p2', name: 'Iphone 11', category: 'Mobile Phoneeeeeeee', image: 'Adler Leather Pen Pot - Smoke - Standard Eco-Packaging.jpeg', price: 25, quantity: 1 },
  { id: 'p3', name: 'Mouse', category: 'Computer Accessories', image: 'Adler Leather Pen Pot - Smoke - Standard Eco-Packaging.jpeg', price: 30, quantity: 1 },
  { id: 'p4', name: 'Iphone 14 pro', category: 'Mobile Phoneeeeeeee', image: 'Adler Leather Pen Pot - Smoke - Standard Eco-Packaging.jpeg', price: 50, quantity: 1 },
  { id: 'p5', name: 'Keyboard', category: 'Computer Accessories', image: 'Adler Leather Pen Pot - Smoke - Standard Eco-Packaging.jpeg', price: 75, quantity: 1 },
  { id: 'p6', name: 'Iphone 11 pro', category: 'Mobile Phoneeeeeeee', image: 'Adler Leather Pen Pot - Smoke - Standard Eco-Packaging.jpeg', price: 100, quantity: 1 },
  { id: 'p7', name: 'Iphone 12', category: 'Mobile Phoneeeeeeee', image: 'Adler Leather Pen Pot - Smoke - Standard Eco-Packaging.jpeg', price: 150, quantity: 1 },
  { id: 'p8', name: 'headphones', category: 'Computer Accessories', image: 'Adler Leather Pen Pot - Smoke - Standard Eco-Packaging.jpeg', price: 200, quantity: 1 },
  { id: 'p9', name: 'Smartwatch', category: 'Mobile Phoneeeeeeee', image: 'Adler Leather Pen Pot - Smoke - Standard Eco-Packaging.jpeg', price: 250, quantity: 1 },
  {id: 'p10', name: 'Charger', category: 'Computer Accessories', image: 'Adler Leather Pen Pot - Smoke - Standard Eco-Packaging.jpeg', price: 300, quantity: 1 }
];


let cart = JSON.parse(localStorage.getItem('cart')) || [];


let displayproducts = (itemtoDisplay) => {
  const productDisplay = document.getElementById('cart-display');
  productDisplay.innerHTML = '';

  itemtoDisplay.forEach(item => {
    const productElement = document.createElement('div');
    productElement.classList.add("item-listing");


    let check = cart.find(ci => ci.id === item.id);

    let html = `
      <div class="image-container">
        <img src="${item.image}" class="prod-img" />
      </div>
      <div class="dk">
        <h4>${item.name}</h4>
        <p class="price-item">Price: ${item.price}</p>
        </div>
    `;

    if (!check) {
      html += `
        <button class="ww" data-id="${item.id}">Add to cart</button>
      `;
    } else {
      html += `
      <div class="quantity-controls">
        <button class="ws" data-id="${item.id}" onclick="increaseQuantity('${item.id}')">+</button>
        <p class="quantity">${check.quantity}</p>
        <button class="tf" data-id="${item.id}" onclick="decreaseQuantity('${item.id}')">-</button>
      </div>
      `;
    }

    productElement.innerHTML = html;
    productDisplay.appendChild(productElement);
  });


  document.querySelectorAll('.ww').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-id');
      addToCart(productId);
    });
  });
};




let addToCart = (productId) => {
  const productToAdd = cartItems.find(p => p.id === productId);
  if (!productToAdd) {
    alert('Product not found!');
    return;
  }

  const existingCartItem = cart.find(item => item.id === productId);
  if (!existingCartItem) {
    cart.push({ ...productToAdd, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  displayproducts(cartItems);
};




let increaseQuantity = (productId) => {
  const index = cart.findIndex(item => item.id === productId);
  if (index > -1) {
    cart[index].quantity += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayproducts(cartItems);
  }
};




let decreaseQuantity = (productId) => {
  const index = cart.findIndex(item => item.id === productId);
  if (index > -1) {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
    } else {
      cart.splice(index, 1); 
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayproducts(cartItems);
  }
};



function filterProducts(category) {
  let filteredCart = category === 'All'
    ? cartItems
    : cartItems.filter(item => item.category === category);

  displayproducts(filteredCart);
}



let dropdown = () => {
  document.getElementById("myDropdown").classList.toggle("show");
};


window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('show');
    }
  }
};




let btn = document.getElementById("SignOutbtn");
btn.addEventListener("click", function () {
  localStorage.removeItem("loggedInUser");
  location.href = "cart.html";
});




displayproducts(cartItems);
