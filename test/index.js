'use strict';
var datastore = require('../lib'),
    expect = require('chai').expect;
describe('user.datastore', function () {
    // it should return a module
    it('it should return a module', function () {
        expect(datastore).not.to.equal(undefined);
    });
});
