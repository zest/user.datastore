'use strict';
var datastore = require('./injector')();
describe('user.datastore', function () {
    // it should return a module
    it('it should return a module', function () {
        expect(datastore).not.toBe(undefined);
    });
});
