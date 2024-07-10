// Write your solution in this file!
// Define customerName in the global scope
var customerName = 'bob';

// Function to uppercase the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set the bestCustomer variable
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite the bestCustomer variable
function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

// Constant variable for the least favorite customer
const leastFavoriteCustomer = 'initial';

// Function attempting to change the least favorite customer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new'; // This will throw an error
}


