!function(){window.WalmartSearch=Ember.Application.create()}(),function(){WalmartSearch.ApplicationAdapter=DS.FixtureAdapter}(),function(){WalmartSearch.ApplicationRoute=Ember.Route.extend({model:function(){return["red","yellow","blue"]}})}(),function(){WalmartSearch.Router.map(function(){})}(),function(){WalmartSearch.IndexController=Ember.ArrayController.extend({actions:{search:function(){var a="https://sheltered-earth-7471.herokuapp.com/walmart/search?apikey=t5k2mrf5py2s5nsgd3yg4usd&query=";Ember.$.getJSON(a+this.get("query")).then(function(a){console.log(a),console.table(a),this.set("results",a)})}}})}();