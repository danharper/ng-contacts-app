var fs = require('fs');

// todo: perhaps split routes into the directories?
// eg. /modules/contacts/create/contacts-create-route.js
//     /modules/contacts/list/contacts-list-route.js

var Routes = ($stateProvider) => {
	$stateProvider
	.state('contacts', {
		url: '/contacts',
		template: fs.readFileSync(__dirname+'/list/contacts-list.html'),
		controller: 'ContactsListController',
	})
		.state('contacts.create', {
			url: '/create',
			template: fs.readFileSync(__dirname+'/create/contacts-create.html'),
			controller: 'ContactsCreateController as create'
		})
		.state('contacts.show', {
			parent: 'contacts',
			url: '/:id',
			template: fs.readFileSync(__dirname+'/info/contacts-info.html'),
			controller: 'ContactsInfoController',
		})
			.state('contacts.show.another', {
				parent: 'contacts.show',
				url: '/another',
				template: fs.readFileSync(__dirname+'/info-another/contacts-info-another.html'),
				controller: function() {}
			})
			.state('contacts.edit', {
				parent: 'contacts.show',
				url: '/edit',
				template: fs.readFileSync(__dirname+'/edit/contacts-edit.html'),
				controller: 'ContactsEditController as edit'
			})
}

Routes.$inject = ['$stateProvider'];

module.exports = Routes;