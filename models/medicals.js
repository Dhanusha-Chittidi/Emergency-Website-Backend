const mongoose=require('mongoose');

const dataSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
},
name: {
    type: String,
    required: true
},
overview: {
    type: String,
    required: true
},
immediate_steps: {
    type: [String],
    required: true
},
dos: {
    type: [String],
    required: true
},
donts: {
    type: [String],
    required: true
},
when_to_call: {
    type: [String],
    required: true
},
first_aid: {
    type: [String],
    required: true
},
important_contacts: {
    type: [String],
    required: true
},
additional_resources: {
    type: [String],
    required: true
}
});

module.exports=mongoose.model('Data',dataSchema)