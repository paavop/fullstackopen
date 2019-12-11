const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const url = process.env.MONGODB_URI

console.log("Connecting to", url)

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(result => {
    console.log("Connected to MongoDB")
}).catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
})

const personSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, minlength: 3 },
    number: { type: String, required: true, minlength: 8 },
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

personSchema.plugin(uniqueValidator, { message: 'The {PATH} must be unique.' });

module.exports = mongoose.model('Person', personSchema)
