const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const fs = require('fs');
const path = require("path");

chai.should();
chai.use(sinonChai);
chai.use(chaiAsPromised);

const kue = require('mock-kue');

const queue = require('../queue');

const Sequelize = require('sequelize');
const SequelizeMock = require('sequelize-mock');
const DBConnectionMock = new SequelizeMock();
const models = {};

fs.readdirSync(path.join(__dirname, '..', 'models'))
 .filter(function(file) {
      return file.endsWith(".js");
  })
  .forEach(function(file) {
      models[file.replace('.js', '')] = require(path.join(__dirname, '..', 'models', file))(DBConnectionMock, Sequelize);
  });

describe("Job Tests", function() {
      
    it("should create a db thread when db job is invoked", function() {
        const spy = sinon.spy();

        const job = queue.create('createThread', {
            body: {
                userId: 47,
                forumId: 2,
                subject: 'foo',
                message: '[dice]3d6[/dice]'
            }
        })
              .priority('critical')
              .attempts(8)
              .backoff(true)
              .removeOnComplete(false)
              .save(spy);
        
        const promise = kue.drain()
            .then(() => {
                return models.phpbb_posts.findAll()
            })
            .then(results => {
                return results.length;
            });

        return promise.should.eventually.equal(1);
    });
});