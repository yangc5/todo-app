var Backbone = require('backbone');

var TodoItemView = Backbone.View.extend({
    el: '<li></li>',

    events: {
        'click input': 'toggleTodo'
    },

    toggleTodo: function(event) {
        var completed = !this.model.get('completed');
        this.model.set('completed', completed);
    },

    render: function() {
        var checked = (this.model.get('completed')) ? 'checked': '';
        this.$el.html(this.model.get('title') + ' <input type="checkbox" '+ checked + '>');
        return this;
    }
});

module.exports = TodoItemView;