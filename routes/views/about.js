var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	locals.section = 'about';
	locals.page.title = 'About BaliJS';

	locals.organisers = [
		{ name: 'Adi Setiawan', image: 'https://avatars3.githubusercontent.com/u/73311?v=4&s=400', twitter: 'adisetiawan', title: 'coordinator', profile: '/member/adi-setiawan' },
		{ name: 'Trimikha Valentius', image: 'https://avatars2.githubusercontent.com/u/890146?v=4', twitter: 'tvalentius', title: 'coordinator', profile: '/member/trimikha-valentius' },
		{ name: 'Reza Primasatya', image: 'https://avatars3.githubusercontent.com/u/4263809?v=4', twitter: 'rezaprimasatya', title: 'coordinator', profile: '/member/reza-primasatya' },
	]

	view.render('site/about');

}
