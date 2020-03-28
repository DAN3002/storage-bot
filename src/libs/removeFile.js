const ora = require('ora');

const storage = require('../models/storage.js');

exports.removeFile = async function(args) {
   const [path] = args;
   if(!path)
   {
      console.log("Missing file path");
      return ;
   }

   const spinner = ora('Deleting !').start();
   const file = storage.getFile(path);
   if(! (await storage.isExistFile(file)))
   {
      spinner.fail("Not exists file!");
      return;
   }
   storage.removeFile(file)
   .then(res => {
      spinner.succeed("Delete successfully!");
   })
   .catch(err => {
      spinner.fail("Error!");
   })


}