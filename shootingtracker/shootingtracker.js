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
let accuracyScore = 0.0;

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
    // accuracyColor(accuracyScore);
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
    missScore.innerText = miss
    attemptsLabel.innerText = attempts;
    accuracyLabel.innerText = accuracyScore.toFixed(1);
    accuracyLabel.classList.remove("good");
    accuracyLabel.classList.remove("average");
    accuracyLabel.classList.remove("bad");
}

function calculatePercentage(number1, number2) {
    accuracyScore = (goal / attempts) * 100;
    accuracyLabel.innerText = accuracyScore.toFixed(1);
    // switch (accuracyScore) {
    //     case accuracyScore < 25:
    //         console.log("Score can be better");
    //         break;
    //     case accuracyScore < 70:
    //         console.log("You're doing pretty good");
    //         break;
    //     case accuracyScore <= 100:
    //         console.log("You're doing great!");
    //         break;
    accuracyLabel.classList.remove("good");
    accuracyLabel.classList.remove("average");
    accuracyLabel.classList.remove("bad");
    if (accuracyScore > 75) {
        console.log("You're doing great!");
        accuracyLabel.classList.add("good");
    } else if (accuracyScore >= 50 && accuracyScore <= 75) {
        console.log("Getting there!");
        accuracyLabel.classList.add("average");
    } else if (accuracyScore <= 50) {
        console.log("Score can be better");
        accuracyLabel.classList.add("bad");
    }

}


// function accuracyColor(accuracyScore) {
//     if (accuracyScore < 30) {
//         accuracyLabel.classList.add("bad");
//     }
// }