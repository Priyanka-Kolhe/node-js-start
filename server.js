// import fs from "fs"

// // console.log(fs);

// console.log("I am run with the start command");

import express from 'express';

const app = express();
const PORT = 3000;

// const a = 10;
// const b = 20;
// console.log(a + b);

app.get("/hello", () =>{
    console.log("hello");
})
app.get("/", (req,res) => {
    res.json({"message" : "Hello World...!"})
})

app.get("/health",(req,res)=>{
    res.json({"message" : "Health is good!"})
})

app.listen(PORT, () => {
    console.log(`Server is running is on port ${PORT}`)
})

