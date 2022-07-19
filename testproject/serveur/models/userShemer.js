import Mongoose from 'mongoose';

const UserSchemer=new Mongoose.Schema({
    name:{type:String , required:true, unique:true} ,
    password:String,
    email:{type:String , required:true, unique:true},
})
const Accounts=Mongoose.model('accounts',UserSchemer);

const PersonDetect=new Mongoose.Schema({
    objCreation:{
        bbox: Array,
        class: String, 
        score: Float64Array
        }
    })
const detection=Mongoose.model('detection',PersonDetect);




export default Accounts;