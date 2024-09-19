const mongoose = require("mongoose");

const archaeositeSchema = new mongoose.Schema({
    siteName: {
        type: String,
        required: true,
    },

    region: {
        type: String,
        required: true,
    },

    country: {
        type: String,
        required: true,
    },

    age: {
        type: String,
        required: true,
    },

    siteType:
    {
        type: String,
        required: true,
    },

    images: {
        type: [String], default: [],
        required: false
    }
});

const Archaeosite = mongoose.model("Archaeosite", archaeositeSchema);


module.exports = Archaeosite;