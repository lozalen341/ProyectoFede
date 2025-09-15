const countries = require('../models/countryModel')

exports.getAllCountries = async (req, res) =>{
    try {
        const countries = await countries.getAllCountries();
        res.json(countries);
    } catch (error){
        res.status(500).json({ error: error.message })
    }
}
exports.setCountries = async (req,res) =>{
    try {
        const id = req.params.id;
        const {name} = req.body;
        const modificacionC = await countries.updateCountry(id,name);
        res.json(modificacionC);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
} 
exports.deleteCountries = async (req,res) =>{
    try {
        const id = req.params.id;
        const deleteCount = await countries.deleteCountry(id);
        res.json(deleteCount);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
} 