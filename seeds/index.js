const mongoose = require('mongoose');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');
const cities = require('./cities')

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
})
const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random100 = Math.floor(Math.random() * 100);
        const camp = new Campground({
            author: '624078fece5d6751822a8bb2',
            location: `${cities[random100].city}, ${cities[random100].admin_name}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [{
                url: 'https://res.cloudinary.com/fallagar/image/upload/v1648751905/YelpCampF/pt0yr0ue9a1ixuow9ev4.jpg',
                filename: 'YelpCampF/pt0yr0ue9a1ixuow9ev4'
            },
            {
                url: 'https://res.cloudinary.com/fallagar/image/upload/v1648751906/YelpCampF/zpkzqb2lryueugk7f5qs.jpg',
                filename: 'YelpCampF/zpkzqb2lryueugk7f5qs'
            }],
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident tempora illo nam et repudiandae magni, voluptate id, facere temporibus non magnam, quisquam earum quo quos qui doloremque atque nisi excepturi!', price: random100
        })
        await camp.save();
    }
    console.log("DONE");
}

seedDB().then(() => {
    mongoose.connection.close();
})