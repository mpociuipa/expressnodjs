
const Hotel = require('../models/hotelModel');



//Routes function
exports.getAllHotels = async (req,res)=>{
    try{
    const hotels = await Hotel.find();
    res.status(200).json({
        status: 'success',
        results: hotels.length,
        data: {
            hotels
        }
    })
}catch(err){
    console.log(err)
}
}
exports.createHotel = async (req,res)=>{
    try{
        const newHotel = await Hotel.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                hotel: newHotel
            }
        })
    }catch(err){
        console.log(err)
    }
}

exports.getHotelById = async (req,res)=>{
    const hotel = await Hotel.findById(req.params.id);
    if(!hotel){
        return res.status(404).json({
        status: 'failed',
        message: 'Invalid ID'
        })
    }
    res.status(200).json({
        status: 'success',
        data: {
            hotel
        }
    })
    
}
exports.updateHotel = (req,res)=>{
    if(!req.params.id){
        return res.status(404).json({
            status: 'failed',
            message: 'Invalid ID'
        })
    }
    res.status(200).json({
        status: 'success',
        data:{
            hotel: 'updated'
        }
    })
}
exports.deleteHotel = async (req,res)=>{
   try{
   await Hotel.findByIdAndDelete(req.params.id);
   }catch(err){
    console.log(err)
   }
    res.status(200).json({
        status: 'success',
        data:{
            hotel: null
        }
    })
}