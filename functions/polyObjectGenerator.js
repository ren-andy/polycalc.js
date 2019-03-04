const arrayGenerator = require("./arrayGenerator.js");
const insertMissing = require("./insertMissing.js");

const regex = /[+-]?\d+x\^\d+|[+-\s]?\d+/g;

/*
 * Polynomial Object Generator function:
 * @param = string
 * Takes in a string, and calls arrayGenerator and insertMissing
 * arrayGenerator creates an array of objects with polynomial properties
 * insertMissing adds missing terms that are zeroes
 * Returns polyArray
 */

function polyObjectGenerator(string) {
  let polyArray = [];
  try {
    polyArray = arrayGenerator(string.match(regex));
    polyArray = insertMissing(polyArray);
    return polyArray;
  } catch(error) {
    //console.log(error.message);
    if(error.message.search("undefined") != -1)
    {
      console.log("@Error: Empty polynomial.");
      console.log("Please input a polynomial.");
    } else if(error.message.search("null") != -1) {
      console.log("@Error: Invalid characters entered");
      console.log("Please follow polynomial format: ax^n+...+1");
    }
    return false;
  }

}

module.exports = polyObjectGenerator;
