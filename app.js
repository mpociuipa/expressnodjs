const express = require('express');
const hotelRouter = require('./routes/hotelRoutes');
const app = express();
app.use(express.json());

// app.use((req,res,next)=>{
//     console.log('Hello from middleware');
//     next();
// })





//main route

app.use('/api/v1/hotels', hotelRouter);

module.exports = app;
//http://localhost:3000/api/v1/hotels