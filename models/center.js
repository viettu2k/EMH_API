const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const centerSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 100,
        unique: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2000,
    },
    hotLine: {
        type: String,
        maxlength: 11,
        trim: true,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        trim: true,
        required: true,
    },
    photo: {
        data: Buffer,
        contentType: String,
    },
    members: [{ type: ObjectId, ref: "User", default: [] }],
    vaccinations: [{ type: ObjectId, ref: "Vaccination", default: [] }],
}, { timestamps: true });

module.exports = mongoose.model("Center", centerSchema);