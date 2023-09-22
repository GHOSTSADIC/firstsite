// cart
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cartt')
let closeCart = document.querySelector('#close-cart')

cartIcon.onclick = () => {
    cart.classList.add('active')
}