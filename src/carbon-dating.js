const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const K = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity != 'string'|| !Number(sampleActivity)) {return false; };
  sampleActivity = parseInt(sampleActivity);
  if (sampleActivity <= 0 || sampleActivity >= MODERN_ACTIVITY) {return false; };

  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / K);
};
