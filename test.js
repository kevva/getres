'use strict';
var test = require('ava');
var getRes = require('./');

test('fetch 10 items', function (t) {
	getRes(function (err, data) {
		t.assert(!err, err);

		data.forEach(function (el) {
			t.assert(/^\d{3,4}x\d{3,4}$/i.test(el.item));
		});

		t.end();
	});
});
