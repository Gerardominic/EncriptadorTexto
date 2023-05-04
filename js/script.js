// Variables
//Se selecciona el text area
const textoArea = document.querySelector(".textoArea");
// Se selecciona el text area Mensaje
const mensaje = document.querySelector(".mensaje");

// Se selecciona los botones
const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const botonCopiar = document.querySelector(".btn-copiar");

// Seleccionar la imagen muñeco del mensaje cuando ya haya palabras
const imagenMensajeMuneco = document.querySelector(".img-muneco");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Crear las llaves de encriptación
let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]

// Función para el boton de encriptar
function btnEncriptar(){
    // El texto sera lo que se pase en el text area ya con un valor obtenido y encriptado
    const textoEncriptado = encriptar(textoArea.value);
    // Dar el texto en el campo mensaje
    mensaje.value = textoEncriptado

    // Limpiar el campo de text area
    textoArea.value = "";

    //Desaparecer la imagen
    imagenMensajeMuneco.style.display = "none";
}

// Función para el boton desencriptar
function btnDesencriptar(){
    // El texto sera lo que se pase en el text area ya con un valor obtenido y desencriptado
    const textoDesencriptado = desencriptar(textoArea.value);

    // Dar el texto en el campo mensaje
    mensaje.value = textoDesencriptado;

    //Limpiar el campo de text area
    textoArea.value = "";
}

function btnCopiar(){

    
    //API de JavaScript para copiar texto
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            console.log("Texto copiado");
        })
        .catch(error => {
            console.log("Algo ocurrio", error);
        })
}


function encriptar (stringEncriptado){   
    
    // El parametro string encriptado sera minusculas
    stringEncriptado = stringEncriptado.toLowerCase();

    // Iterar
    for(let i = 0; i < matrizCodigo.length; i++){
        //Verificar las letras de la matriz 
        //Las letras están en posición 0 de cada matriz
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            //Reemplazar la letra que contiene por la palabra correspondiente
            // replaceAll(Caracter/Palabra, caracter/palabraQueReemplazara)
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    // Se devuelve la encriptacion
    return stringEncriptado;
}

function desencriptar (stringDesencriptado){
    
    // El parametro string desencriptado sera minusculas
    stringDesencriptado = stringDesencriptado.toLowerCase();

    // Iterar
    for(let i = 0; i < matrizCodigo.length; i++){
        //Verificar las letras de la matriz 
        //Las palabras desencriptadas están en posición 1 de cada matriz
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            //Reemplazar la palabra que contiene por la letra correspondiente
            // replaceAll(Caracter/Palabra, caracter/palabraQueReemplazara)
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    // Se devuelve la encriptacion
    return stringDesencriptado;
}


// Evento de los botones al hacer click
botonEncriptar.onclick = btnEncriptar;
botonDesencriptar.onclick = btnDesencriptar;
botonCopiar.onclick = btnCopiar;