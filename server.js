var express = require('express');
var app = express();
var express_graphql = require('express-graphql');
const schema = require('./schema/schema');
const log4js = require('log4js');

log4js.configure({
  appenders: {
    TestApp: { type: 'file', filename: 'logs/application.log' },
    errorFile: { type: 'file', filename: 'logs/errors.log' },
    errors: { type: 'logLevelFilter', level: 'error', appender: 'errorFile' }
  },
  categories: {
    default: { appenders: ['TestApp', 'errors'], level: 'info' },
    http: { appenders: ['TestApp'], level: 'info' }
  }
});

app.use('/graphql', express_graphql({
  schema: schema.schema,
  rootValue: schema.root,
  graphiql: true
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');

module.exports = app;
module.exports.express_graphql = express_graphql;