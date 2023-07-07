
//on botton click run game with user choice of button thas was click 
//
//track score until computer or player reaches 5 
let end = document.querySelector('#end')
let message = document.querySelector('#message')
let compChoice = document.querySelector('#compChoice')
let playerscore = document.querySelector('#player')
let comp = document.querySelector('#comp')
let btn = document.querySelectorAll('#btn')
let player = 0
let computer = 0
let decider = 0


btn.forEach((buttons) => {
buttons.addEventListener('click',  (e) => {
   
   
        
            round(e.target.name)
            if(decider == 1 ){   
                player++  
                playerscore.innerHTML = `Player score: ${player}`
            } else if ( decider == 2){
                computer++
                comp.innerHTML = `Computer score: ${computer}`
            }
            if(player == 5  ){
                end.innerHTML = `Player is the Winner!'`
                reset()
                return "tes"
            } else if(computer == 5){
                end.innerHTML = `Computer is the Winner!'`
                reset()
                return "best"
            }
         }
        
)

});

//Get computer choice


function getComputerChoice (){
    let choice;
     choice = Math.floor(Math.random() * 3);
     if(choice == 1){
         return 'rock'
     } else if (choice == 2){
         return 'paper'
     } else {
         return 'scissors'
     }

}
// Play a round of game 
function round(userChoice){ 
    console.log(player)
    end.innerHTML = ``
let computerChoice = getComputerChoice()
compChoice.innerHTML = `Computer choice:  ${computerChoice}`
if(userChoice == 'rock' && computerChoice == 'scissors' || userChoice == 'paper' && computerChoice == 'rock' || userChoice == 'scissors' && computerChoice == 'paper'){
       message.innerHTML = `You won this round!`
      decider = 1
} else if (userChoice == computerChoice){
    message.innerHTML = 'Tie!'
} else {
    message.innerHTML = `You have lost this round!`
    decider = 2
}
}
//Game function
function game(){
   for(let i = 0;i < 100;i++){
       round(userchoice)
       if(decider == 1 ){   
           player++  
       } else if ( decider == 2){
           computer++
       }
       if(player == 5  ){
        end.innerHTML = `Player is the Winner!'`
           reset()
           return "tes"
       } else if(computer == 5){
        end.innerHTML = 'Computer Wins the game!'
           reset()
           return "best"
       }
    }
   }

///Get user input
// function userinput(input){
//    console.log(input)
    
//     if(input == 'paper' || input == 'rock' || input == 'scissors'){
        
//        return input
//     } else {
//         console.log('invalid input');
//         userinput();
//     }
// ;
// }
function reset() {
    computer = 0
    player = 0
    playerscore.innerHTML = `Player score: ${player}`
    comp.innerHTML = `Computer score: ${computer}`
}

 
