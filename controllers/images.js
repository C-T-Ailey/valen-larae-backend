const {Image} = require("../models/Image");

const moment = require("moment");

// CREATE

exports.image_create = (req, res) => {

    let image = new Image(req.body);

    image.save()
    .then((image) => {
        res.json({image})
    })
    .catch((err) => {
        console.log(err);
        res.send("Image creation failed. Please try again.")
    })
};

// READ

exports.images_all_get = (req,res) => {
    
    Image.find()
    .then(images => {
        res.json({images})
    })
    .catch((err) => {
        console.log(err);
        res.send("Could not retrieve images. Please try again.")
    })
}

exports.image_one_get = (req, res) => {
    Image.findById(req.query.id)
    .then(image => {
        res.json({image})
    })
    .catch(err => {
        console.log(err);
        res.send("Could not retrieve image. Please try again.")
    })
}

exports.image_category_get = (req, res) => {
    Image.find({"category": req.query.cat})
    .then(images => {
        res.json({images})
    })
    .catch((err) => {
        console.log(err)
        res.send("no bueno")
    })
}

// UPDATE

exports.image_edit_get = (req, res) => {
    Image.findById(req.query.id)
    .then(image => {
        res.json({image})
    })
    .catch(err => {
        console.log(err);
        res.send("Could not retrieve image. Please try again.")
    })
}

exports.image_update_put = (req, res) => {
    Image.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(image => {
        res.json({image})
    })
    .catch(err => {
        console.log(err);
        res.send("Could not update image. Please try again.")
    })
}

// DELETE

exports.image_delete = (req, res) => {
    Image.findByIdAndDelete(req.query.id)
    .then(image => {
        res.json({image})
    })
    .catch(err => {
        console.log(err)
    })
}