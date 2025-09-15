const countryStatModel = require('../models/countryStatsModel')

exports.getCountryStats = async (req, res) =>{
    try {
        const { country_id } = req.params;
        const stats = await countryStatModel.getCountryStats(country_id);
        res.json(stats);
    } catch (error){
        res.status(500).json({ error: error.message })
    }
}
exports.setCountryStats = async (req,res) =>{
    try {
        const id = req.params.id;
        const {pop} = req.body;
        const modificacionCS = await countryStatModel.updateCountryStats(id,pop);
        res.json(modificacionCS);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
} 
exports.deleteCountryStats = async (req,res) =>{
    try {
        const id = req.params.id;
        const deleteCountStats = await countryStatModel.deleteCountryStats(id);
        res.json(deleteCountStats);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}