// - creare un input text nell'html per chiedere un numero
// - creare un num random
// - creare un costrutto if per validare il numero dell'utente
// - se il numero dell'utente é maggiore di quello generato
// - stampare: l'utente ha vinto
// - altrimenti
// - stampare: l'utente ha perso.
// ```

// - recuperare i dati dal DOM
const userInput = document.getElementById("user-number");
const resultElement = document.getElementById("result");
const inputbtn = document.getElementById("input-button");

const userNumber = userInput.value;
console.log(userNumber);

// costrutto if

inputbtn.addEventListener("click", function () {
  if (userNumber > 6 || isNaN(userNumber)) {
    alert("Il valore inserito non é corretto");
  }

  const generatedNumber = Math.round(Math.random() * 6 + 1);
  console.log(generatedNumber);

  if (userNumber > generatedNumber) {
    resultElement.innerText = "hai vinto";
  } else {
    resultElement.innerText = "hai perso";
  }
});
