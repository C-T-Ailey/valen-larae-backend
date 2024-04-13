const jwt = require("jsonwebtoken");

const User = require("../models/User");

const bcrypt = require("bcrypt");
const salt = 10;

// POST new user on signup

exports.auth_signup_post = (req, res) => {
    let user = new User(req.body);

    let hashedPass = bcrypt.hashSync(req.body.password, salt);

    user.password = hashedPass;

    user.save()
    .then(()=>{
        res.json({"message": "User created successfully!"})
    })
    .catch ((err) => {
        console.log(err);
        res.json({"message": "Failed to register user; please try again."})
    })
}

// POST existing user log in

exports.auth_login_post = async (req, res) => {
    let {userName, password} = req.body;
    try {
        let user = await User.findOne({userName})

        if (!user) {
            return res.json({"message": "User not found."}).status(400);
        }

        const isMatch = await bcrypt.compareSync(password, user.password)

        if (!isMatch) {
            return res.json({"message": "Password does not match."}).status(400);
        }

        const payload = {
            user: {
                id: user._id,
                name: user.userName,
                timestamp: new Date().valueOf()
            }
        };

        jwt.sign(
            payload,
            process.env.SECRET,
            {expiresIn: "1h"},
            (err, token) => {
                if (err) throw err;
                res.json({token}).status(200)
            }
        );
    }
    catch (err) {
        console.log(err);
        res.json({"message": "You are not logged in."}).status(400);
    }
}

// User GET - get all registered users

exports.auth_user_get = (req, res) => {
    console.log(req.body)

    User.find()
    .then(user => {
        res.json({user})
    })
    .catch((err) => {
        console.log(err);
        res.send("???")
    })
}

// User GET - get one user by ID

exports.user_detail_get = (req, res) => {
    console.log("Req ID:", req.query.id)
    User.findById(req.query.id)
    .then(user => {
        res.json({user})
    })
    .catch((err) => {
        console.log(err)
    })
}