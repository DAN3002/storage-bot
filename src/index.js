#! /usr/bin/env node
const admin = require('firebase-admin');
const serviceAccount = require('../config/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://funix-onpage.firebaseio.com"
});

const upload = require('./libs/upload.js').upload;
const listFiles = require('./libs/listFiles.js').listFiles;

const args = process.argv.slice(2);

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
   default: {
      console.log("Missing param!");
   }
}