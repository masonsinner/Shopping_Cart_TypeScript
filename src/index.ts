import { createUser, createItem, addToCart, removeQuantityFromCart, cartTotal, printCart } from './functions';


const user = createUser('Mason Sinner', 22);

const bananas = createItem('Banana Peel', 15, 'Slippery! Look out!')
const bulletBill = createItem('Bullet Bill', 25, 'Like being on autopilot, except on a dangerous giant bullet!')
const starPower = createItem('Star Power', 35, "Literally just a cheat code, just don't go falling off the map")

addToCart(bananas, user);

printCart(user)

console.log('Cart Total: ', cartTotal(user));

addToCart(bulletBill, user);
addToCart(starPower, user);
addToCart(bananas, user);
addToCart(bananas, user);
addToCart(bananas, user);

printCart(user);

console.log('Cart Total: ', cartTotal(user));

removeQuantityFromCart(bananas, user, 2);

printCart(user);

console.log("Cart Total: ", cartTotal(user))

