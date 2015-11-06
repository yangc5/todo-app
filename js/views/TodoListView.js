var Backbone = require('backbone');
var TodoItemView = require('./TodoItemView.js');

var TodoListView = Backbone.View.extend({
    el: '<li></li>',
    // render: function() {
    //     var that = this;
    //     this.collection.each(function (todo) {
    //         var todoItemView = new TodoItemView({ model: todo });
    //         todoItemView.render();
    //         that.$el.append(todoItemView.el)
    //     });
    // }
});

module.exports = TodoListView;