const ora = require('ora');

const storage = require('../models/storage.js');

exports.upload = async function(args) {
   const [path, cloudPath] = args;

   if(!path) console.log("Missing file path");

   const spinner = ora('Start uploading!').start();
   await storage.uploadFile(path, cloudPath)
   .then(res => {
      spinner.succeed("Upload successfully!");
      console.log(`Your download url: ${res}`);
   })
   .catch(err => {
      spinner.fail("Error!");
   });
};