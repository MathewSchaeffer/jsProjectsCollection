const missButton = document.querySelector("#miss button");
const goalButton = document.querySelector("#goal button");
const missScore = document.querySelector("#miss p");
const goalScore = document.querySelector("#goal p");
const attemptsLabel = document.querySelector("#accuracy h3 span")
const resetButton = document.querySelector("#reset button");
const accuracyLabel = document.querySelector("#accuracy p span");
let miss = 0;
let goal = 0;
let attempts = 0;
let accuracyScore = 0;

missButton.addEventListener('click', (e) => {
    console.log("miss button pressed");
    miss++;
    attempts++;
    missScore.innerText = miss;
    updateAttempts(attempts);
    calculatePercentage(goal, attempts);

});

goalButton.addEventListener('click', (e) => {
    console.log("goal button pressed");
    goal++;
    attempts++;
    goalScore.innerText = goal;
    updateAttempts(attempts);
    calculatePercentage(attempts, goal);
});

resetButton.addEventListener('click', (e) => {
    resetAll();
});

function updateAttempts(attempts) {
    attemptsLabel.innerText = attempts;
}



function resetAll() {
    miss = 0;
    goal = 0;
    attempts = 0;
    accuracyScore = 0;
    goalScore.innerText = goal;
    missScore.innerText = miss;
    attemptsLabel.innerText = attempts;
}

function calculatePercentage(number1, number2) {
    accuracyScore = (goal / attempts) * 100;
    accuracyLabel.innerText = accuracyScore.toFixed(1);
}