const Data=require('../models/medicals');

exports.addData=async(req,res)=>{
    try{
        const newData = new Data(req.body);
        const savedData = await newData.save();
        res.status(200).send(savedData);
    }catch(error){
        res.status(500).send(error);
    }
};

exports.getData=async(req,res)=>{
    const {name,id}=req.query;
    let query ={};
    if(name) query.name=name;
    if(id) query.id=id;

    try{
        const data= await Data.find(query);
        res.status(200).send(data);
    }catch(error){
        res.stus(500).send(error);
    }
}

exports.searchByName = async (req, res)=>{
    try{
        const name=req.query.name;
        const emergencies=await Data.find({name : new RegExp(name,'i')});
        res.status(200).send(emergencies);
    }catch(err){
        res.status(500).send(err);
    }
};
