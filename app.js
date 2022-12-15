const quantity = document.getElementById("quantity");
let val;
open = false;
menuOpen = false;
pos = 1;

updateQuantity = (num) => {
  value = parseInt(quantity.textContent);
  if (num === 1) {
    value += 1;
    quantity.textContent = value;
    console.log("Add: " + value);
  } else {
    if (value > 0) {
      value -= 1;
      quantity.textContent = value;
      console.log("Sub: " + value);
    }
  }
};

cart = () => {
  open = !open;
  console.log(open);
  val = parseInt(quantity.textContent);
  console.log("val cart : " + val);
  if (open === true) {
    if (val > 0) {
      document.querySelector(".empty").classList.add("hide");
      cost = val * 125;
      document.getElementById("show-quantity").textContent = val + " ";
      document.getElementById("show-total").textContent = `$${cost}`;
      document.querySelector(".product-cart").classList.remove("hide");
      document.querySelector(".cart-container").classList.remove("hide");
      document.getElementById("cart-notification").textContent = val;
      document.getElementById("cart-notification").classList.remove("hide");
    } else {
      document.querySelector(".empty").classList.remove("hide");
      document.querySelector(".cart-container").classList.add("hide");
      document.querySelector(".product-cart").classList.remove("hide");
    }
  } else {
    document.querySelector(".product-cart").classList.add("hide");
    document.querySelector(".cart-container").classList.add("hide");
  }
};

deleteCart = () => {
  val = 0;
  quantity.textContent = val;
  document.getElementById("cart-notification").textContent = val;
  document.getElementById("cart-notification").classList.add("hide");
  document.querySelector(".cart-container").classList.add("hide");
  document.querySelector(".empty").classList.remove("hide");
  document.querySelector(".product-cart").classList.remove("hide");
};

toggleMenu = () => {
  menuOpen = !menuOpen;
  if (menuOpen === true) {
    console.log("OPEN");
    document.querySelector(".canvas").classList.add("background");
    document.querySelector(".menu-items").classList.add("open-menu");
  } else {
    console.log("CLOSE");
    document.querySelector(".canvas").classList.remove("background");
    document.querySelector(".menu-items").classList.remove("open-menu");
  }
};

swipeImg = (dir) => {
  imgView = document.querySelector(".product-image");
  console.log(imgView);
  if (dir === "right") {
    if (pos < 4) {
      switch (pos) {
        case 1: {
          imgView.classList.add("swipe-R-1");
          break;
        }
        case 2: {
          imgView.classList.remove("swipe-R-1");
          imgView.classList.add("swipe-R-2");
          break;
        }
        case 3: {
          imgView.classList.remove("swipe-R-2");
          imgView.classList.add("swipe-R-3");
          break;
        }
      }
      pos += 1;
    }
  } else {
    if (pos > 1) {
      switch (pos) {
        case 2: {
          imgView.classList.remove("swipe-R-1");
          break;
        }
        case 3: {
          imgView.classList.remove("swipe-R-2");
          imgView.classList.add("swipe-R-1");
          break;
        }
        case 4: {
          imgView.classList.remove("swipe-R-3");
          imgView.classList.add("swipe-R-2");
          break;
        }
      }
      pos -= 1;
    }
  }
};

// container = document.createElement("div");

// info = document.createElement("div");
// container.appendChild(info);
// info.classList.add("info");
// thumb = document.createElement("img");
// thumb.src = "./images/image-product-thumbnail-1.jpg";
// info.appendChild(thumb);
// checkout = document.createElement("button");
// checkout.textContent = "Checkout";
// container.appendChild(checkout);

// container.classList.add("cart-container");

// cart = document.querySelector(".product-cart");
// cart.appendChild(container);
