let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msgs = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const comScorePara = document.querySelector("#comp-score")


const genCompchoice = (() => {
    const options = ["rock", "paper", "scissors"];
    const randomId = Math.floor(Math.random() * 3);
    return options[randomId];
})

const drawGame = () => {
    msgs.innerText = "Draw! play again";
    msgs.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoices, comChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msgs.innerText = `You win ! Your ${userChoices} beats ${comChoice}`;
        msgs.style.backgroundColor = "green";
    } else {
        compScore++;
        comScorePara.innerText = compScore;
        msgs.innerText = `You win ! ${comChoice} beats Your ${userChoices}`;
        msgs.style.backgroundColor = "red";
    }
}

const playGame = (userChoices) => {
    //generate computer choice -> modular
    const comChoice = genCompchoice();
    if (comChoice === userChoices) {
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoices === "rock") {
            //scissors, paper
            userWin = comChoice === "paper" ? false : true;
        } else if (userChoices === "paper") {
            // rock, scissors
            userWin = comChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoices, comChoice);
    }
}

choices.forEach((choicessss) => {
    choicessss.addEventListener("click", () => {
        const userChoices = choicessss.getAttribute("id")
        playGame(userChoices)


    });
});


















