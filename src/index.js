#!/usr/bin/env node
const checkAccount = require('./libs/checkAccount.js').checkAccount;
const init = require('./libs/initAccount.js').init;
const args = process.argv.slice(2);

if(args[0] != 'init')
{
   if(!checkAccount())
   {
      console.log("Not init account!");
      console.log("Run storage-bot init");
      process.exit();
   }
   require('./authMethod.js').run(args);
} else {
   init(args.slice(1));
}

