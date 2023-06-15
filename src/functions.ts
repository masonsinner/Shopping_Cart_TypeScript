import { v4 as uuidv4} from "uuid";
// import {Item, User} from '../src/types';

export function createUser(name:string, age:number): User {
    return {
        id: uuidv4(),
        name,
        age,
        cart: [],
    };
}

export function createItem(name:string, price:number,description:string): Item {
    return {
        id: uuidv4(),
        name,
        price,
        description,
        quantity: 1,
    };
}

export function addToCart(item: Item, user: User): void {
    const existingItem = user.cart.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      user.cart.push(item);
    }
}  
  
export function removeQuantityFromCart(item: Item, user: User, quantity: number): void {
    const existingItem = user.cart.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
      if (existingItem.quantity <= quantity) {
        user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
      } else {
        existingItem.quantity -= quantity;
      }
    }
}
  
export function cartTotal(user: User): number {
    return user.cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
  

export function printCart(user: User): void {
    console.log('Cart Contents:');
    for (const item of user.cart) {
      console.log(`- ${item.name} (Quantity: ${item.quantity}): $${item.price}`);
    }
}
  