const Listing = require("./models/listing");
const Applicant = require("./models/applicant");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, applicantSchema } = require("./schema.js");

module.exports.isLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to post work");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async(req, res, next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error", "You are not the owner of this post!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.validateListing = (req, res, next)=>{
    let {error} = listingSchema.validate(req.body);

    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}

module.exports.validateApplicant = (req, res, next)=>{
    let {error} = applicantSchema.validate(req.body);

    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}

module.exports.isApplicantAuthor = async(req, res, next)=>{
    let {id, applicantId} = req.params;
    let applicant = await Applicant.findById(applicantId);
    if(!applicant.author.equals(res.locals.currUser._id)){
        req.flash("error", "You are not the author of this application!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}