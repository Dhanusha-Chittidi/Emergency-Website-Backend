const Disaster=require('../models/disasters');

exports.addDisaster=async(req,res)=>{
    try{
        const newDisaster = new Disaster(req.body);
        const savedDisaster = await newDisaster.save();
        res.status(200).send(savedDisaster);
    }catch(error){
        res.status(500).send(error);
    }
};

exports.getDisaster=async(req,res)=>{
    const {name,id}=req.query;
    let query ={};
    if(name) query.name=name;
    if(id) query.id=id;

    try{
        const data= await Disaster.find(query);
        res.status(200).send(data);
    }catch(error){
        res.stus(500).send(error);
    }
}
exports.search = async (req, res)=>{
    try{
        const name=req.query.name;
        const disasters=await Disaster.find({name : new RegExp(name,'i')});
        res.status(200).send(disasters);
    }catch(err){
        res.status(500).send(err);
    }
};
