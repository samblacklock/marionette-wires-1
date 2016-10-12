var Backbone = require('backbone'); //hammer.js Error, window undefined
var fixture = require('./fixture');
var collection = new Backbone.Collection(fixture);

module.exports = function(api) {
  api.route('/api/users')
    .get(function(req, res) {
      res.json(collection);
    });

  api.route('/api/users/:id')
    .get(function(req, res) {
      var model = collection.get(req.params.id);
      res.json(model);
    });
};
