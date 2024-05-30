const Listing = require("../models/listing");
const Applicant = require("../models/applicant");


module.exports.createApplication =  async(req, res)=>{
    let listing = await Listing.findById(req.params.id);
    let newApplicant = new Applicant(req.body.applicant);
    newApplicant.author = req.user._id;

    listing.applicants.push(newApplicant);

    await newApplicant.save();
    await listing.save();

    req.flash("success", "New Applicant Added..!");
    res.redirect(`/listings/${listing._id}`);
}

module.exports.destroyApplication = async (req, res)=>{
    let { id, applicantId} = req.params;

    await Listing.findByIdAndUpdate(id, {$pull: {applicants: applicantId}});
    await Applicant.findByIdAndDelete(applicantId);

    req.flash("success", "Applicant Deleted..!");
    res.redirect(`/listings/${id}`);
}