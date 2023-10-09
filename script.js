// Prompt the user to choose flavors separated by commas.
let userInput = prompt(
    "Type your flavors followed by a comma. Examples - 'Str, Cho, Cho, Van'. Available flavors: Str(strawberry), Cho(chocalate), Van(vanilla), Coff(coffee). "
);
// Split the string of flavors into an array of strings and convert to Lowercase
const stringArray = userInput.toLocaleLowerCase().split(",");

const orders = {};

stringArray.forEach((flav) => {
    // Check if flavor exist in the "Orders Object" and increase quantity by +1
    if (flav in orders) {
        orders[flav]++;
    } else {
        // Add new flavor to "Orders" if it doesn't exist
        orders[flav] = 1;
    }
});

console.log(orders);
