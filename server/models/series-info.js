const mongoose = require("mongoose");
require('dotenv').config();

const SeriesInfoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    spotifyLink: { type: String, required: true },
    imagePortrait: { type: String, required: true },
    imageLandscape: { type: String, required: true },
    released: { type: Boolean, default: false },
    managingTeam: { type: Array, default: [] },
    characterVoices: { type: Array, default: [] },
    date: { type: Date, default: Date.now }
});
const SeriesInfo = mongoose.model("SeriesInfo", SeriesInfoSchema);

module.exports = SeriesInfo;