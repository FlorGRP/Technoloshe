//readyState=0
let xhr = new XMLHttpRequest
console.log(xhr)
//readyState=1
xhr.open("GET","ajax.txt")  //No pongo HTTP al principio porque uso el mismo Host 

//Con Live Server, Direccion de red del servidor: SIEMPRE USAR ESTE PROTOCOLO
//http://127.0.0.1:5500/ajax.html

//file:///C:/Users/T11641.Training13/proyecto/ajax.html


//readystatechange: Se dispara cada vez que la propiedad readystate cambia
xhr.addEventListener("readystatechange", CambioDeEstado)


//load: se dispara cuando el readyState es igual a 4
xhr.addEventListener("load",Termino)


//Enviar el XHR
xhr.send()


function CambioDeEstado(){
    console.log(xhr.readyState)
}

function Termino(){
    if(xhr.status== 200){
        console.log(xhr.response)
    }
}




/*
CORS: Cross Origin Resource Sharing


readyState=Indica en que estado esta el pedido
0-Objeto Inicializado
1-Objeto Configurado
2-Headers enviados y recibidos
3-Descargando Informacion
4-Pedido Finalizado

HTTP

(HOLA)REQUEST
GET index.html HTTP/1.1
Headers:
Host:http://mipagina.com
User-Agent: (que navegador pide)
X-User:
X-Password:

(CHAU)RESPONSE
HTTP/1.1 404 Not Found
Headers:
Server: Apache 5.4/ win32
Content-Type: text/plain (MIME Type)
Content-Length: 11



Metodos o Verbos HTTP:

GET-POST(crear algo nuevo)-PUT(reemplazar)-PATCH(editar)-DELETE

"BUENOS"
1XX
2XX
    200: OK
    201: CREATED
3XX
    304:NOT MODIFIED

"MALOS"

ERRORES DEL CLIENTE
4XX
    400: BAD REQUEST
    401: UNAUTHORIZED
    403: FORBIDDEN
    404: NOT 
    405: METHOD NOT ALLOWED
    408: REQUEST TIMEOUT
    418: I´M A TEAPOT 

ERRORES DEL SERVIDOR
5XX
    500: INTERNAL SERVER ERROR
    504: GATEAWAY TIMEOUT



*/
