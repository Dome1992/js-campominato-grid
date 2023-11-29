/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

// Seleziona l'elemento pulsante "generaGriglia" in Html
const generaGrigliaButton = document.getElementById("generaGriglia");

// Aggiungi un event listener per il clic sul pulsante "generaGriglia"
generaGrigliaButton.addEventListener("click",generaGriglia )



// Funzione per generare la griglia
function generaGriglia() {
   
    // selezione dell'elemento contenitore
    const gridElement = document.getElementById("grid")

    // ciclo for per creare 100 celle
    for (let i = 1; i <= 100; i++) {

        // creare nuovo elemento ("div")
        const newElement = document.createElement("div");

        // creare nuovo elemento ("class=square")
        newElement.classList.add("square");

        // Appendere a newElement ovvero square variabile i, ovvero il numero della cella 
        newElement.append(i);

        // Event listener per click all'evento e console log per stampare risultato
        newElement.addEventListener("click", 
            function () {

                // Creare nuova classe per il click sulle square
                this.classList.add("clicked");
                console.log("Hai cliccato sulla casella" + i);
            }
        );
    
        // Appendere il nuovo elemento creato "newElement" all'id "GRID"
        gridElement.append(newElement);

        
    }



}
    
