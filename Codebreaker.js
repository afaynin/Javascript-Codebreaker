let comboString = "";
let secretCombo = Math.ceil(Math.random()* 3).toString() + " " + Math.ceil(Math.random()* 3).toString() + " " + Math.ceil(Math.random()* 3).toString() + " ";

function combination(){
    console.log(secretCombo);
    let id = this.id;
    let combo = document.getElementById("combination");
    let guesses = document.getElementById("guesses");

    
    if(id === "one"){
        comboString += "1 "
        combo.textContent += "1 ";
    }
     if(id === "two"){
        comboString += "3 "
        combo.textContent += "2 ";
    }
    if(id === "three"){     
        comboString += "3 " 
        combo.textContent += "3 ";
     }
  
     
     if(comboString.length >= 5){
      
        guesses.textContent += comboString + ", ";


        combo.textContent = "";
        comboString = "";
     }
    }
 
 
 
 
 const buttons = document.querySelectorAll("button");
 for (const button of buttons){
     button.addEventListener("click", combination);
 }
 