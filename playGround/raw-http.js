const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=c760d70c061dc34eb26237629276a82e&query=40,-75'


const request = http.request(url, (response) => {
    let data = ''
    response.on('data',(chunk)=>{
        data= data + chunk.toString()
    })
    
    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body)

    })



})

request.on('error',(error)=>{
    console.log('an error',error)
})
request.end()