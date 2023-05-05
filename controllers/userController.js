const {User} = require('../models');

const userController = {
    async getUsers(req,res){
        try {
            const userData = await User.find()
            res.json(userData)
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async getOneUser(req, res){
        try {
            const userData = await User.findOne({_id:req.params.userId})
            if (!userData) {
                return res.status(404).json({message: 'No user with this id'});
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async createUser(req, res){
        try {
            const userData = await User.create(req.body);
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async updateUser(req, res){
        try {
            const userData = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$set: req.body},
                {new: true}
            );
            if (!userData) {
                return res.status(404).json({message: 'No user with this id'});
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res){
        const userData = await User.findOneAndDelete({_id: req.params.userId});
        if (!userData) {
            return res.status(404).json({message: 'No user with this id'});
        }
        res.json(userData);
    },


}

module.exports = userController;