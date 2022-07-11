const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    id: String,
    name: String,
    url: String,
    username: String,
    description: String,
    profile_image_url: String
}, { timestamps: true }, {immutable: true})

module.exports = mongoose.model('User', UserSchema)