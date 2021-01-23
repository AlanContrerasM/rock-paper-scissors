console.log("Hello World from file scripts.js");
console.log("Building a basic rock paper scissors game");

//select option divs and create Event listeners

let optionDivs = document.querySelectorAll(".options");









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

// //just testing if we get those three options
// for(let i = 0; i< 10; i++){
//     console.log(getComputerPlay());
// }


//we do a prompt to ask user for selection
function getPlayerSelection(){
    let playerSelection = "";

    playerSelection = prompt("Choose either rock, paper or scissors >>");


    return playerSelection.toLowerCase().trim();
}

// console.log(getPlayerSelection());


//we compare player selection to computer
//and we return a string indicating who won
//by default we call the functions if no values are sent
function playRound(playerSelection = getPlayerSelection(), 
                    computerSelection = getComputerPlay()){
    

    if(playerSelection == computerSelection){

        console.log(`It's a Tie! ${playerSelection} vs ${computerSelection}`)
        return 0;

    }else if((playerSelection == "rock" && computerSelection == "scissors")
        || (playerSelection == "paper" && computerSelection == "rock")
        || (playerSelection == "scissors" && computerSelection == "paper")){

        console.log(`Player Wins! ${playerSelection} beats ${computerSelection}`)
        return 1;

    }else{
        console.log(`Player Loses! ${playerSelection} loses against ${computerSelection}`)
        return 2;

    }
}

//function that plays the round of games and keeps score
//default 5 games
function game(numberOfGames = 5){

    let playerScore = 0;
    let computerScore = 0;

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
//playing 5 games
game();

