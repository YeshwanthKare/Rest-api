const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})


const model = mongoose.model('rest', UserSchema);

module.exports = model