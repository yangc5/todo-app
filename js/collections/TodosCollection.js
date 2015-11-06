var TodoModel = require('../models/TodoModel.js');
var Backbone = require('backbone');

var TodosCollection = Backbone.Collection.extend({
    model: TodoModel
});

module.exports = TodosCollection;