const myNums = [1, 2, 3];

// Accumulator is the initial value we set here is 0 now whatever value 1st parameter returns it will be updated as accumulator.

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval;
// }, 0);

// const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "Guitar course", price: 4000
    }
]

const myTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(myTotal);