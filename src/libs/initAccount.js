const fs = require('fs');
const inquirer = require('inquirer');
const ora = require('ora');

const checkAccount = require('./checkAccount.js').checkAccount;
const PATH = `${__dirname}/../../config/serviceAccountKey.json`;

exports.init = async function(args) {
   if(checkAccount())
   {
      const options = {
         name: "confirmNext",
         type: "confirm",
         message: "Init already, continue ?"
      }
      const check = (await inquirer.prompt([options])).confirmNext;
      if(!check) return ;
   }

   const [path] = args;
   if(!path)
   {
      console.log("Missing file path!");
      return ;
   }
   const spinner = ora('Initing!').start();
   fs.copyFile(path, PATH, (err) => {
      if(err) spinner.fail("Error!");
      else spinner.succeed("Done!");
   });

}