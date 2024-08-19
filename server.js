const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const medicalRoutes=require('./routes/medicalRoutes');
const disasterRoutes=require('./routes/disasterRoutes');

const app=express();
const port=5000;

app.use(bodyParser.json());

const corsOptions={
    origin : '*',
    methods : ['GET','POST'],
    allowedHeaders : ['content-Type'],
};

app.use(cors(corsOptions));

const uri='mongodb+srv://dhanushachittidi274:70NBAVw4GgdFotGb@cluster0.338g7hm.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri,{useNewUrlParser : true, useUnifiedTopology : true})
.then(()=> console.log('MongoDB Connected'))
.catch(err=> console.log(err));

app.use('/',medicalRoutes);
app.use('/',disasterRoutes);

app.listen(port,()=>{
    console.log('Server running at http://localhost:5000');
});