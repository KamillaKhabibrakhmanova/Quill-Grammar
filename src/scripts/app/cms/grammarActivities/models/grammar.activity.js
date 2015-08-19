'use strict';

module.exports = [
  {
    type: 'text',
    label: 'Title',
    model: 'title'
  },
  {
    type: 'textarea',
    label: 'Description',
    model: 'description'
  },
  require('./../../base_models/standard.model.js'),
  require('./../../base_models/standards_level.model.js'),
  {
    type: 'select',
    label: 'Theme',
    autoOptions: 'theme.title for theme in themes track by theme.uid',
    model: 'theme'
  },
  {
    type: 'submit',
    label: 'Submit Activity',
    model: 'submit'
  }
];