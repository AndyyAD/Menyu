const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/registeredUser');
  console.log("db connected")
}

const userRegSchema = new mongoose.Schema({
    name: String,
    email: String,
    restaurantname: String,
    restaurantdesc: String,
    tableno: Number,
    foodtype: String, 
    menu: String
});

const regUser = mongoose.model('regUser', userRegSchema);

const app = express();

app.use(cors())
app.use(bodyParser.json())

app.post('/',async (req, res) => {

    let user = new regUser();
    user.name = req.body.name;
    user.email = req.body.email;
    user.restaurantname = req.body.restaurantname;
    user.restaurantdesc = req.body.restaurantdesc;
    user.tableno = req.body.tableno;
    user.foodtype = req.body.foodtype;
    user.menu = req.body.menu;
    const doc = await user.save()

    console.log(doc)
    res.json(doc);
})

app.get('/recieve', async (req, res) => {
    const docs = await User.find({});
    res.json(docs)
})

app.listen(8000, () =>{
    console.log("Server started")
})