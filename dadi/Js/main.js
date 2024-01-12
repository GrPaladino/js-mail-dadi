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

const userNumber = userInput.value;
const generatedNumber = Math.round(Math.random() * 100);
console.log(generatedNumber);

// costrutto if

if (userNumber > generatedNumber) {
  resultElement.innerText = "hai vinto";
} else {
  resultElement.innerText = "hai perso";
}
