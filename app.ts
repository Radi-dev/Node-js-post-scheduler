//const db = require("./db");
const express = require("express");
const mongoose = require("mongoose");
const posts = require("./routers/posts");

const app = express();
app.use(express.json());
interface Person {name:string|{},title?:string,getTime():Date|{}}
let data:Person={"name":{a:'55yy radi',b:"hhdjd"},getTime:()=>({date:'2022'})}
const datar:string=data as unknown as string;

class Post{
  private title:string;
  private body:string;

  constructor(postTitle:string,postBody:string){
    this.title=postTitle
    this.body=postBody
  }
  getPost():{title:string,body:string}{
    return ({title:this.title,body:this.body})
  }
}
const post1=new Post("I am post1 title","I amthe amazing body of post 1")
console.log(post1.getPost()?.body,"dataaar")
const dataf=(aa?:string):Person=> ({name:'500tfuytu ',getTime(){return new Date()}})
mongoose.connect("mongodb://localhost/post-scheduler", { 
  useNewUrlParser: true,
});  
const con = mongoose.connection;
con.on("open", () => console.log("connected mongoose"));
app.get("/", (req:any, res:any) => {
  res.send(data["name"]+res.statusCode+' '+dataf().getTime());
  console.log("getted");
});
app.use("/posts", posts);
//console.log(db.con.posts.find("_id"));
app.listen(9000, () => console.log("server running at 9000 using Ts",data)) ;
