const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const Text = require('./models/msgSchema');
const encryptValidation = require('./models/encryptValidation.js');
const decryptValidation = require('./models/decryptValidation.js');
const ExpressError = require('./utils/ExpressError.js');
const { wrapAsync } = require('./utils/wrapAsync.js');
const engine = require('ejs-mate');

// Set up EJS and express-ejs-layouts
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', engine);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

main().then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Connection to MongoDB failed:', err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/user');
}

// encryptValidation middleware
const encryptValidationfun = (req, res, next) => {
    const { error } = encryptValidation.validate(req.body);
    if (error) {
        throw new ExpressError(400, error);
    } else {
        next();
    }
};

// decryptValidation middleware
const decryptValidationfun = (req, res, next) => {
    const { error } = decryptValidation.validate(req.body);
    if (error) {
        throw new ExpressError(400, error);
    } else {
        next();
    }
}

// Landing page
app.get('/', (req, res) => {
    res.render('listings/landingpage', { encryptedText: '' });
});

// Encryption page
app.get('/encrypt', (req, res) => {
    res.render('listings/index', { encryptedText: '' });
});

// Handle encryption form submission
app.post('/encrypt', encryptValidationfun, wrapAsync(async (req, res) => {
    let { originalText } = req.body;

    // Encrypt the text
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encryptedText = cipher.update(originalText, 'utf-8', 'hex');
    encryptedText += cipher.final('hex');

    console.log(encryptedText, 'Encrypted text');

    // Save the encrypted text to MongoDB
    const newText = new Text({ originalText, encryptedText });
    await newText.save();

    // Render the template with initialized variables
    res.render('listings/index', { originalText, encryptedText });
}));

// Handle decryption request
app.get('/decrypt', wrapAsync(async (req, res) => {
    const encryptedText = req.query.encryptedText;

    // Find the corresponding entry in the MongoDB collection
    const decryptedTextEntry = await Text.findOne({ encryptedText }).exec();

    res.render('listings/decrypt.ejs', { decryptedTextEntry });
}));

// Page Not Found route
app.all('*', (req, res, next) => {
    next(new ExpressError(404, 'Page Not Found'));
});

// Global Error Handler
app.use((err, req, res, next) => {
    const { statusCode = 500, message = 'Internal Server Error' } = err;
    res.status(statusCode).render('listings/error.ejs', { message });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
