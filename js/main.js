//chiedere il nome dell'utente
const name = prompt("Qual'è il tuo nome?");

//chiedere il cognome dell'utente
const surname = prompt("Qual'è il tuo cognome?");

//chiedere il colore preferito
const favColor = prompt("Qual'è il tuo colore preferito?");

const eta = "21"

const nomecognomecolorepreferito21 = document.getElementById("identification").innerHTML;

document.getElementById("identification").innerHTML = name + surname + favColor + eta;