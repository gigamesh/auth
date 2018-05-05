const bcrypt = require('bcrypt');
const {MD5} = require('crypto-js');
const jwt = require('jsonwebtoken');

// bcrypt.genSalt(10,(err, salt)=> {
//   if(err) return next(err);
//
//   bcrypt.hash('password123', salt, (err, hash)=> {
//     if(err) return next(err);
//       console.log(hash);
//     })
// })
//
// const secret = 'mysecretpassword';
// const secretSalt = 'asdgadsgei93hk';
//
// const user = {
//   id: 1,
//   token: MD5('PASSWORD321').toString() + secretSalt;
// }
//
// const receivedToken =  'd37eaa8c29bee22e77eabdb6883e51c1';
// if(receivedToken === user.token){
//   console.log('success! move forward');
// }
//
// console.log(user);

const id = '1000';
const secret = 'supersecret';

const receivedToken = 'd37eaa8c29bee22e77eabdb6883e51c1';

const token = jwt.sign(id, secret);
const decodeToken = jwt.verify(receivedToken, secret);

console.log(decodeToken);
