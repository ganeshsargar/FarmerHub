const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Applicant = require("../models/applicant.js");
const Listing = require("../models/listing.js");
const { validateApplicant, isLoggedIn, isApplicantAuthor } = require("../middleware.js");
const applicantController = require("../controllers/applicants.js");


//post applicant route
router.post("/", isLoggedIn, validateApplicant, wrapAsync(applicantController.createApplication));

//delete applicant route
router.delete("/:applicantId", isLoggedIn, isApplicantAuthor, wrapAsync(applicantController.destroyApplication));

module.exports = router;