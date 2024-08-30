import bodyparser from "body-parser";
import cors from "cors";
import express from "express";
import NewsAPI from 'newsapi';
import axios from "axios";
const newsapi = new NewsAPI('6dec502440ff4ba88d081de58e7928aa');
const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json({extended:true}));
const news_api_key='6dec502440ff4ba88d081de58e7928aa';


 

app.get("/",(req,res)=>{
    res.send("<h1>hello there server is on baby let's start</h1>")
})
app.get("/news",async (req,res)=>{
    try{
        const data= await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=6dec502440ff4ba88d081de58e7928aa");
        console.log(data.data);
        res.json(data.data);
    }
    catch(e){
        res.json({err:e?.message});
    }
})
app.get("/sources",async (req,res)=>{
    try{
        const data= await axios.get("https://newsapi.org/v2/top-headlines/sources?apiKey=6dec502440ff4ba88d081de58e7928aa");
        console.log(data);
        res.json(data.data);
    }
    catch(e){
        res.json({err:e?.message});
    }
})
app.listen(4800,()=>{
    console.log("server is on ");
})