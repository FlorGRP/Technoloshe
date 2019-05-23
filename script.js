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
   
 VARIABLES: var  -  let - const 
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
