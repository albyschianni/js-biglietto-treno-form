// calcolare prezzo del biglietto in base al numero di km percorsi e allo sconto sull'età


//  chiedere chilometri da percorrere 

let chilometri = document.getElementById("km");

let nome = document.getElementById("nome");

let eta = document.getElementById("eta");

let genera = document.getElementById("genera");



var prezzoFinale

genera.addEventListener("click",

    function (){
        let chilometri = document.getElementById("km").value;
        let nome = document.getElementById("nome").value;
        let eta = document.getElementById("eta").value;
        console.log(nome);
        console.log(chilometri);
        console.log(eta);

        var prezzoNormale = chilometri * 0.21

        if (eta == 1 ){
            prezzoFinale = prezzoNormale - (prezzoNormale * .20);
        
        } else if (eta == 3) {
            prezzoFinale = prezzoNormale - (prezzoNormale * .40);
        
        } else {
            prezzoFinale = prezzoNormale
        }
        console.log(prezzoFinale);

        let prezzo = document.getElementById("costo-biglietto");
        prezzo.innerHTML = `${prezzoFinale.toFixed(2)}` ;
    }


);









// calcolo prezzo con variabili (se under 18 anni -20%, se over 65 -40% , altrimenti prezzo base 0,21 centesimi al km)

// let prezzoNormale = chilometri * 0.21

// console.log(prezzoNormale);

// var prezzoFinale

// if (eta < 18 ){
//     prezzoFinale = prezzoNormale - (prezzoNormale * .20);

// } else if (eta > 65) {
//     prezzoFinale = prezzoNormale - (prezzoNormale * .40);

// } else {
//     prezzoFinale = prezzoNormale
// }

// console.log(prezzoFinale)


// output on screen del prezzo del biglietto (da sistemare con solo 2 decimalis)