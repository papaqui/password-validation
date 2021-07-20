'use strict';

let str = 'password123';

function SimplePassword(str) {
  // code goes here
  passwordNumbers(str);
  passwordUppercase(str);
  passwordEqual(str);
  passwordSymbols(str);
  passwordLength(str, 7, 31);
  return str;
}

// Check password length
function passwordLength(input, min, max) {
  if (input.length < min) {
    return false;
  } else if (input.length > max) {
    return false;
  } else {
    return true;
  }
}

// Check if contains numbers
function passwordNumbers(str) {
  if (str.search(/\d/) == -1) {
    return false;
  }
}

// Check if uppercase
function passwordUppercase(str) {
  var password = /[A-Z]/;

  if (str.match(password)) {
    return true;
  } else {
    return false;
  }
}

// Check if contains the string password
function passwordEqual(str) {
  var lowerPassword = str.toLowerCase();

  function check(use, lowerPassword) {
    return lowerPassword
      .match(/[a-z]+/gi)
      .filter((a) => a.length > 0 && use.includes(a)).length > 0
      ? true
      : false;
  }
  check('password', lowerPassword);
}

// Check if mathematical or punctuation mark
function passwordSymbols(str) {
  if (/[.,;:+\-*/%\-]/.test(str)) {
    true;
  } else {
    false;
  }
}

// Function call
SimplePassword(str);
