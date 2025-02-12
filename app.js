//Se genera variable array para almacenar los datos de amigos
let amigos = [];

//Funcion que valida el elemento HTML 'amigo'.
function agregarAmigo(){
//capturar el valor de amigo y un .trim para eliminar espacios
let nombreAmigo = document.getElementById('amigo').value.trim();
//Validar que el valor sea distinto que nada y aparte distinto al placeholder, de lo contrario ingresa ese dato.
if (nombreAmigo !== "" && nombreAmigo !== "Escribe un nombre"){
    //añadir a la lista amigos
    amigos.push(nombreAmigo);
    //limpiar input amigo
    document.getElementById('amigo').value = "";
    //log temporal (comentar al terminar el codigo)
    console.log("Se agrega al listado amigos:"+ nombreAmigo);
    //Se añade funcion para mostrar los amigos agregados
    añadirElementosAmigos();
}
else{
    alert("Por favor, inserte un nombre.");
}
}

//Funcion para recorrer la lista amigos
function añadirElementosAmigos(){
//obtener listaAmigos
let listaAmigos = document.getElementById('listaAmigos');

//Limpiar lista amigos
listaAmigos.innerHTML = "";

//Bucle para añadir elementos <li>
for (let i = 0; i < amigos.length; i++){
    //Se crea elemento li
    let li = document.createElement('li');
    //Selecciona segun la variable i la posicion del array para añadir el texto al elemento li
    li.textContent = amigos[i];
    // Se añade a la lista total actualizada los elementos li
    listaAmigos.appendChild(li);
}
}
