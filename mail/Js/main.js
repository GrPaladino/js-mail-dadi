// - creare un input text nell'html per chiedere l'indirizzo email
// - recuperare l'indirizzo email fornitoci dall'utente in js
// - creare un array con indirizzi mail vari

// - creare una variabile che legga i valori dell'array con un ciclo for
// - creare un costrutto if per validare l'indirizzo email fornitoci dall'utente
//  - se l'indirizzo é presente nell'array
//    - dare un messaggio di benvenuto e stamparlo
//  - se l'indirizzo non é presente nell'array
//    - far comparire un alert di errore.

// Recupero elementi html
const userInput = document.getElementById("user-mail");
const resultElement = document.getElementById("result");
const userMail = userInput.value;

// Creazione array
const emails = ["ciao@ciao.it", "arrivederci@ciao.it", "emailcorretta@ciao.it"];

// ciclo fof
for (let i = 0; i < emails.length; i++) {
  const email = emails[i];

  if (email == userMail) {
    resultElement.innerText = "Benvenuto";
  } else {
    resultElement.innerText = "L'indirizzo inserito non é valido!!!";
  }
}
