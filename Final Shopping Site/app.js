const express = require('express')

//add the view engine 
const expressHandlebars = require('express-handlebars') 

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static(__dirname + '/public'))

const handler = require('./lib/handler')

//configure our express app to use handlebars
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine','handlebars')
//ends handlebar configuration

const port = process.env.port || 3000

const emails = []
const cart =[]
const gallery = require('./data/gallery.json')

app.get('/',(req,res)=>{
    var data = require('./data/gallery.json')
    var data = require('./data/home-data.json')
    res.render('page',{ data, gallery })
    //Since you are passing multiple data objects
    //you need to pass them with keys
    //res.render('page',{ "data":data,"gallery": gallery })
})

app.get('/mad',(req,res)=>{
    const data = require('./data/mad-data.json')
    res.render('madform',{data})
})
app.get('/madprocess',(req,res)=>{
   res.render('madprocess',{req}) 
})
//newsletter section
//https://elements.envato.com/web-templates/shopping+html

app.get('/newsletter-signup', handler.newsletterSignup)

app.post('/newsletter-signup/process', handler.newsletterSignupProcess)

app.get('/orders/list', handler.newsletterSignupList)

app.get('/newsletter/details/:email',handler.newsletterUser)

app.get('/product/:id',handler.showProduct)

app.get('/category/:category',handler.showCategory)

app.get('/cart/cartproducts', handler.addToCartProcess)

app.post('/cart', handler.addToCartProcess)



app.get('/newsletter/delete/:email',handler.newsletterUserDelete)

app.get('/order/thankyou',(req,res) =>{
    res.render('thankyou')
})
//Error handling ->  app.use() basic express route 
app.use((req,res) => {
    res.status(404)
    res.render('404')
})

//Server Error 500
app.use((error,req,res,next) => {
    console.log(error.message)
    res.status(500)
    res.render('500') 
}) 

// setup listener
app.listen(port,()=>{
    console.log(`Server started http://localhost:${port}`)
    //console.log('Server starter http://localhost:'+port)
    console.log('To close pres Ctrl-C')
})