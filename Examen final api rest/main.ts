import mongoose from "npm:mongoose@8.0.1"
import express from "npm:express@4.18.2"

const MONGO_URL = Deno.env.get("MONGO_URL");

if (!MONGO_URL){
  throw new Error("url no adecuada")
}


try {
  await mongoose.connect(MONGO_URL);

  const app = new express();
  
  app.use(express.json());


  app.listen(3001 , ()=>{
    console.log("Escuchando correctamente");
})

} catch (error) {
  console.log(error)
}