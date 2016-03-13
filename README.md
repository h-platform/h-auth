HLAB-Database Microservices
===========================

This is a biolerplate senica microservice using these libries:
- senica
- knex
- bookshelf
- winston loggger
- config
- glob
- lodash

It has these folders:
- config
- logs
- migrations
- models
- scripts
- pods
- generators
- seeds

you might want to install knex cli tools for migrations and seeding:
'''npm install knex -g'''

Features:
=========
Adds these

[ ] saveRecordController
  [ ] filter unwanted keys from the payload by refering to the schema

[ ] deleteRecordController

[ ] queryRecordsController
  [ ] limit
  [ ] order by
  [ ] page and pagination
  [ ] keyword
  [ ] filters
    [ ] simple format: colName : operator : parameter
    [ ] complex format: colName : operator : parameter
  [ ] flags
