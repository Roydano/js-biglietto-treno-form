// COMPORTAMENTI AL CLICK ANNULLA

var annulla = document.getElementById('annulla');

annulla.addEventListener("click", function(){

    document.getElementById('ticket').className = 'hidden';

    document.getElementById('nome').value = '';

    document.getElementById('km').value = '';

    document.getElementById('eta').value = '';
    
})



// COMPORTAMENTI AL CLICK GENERA

var genera = document.getElementById('genera');


genera.addEventListener("click", function(){

    // memorizzare dati di input

    var nome = document.getElementById('nome').value;

    var km = document.getElementById('km').value;

    var eta = document.getElementById('eta').value;
    console.log(eta);

    if ((nome == "") || (nome == "undefined")){
        alert("Devi inserire un nome");
        return false;
    }
    if ((isNaN(km)) || (km == "") || (km == "undefined")){
        alert("Devi inserire i km, attenzione devi scriverli in numero!");
        document.km.value = "";
        return false;
    }
    if ((eta == "") || (eta == "undefined")){
        alert('Devi inserire la tua fascia d\'età');
        return false;
    }


    // comparsa del biglietto generato al click su genera

    document.getElementById('ticket').className = 'show';

    var carrozzaRandom = Math.floor(Math.random() * 9) + 1;

    var cpRandom = Math.floor((Math.random() * 10000) + 90000);

    var prezzo = km * 0.50;
    var sconto ='';

    if(eta == 'minorenne'){
        prezzo = prezzo * 0.8;
        sconto = 'Sconto';
    } else if(eta == 'over65'){
        prezzo = prezzo * 0.6;
        sconto = 'Sconto';

    }


    // consegnare dati memorizzati

    document.getElementById('output_nome').innerHTML = nome;

    document.getElementById('output_offerta').innerHTML = sconto + '<br>' + eta;

    document.getElementById('output_carrozza').innerHTML = carrozzaRandom;

    document.getElementById('output_cp').innerHTML = cpRandom;

    document.getElementById('output_prezzo').innerHTML = prezzo.toFixed(2) + '€';
    
})


