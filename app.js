//Se genera variable array para almacenar lso datos de amigos
let amigos = [];
//Funcion que valida el elemento HTML 'amigo'.
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