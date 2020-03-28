const checkAccount = require('./libs/checkAccount.js').checkAccount;
const upload = require('./libs/upload.js').upload;
const listFiles = require('./libs/listFiles.js').listFiles;
const removeFile = require('./libs/removeFile.js').removeFile;

exports.list = ['upload', 'ls', 'rm']

exports.run = function(args) {
   switch(args[0])
   {
      case 'upload': {
         upload(args.slice(1));
         break;
      }
      case 'ls': {
         listFiles();
         break;
      }
      case 'rm': {
         removeFile(args.slice(1));
         break;
      }
      default: {
         console.error("Missing or wrong param!");
      }
   }
}

