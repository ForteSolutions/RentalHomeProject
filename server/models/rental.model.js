const mongoose = require("mongoose");

const RentalsSchema = {
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "Title must be at least 3 characters"],
    },
    address: {
        type: String,
        required: [true, "Address is required"],
        minLength: [3, "Address must be at least 3 characters"],
    },
    owner: {
        type: String,
        required: [true, "Owner is required"],
        minLength: [3, "Owner must be at least 3 characters"],
    },
    location: {
        type: String,
        required: [true, "Location is required"],
        minLength: [3, "Location must be at least 3 characters"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [3, "Description must be at least 3 characters"],
    },
    image: {
        type: String,
        required: [true, "Image is required"],
        minLength: [3, "Image must be at least 3 characters"],
    },
    city: {
        type: String,
        required: [true, "City is required"],
        minLength: [3, "City must be at least 3 characters"],
    },
    state: {
        type: String,
        required: [true, "State is required"],
        minLength: [3, "State must be at least 3 characters"],
    },
    zipcode: {
        type: String,
        required: [true, "Zip Code is required"],
        minLength: [3, "Zip Code must be at least 3 characters"],
    },
    type: {
        type: String,
        required: [true, "Type is required"],
        minLength: [3, "Type must be at least 3 characters"],
    },
};

module.exports = mongoose.model("Rental", RentalsSchema);