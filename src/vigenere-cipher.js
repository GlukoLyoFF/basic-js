const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode=true) {
    this.reverse = (!mode) ? true : false;
  }
  encrypt(str=-1, key=-1, mode=true) {
    if (str == -1 || key == -1) {
      throw new Error('No args');
    };
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        res = '';
    str = str.toUpperCase();
    key = key.toUpperCase();
    let key_stack = [];
    for (let i = 0; i < str.length; i++) {
      if (key_stack.length == 0) {key_stack = key.split('').reverse()};
      let stri = abc.indexOf(str[(i >= str.length) ? i % str.length : i]);
      if (stri == -1) {
        res += str[i];
        continue;
      }; 
      let keyi = abc.indexOf(key_stack.pop());
      keyi = (mode) ? keyi : -keyi; // encrypt : decrypt
      res += abc[((abc.length + stri + keyi) % abc.length)];
    };
    return ((this.reverse == true) ? res.split('').reverse().join('') : res);
  }    
  decrypt(str=-1, key=-1) {
    if (str == -1 || key == -1) {
      throw new Error('No args');
    };
    return this.encrypt(str, key, false);
  }
}

module.exports = VigenereCipheringMachine;
