const mongoose = require("mongoose");
const Applicant = require("./applicant");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    farmer_Name : {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url: String,
        filename: String,
    },
    price: Number,
    no_of_emp: Number,
    no_of_hours: Number,
    location: String,
    country: String,
    applicants: [
        {
            type: Schema.Types.ObjectId,
            ref: "Applicant",
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    geometry: {
        type: {
            type: String,
            enum: ["Point"],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
});

listingSchema.post("findOneAndDelete", async(listing)=>{
    if(listing){
        await Applicant.deleteMany({_id: {$in: listing.applicants}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;