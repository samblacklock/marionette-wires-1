import Orchestra from 'orchestra';
import 'bootstrap';
import 'backbone.syphon';
import 'backbone-query-parameters';
import 'babel-polyfill';


//const $ = Orchestra.$;

// start the marionette inspector
if (window.__agent) {
  window.__agent.start(Orchestra.Backbone, Orchestra.Marionette);
}
