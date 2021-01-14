const http = require('http')

const server = http.createServer((request, response)=>{
    
    if(request.method === 'GET'){
        response.write('Obtendras un recurso')
    }
    if (request.method ==='POST'){
        response.write('Crearas un recurso')
    }
    
    response.end()
})

server.listen(8080, ()=>{
    console.log('Servidor escuchando en puerto 8080')
})