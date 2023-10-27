const express = require('express')

const expressHandlebars = require('express-handlebars')

const app = express()

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine','handlebars')

const port = process.env.port | 3000

app.get('/', (req,res)=> {
    res.render('page')
})

app.use((req,res)=>{
    res.status(500)
    res.render('500')
})

app.use((error,req,res,next) =>{
    console.log(error.message)
    res.status(500)
    res.render('500')
})

app.listen(port,() =>{
    console.log(`server started http://localhost:${port}`)
    console.log('To close press Ctrl-C')
})