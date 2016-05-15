'use strict';

const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({

  question: {
    type: String,
    required: true,
  },
  options: {
    required:true,
    type: [mongoose.Schema.Types.Mixed],
  },

  _author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
});

// Virtual Property returns custom url for this Survey
surveySchema.virtual('url').get(function url() {
  return `?id=${this._id}`;
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
