function placeorder(order, callback) {
    console.log("Order placed: " + order);
    callback();
}

function print() {
    console.log("Order is being processed...");
}

placeorder("Pizza", print);

placeorder("Burger", function() {
    console.log("Order is being processed...");
});

placeorder("Pasta", () => {
    console.log("Order is being processed...");
});