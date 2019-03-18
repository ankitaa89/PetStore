"use strict";
const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));
//process.env.NODE_ENV = 'test'

const server = require('../server.js');
describe('Graphql Test Suite for getting , adding and updating pet info', () => {
    it('should get list of pets', function () {
        return chai.request(server)
            .post('/graphql')
            .send({
                "query": "query {pets{petId,name,breed,color,age,ownerId}}"
            })
            .then(function (res) {
                expect(res).to.have.status(200);
            });
    });

    it('should add new pet', function () {
        return chai.request(server)
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                "query": "mutation addPet($name: String,$color: String,$age: Int,$breed: String,$ownerId:Int!){addPet(name: $name,color: $color,age: $age,breed: $breed,ownerId:$ownerId)}",
                "variables": {
                    "name": "tuffy",
                    "color": "White"
                    , "age": 5,
                    "breed": "dog",
                    "ownerId": 22
                }
            })
            .then(function (res) {
                expect(res).to.have.status(200);
            });
    });

    it('should update existing pet', function () {
        return chai.request(server)
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                "query": "mutation updatePet($petId:Int!,$name: String,$color: String,$age: Int,$breed: String,$ownerId:Int!){updatePet(petId:$petId,name: $name,color: $color,age: $age,breed: $breed,ownerId:$ownerId)}",
                "variables": {
                    "petId": 92,
                    "name": "Bubble",
                    "color": "white",
                    "age": 20,
                    "breed": "dog",
                    "ownerId": 12
                }
            })
            .then(function (res) {
                expect(res).to.have.status(200);
            });
    });

    it('should list down pets of a particular owner', function () {
        return chai.request(server)
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                "query": "query petsOfOwner($ownerId: Int!){petsOfOwner(ownerId: $ownerId){name,breed,age}}",
                "variables": {
                    "ownerId": 12
                }
            })
            .then(function (res) {
                expect(res).to.have.status(200);
            });
    });


});
