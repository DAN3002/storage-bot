const admin = require('firebase-admin');

const config = require('../../config/serviceAccountKey.json');

const bucket = admin.storage().bucket(config.project_id + ".appspot.com");

exports.uploadFile = async function(path, cloudPath) {
   cloudPath = cloudPath ? cloudPath : path;

   const options = {
      destination: cloudPath,
      resumable: true,
   };
   let url = "";
   await bucket
   .upload(path, options)
   .then(file => {
      url = `https://firebasestorage.googleapis.com/v0/b/${ bucket.name }/o/${encodeURIComponent(file[0].name)}?alt=media`
   })
   .catch(err => {
      throw err;
   });
   return url;
};

exports.listFiles = async function() {
   let files = [];
   await bucket.getFiles()
   .then(res => {
      files = res[0];
   });
   return files;
};