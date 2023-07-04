
//Get computer choice

let player = 0
let computer = 0
let decider = 0
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
function round(userChoice,computerChoice){ 
    console.log(player)
userChoice = userinput()
computerChoice = getComputerChoice()
if(userChoice == 'rock' && computerChoice == 'scissors' || userChoice == 'paper' && computerChoice == 'rock' || userChoice == 'scissors' && computerChoice == 'paper'){
       console.log(`you win ${userChoice} beats ${computerChoice}`)
      decider = 1
} else if (userChoice == computerChoice){
    console.log('tie!')
    round()
   
} else {
    console.log( `you have lost ${computerChoice} beats ${userChoice}`) 
    decider = 2
}
}
//Game function
function game(){
   
   for(let i = 0;i < 100;i++){
       round()
       if(decider == 1 ){
           
           player++
           
       } else if ( decider == 2){
           computer++

       }
    
       

       if(player == 5  ){
           console.log('Player is the Winner!')
           reset()
           return "tes"
       } else if(computer == 5){
           console.log('Computer Wins the game!')
           reset()
           return "best"
       }
    }
   }

///Get user input
function userinput(){
    let input = prompt('Rock, Paper ,Scissors ?').toLowerCase()
    
    if(input == 'paper' || input == 'rock' || input == 'scissors'){
        
       return input
    } else {
        console.log('invalid input');
        userinput();
    }
;
}
function reset() {
    computer = 0
    player = 0
}
game()
 
