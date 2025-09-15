const Continents = require('../models/continentModels')

exports.getAllContinents = async (req,res) =>{
    try {
        const continents = await Continents.getAll();
        console.log(continents)
        res.json(continents);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}
exports.setContinents = async (req,res) =>{
    try {
        const id = req.params.id;
        const {name} = req.body;
        const modificacion = await Continents.updateContinent(id,name);
        res.json(modificacion);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
} 
exports.deleteContinents = async (req,res) =>{
    try {
        const id = req.params.id;
        const deleteCont = await Continents.deleteContinent(id);
        res.json(deleteCont);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
} 