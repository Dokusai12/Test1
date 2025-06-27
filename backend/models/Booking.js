const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'InstructorProfile', required: true },
  date: { type: Date, required: true },
  notes: String,
  status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
  instructorMessage: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', BookingSchema);