'use strict';

const Alexa = require('alexa-sdk');
const APP_ID = '';

const voice = {
  SKILL_NAME: 'Hodor',
  WELCOME_MESSAGE: 'Hodor',
  WELCOME_REPROMPT: 'Hodor',
  HELP_MESSAGE: 'Hodor',
  STOP_MESSAGE: 'Hodor'
};

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context);
  alexa.appId = APP_ID;
  alexa.resources = voice;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

const handlers = {
  'LaunchRequest': function () {
    this.attributes.speechOutput = voice.WELCOME_MESSAGE;
    this.attributes.repromptSpeech = voice.WELCOME_REPROMPT;
    this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
  },
  'AMAZON.HelpIntent': function () {
    this.attributes.speechOutput = voice.HELP_MESSAGE;
    this.attributes.repromptSpeech = voice.HELP_REPROMPT;
    this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
  },
  'AMAZON.RepeatIntent': function () {
    this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
  },
  'AMAZON.StopIntent': function () {
    this.emit('SessionEndedRequest');
  },
  'AMAZON.CancelIntent': function () {
    this.emit('SessionEndedRequest');
  },
  'SessionEndedRequest': function () {
    this.emit(':tell', voice.STOP_MESSAGE);
  },
  'Unhandled': function () {
    this.attributes.speechOutput = voice.HELP_MESSAGE;
    this.attributes.repromptSpeech = voice.HELP_MESSAGE;
    this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
  }
};
