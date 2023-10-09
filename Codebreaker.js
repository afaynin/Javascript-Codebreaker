let comboString = "";
let hint = "";
let secretCombo = Math.ceil(Math.random()* 3).toString() + " " + Math.ceil(Math.random()* 3).toString() + " " + Math.ceil(Math.random()* 3).toString() + " ";

function convert(String){
    let s = String;
    s = s.replace(/\s/g, '');
    return parseInt(s.trim(), 10);
}

function combination(){
    console.log(secretCombo);
    console.log(convert(secretCombo));

    let id = this.id;
    let combo = document.getElementById("combination");
    let guesses = document.getElementById("guesses");
    let clock = document.getElementById("left")

    
    if(id === "one"){
        comboString += "1 "
        combo.textContent += "1 ";
    }
     if(id === "two"){
        comboString += "2 "
        combo.textContent += "2 ";
    }
    if(id === "three"){     
        comboString += "3 " 
        combo.textContent += "3 ";
     }
  if(id === "clear"){
    comboString = "";
    combo.textContent = "";
  }
    


     if(comboString.length >= 5){
        if(secretCombo === comboString){
            console.log("You win");
        }
        if(convert(secretCombo)>convert(comboString)){
            hint = "Less than combo     ";
            console.log("Less than combo!     ");
        }
        if(convert(secretCombo)<convert(comboString)){
            hint = "Greater than combo  ";
            console.log("Greater than combo!  ");
        }
        guesses.textContent += " " + comboString + ", " + hint + "!";
        clock.textContent -= 1;
        if(clock.textContent === "0"){
            console.log("You lose");
        }

        combo.textContent = "";
        comboString = "";
     }
    }
 
 
 
 
 const buttons = document.querySelectorAll("button");
 for (const button of buttons){
     button.addEventListener("click", combination);
 }
 