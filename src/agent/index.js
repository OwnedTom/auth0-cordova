const { getOS } = require('../utils');
var BrowserAgent = require('./browser');
var WebViewAgent = require('./webview');
var WindowFrame = require('./window');

module.exports = function getAgent(callback) {
  const os = getOS();
  if (os !== 'android' && os !== 'ios') {
    return callback(null, new WindowFrame());
  }
  return BrowserAgent.isAvailable(function (available) {
    if (available) {
      return callback(null, new BrowserAgent());
    }
    return callback(null, new WebViewAgent());
  });
};

