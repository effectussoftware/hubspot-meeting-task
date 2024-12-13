// require mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ActionSchema = new Schema({
  actionName: {
    type: String,
    required: true
  },
  actionDate: {
    type: Date,
    required: true
  },
  includeInAnalytics: {
    type: Number,
    default: 0
  },
  meetingProperties: {
    meeting_id: String,
    meeting_title: String,
    meeting_start_time: Date,
    meeting_end_time: Date,
    meeting_created_date: Date,
    meeting_updated_date: Date,
    contact: String
  }
}, { minimize: false });

module.exports = mongoose.model('Action', ActionSchema);
