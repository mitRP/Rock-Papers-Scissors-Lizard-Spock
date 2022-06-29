let uScore = 0;
let cScore = 0;
let dScore = 0;
const uScore_table = document.getElementById("win");
const cScore_table = document.getElementById("lose");
const dScore_table = document.getElementById("draw");
const score_div = document.querySelector(".scoreboard");
const result_p = document.querySelector("#turn-text");
const r_button = document.getElementById("rock-button");
const p_button = document.getElementById("paper-button");
const s_button = document.getElementById("scissors-button");
const u_pick = document.querySelector("#user-pick");
const c_pick = document.querySelector("#comp-pick");

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function toWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function toEmoji(letter) {
    if (letter === "r") return "✊";
    if (letter === "p") return "✋";
    if (letter === "s") return "🤞";
}

function win(userChoice, compChoice) {
    uScore++;
    uScore_table.innerHTML = uScore;
    result_p.innerHTML = `<strong id="uchoice">${toWord(userChoice)}</strong> beats ${toWord(compChoice)}. You win! 😆`;
    u_pick.innerHTML = `${toEmoji(userChoice)}`;
    c_pick.innerHTML = `${toEmoji(compChoice)}`;
}

function lose(userChoice, compChoice) {
    cScore++;
    cScore_table.innerHTML = cScore;
    result_p.innerHTML = `<strong id="cchoice">${toWord(compChoice)}</strong> beats ${toWord(userChoice)}. You lose! ☹️`;
    u_pick.innerHTML = `${toEmoji(userChoice)}`;
    c_pick.innerHTML = `${toEmoji(compChoice)}`;
}

function draw(userChoice, compChoice) {
    dScore++;
    dScore_table.innerHTML = dScore;
    result_p.innerHTML = `It's a draw! 😑`;
    u_pick.innerHTML = `${toEmoji(userChoice)}`;
    c_pick.innerHTML = `${toEmoji(compChoice)}`;
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {

    r_button.addEventListener('click', function () {
        game("r");
    })

    p_button.addEventListener('click', function () {
        game("p");
    })

    s_button.addEventListener('click', function () {
        game("s");
    })
}

main();
