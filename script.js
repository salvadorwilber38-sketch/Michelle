const mensaje="Gracias por llegar a mi vida, Michelle ❤️";

let i=0;

function escribir(){

if(i<mensaje.length){

document.getElementById("texto").innerHTML+=mensaje.charAt(i);

i++;

setTimeout(escribir,70);

}

}

escribir();

function abrirCarta(){

document.getElementById("carta").style.display="block";

}
