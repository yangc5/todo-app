var Backbone = require('backbone');
var TodoListView = require('./TodoListView.js');
var TodoModel = require('../models/TodoModel.js');

var TodoLayoutView = Backbone.View.extend({
    el: '<div>\
            <form>\
                <input type="text">\
                <input type="submit" value="Submit">\
            </form>\
            <div id="todos-container"></div>\
            <span id="num-todos"></span> Todos (<span id="num-completed">0</span> Completed)\
        </div>',

    events: {
        'submit form': 'addTodo'
    },

    initialize: function() {
        var that = this;
        this.listenTo(this.collection, 'add change', function () {
            that.render();
        });
    },

    addTodo: function(event) {
        event.preventDefault();
        var todoText = this.$el.find('input[type="text"]').val();
        var todo = new TodoModel({ title: todoText });
        this.collection.add(todo);
        this.$el.find('input[type="text"]').val('');
    },

    render: function() {
        var todoListView = new TodoListView({ collection: this.collection });
        todoListView.render();
        this.$el.find('#todos-container').html(todoListView.el);
        this.$el.find('#num-todos').text(this.collection.length);
        var numCompleted = this.collection.where({ completed: true }).length;
        this.$el.find('#num-completed').text(numCompleted);
        return this;
    }
});

module.exports = TodoLayoutView;