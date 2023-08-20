//Captura de botones
const botonEncriptar = document.getElementById("boton-encriptar");
const botonDesencriptar = document.getElementById("boton-desencriptar");
const botonCopiar = document.getElementById("boton-copiar-mensaje");
const botonPegar = document.getElementById("boton-pegar-mensaje");
const botonBorrar = document.getElementById("boton-borrar");
const mostrarMensajeEncriptado = document.getElementById("transcripcion");
//const areaMensaje = document.getElementById("mensaje");

//Obtener el texto del cuadro principal, necesario para las funciones de encriptar y desencriptar
function obtenerTexto() {
  let textarea = document.getElementById("mensaje");
  let textTextarea = textarea.value;
  return textTextarea;
}

function encriptar() {
  let texto = obtenerTexto();

  texto = texto.replaceAll("e", "enter"); //no está en orden alfabético para evitar
  texto = texto.replaceAll("i", "imes"); //que el código reeemplace las vocales que son,
  texto = texto.replaceAll("a", "ai"); // ellas mismas, reemplazo; por ejemplo: "hola" sería
  texto = texto.replaceAll("o", "ober"); //"hoberlaimes" en vez de "hoberlai" porque cambiaría la
  texto = texto.replaceAll("u", "ufat"); //"i" de "ai" por "imes"

  mostrarMensajeEncriptado.value = texto;
}

botonEncriptar.addEventListener("click", encriptar);

function desencriptar() {
  let texto = obtenerTexto();

  texto = texto.replaceAll("ai", "a");
  texto = texto.replaceAll("enter", "e");
  texto = texto.replaceAll("imes", "i");
  texto = texto.replaceAll("ober", "o");
  texto = texto.replaceAll("ufat", "u");

  mostrarMensajeEncriptado.value = texto;
}

botonDesencriptar.addEventListener("click", desencriptar);

function copiar() {
  mostrarMensajeEncriptado.select();
  mostrarMensajeEncriptado.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(mostrarMensajeEncriptado.value);
}

botonCopiar.addEventListener("click", copiar);

function pegar() {
  let textarea = document.getElementById("mensaje");
  textarea.value = mostrarMensajeEncriptado.value;
  mostrarMensajeEncriptado.value = "";
}

botonPegar.addEventListener("click", pegar);

function borrar() {
  let textarea = document.getElementById("mensaje");
  textarea.value = "";
  mostrarMensajeEncriptado.value = "";
}

botonBorrar.addEventListener("click", borrar);
