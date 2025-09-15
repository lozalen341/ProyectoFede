const language = require('../models/languageModel')

exports.getAlllanguages = async (req, res) =>{
    try {
        const languages = await language.getAllLanguages();
        res.json(languages);
    } catch (error){
        res.status(500).json({ error: error.message })
    }
}
exports.setlanguages = async (req,res) =>{
    try {
        const id = req.params.id;
        const {lan} = req.body;
        const modificacionL = await language.updateLanguages(id,lan);
        res.json(modificacionL);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
} 
exports.deletelanguages = async (req,res) =>{
    try {
        const id = req.params.id;
        const deleteLen = await language.deleteLanguages(id);
        res.json(deleteLen);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
} 