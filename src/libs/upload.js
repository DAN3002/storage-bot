const ora = require('ora');
const inquirer = require('inquirer');

const storage = require('../models/storage.js');

exports.upload = async function(args) {
   let [path, cloudPath] = args;

   if(!path){
      console.log("Missing file path");
      return ;
   }

   cloudPath = cloudPath ? cloudPath : path;

   // Check if file exitst
   let file = storage.getFile(cloudPath);
   if((await storage.isExistFile(file)))
   {
      const options = {
         name: "confirmNext",
         type: "confirm",
         message: "This name already exists! override ?"
      }
      if(!((await inquirer.prompt([options])).confirmNext)) return ;
   }

   const spinner = ora('Uploading!').start();
   await storage.uploadFile(path, cloudPath)
   .then(res => {
      spinner.succeed("Upload successfully!");
      console.log(`Your download url: ${res}`);
   })
   .catch(err => {
      spinner.fail("Error!");
   });
};