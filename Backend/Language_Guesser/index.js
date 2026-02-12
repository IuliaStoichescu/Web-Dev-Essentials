//if we type node index.js 'hello world' it should return the language of the text
//we will use the franc library to detect the language of the text
//we will use the langs library to get the name of the language from the code
import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';

// const franc = require('franc');
// const langs = require('langs');
const input = process.argv[2];
const langCode = franc(input);
if (langCode === 'und') {
   console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!"));
} else {
   const language = langs.where("3", langCode);
   if (language) {
      console.log(colors.green(`Our best guess is: ${language.name}`));
   } else {
      console.log(colors.red(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`));
   }
}