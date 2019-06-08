window.addEventListener("load",main)

function main (){
//Agarrar el formulario
let form=document.querySelector("form")
//Asignarle un submit
form.addEventListener("submit",handleSubmit)
let input= document.querySelector("input")

let nombre= document.querySelector("#nombre")

//Change: Se dispara cuando el control de un formulario cambia de valor



let paises={
    ar:["Buenos Aires", "La Pampa"],
    ve: ["Margarita", "Caracas"],
    ch:["Beijing","Shangai"]
}

//var handleSubmit = function handleSubmit(){}
//Cancelarle el default
function handleSubmit(e){
    e.preventDefault()
    //Cualquier cosa que se pueda escribir va a ser el value del input
    //console.dir(e.target[0].value)
    //console.dir(e.value[0].checked)  true or false, del formulario de tipo radio
    //console.dir(form)
    //console.dir()
    
    let nombre=e.target[0].value
    nombre=nombre.trim()
    console.log(nombre.length)
}
}

/*
submit: es un evento que se dispara cuando un formulario intenta ser enviado

String.length=>Number-La longitud del string
nombre.length
String.trim()=> String-DEvulve el mismo string pero sin espacios al inicio o al final
nombre.trim().length

{String|Array}.indexOf(x) => Number - Retorna la posicion de la instancia del elemento x
o -1 si no se encuentra
{String|Array}.includes(x) => Boolean -  Retorna verdadero o falso dependiendo si x
se encuentra o no

MAYUSCULAS Y MINUSCULAS

 */

//1)Seleccionar el <select>
let select = document.querySelector("select")
//2)Asignarle un evento change
select.addEventListener("change",cambio)
//3)El callback del change tinen que poder agarrar el valor del select
function cambio(){
    let valor =select.value
    console.log(nacionalidad)

//4)Con el valor obtenido, buscar en el objeto "paises" la propiedad que le corresponda

    let provincias = paises[valor]




//5)Si la propiedad no existe,se tiene que ver en pantalla un mensaje que diga "Tiene que
//seleccionar una opcion" en color rojo.
if (valor=0) {
let body =document.querySelector("body")
let p =document.createElement("p")
p.innerText="Tiene que seleccionar una opcion"
body.appendChild(p)
}

//6)Si la propiedad existe, tenemos que recorrer el array que tiene como valor asignado.
else{
    
}
//7)Por cada valor del array se tiene que crear un <option>

//8)Agregar todos los <option> creados a un nuevo <select>

//9)Agregar el <select> al DOM

 