'use strict';

const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: String,
  votes: Number
}, {
  toJSON: { virtuals: true },
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
const clientUrl = 'http://schoof-there-it-is.github.io/softsurv';
// const clientUrl = 'http://localhost:8080';
// Virtual Property returns custom url for this Survey
surveySchema.virtual('url').get(function url() {
  return `${clientUrl}/?id=${this._id}`;
});

// Virtual Property returns total number votes for a Survey
surveySchema.virtual('totalVotes').get(function totalVotes() {
  return this.options.reduce((prev, curr) => {
    return prev + curr.votes;
  }, 0);
});

// Virtual Property returns custom url for this Survey
optionSchema.virtual('percent').get(function percent() {
  let proportion = this.votes / this.ownerDocument().totalVotes;
  if(isNaN(proportion.toFixed(4) * 100)) {
      return "0%";
    }else{
      return `${proportion.toFixed(4) * 100}%`;
    }
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
