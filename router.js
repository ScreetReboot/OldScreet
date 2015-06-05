Router.configure({
	layoutTemplate: 'layout_template'
});

Router.route('/', function () {
  this.render('signup');
});

Router.route('/about', function () {
  this.render('about_content');
});

Router.route('/contact', function () {
  this.render('contact_content');
});