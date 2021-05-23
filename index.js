var customerName = 'bob';
const leastFavoriteCustomer = 'Thanos';

function upperCaseCustomerName () {
     customerName = customerName.toUpperCase();
}

var bestCustomer;
function setBestCustomer () {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer () {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = 'Spider-Man';
}