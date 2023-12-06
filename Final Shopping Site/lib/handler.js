let eList = require('../data/orders.json')

const fs = require("fs")

exports.shoppingCart = (req,res) => {
    res.render('shoppingcart', { csrf : 'supersecret'  })
}
exports.checkOut = (req,res) => {
    res.render('checkout', { csrf : 'supersecret'  })
}
exports.orderList = (req,res) => {
    console.log(eList)
    eList = require('../data/orders.json')
    res.render('orderlist', { "orders": eList.users  })
}

exports.orderDetails = (req,res) => {
     //eList = require('../data/emails.json')
     console.log(eList)
    var userDetails = eList.orders.filter((user)=>{ 
        return user.order == req.params.order
     })

     console.log(orderDetails)
    res.render('orderdetails',{"orders": orderDetails})
}

exports.orderDelete = (req,res) => {
    var newList = {"users":[]}
    newList.users = eList.users.filter((user)=>{ 
        return user.order != req.params.order
     })
     console.log("deleting: " + req.params.order)

     var json = JSON.stringify(newList)
     console.log(json)

     fs.writeFile('./data/orders.json',json,'utf8',()=>{})

     eList = require('../data/orders.json')
     res.send('<a href="/order/list">Go Back</a>')
     //res.redirect(303,'/newsletter/list')
}

exports.checkoutProcess = (req,res) => {

    //Then we do something here
    console.log(req.body)
    //req.body.email
    //req.body.firstname
    //req.body.lastname
    var newUser = {
        'firstname' : req.body.firstname,
        'lastname' : req.body.lastname,
        'address':req.body.address,
        'city':req.body.city,
        'state':req.body.state,
        'zip':req.body.zip,
        'email' : req.body.email
    }
    //the push method adds items to an array
    eList.users.push(newUser)

    var json = JSON.stringify(eList)

    console.log(json)

    fs.writeFileSync('./data/orders.json',json,'utf8',()=>{})

   
    res.redirect(303,'/order/thankyou')
    //res.send("you posted something to /process " + req.body.email)
             
}