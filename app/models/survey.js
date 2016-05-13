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
    // required: true,
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
});

// surveySchema.virtual('length').get(function length() {
//   return this.text.length;
// });

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
