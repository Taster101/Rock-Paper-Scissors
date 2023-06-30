
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
function round(userChoice,computerChoice){ 
userChoice = userinput()
computerChoice = getComputerChoice()
if(userChoice == 'rock' && computerChoice == 'scissors' || userChoice == 'paper' && computerChoice == 'rock' || userChoice == 'scissors' && computerChoice == 'paper'){
       console.log(`you win ${userChoice} beats ${computerChoice}`)
      return '++player'
} else if (userChoice == computerChoice){
    console.log('tie!')
    return round()
} else {
    console.log( `you have lost ${computerChoice} beats ${userChoice}`) 
    return 'player score'
}
}
//Game function
function game(){
    let player = 0;
    let computer = 0
   for(let i = 0;i < 5;i++){
       round()
       
   }
}
///Get user input
function userinput(){
    let input = prompt('Rock, Paper ,Scissors ?').toLowerCase()
    console.log(input)
    if(input == 'paper' || input == 'rock' || input == 'scissors'){
        
       return input
    } else {
        console.log('invalid input');
        userinput();
    }
;
}
game()
 
