const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    media: {
        type: String,
        required: true
    },

    orientation: {
        type: String,
        required: true
    },

    dimensions: {
        type: String,
        required: true,
    },

    url: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Image = mongoose.model("Image", imageSchema);

module.exports = {Image};