const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index (req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store (req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    const userExist = await Dev.findOne({ github_username });

    if (userExist) {
      console.log(`User ${github_username} already exists!`);
      return res.send(`User ${github_username} already exists!`);
    }

    const response = await axios.get(`https://api.github.com/users/${github_username}`);
   
    const { name = login, avatar_url, bio } = response.data;

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    }

    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: parseStringAsArray(techs),
      location,
    })

    console.log(`User ${github_username} created!`)
    return res.json(dev);
  },

  async update (req, res) {
    const dev = await Dev.findByIdAndUpdate(req.params.id, req.body, {new: true});
    
    return res.json(dev);
  },

  async destroy (req, res) {
    const dev = await Dev.findByIdAndRemove(req.params.id);

    return res.json({message: 'User Deleted'});
  }
}