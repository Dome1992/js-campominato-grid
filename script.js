/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

// selezione dell'elemento contenitore
const gridElement = document.getElementById("grid")


    


// ciclo for per creare 100 elementi
for (let i = 1; i <= 100; i++) {

    // creare nuovo elemento ("div")
    const newElement = document.createElement("div");

    // creare nuovo elemento ("class=square")
    newElement.classList.add("square");

    // creare elemento (SPAN) con il numero corrente assegnando (i)
    const numeroElement = document.createElement("span");
    numeroElement.textContent = i;

    // creare nuovo elemento "myBtn"
    const customButtonElement = document.createElement("myBtn");

    // Event listener per click all'evento e console log per stampare risultato
    customButtonElement.addEventListener("click", function () {
    console.log("Hai cliccato sulla casella" + i);
    });
 
    // aggianciare con APPEND  il nuovo elemento creato (numeroElemnt)  a (newElement che sarebbe square)
    newElement.appendChild(numeroElement);

    // agganciare con APPEND  il nuovo elemento creato "newElement" all'id "GRID"
    gridElement.append(newElement);

    // agganciare con APPEND il nuovo elemento creato (buttonElement) a (newElement che sarebbe sqaure)
    newElement.appendChild(customButtonElement);
}


/* creare nuovo elemento ("myBtn")
const buttonElement = document.createElement("myBtn");*/

/* agganciare con APPEND il nuovo elemento creato (buttonElement) a (newElement che sarebbe sqaure)
buttonElement.appendChild(newElement)*/

/* Event listener per click all'evento e console log per stampare risultato
buttonElement.addEventListener("click", function () {
 console.log("ciao mamma");
});*/
