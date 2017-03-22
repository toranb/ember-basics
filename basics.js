PersonApp = Ember.Application.create();

PersonApp.PersonView = Ember.View.extend({
    templateName: 'person',
    count: function() {
        var people = this.get('model');
        return people.get('length');
    }.property('model.@each'),
    addPerson: function(event) {
        var username = this.get('username');
        if (username) {
            this.get('controller').addPerson(username);
            this.set('username', '');
        }
    }
});

PersonApp.PersonController = Ember.ArrayController.extend({
    addPerson: function(username) {
        var newPerson = PersonApp.Person.create({username: username});
        this.get('model').pushObject(newPerson);
    }
});

PersonApp.Person = Ember.Object.extend({
    username: null
});

PersonApp.Router.map(function(match) {
    this.resource("person", { path: "/" });
});

PersonApp.PersonRoute = Ember.Route.extend({
    model: function(params) {
        var toranb = PersonApp.Person.create({username: 'toranb'});
        return Ember.A([toranb]); //array of data
    }
});
