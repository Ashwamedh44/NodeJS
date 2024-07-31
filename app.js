const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express()
app.use(express.json());

app.use(cors({
    origin: true
  }));
  app.use(bodyParser.json());
mongoose.connect("mongodb+srv://ashwamedhdatta:tS0HJrX2D28J9Uzu@cluster0.6l2lyue.mongodb.net/UserCount_DB?retryWrites=true&w=majority&appName=Cluster0")
const db = mongoose.connection

const User = require('./UserModel.js');

db.on('error',(err)=>{
    console.log("Error Found",err.message)
})

db.once('open',()=>{
    console.log("Successfully Connected to Database");
})

app.listen(8888,(err)=>{
    if(err)
    {
        console.log("Error")
    }
    else
    {
        console.log("Server is Running !!!")
    }
})

app.post('/add_data', async(req,res)=>{
    const user = new User({   
        Name:req.body.Name,
        Email:req.body.Email,
        Count:req.body.Count
    });
    try {
        await user.save();
        res.send("Added Successfully !!!");
      } catch (err) {
        console.error(err);
        res.status(500).send("Error adding ticket");
      }
})

app.get(`/get-user-by-email/:Email`, async (req,res) => {
    const email = req.params.Email;
    console.log(email);
    // const email = "ashu@gmail.com";
  
    try {
      const user = await User.findOne({ Email: email });
      if (user) {
        console.log(user)
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.put('/update', async (req, res) => {
    const email = req.body.Email;
    const name = req.body.Name;
    const count = req.body.Count;
  
    try {
      const user = await User.findOneAndUpdate(
        { Email: email },
        { Name: name, Count: count },
        { new: true }
      );
  
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });