'use strict';

const Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

const handlers = {
  'LaunchRequest': function () {
    this.attributes.speechOutput = 'Hodor Hodor!';
    this.emit(':tell', this.attributes.speechOutput);
  },
  'AMAZON.HelpIntent': function () {
    this.attributes.speechOutput = 'Ask Hodor anything.';
    this.emit(':ask', this.attributes.speechOutput, this.attributes.speechOutput);
  },
  'AMAZON.RepeatIntent': function () {
    this.emit('SessionEndedRequest');
  },
  'AMAZON.StopIntent': function () {
    this.emit('SessionEndedRequest');
  },
  'AMAZON.CancelIntent': function () {
    this.emit('SessionEndedRequest');
  },
  'SessionEndedRequest': function () {
    this.attributes.speechOutput = 'Hodor';
    this.emit(':tell', this.attributes.speechOutput);
  },
  'Unhandled': function () {
    this.attributes.speechOutput = 'Hodor';
    this.emit(':tell', this.attributes.speechOutput);
  }
};
