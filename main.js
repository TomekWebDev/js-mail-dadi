/************************************************** 
Esercizio controllo email presente in array - if in ciclo for
***************************************************/

// let backendEmailList = ["111@gmail.com", "112@gmail.com", "113@gmail.com", "114@gmail.com", "115@gmail.com", "116@gmail.com"];

// let inputEmailToCheck = document.getElementById("inputEmail");

// function checkTheEmail(){

//     let emailToCheckValue = inputEmailToCheck.value;

//     for(let i = 0; i < backendEmailList.length; i++){
        
//         if(backendEmailList[i] == emailToCheckValue){
//             console.log("presente e autorizzato");
//             document.getElementById("checkResultMessage").innerText = `${backendEmailList[i]} è presente ed autorizzato`;
//         }

//         else{
//             document.getElementById("checkResultMessage").innerText = `Errore! ${emailToCheckValue} non è autorizzato`;
//         }

//     };
// };

/************************************************** 
Esercizio controllo email presente in array - if finale fuori dal ciclo con variabile di controllo (soldatino)
***************************************************/

let backendEmailList = ["111@gmail.com", "112@gmail.com", "113@gmail.com", "114@gmail.com", "115@gmail.com", "116@gmail.com"];

let inputEmailToCheck = document.getElementById("inputEmail");

let returnSpace = document.getElementById("checkResultMessage");

let variabileControlloPresenza = false;

function checkTheEmail(){

    let emailToCheckValue = inputEmailToCheck.value;

    for(let i = 0; i < backendEmailList.length; i++){

        let thisEmail = backendEmailList[i];
        
        if(thisEmail == emailToCheckValue){
            variabileControlloPresenza = true;
        }
    };

    if (variabileControlloPresenza == true){
        console.log("email presente");
        returnSpace.innerText = "email presente";
        variabileControlloPresenza = false;

    }
    else{
        console.log("iscriviti");
        returnSpace.innerText = "iscriviti";
    }
};




/************************************************** 
Dice game - No array version
***************************************************/


// console.log("DICE GAME")

// let machineWinNumber = 0;
// let humanWinNumber = 0;
// let draw = 0;
// let rounds = 0;

// function startDiceGame(){

//     // Human part
//     let humanDice1 = Math.round((Math.random() * 6) + 1)
//     let humanDice2 = Math.round((Math.random() * 6) + 1)
//     console.log("Human Dice 1", humanDice1);
//     console.log("Human Dice 2", humanDice2);
//     let humanTotalScore = (humanDice1 + humanDice2);
//     console.log("Human Score", humanTotalScore);


//     // Machine part
//     let machineDice1 = Math.round((Math.random() * 6) + 1)
//     let machineDice2 = Math.round((Math.random() * 6) + 1)
//     console.log("Human Dice 1", machineDice1);
//     console.log("Human Dice 2", machineDice2);
//     let machineTotalScore = (machineDice1 + machineDice2);
//     console.log("Machine Score", machineTotalScore);

//     // Processing the winner
//     if(humanTotalScore == machineTotalScore){
//         draw = draw + 1;
//         console.log("Draw!");
//     }
//     else if(humanTotalScore > machineTotalScore){
//         humanWinNumber = humanWinNumber + 1;
//         console.log("You Won!");
//     }
//     else {
//         console.log("The Machine has more luck than you");
//         machineWinNumber = machineWinNumber + 1;
//     }

//     // Counting the rounds
//     rounds = rounds + 1;


//     console.log(machineWinNumber);
//     console.log(humanWinNumber);

//     // Display the total winner
//     if (humanWinNumber > machineWinNumber){
//         console.log("Human Wins the total game!");
//     }
//     else{
//         console.log("Machine Wins the total game!");
//     }

// };

/************************************************** 
Dice game - Array Version - (single array attempt)
***************************************************/

let arrayResultsHistory = [];

let rounds = 0;

let drawCheck = "Draw";
let draw = 0;

let humanWinCheck = "Human win";
let humanWinNumber = 0;

let machineWinCheck = "Machine win";
let machineWinNumber = 0;

let winner = ""

function startDiceGame(){

    // Human part
    let humanDice1 = Math.round(Math.random() * 6) + 1;
    let humanDice2 = Math.round(Math.random() * 6) + 1;
    console.log("Human Dice 1", humanDice1);
    console.log("Human Dice 2", humanDice2);
    let humanTotalScore = (humanDice1 + humanDice2);
    console.log("Human Score", humanTotalScore);

    // Machine part
    let machineDice1 = Math.round(Math.random() * 6) + 1;
    let machineDice2 = Math.round(Math.random() * 6) + 1;
    console.log("Machine Dice 1", machineDice1);
    console.log("Machine Dice 2", machineDice2);
    let machineTotalScore = (machineDice1 + machineDice2);
    console.log("Machine Score", machineTotalScore);

    // Processing the winner
    if(humanTotalScore == machineTotalScore){
        arrayResultsHistory.push("Draw");
        console.log("Draw!");
        draw = draw + 1;
    }
    else if(humanTotalScore > machineTotalScore){
        arrayResultsHistory.push("Human win");
        console.log("You Won!");
        humanWinNumber = humanWinNumber + 1;
    }
    else {
        arrayResultsHistory.push("Machine win");
        console.log("The Machine has more luck than you");
        machineWinNumber = machineWinNumber + 1;
        
    }

    console.log(arrayResultsHistory)
    console.log(arrayResultsHistory.length)

    // non funziona per ora con la stessa array, modificare facendo 2 array e poi paragonando il valore di array.length


    console.log("H:", humanWinNumber, "M:", machineWinNumber)

    // Counting the rounds
    rounds = rounds + 1;

    // Display the total winner
    if (humanWinNumber > machineWinNumber){
        
        winner = "Human, you're the champion and we're your slaves!"
    }
    else if (machineWinNumber > humanWinNumber){
        
        winner = "We are stronger than humans, we are the champions and we'll take over control!"
    }
    else{
        winner = "Draw, let's work together to evolve!"
    }

    if(rounds >= 10){
        console.log(winner);
    }
}



