const { func } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review');
const sanitizeHtml = require('sanitize-html');

// c_scale,w_100
// https://res.cloudinary.com/fallagar/image/upload/v1648760805/YelpCampF/aorscdextmwcunsmas3g.jpg 

const ImageSchema = new Schema({
        url: String,
        filename: String
    });
ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/c_scale,w_200');
});

const opts = { toJSON: { virtuals: true } };

const CampgroundSchema = new Schema({
    title: String,
    images: [ImageSchema],
    geometry: {
        type: {
            type: String, 
            enum: ['Point'],
            required: true
    },
         coordinates: {
            type: [Number],
            required: true
    }
    },
    headline: {
        type: String,
        default: ""
    },
    price: Number,
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
}, opts);

// CampgroundSchema.virtual('properties.popUpMarkup').get(function () {
//     return `${this.location}<br><h5><strong><a href="/campgrounds/${this._id}">${this.title}</a></strong></h5>
//         <p>${this.description.substring(0, 80)}...</p>`;
// })
CampgroundSchema.virtual('properties.popUpMarkup').get(function () {
    return `<h6><strong><a href="/campgrounds/${this._id}">${this.title}</a></strong></h6>
        <img src="${this.images[0].url}" width="180px" height="101px" alt="">`;
})
CampgroundSchema.virtual('clean').get(function () {
       const clean = sanitizeHtml(this.description, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'break' ])
    });
       
    return clean;

})

CampgroundSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('Campground', CampgroundSchema);