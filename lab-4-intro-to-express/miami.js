const express = require('express');

const app = express() 

//configure our express app to use handlebars 
app.engine('handlebars', expressHandlebars({
    defaultLayout:'main',
}))

app.set('view engine','handlebars')
//ends handlebar configuration

const port = process.env.port || 3000
//Routes go before 404 and 500
app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/about', (req,res)=>{
    res.render('about')
})

//This generate an error because the parameter names don't match 
//res should be response -- they must match 
app.get('/nightlife', (request,respond)=>{
    res.type('text/plain')
    res.send('Miami at Night')
})

//Error handling -> app.use() basic express route
// We ALWAYS do this as a default 
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

//Server Error 500 AKA code error
app.use((req, res) => {
    console.log(error.message)
    res.status(500)
    res.render('500')
})

//Setup our listener
app.listen(port,()=>{   
    console.log(`Server started http://localhost:`+port)
    //same as saying... --> console.log(`Server started http://localhost:${port}`)
    console.log('To Close Press Ctrl-C')
})
