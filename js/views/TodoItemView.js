var Backbone = require('backbone');

var TodoItemView = Backbone.View.extend({
    el: '<li></li>',
    // render: function() { put title of this.model ( this.model.get('title') ) into li element }
});

module.exports = TodoItemView;