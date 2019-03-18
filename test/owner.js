"use strict";
const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));
//process.env.NODE_ENV = 'test'

const server = require('../server.js');
describe('Graphql Test Suite for owner info', () => {
       it('should get list of owners', function () {
        return chai.request(server)
            .post('/graphql')
            .send({
                "query": "query {owners{name,ownerId,address,phone,email}}"
            })
            .then(function (res) {
                expect(res).to.have.status(200);
            });
    });
});
