## MICROSERVICES PROJECT

This application is built using graphql apis
By Using this app one can create, list and update records into the file

### Installation 
If you will run this app without docker then accessible port will be 4000. It will start on `http://localhost:4000/graphql`
Please run any one of the following command in command line to start the application
``` 
npm install
npm start
```

## How to Run Test Suite (Explicity from cli)

 - You should be able to run `npm install` followed by `npm run test` to run unit tests (assuming you have the 10.x version of Node installed on your machine).

## App Structure

**./logs**

- this folder contains 'application.log' and 'errors.log' files to generate application logs

**./test**

- this folder contains unit tests [Mocha and Chai]

**./**

- `resolvers` contains resolver.js file which has functions to interact with model
- `model` contains data.js file which uses functions to fetch data from seedData and writes json into the filesinside seedData folder
- 'seedData' contains ownerData.json and petData.json files to save json for owners and pets.
- 'schema.js' contains graphql schema for query and mutation
- `server.js` this is the entrypoint that starts the express graphql server

## Code style ##
- Using eslint for code style
- There is a logs folder in which application logs are generated


