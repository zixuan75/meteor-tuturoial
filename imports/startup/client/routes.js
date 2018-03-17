import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    renderView(this.name)
  },
});

FlowRouter.notFound = {
  name: 'App.notFound',
  action() {
    renderView(this.name)
  },
};
FlowRouter.route('/content/page/home', {
  name: 'App.home',
  action() {
    renderView(this.name)
  },
})
FlowRouter.route('/home', {
  name: 'App.content',
  action: function(){
    renderView(this.name)
  }
})
function renderView(name){
  this.action={
    route: '',
    setRender: function(){
      return this.route
    }
  }
  this.action.route=name
  this.router={
    setRoute: function(){
      var layout=this.action.setRender()
      return {
        layout: layout
      }
    }
  }
  if (name == 'App.homepage'){
    BlazeLayout.render('App_body', { main: 'App_home' });
  } else if (name == 'App.home'){
    BlazeLayout.render('App_body', { main: 'App_home' });
  } else if (name == 'App.content'){
    BlazeLayout.render('App_body', { main: 'App_content' });
  } else if (name == 'App.notFound'){
    BlazeLayout.render('App_body', { main: 'App_notFound' })
  }
}
FlowRouter.route('/home/page', {
  name: 'App.homepage',
  action: function(){
     renderView(this.name)
  }
})
