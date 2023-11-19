function calcNewAmount(amount, currentRate, newRate) {
        var dogeAmount = amount / currentRate;
        var newAmount = dogeAmount * newRate;
        return newAmount.toFixed(2); // Arrondi à deux décimales
}

//Exemple d'utilisation : 
var amountInUSDT = 1000;
var currentDOGERate = 0.08066;
var newDOGERate = 0.55;

var newAmountInUSDT = calcNewAmount(amountInUSDT, currentDOGERate, newDOGERate);
console.log(newAmountInUSDT); // Résultat attendu : 159.17