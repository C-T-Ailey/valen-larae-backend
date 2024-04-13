const {Event} = require("../models/Event");

const moment = require("moment");

// CREATE

exports.event_create = (req, res) => {

    let event = new Event(req.body);

    event.save()
    .then((event) => {
        res.json({event})
    })
    .catch((err) => {
        console.log(err);
        res.send("Event creation failed. Please try again.")
    })
};

// READ

exports.events_all_get = (req,res) => {
    
    Event.find()
    .then(events => {
        res.json({events})
    })
    .catch((err) => {
        console.log(err);
        res.send("Could not retrieve events. Please try again.")
    })
}

exports.event_one_get = (req, res) => {
    Event.findById(req.query.id)
    .then(event => {
        res.json({event})
    })
    .catch(err => {
        console.log(err);
        res.send("Could not retrieve event. Please try again.")
    })
}

// UPDATE

exports.event_edit_get = (req, res) => {
    Event.findById(req.query.id)
    .then(event => {
        res.json({event})
    })
    .catch(err => {
        console.log(err);
        res.send("Could not retrieve event. Please try again.")
    })
}

exports.event_update_put = (req, res) => {
    Event.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(event => {
        res.json({event})
    })
    .catch(err => {
        console.log(err);
        res.send("Could not update event. Please try again.")
    })
}

// DELETE

exports.event_delete = (req, res) => {
    Event.findByIdAndDelete(req.query.id)
    .then(event => {
        res.json({event})
    })
    .catch(err => {
        console.log(err)
    })
}