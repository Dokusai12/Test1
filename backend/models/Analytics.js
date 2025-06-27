const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  activeUsers: Number,
  topRatedInstructors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'InstructorProfile' }],
  popularCities: [String],
});

module.exports = mongoose.model('Analytics', AnalyticsSchema);