import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import connect_db from "../server/DataBase/DB.js"
import UserRouter from "./Routes/UserRoutes.js"


dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

 
app.use("/user",UserRouter) 


const start_server = async ()=>{
    try{
        await connect_db();
        app.listen(port,()=>{
            console.log(`server is running on ${port}`)
        })
    }
    catch(err){
        console.log(err) 
    }    
}

start_server()
