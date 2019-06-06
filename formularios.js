window.addEventListener("load",main)

function main (){
//Agarrar el formulario
let form=document.querySelector("form")
//Asignarle un submit
form.addEventListener("submit",handleSubmit)
let input= document.querySelector("input")


//var handleSubmit = function handleSubmit(){}
//Cancelarle el default
function handleSubmit(e){
    e.preventDefault()
    console.dir(e.target[0].value)
    
}
}

/*
submit: es un evento que se dispara cuando un formulario intenta ser enviado
 */