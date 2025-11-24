'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const rules = sourceString.split(';');

  for (let rule of rules) {
    rule = rule.trim();

    if (rule) {
      const [property, ...valueParts] = rule.split(':');

      if (property && valueParts.length > 0) {
        const value = valueParts.join(':').trim();

        result[property.trim()] = value;
      }
    }
  }

  return result;
}

module.exports = convertToObject;
