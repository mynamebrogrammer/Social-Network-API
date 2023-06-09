const { Thought, User } = require("../models");

const thoughtController = {
  async getThoughts(req, res) {
    try {
      const ThoughtData = await Thought.find().sort({ createdAt: -1 });
      res.json(ThoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async getOneThought(req, res) {
    try {
      const ThoughtData = await Thought.findOne({ _id: req.params.thoughtId });
      if (!ThoughtData) {
        return res.status(404).json({ message: "No thought with this id" });
      }
      res.json(ThoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const ThoughtData = await Thought.create(req.body);

      const UserData = await User.findOneAndUpdate(
      );
      console.log(`Thought created for ${UserData.username}`);
      res.json(ThoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const ThoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { new: true }
      );
      if (!ThoughtData) {
        return res.status(404).json({ message: "No thought with this id" });
      }
      res.json(ThoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const ThoughtData = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });
      if (!ThoughtData) {
        return res.status(404).json({ message: "No thought with this id" });
      }
      res.json(ThoughtData);
      console.log("Thought deleted");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async addReaction(req, res) {
    try {
      const ThoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $push: { reactions: req.body } },
        { new: true }
      );
      if (!ThoughtData) {
        return res.status(404).json({ message: "No thought with this id" });
      }
      res.json(ThoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteReaction(req, res) {
    try {
      const ThoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
      if (!ThoughtData) {
        return res.status(404).json({ message: "No thought with this id" });
      }
      res.json(ThoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = thoughtController;
