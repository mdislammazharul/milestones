const getProductDetails = () => {
    const productName = document.getElementById('item-name').value;
    const productPrice = document.getElementById('item-price').value;

    addProductToCart(productName);
    addProductToCart(productPrice);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = (product) => {
    const cart = getCart();
    if (cart[product]) {
        cart[product] = cart[product] + 1;
    }
    else {
        cart[product] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}