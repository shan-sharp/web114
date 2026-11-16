// Shan Sharp - November 15, 2026

let userName = prompt("Please enter your name:");

while (userName !== null && userName.trim() === "") {
    alert("You must enter a name.");
    userName = prompt("Please enter your name:");
}

if (userName !== null) {
    userName = userName.trim();
    CalcGasAvg();
} else {
    alert("You cancelled the name prompt.");
}

function CalcGasAvg() {
    let count = 0;
    let total = 0;
    let average = 0;

    let input = prompt("Enter your first week's gas total. Enter -1 when done:");

    while (input !== null && parseFloat(input) !== -1) {
        let amount = parseFloat(input);

        if (isNaN(amount)) {
            alert("That is not a number.");
        } else {
            count++;
            total = total + amount;
        }
        input = prompt("Enter your next week's gas total. Enter -1 when you done:");
    }

    if (input === null) {
        alert("You cancelled the gas prompt.");
        return 0;
    }

    if (count > 0) {
        average = total / count;
    } else {
        average = 0;
    }

    if (count === 0) {
        alert(userName + ", you have no entries.");
    } else if (count === 1) {
        alert(userName + "'s gas total is $" + average.toFixed(2) + ".\nGas entries: " + count);
    } else {
        alert(userName + "'s average weekly gas bill is $" + average.toFixed(2) + ".\nGas entries: " + count);
    }

    return average;
}