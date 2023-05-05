const {Thought, User} = require('../models');

const thoughtController = {
    async getThoughts(req,res){
        try {
            const ThoughtData = await Thought.find()
            .sort({createdAt: -1})
            res.json(ThoughtData)
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async getOneThought(req, res){
        try {
            const ThoughtData = await Thought.findOne({_id:req.params.thoughtId})
            if (!ThoughtData) {
                return res.status(404).json({message: 'No thought with this id'});
            }
            res.json(ThoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
}
