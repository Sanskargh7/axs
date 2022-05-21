const { default: mongoose } = require("mongoose");

const UserSchema=new mongoose.Schema({
name:{
    type:String,
    require:true,
    min:3,
    max:30,
    
},
photo:{type:String},
email:{type:String,
required:true,
unique:true
},
password:{
type:String,
required:true,

},
address:{type:String,max:50},
mobileNumber:{type:Number,min:10,max:10},


},{timestamps:true})
module.exports=mongoose.model('User',UserSchema)