const CustomError = require("../extensions/custom-error");
const SEASONS = ['winter', 'spring', 'summer', 'autumn'];


module.exports = function getSeason(date) {
  if (!date) {return 'Unable to determine the time of year!'; };
  if (!(date instanceof Date) || isNaN(date)) {throw new Error('Error')};
  let month = date.getMonth();
  if (month == 0 || month == 1 || month == 11) {return SEASONS[0]; 
  } else if (month > 1 && month <= 4) {return SEASONS[1];
  } else if (month > 4 && month <= 7) {return SEASONS[2];
  } else if (month > 7 && month <= 10) {return SEASONS[3];
  } else {throw new Error('Error'); }; 
};
