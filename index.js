
//Get computer choice
function getComputerChoice (){

    let choice;
     choice = Math.floor(Math.random() * 3);
     if(choice == 1){
         return 'Rock'
     } else if (choice == 2){
         return 'Paper'
     } else {
         return 'Scissors'
     }

}
// get user choice 
function userChoice(choice){
let hand;
    hand = choice.toLowercase()


}




console.log(getComputerChoice())

//compare user and computer choice 


//best out of 3 wins 