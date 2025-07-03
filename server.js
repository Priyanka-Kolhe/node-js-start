// import fs from "fs"

// // console.log(fs);

// console.log("I am run with the start command");

import express from 'express';

const app = express();
const PORT = 3000;

const a = 10;
const b = 20;
console.log(a + b);

app.listen(PORT, () => {
    console.log(`Server is running is on port ${PORT}`)
})

