const fs = require('fs')
const admin = require('firebase-admin');

const PATH = '../../config/serviceAccountKey.json';

exports.checkAccount = function() {
   try {
      let serviceAccount = require(PATH);
      if(JSON.stringify(serviceAccount) === "{}") return false;
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://funix-onpage.firebaseio.com"
      });
      return true;
   } catch (e) {
      return false;
   }
};