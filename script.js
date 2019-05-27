/*
 TIPOS DE DATOS
  
 PRIMITIVOS
  String :"" o ''
  Number : 1 6.5 -9
  Boolean : True o False
  Undefined : Variable sin valor
  Null :
  
 OBJETOS
   Object : {}
   Array : []
   Function
   
 VARIABLES: var - let - const 
  Los nombres de una variable pueden arrancar con _ $ o cualquier letra

 */

 let nombre = "Florencia";
 let apellido = "Rodriguez Perez"
 let nombre_completo = nombre +" "+ apellido
// nombre = 25 ;
 console.log(nombre_completo);
 
 //console.log(X) : Nos muestra en consola lo que valga X.

 let numeros = [10,7,5,2,0,"Florencia",true ]
 numeros.push("hola")
 numeros.push(45)

 /*let persona ={
     nombre:"Flor",
     edad: 25,
     vive: true,
 }*/

 let persona ={
    candela:{
        edad:4,
        vive:true
    },
    horacio:{
        edad:6,
        vive:true
    },

 }

 persona.trabaja = false
 persona.tieneperro =3

 console.log(persona)

 /*console.log(numeros)
 console.log(numeros[5])
 console.log(numeros.length)*/
 
 console.table(numeros)

 //Estructuras de control: Condicionales-Bucles/Ciclos

//Sirve para iterar sobre matrices indexadas secuenciales
 for (let i = 0; i < numeros.length; i++) {
     console.log(numeros[i]);
     
 }

 //for...in: Sirve para iterar matrices indexadas asociativas
for (let prop in persona) {
    
      console.log(prop)  
    }

//V = JS Engine
//WEB APIs
//Objeto Global = window =BOM =Browser Object Model

//var a = 1
//window.a = 1

//window.innerHeight    innerHeight :El alto en pixeles
//window.Width          innerWidth  :El ancho en pixeles


//outerHeight =>Number - El alto en PX del navegador
//outerWidth => Number - El ancho en PX del navegador

//console => Object - Nos da funciones de logueo en consola de desarrollo
//location => Object - Tiene propiedades que controlan la ubicacion de un usuario
//location.href = String - Mapea a la barra de direcciones
//history.back() = Retrocede un nivel en el historial
//history.forward() = Avanza un nivel de en el historial

//document = DOM = Document Object Model

//console.dir(X) = Muestra X en formato JSON
//JSON= JavaScript Object Notation
//console.clear() = Limpia la consola
//console.dir(document)


//SELECCIONAR NODOS 
//document.getElementById(X) = DomElement
//document.getElementsByClassName(X) Array
//document.getElementsByTagName(X) Array
//document.querySelector(X) DomElement - Busca la primera instancia del selector X
//document.querySeletor All(X) Array - Busca todas las instancias del selector X


/*let dos = document.getElementById("item2")
console.dir(dos)
dos.innerText = "Nuevo Item"

let items =document.getElementsByClassName("item")
let lis = document.getElementsByTagName("li")*/


let dos = document.querySelector("#item2")


let items =document.querySelectorAll(".item")


let lis= document.querySelectorAll("li")


//CREAR NODOS
let p = document.createElement("p")
p.innerText = "Mi nuevo Texto"
p.id ="nuevo"
p.className = "item"

//AGREGAR NODOS AL DOM
//Nodo.appendChild(NodoNuevo) => Inserta el NodoNuevo como ultimo hijo de Nodo
//Nodo.insertBefore(NodoNuevo,NodoRed) => Inserta el NodoNuevo antes de NodoRef

let body =document.querySelector("body")
body.appendChild(p)

/*
1-Crear un elemento <li> y ponerle un texto
2-Meterlo como primer item del <ul>

EXTRA
1-Crear un elemento <ul> nuevo y vacio
let nuevo_ul= document.createelement("ul)
2-Hacer un bucle de 5 iteraciones
for(let i=0; i<5; i++)
3-Por iteracion de ciclo se tiene que crear un <li> nuevo
let li_nuevo=document.createelement("li")
li_nuevo.innerText = "Nuevo Texto" + i
4-Agregar todos los <li> al <ul> del punto 1
nuevo_ul.appendChild(li_nuevo)
5- Agregar el <ul> del punto 1 al DOM 
body.appendchild(nuevo_ul)

*/


let linuevo = document.createElement("li")
linuevo.innerText = "Hola a todos"

let ul = document.querySelector("ul")
let li1= document.querySelector("#item1")
ul.insertBefore(linuevo,li1)




