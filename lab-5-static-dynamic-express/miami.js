const express = require('express');

//add the new engine
const expressHandlebars = require('express-handlebars')

const app = express() 

//configure our express app to use handlebars 
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout:'main',
}))

app.set('view engine','handlebars')
//ends handlebar configuration

//Static files or folders are specified before any route - this is why we separate views from layouts
app.use(express.static(__dirname + "/public")) //dirname = directory name

const port = process.env.port || 3000
//Routes go before 404 and 500
app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/about', (req,res)=>{
    res.render('about', { 
        tite:"About Miami", 
        pageTitle: "About Miami Travel",
        image: "miami1.jpg",
        description: "Miami is a beautiful city"
    })
})
 
app.get('/nightlife', (req,res)=>{
    res.render('nightlife')
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
