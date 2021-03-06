"use strict";

const arrayGenerator = require("./arrayGenerator.js");
const insertMissing = require("./insertMissing.js");
const removeZeroes = require("./removeZeroes.js");
const polyEmptyCheck = require("./polyEmptyCheck.js");
const regex = /[+-]?\d*x\^\d+|[+-]?\d*x|[+-\s]?\d+/g;

/*
 * Addition function:
 * @param = polyArray, addedPoly
 * Takes in another array within the function to be added
 * The two arrays are passed into a conditional block:
 * Three conditions used for adding polynomials:
 * 1. When addedPoly.length < polyArray.length (if)
 * 2. When addedPoly.length === polyArray.length (else if)
 * 3 .When addedPoly.length > polyArray.length (else)
 * Remind user to put 0x^power when writing out an eq
 * ^ not required since insertMissing() implemented
 * Returns polyArray
 */

function addition(polyArray, addedPoly) {
  //let userInput = prompt("Input a function to be added", "1x^1+1");
  /*let userInput = "-4x^3+6x^2+2x^1+3x^7+8x^8-888";
  let userInput2 = "1x^2+1";
  let addedPoly = [];
  addedPoly = arrayGenerator(userInput.match(regex));
  addedPoly = insertMissing(addedPoly);
  */

  if(polyEmptyCheck(polyArray)) return; 
  //console.log(polyArray.length);
  //console.log(addedPoly.length);
  if(addedPoly.length < polyArray.length) {
    //for loop iterating through param array
    for(let i = 0; i < polyArray.length ; ++i) {
      //console.log(polyArray[i].power);
      //console.log(addedPoly.length);
      // for loop iterating over added array
      // find matching power if degrees vary
      for (let j = 0 ; j < addedPoly.length; ++j) {
        //console.log(polyArray[i]);
        //console.log(j);
        //console.log(addedPoly[j]);
        // only add the two coefficients if their powers match
        if(polyArray[i].power === addedPoly[j].power){
          polyArray[i].coefficient += addedPoly[j].coefficient;
        }
      }
    }
    //console.log(polyArray);
    //return polyArray;
  } else if (addedPoly.length === polyArray.length) {
    // for loop iterating through param array
    for(let i = 0; i < addedPoly.length; ++i) {
      //console.log(polyArray[i].power);
        polyArray[i].coefficient += addedPoly[i].coefficient;
    }
    //console.log(polyArray);
    //return polyArray;
  } else {
    //for loop iterating through added array
    for(let i = 0; i < addedPoly.length ; ++i) {
      // for loop iterating over param array
      // find matching power if degrees vary
      for (let j = 0 ; j < polyArray.length; ++j) {
        // only add the two coefficients if their powers match
        if(polyArray[j].power === addedPoly[i].power) {
          addedPoly[i].coefficient += polyArray[j].coefficient;
        }
      }
    }
    //console.log(addedPoly);
    polyArray = addedPoly;
    //return addedPoly;
  }
  removeZeroes(polyArray);
  return polyArray;

}

module.exports = addition;
