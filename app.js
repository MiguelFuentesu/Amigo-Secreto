// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
let nombreAmigo = document.getElementById('amigo').value.trim();
if (nombreAmigo !== "" && nombreAmigo !== "Escribe un nombre"){
    amigos.push(nombreAmigo);
    document.getElementById('amigo').value = "";
    console.log("Se agrega al listado amigos:"+ nombreAmigo);
}
else{
    alert("Por favor, inserte un nombre.");
}
}