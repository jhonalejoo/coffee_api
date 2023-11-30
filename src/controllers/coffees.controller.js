const CoffeeService = require('../services/coffees.service')
const service = new CoffeeService();


const get = async (req,res)=>{
    try{
        const response = await service.find()
        res.json(response)
    } catch (error){ 
        res.status(500).send({success:false, message: error.message})
       
    }
}
const create = async (req,res)=>{
    try{
        const response = await service.create(req.body)
        res.json({success: true, data: response})
    } catch (error){ 
        res.status(500).send({success:false, message: error.message})
       
    }
}

module.exports ={
    get,
    create
}