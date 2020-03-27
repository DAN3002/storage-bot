const storage = require('../models/storage.js');

exports.listFiles = async function() {
   let files;
   await storage.listFiles()
   .then(res => {
      files = res;
   });
   files = files.map(el => {
      return {
         name: el.name,
         time: new Date(el.metadata.timeCreated).toLocaleString("en")
      };
   });
   console.table(files);
};