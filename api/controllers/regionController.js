const region = require('../models/regionModel')

exports.getAllRegions = async (req, res) =>{
    try {
        const regions = await region.getAllRegions();
        res.json(regions);
    } catch (error){
        res.status(500).json({ error: error.message })
    }
}
exports.setRegion = async (req,res) =>{
    try {
        const id = req.params.id;
        const {name} = req.body;
        const modificacionR = await region.updateRegions(id,name);
        res.json(modificacionR);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
} 
exports.deleteRegion = async (req,res) =>{
    try {
        const id = req.params.id;
        const deleteRegion = await region.deleteRegions(id);
        res.json(deleteRegion);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}