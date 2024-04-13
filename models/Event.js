const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    dateStart: {
        type: String,
        required: true,
    },

    dateEnd: {
        type: String,
        required: true
    },

    eventUrl: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Event = mongoose.model("Event", eventSchema);

module.exports = {Event};