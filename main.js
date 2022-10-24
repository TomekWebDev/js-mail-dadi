let backendEmailList = ["111@gmail.com", "112@gmail.com", "113@gmail.com", "114@gmail.com", "115@gmail.com", "116@gmail.com"];

let inputEmailToCheck = document.getElementById("inputEmail");

function checkTheEmail(){

    let emailToCheckValue = inputEmailToCheck.value;

    for(let i = 0; i < backendEmailList.length; i++){
        
        if(backendEmailList[i] == emailToCheckValue){
            console.log("presente e autorizzato");
            document.getElementById("checkResultMessage").innerText = `${backendEmailList[i]} è presente ed autorizzato`;
        }

        else{
            document.getElementById("checkResultMessage").innerText = `Errore! ${emailToCheckValue} non è autorizzato`;
        }

    };
};


console.log("DICE GAME")

function startDiceGame(){

    // Human part
    let humanDice1 = Math.round((Math.random() * 6) + 1)
    let humanDice2 = Math.round((Math.random() * 6) + 1)
    console.log("Human Dice 1", humanDice1);
    console.log("Human Dice 2", humanDice2);
    let humanTotalScore = (humanDice1 + humanDice2);
    console.log("Human Score", humanTotalScore);

    // Machine part
    let machineDice1 = Math.round((Math.random() * 6) + 1)
    let machineDice2 = Math.round((Math.random() * 6) + 1)
    console.log("Human Dice 1", machineDice1);
    console.log("Human Dice 2", machineDice2);
    let machineTotalScore = (machineDice1 + machineDice2);
    console.log("Machine Score", machineTotalScore);

    // Processing the winner
    if(humanTotalScore == machineTotalScore){
        console.log("Draw!");
    }
    else if(humanTotalScore > machineTotalScore){
        console.log("You Won!");
    }
    else {
        console.log("The Machine has more luck than you");
    }

}


