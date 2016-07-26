'use strict';

/*
 * Gets compiled SCSS and appends it to the <head>
 */
module.exports = function() {
  if (process.env.IS_BROWSER) {
    var styles = require('/assets/main.css');
    var head = document.querySelector('head');
    head.appendChild(styles);
  }
};
