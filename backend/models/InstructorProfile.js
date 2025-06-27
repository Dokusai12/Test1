const mongoose = require('mongoose');

const InstructorProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  bio: String,
  photo: String,
  carType: { type: String, enum: ['manual', 'automatic'], required: true },
  location: String,
  pricing: Number,
  availability: [
    {
      day: String,
      slots: [String], // e.g., ["09:00", "10:00"]
    },
  ],
  approved: { type: Boolean, default: false },
});

module.exports = mongoose.model('InstructorProfile', InstructorProfileSchema);