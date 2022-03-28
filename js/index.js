const bodyparser = require("body-parser")
// mongoose

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactdance',{useNewUrlParser:true, useUnifiedTopology: true});

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String  
  
  });
const Contact = mongoose.model('Contact', contactSchema);

app.post('/contact',(req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("this item has been saved")
    }).catch(()=>{
        res.status(400).send("item was not send")
    });

    // res.status(200).render('contact.pug' )
});
