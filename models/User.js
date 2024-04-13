const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({

    userName: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: [6, "Your password must be at least 6 characters in length."]
    }
    
},{
    timestamps: true
});

userSchema.methods.verifyPassword = function(password){
    console.log(`PW (plain text): ${password}`);
    console.log(`PW (encrypted): ${this.password}`);
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("User", userSchema);

module.exports = User;