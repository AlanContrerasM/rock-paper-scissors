console.log("Hello World from file scripts.js");
console.log("Building a basic rock paper scissors game");

//select option divs and create Event listeners

const optionDivs = document.querySelectorAll(".option");
const playerScoreDiv = document.querySelector("#playerS");
const computerScoreDiv = document.querySelector("#computerS");
const resultDiv = document.querySelector("#result");
let computerScore = 0;
let playerScore = 0;



startNewGame();

function startNewGame(){

    //reactivating event listeners on options
    optionDivs.forEach( button =>{
        button.addEventListener("click", playRound);
    })

    //resetting score
    computerScore = 0;
    playerScore = 0;

    //removing click event listener from resultDiv
    resultDiv.removeEventListener("click", startNewGame);
    resultDiv.textContent = "First to reach 5 wins is the CHAMP";

    //removing animations for clicking resultDiv
    resultDiv.classList.remove("option");
}




//we compare player selection to computer
//and we return a string indicating who won
//by default we call the functions if no values are sent
function playRound(e){
    const computerSelection = getComputerPlay()
    const playerSelection = e.target.textContent.toLowerCase();

    //checks if we already reached a champ
    if(computerScore == 5 || playerScore ==5 ){
        //After we are done playing remove event listeners
        optionDivs.forEach( button =>{
        button.removeEventListener("click", playRound);
        })

        //Ask if we want to play again
        resultDiv.textContent = "No More Rounds, Click Me to Start Over"
        resultDiv.addEventListener("click", startNewGame);
        //adding animations for clicking
        resultDiv.classList.toggle("option");

    }else if(playerSelection == computerSelection){

        resultDiv.textContent = `It's a Tie! ${playerSelection} vs ${computerSelection}`;
        
    }else if((playerSelection == "rock" && computerSelection == "scissors")
        || (playerSelection == "paper" && computerSelection == "rock")
        || (playerSelection == "scissors" && computerSelection == "paper")){

            resultDiv.textContent = `Player Wins! ${playerSelection} beats ${computerSelection}`
        playerScore++;

    }else{
        resultDiv.textContent = `Player Loses! ${playerSelection} loses against ${computerSelection}`;
        computerScore++;
        
    }
    
    updateScore();
    
}

//create computerPlay function no params
//returns either rock paper or scissors lowercase
function getComputerPlay(){
    
    switch(Math.ceil(Math.random()*3)){
        case 1:
            return "rock";
            //break; not needed when using return
        case 2:
            return "paper";
            case 3:
                return "scissors";
                default:
                    console.log("Error on math random");
            break;
            
    }

}


function updateScore(){
    playerScoreDiv.innerHTML = `<h1>Player Score:<br><strong>${playerScore}</strong></h1>`;
    computerScoreDiv.innerHTML = `<h1>Computer Score:<br><strong>${computerScore}</strong></h1>`;
}


//no longer used
//playing 5 games
//game();

//function that plays the round of games and keeps score
//default 5 games
function game(numberOfGames = 5){

    let playerScore = 0;
    let computerScore = 0;

    //Adding event listeners now that we are playing
    

    //plays as many rounds as requested and
    for(let i = 0; i < numberOfGames; i ++){
        let gameResult = playRound();
        
        if(gameResult == 1){
            playerScore++;
        } else if(gameResult == 2){
            computerScore++;
        }
        
        console.log(`The score is: \nPlayer: ${playerScore} \nComputer: ${computerScore}`)
    }

    
}


//we do a prompt to ask user for selection
// function getPlayerSelection(){
    //     let playerSelection = "";

//     playerSelection = prompt("Choose either rock, paper or scissors >>");


//     return playerSelection.toLowerCase().trim();
// }

// console.log(getPlayerSelection());




