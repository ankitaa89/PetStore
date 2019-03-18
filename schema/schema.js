var { buildSchema } = require('graphql');
const resolver = require('../resolvers/resolver');

var schema = buildSchema(`
type Query {
    owners:[Owner]
    pets:[Pet]
    petsOfOwner(ownerId:Int!):[Pet]
},
type Mutation {
    addPet (name:String, color:String, age:Int, breed:String,ownerId:Int!): String
    updatePet (petId:Int!,name:String,color:String,age:Int,breed:String,ownerId:Int!): String
},
type Owner {
    ownerId:Int!
    name :String    
    address:String    
    phone:Int    
    email:String
},
type Pet {
    petId:Int!
    name: String
    color: String
    age: Int
    breed: String
    ownerId: Int!
 }
`);


var root = {
  owners: resolver.listOwners,
  pets: resolver.getPets,
  petsOfOwner: resolver.petsOfOwner,
  addPet: resolver.addPet,
  updatePet: resolver.updatePet,
};

module.exports = {
  schema,
  root
}