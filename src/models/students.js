const mongoose = require("mongoose");
const validator = require("validator");
const studentSchema = new mongoose.Schema({
    f_name: {
        type: String,
        required: true,
        minlength: 3
    },
    l_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email")
            }}},
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: true
    }
    
})
const Student = new mongoose.model('Student', studentSchema);
module.exports = Student; 



