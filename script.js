let btn = document.querySelector("button")
//Evento: Ejecucion de una funcion (callback) 
//como respuesta a una accion.
//Nodo.addEventListener(evento, callback)

/*Esto se lee: A la etiqueta que acabo de seleccionar 
en la variable btn quiero registrarle un callback*/
btn.addEventListener("click",hacerClick) 
//Nombre del evento


//window.hacerClick = function(){}
//var hacerClick = function(){}
/*function hacerClick(){

    console.log("Click!")

} */

/*
Reemplazar el codigo de la funcion hacerClick por:
1- Crear un boton por cada click que se haga
2- Cada boton nuevo se tiene que ver en el DOM
3- Cada boton nuevo tiene que tener un callback en 
su propio evento click tambien
    Tener en cuenta cual es el evento, el callback a ejecutar y a que etiqueta se
    le va poner.
4- Todos los botones en pantalla tienen que tener como texto 
"Boton n", donde n es un numeero arrancando de 1 el cual se va 
aumentando de a una unidad. 

*/

let i=1

function hacerClick(){

let nuevo=document.createElement("button")
nuevo.innerText ="Boton " +i
nuevo.addEventListener("click",unaMismaFuncionParaTodosLosBotones)
let body= document.querySelector("body")
body.appendChild(nuevo)
i=i+1
    
}

function unaMismaFuncionParaTodosLosBotones(){
    Console.log("Click de un boton")
}

/*En un HTML nuevo
1- Hacer una etiqueta button con un texto que diga "Crear parrafo"
2-En JS agarrar ese nodo
3-Registrarle un callback a su click
4-El callback del boton tiene que poder crear la siguiente estructura:
<div>
     <p> Lorem Ipsum </p>
     <button>Borrar</button>
</div>
5- El boton tiene el texto "borrar" tambien tienen que tener un click y
su callback tiene qu poder barrar el mismo parrafo al cual pertenece usando la funcion:

NodoT.removeChild(NodoC)=> Remueve el NodoC(child) al NodoT(target) 