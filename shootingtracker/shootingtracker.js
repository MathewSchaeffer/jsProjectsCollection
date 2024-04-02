/*
Shooting Accuracy Tracker
Made as a helper app to assist my daughters track their netball goal accuracy
Mathew Schaeffer
*/

// Init Variables
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

//Display Starting Stats
resetAll();

// Miss Button event handler
missButton.addEventListener('click', (e) => {
    miss++;
    attempts++;
    missScore.innerText = miss;
    updateAttempts(attempts);
    calculatePercentage(goal, attempts);

});

// Goal Button event handler
goalButton.addEventListener('click', (e) => {
    goal++;
    attempts++;
    goalScore.innerText = goal;
    updateAttempts(attempts);
    calculatePercentage(goal, attempts);
});

// Reset Button event handler
// resetButton.addEventListener('click', (e) => {
//     resetAll();
// });

resetButton.addEventListener('click', resetAll);

function updateAttempts(attempts) {
    attemptsLabel.innerText = attempts;
}

// Reset all vars, labels and added classes
function resetAll() {
    miss = 0;
    goal = 0;
    attempts = 0;
    accuracyScore = 0;
    goalScore.innerText = goal;
    missScore.innerText = miss
    attemptsLabel.innerText = attempts;
    accuracyLabel.innerText = accuracyScore.toFixed(1);
    clearClasses()
}

function calculatePercentage(goal, attempts) {

    //calc accuracy percentage
    accuracyScore = (goal / attempts) * 100;

    //update accuracy label
    accuracyLabel.innerText = accuracyScore.toFixed(1);

    /* reset accuracyLabel classList
        update classes
    */
    clearClasses()

    if (accuracyScore >= 70) {
        accuracyLabel.classList.add("great");
    } else if (accuracyScore >= 55 && accuracyScore < 70) {
        accuracyLabel.classList.add("good");
    } else if (accuracyScore >= 30 && accuracyScore < 55) {
        accuracyLabel.classList.add("average");
    } else if (accuracyScore < 30) {
        accuracyLabel.classList.add("bad");
    }

}

function clearClasses() {
    accuracyLabel.classList.remove("great", "good", "average", "bad");
    // accuracyLabel.classList.remove("good");
    // accuracyLabel.classList.remove("average");
    // accuracyLabel.classList.remove("bad");
}