const path = require('path');
const fs = require('fs');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(sinonChai);
chai.use(chaiAsPromised);

const jobsPath = path.join(__dirname, '..', '..', 'jobs');

//set up handlers for all jobs
fs.readdirSync(jobsPath).forEach(function(file) {
    if (file.endsWith('.js')) {
        require(`${jobsPath}/${file}`)();
    }
});