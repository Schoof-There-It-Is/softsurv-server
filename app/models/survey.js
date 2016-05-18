'use strict';

const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: String,
  votes: Number
});

const surveySchema = new mongoose.Schema({

  question: {
    type: String,
    required: true,
  },
  options: {
    required:true,
    type: [optionSchema],
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

// Should refactor to pull url from dotenv?
const clientUrl = 'http://localhost:8080';

// Virtual Property returns custom url for this Survey
surveySchema.virtual('url').get(function url() {
  return `${clientUrl}/?id=${this._id}`;
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
