"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCart = exports.cartTotal = exports.removeQuantityFromCart = exports.addToCart = exports.createItem = exports.createUser = void 0;
const uuid_1 = require("uuid");
// import {Item, User} from '../src/types';
function createUser(name, age) {
    return {
        id: (0, uuid_1.v4)(),
        name,
        age,
        cart: [],
    };
}
exports.createUser = createUser;
function createItem(name, price, description) {
    return {
        id: (0, uuid_1.v4)(),
        name,
        price,
        description,
        quantity: 1,
    };
}
exports.createItem = createItem;
function addToCart(item, user) {
    const existingItem = user.cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity += 1;
    }
    else {
        item.quantity = 1;
        user.cart.push(item);
    }
}
exports.addToCart = addToCart;
function removeQuantityFromCart(item, user, quantity) {
    const existingItem = user.cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
        if (existingItem.quantity <= quantity) {
            user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
        }
        else {
            existingItem.quantity -= quantity;
        }
    }
}
exports.removeQuantityFromCart = removeQuantityFromCart;
function cartTotal(user) {
    return user.cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
exports.cartTotal = cartTotal;
function printCart(user) {
    console.log('Cart Contents:');
    for (const item of user.cart) {
        console.log(`- ${item.name} (Quantity: ${item.quantity}): $${item.price}`);
    }
}
exports.printCart = printCart;
