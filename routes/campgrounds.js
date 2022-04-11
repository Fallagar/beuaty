const express = require('express');
const catchAsync = require('../utils/catchAsync');
const campgrounds = require('../controllers/campgrounds')
const { isLoggedIn, validateCampground, isAuthor, isAdmin } = require('../utils/middleware');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn, isAdmin, upload.array('image'), validateCampground, catchAsync(campgrounds.createCampground)); 
    

router.get('/new', isLoggedIn, isAdmin, campgrounds.renderNewForm);

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn,isAuthor, isAdmin, upload.array('image'), validateCampground,  catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn, isAuthor, isAdmin, catchAsync(campgrounds.deleteCampground));

router.get('/:id/edit', isLoggedIn, isAuthor, isAdmin, catchAsync(campgrounds.renderEditForm));

module.exports = router;