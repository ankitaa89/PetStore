var logger = require('log4js').getLogger('../resolvers/resolver');
var modelData = require('./../model/data');

/** Function to add pet to file petData.json */
var addPet = function (err,args) {
    if (err) {
        logger.error("Error occurred in adding pet into the file");
    }
    var petId = Math.floor((Math.random() * 100) + 1);
    args.petId = petId;
    modelData.writeJson(args, 'petData');
    logger.info("Pet " + args.name + " saved into the file");
    return "Pet " + args.name + " saved into the file";
}

/** Function to get list of owners from file ownerData.json */
var listOwners = function () {
    return modelData.readJson('ownerData').owners;
};
/** Function to get list of pets from file petData.json */
var getPets = function () {
    return modelData.readJson('petData').pets;
}

/** Function to edit pet to file petData.json */
var updatePet = function (args) {
    var petList = modelData.readJson('petData');
    petList.pets.forEach(function (pet) {
        if (pet.petId === args.petId) {
            pet.name = args.name;
            pet.breed = args.breed;
            pet.color = args.color;
            pet.age = args.age;
            pet.ownerId = args.ownerId;
        }
    });
    modelData.updateJson(petList, 'petData');
    return "Pet " + args.name + " updated successfully";
}

/** Function to list pets of a particular owner */
var petsOfOwner = function (owner, err) {
    if (err) {
        logger.error("Error occurred in getting pets of a paricular owner");
    }
    var petList = modelData.readJson('petData');
    return petList.pets.filter(pet => {
        return pet.ownerId == owner.ownerId;
    });
}

module.exports = {
    addPet,
    listOwners,
    getPets,
    updatePet,
    petsOfOwner
}