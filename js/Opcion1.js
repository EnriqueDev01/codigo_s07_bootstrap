let textos=[];
let textoInput=document.getElementById("textoAdd");
let boton=document.getElementById("botonAdd");

let textosLista=document.getElementById("textos");

boton.addEventListener("click",function(){
    if (textoInput.value.trim() != "") {
        textos.push(textoInput.value);
        textoInput.value="";
        ListarTextos();
    } else {
        alert("Ingrese un texto");
    }    
})

function ListarTextos(){
    textosLista.innerHTML="";
    textos.forEach(
        item => {
            let nuevoLI=document.createElement("li");
            nuevoLI.innerHTML=item;
            textosLista.appendChild(nuevoLI);
        }
    );
}