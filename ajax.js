//readyState=0
let xhr = new XMLHttpRequest
console.log(xhr)
//readyState=1
xhr.open("GET","ajax.txt")  //No pongo HTTP al principio porque uso el mismo Host 

/*
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


(CHAU)RESPONSE
HTTP/1.1 404 Not Found
Headers:
Server: Apache 5.4/ win32
Content-Type: text/plain (MIME Type)
Content-Length: 11






Metodos o Verbos HTTP:

GET-POST(crear algo nuevo)-PUT(reemplazar)-PATCH(editar)-DELETE

*/
