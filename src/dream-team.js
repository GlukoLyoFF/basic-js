const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length == 0) {return false; };
  let res = [];
  for (let i = 0; i < members.length; i++) {
    let member = members[i];
    if (typeof member != 'string') {continue};
    member = member.split(' ').join('');
    res.push(member.slice(0, 1).toUpperCase());
  };
  if (res.length == 0) {return false; };
  return res.sort().join('');
};
