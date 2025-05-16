let userBalance = 100;

document.getElementById("placeBetBtn").addEventListener("click", function() {
    let betAmount = parseFloat(document.getElementById("betAmount").value);
    
    if (isNaN(betAmount) || betAmount <= 0) {
        alert("Please enter a valid bet amount.");
        return;
    }

    if (betAmount > userBalance) {
        alert("Insufficient balance!");
        return;
    }

    let randomOutcome = Math.random() < 0.5 ? "win" : "lose";

    if (randomOutcome === "win") {
        userBalance += betAmount;
        document.getElementById("result").textContent = `You win! Your new balance is $${userBalance}`;
    } else {
        userBalance -= betAmount;
        document.getElementById("result").textContent = `You lose! Your new balance is $${userBalance}`;
    }

    document.getElementById("userBalance").textContent = userBalance;
});
