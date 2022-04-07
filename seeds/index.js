if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const mongoose = require('mongoose');
const { places, descriptors} = require('./seedHelpers');
const Campground = require('../models/campground');
const cities = require('./cities')
const express = require('express');
const app = express();
const path = require('path');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.set('seeds', path.join(__dirname, 'seeds'));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
})
const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    console.log("CITIES COUNT", cities.length);
    for (let i = 0; i < 1469; i++) {
        const randomize = Math.floor(Math.random() * 1469);
        const camp = new Campground({
            location: `${cities[randomize].city}, ${cities[randomize].admin_name}`,
            geometry: {
                type: "Point", coordinates: [cities[randomize].lng, cities[randomize].lat]
            },
            author: '624078fece5d6751822a8bb2',
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [{
                url: 'https://res.cloudinary.com/fallagar/image/upload/v1648841465/YelpCampF/vapmprkjtevr64eydt0u.jpg',
                filename: 'YelpCampF/pt0yr0ue9a1ixuow9ev4'
            },
            {
                url: 'https://res.cloudinary.com/fallagar/image/upload/v1648751906/YelpCampF/zpkzqb2lryueugk7f5qs.jpg',
                filename: 'YelpCampF/zpkzqb2lryueugk7f5qs'
            }],
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident tempora illo nam et repudiandae magni, voluptate id, facere temporibus non magnam, quisquam earum quo quos qui doloremque atque nisi excepturi!',
            price: randomize
        })
        await camp.save();
    }
    console.log("DONE");
}

seedDB().then(() => {
    mongoose.connection.close();
})
