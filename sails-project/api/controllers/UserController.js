/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  hi: function (req, res) {
    return res.send('Hi there!');
  },
  bye: function (req, res) {
    return res.redirect('http://www.sayonara.com');
  },
  foo: function(req, res) {
   if (!req.param('id')) {
     res.status(400);
     //res.view('400', {message: 'Sorry, you need to tell us the ID of the FOO you want!'});
	 res.badRequest('Sorry, you need to tell us the ID of the FOO you want!');
   }
  },
  index: function(req, res) {
		console.log('index() from UserController');
		res.status(200).json('Hello from Typescript!');
  }
};

