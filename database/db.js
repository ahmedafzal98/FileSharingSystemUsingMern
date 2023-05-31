import mongoose from "mongoose";
const DBConnection = async () =>{
    const DB_URL = `mongodb://ahmedafzal2070:ahmed123@ac-hxl4wyp-shard-00-00.jcs42ck.mongodb.net:27017,ac-hxl4wyp-shard-00-01.jcs42ck.mongodb.net:27017,ac-hxl4wyp-shard-00-02.jcs42ck.mongodb.net:27017/?ssl=true&replicaSet=atlas-5tvc96-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser:true})
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error ehile connecting to Database",error.message);
    }
}
export default DBConnection