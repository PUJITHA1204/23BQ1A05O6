const express=require("express")
const app=express();
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/notification",{useNewUrlParser:true});
const NotificationSechema=new mongoose.Schema({
	"ID":{
		type:String,
		required:true
	},
	"Type":{
		type:String,
		required:true
	},
	"Message":{
		type:String,
		required:true
	},
	"TimeStamp":{
		type:String,
		required:true
	}
});
const Notification=mongoose.model("Notification",NotificationSechema);

app.use(express.json());
app.post("/notifications",(req,res)=>{
	Notification.create(req.body);
	console.log(req.body);
	res.status(201).json({"message":"New Notification added"});
});
app.get("/notifications",(req,res)=>{
	const n=async(await(),Noftification.find());
	res.json(n);

});
app.listen(3000,()=>{
	console.log('Server running at 3000');
});