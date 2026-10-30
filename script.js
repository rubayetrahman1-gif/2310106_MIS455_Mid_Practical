var cart = [];

function addToCart(productName, productPrice) {

    var item = {
        name: productName,
        price: productPrice
    };

    cart.push(item);
    showCart();
    alert(productName + " added to your cart!");
}

function showCart() {
    var cartArea = document.getElementById("cartItems");
    var total = 0;
    var cartText = "";

    if (cart.length == 0) {
        cartArea.innerHTML = '<p class="empty-cart">Your cart is empty. Add a sneaker to get started!</p>';
    }
    else {
        for (var i = 0; i < cart.length; i++) {
            cartText = cartText + '<div class="cart-row"><span>' + cart[i].name + '</span><strong>TK ' + cart[i].price.toLocaleString("en-US") + '</strong></div>';

            total = total + cart[i].price;
        }

        cartArea.innerHTML = cartText;
    }

    document.getElementById("cartTotal").innerHTML = "TK " + total.toLocaleString("en-US");
}

function clearCart() {
    cart = [];
    showCart();
    alert("Your cart has been cleared.");
}
function sendMessage() {
    var name = document.getElementById("customerName").value;
    var email = document.getElementById("customerEmail").value;
    var message = document.getElementById("customerMessage").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill in all the fields.");
    }
    else {
        document.getElementById("messageResult").innerHTML = "Thank you, " + name + "! Your message has been received.";
    }
}