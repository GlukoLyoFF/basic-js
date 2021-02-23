const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = '',
  sep = (options.separator) ? 
        options.separator : 
        '+',
  addSep = (options.additionSeparator) ? 
           options.additionSeparator : 
           '|';
  (options.addition === null) ? options.addition = 'null' : {};
  res = str + (new Array(options.additionRepeatTimes).fill(options.addition)).join(addSep);
  return (new Array(options.repeatTimes).fill(res)).join(sep);
};
  