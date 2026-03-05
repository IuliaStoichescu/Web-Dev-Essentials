const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
   const salt = await bcrypt.genSalt(12);
   const hashed = await bcrypt.hash(pw, salt);
   console.log(salt);
   console.log(hashed);
}

const login = async (pw, hashPw) => {
   const rst = bcrypt.compare(pw, hashPw);
   if (rst) {
      console.log('Logged in !!');
   }
   else {
      console.log('Incorrect !!');
   }
}

hashPassword('iuli25');
login('iuli25', '$2b$12$eQf2rqr8B2SehS/DQMQQguYBHd7vT5CCjZnWRm2pmq.Ng37bz5Ti2')