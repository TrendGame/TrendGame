const checkForAllSpaces = (trend) => {
  for (let i = 0; i < trend.length; i++) {
    if (trend[i] !== ' ') {
      return false;
    }
  }

  return true;
};

const prepForAylien = (trend) => {
  trend = trend.toLowerCase();

  if (trend.length === 0 || this.checkForAllSpaces(trend)) {
    trend = '"the void"';
  }

  if (trend[0] !== '"' && trend[trend.length - 1] !== '"') {
    trend = '"' + trend + '"';
  }

  return trend;
};

const checkIsReadyForDb = (trend) => {
  if (trend.length === 0 || this.checkForAllSpaces(trend)) {
    return false;
  }

  return true;
};

const prepForDb = (trend) => {
  trend = trend.toLowerCase();

  if (trend[0] === '"' && trend[trend.length - 1] === '"') {
    trend = trend.slice(1, -1);
  }

  return trend;
};

module.exports.prepForAylien = prepForAylien;
module.exports.checkIsReadyForDb = checkIsReadyForDb;
module.exports.prepForDb = prepForDb;
