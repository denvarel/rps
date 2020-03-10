function computerPlay() {
    let computerOption = Math.floor(Math.random() * 3);
    switch (computerOption) {
     case 0 :
        computerOption = "rock";
        break;
    case 1 :
        computerOption = "paper";
        break;
    default :
        computerOption = "scissors";
    }
    return computerOption;
}
document.getElementById("computerValue").innerHTML = "Computer has choose: " + computerPlay();
