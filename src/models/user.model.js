const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true, min: 1, max: 200, unique: true },
    height: { type: Number, required: true },
    homeworld: { type: String, required: true, trim: true },
    gender: { type: String, required: true, enum: ['male', 'female'] },
    specie: { type: String, required: true, trim: true },
    dateOfBirth: { type: Date },
}, { timestamps: { createdAt: 'created', updatedAt: 'edited' }, autoCreate: true, versionKey: false });

module.exports = mongoose.model("User", UserSchema);
