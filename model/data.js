var fs = require('fs');
var logger = require('log4js').getLogger('model/data');

/** Function to read contents as json from a given file  */
function readJson(fileName) {
    return JSON.parse(fs.readFileSync('seedData/' + fileName + '.json'));
}

/** Function to add new pet or owner to a file  */
function writeJson(args, fileName) {
    var jsonData = readJson(fileName);
    if (fileName === "petData") {
        jsonData.pets.push(args);
    } else {
        jsonData.owners.push(args);
    }
    fs.writeFile('seedData/' + fileName + '.json', JSON.stringify(jsonData, null, 4), function (err, result) {
        if (err) {
            logger.error(err);
            return false;
        } else {
            logger.info(result);
            return true;
        }
    });
}


/** Function to update  pet or owner to a file  */
function updateJson(args, fileName) {
    fs.writeFile('seedData/' + fileName + '.json', JSON.stringify(args, null, 4), function (err, result) {
        if (err) {
            logger.error(err);
            return false;
        } else {
            logger.info(result);
            return true;
        }
    });
}

module.exports = {
    readJson,
    writeJson,
    updateJson
}
