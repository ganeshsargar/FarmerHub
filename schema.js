const Joi = require("joi");
const Listing = require("./models/listing");
const applicant = require("./models/applicant");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        farmer_Name: Joi.string().required(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        no_of_emp: Joi.number().required().min(1),
        no_of_hours: Joi.number().required().min(0),
        image: Joi.string().allow("", null),
    }).required(),
});

module.exports.applicantSchema = Joi.object({
    applicant: Joi.object({
        applicantName: Joi.string().required(),
        phoneNo: Joi.number().required(),
        address: Joi.string().required(),
    }).required(),
});