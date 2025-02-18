//this file is the core of the application

//makes sure we can use express
const express = require('express')
//this lets us set up the variable app = to express to allow it to use the methods that come with express
const app = express()
//we set up our port as a variable so we can use it later if needed
const PORT = 8000

const rappers = { 
    '21 savage' : {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph' ,
        'birthLocation': 'London, England'
    
    },
    'chance the rapper': {
        'age' : 29,
        'birthName' : 'Chancelor Benneett',
        'birthLocation' : 'Chicago, Illinois'
    },
    'unknown' : {
        'age' : 0,
        'birthName' : 'unknown',
        'birthLocation' : 'unknown'
    }
}

//this acts an event listener but in this case it is listening for a net work request app.get()
app.get('/', (request, response)=>{
    //this tells server.js to start looking for the html file in the main directory
    //dirname = root file
    response.sendFile(__dirname + '/index.html')    
})
    //here we are responding with JSON
app.get('/api/:name', (request,response)=>{
    const rapperName = request.params.name.toLowerCase()
    //this conditional responds with the rapper name entered or unkown if it is not in rappers object
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})

