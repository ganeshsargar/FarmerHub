const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicantSchema = new Schema({
    applicantName: String,
    phoneNo: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        
    }, 
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model("Applicant", applicantSchema);