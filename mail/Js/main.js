// Recupero elementi html
const userInput = document.getElementById("user-mail");
const resultElement = document.getElementById("result");
const inputBtn = document.getElementById("user-btn");

// Creazione array
const emails = ["ciao@ciao.it", "arrivederci@ciao.it", "emailcorretta@ciao.it"];

// ciclo for
inputBtn.addEventListener("click", function () {
  const userMail = userInput.value;
  console.log(1);
  let found = false;

  for (let i = 0; i < emails.length; i++) {
    const email = emails[i];

    if (userMail == email) {
      found = true;
    }
  }

  let message = "";

  if (found == true) {
    message = "benvenuto";
  } else {
    message = "Hai sbagliato";
  }
  resultElement.innerText = message;
  console.log(message);
});
