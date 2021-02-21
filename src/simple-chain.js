const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [], 
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = '( )';
    } else {
      value = '( ' + value + ' )';
    };
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length) {
      this.finishChain();
      throw new Error('WrongLink');
    };
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain.splice(0, this.chain.length);
    return res;
  }
};

module.exports = chainMaker;
