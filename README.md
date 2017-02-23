# Complex Numbers Library
[![Build Status](https://travis-ci.org/YinkaAlabi/bc-19-complex-numbers-library.svg?branch=master)](https://travis-ci.org/YinkaAlabi/bc-19-complex-numbers-library) [![Code Issues](https://www.quantifiedcode.com/api/v1/project/cbcd2dd5dfca45358c97a2a9c7207d4c/badge.svg)](https://www.quantifiedcode.com/app/project/cbcd2dd5dfca45358c97a2a9c7207d4c) [![Known Vulnerabilities](https://snyk.io/test/github/yinkaalabi/bc-19-complex-numbers-library/badge.svg)](https://snyk.io/test/github/yinkaalabi/bc-19-complex-numbers-library) [![Coverage Status](https://coveralls.io/repos/github/YinkaAlabi/bc-19-complex-numbers-library/badge.svg?branch=master)](https://coveralls.io/github/YinkaAlabi/bc-19-complex-numbers-library?branch=master)

## Introduction
*  **`Complex Numbers Library`** is a Node.js (Javascript) library on complex numbers with a console app.
*  It has the following methods;
  *  Addition of complex numbers
  *  Users can subtract complex numbers
  *  Allows users to multiply complex numbers
  *  Users are able to divide complex numbers
  *  Allows users to make copies of a complex numbers
  *  Users can compare complex numbers to test for equality
  *  The properly formatted output of complex numbers can be seen with the **`toString`** method
  *  Allows users to square complex numbers

*  Run the app.js file using node app.js in your terminal to access the app.

## Dependencies

*  **[Node.js](https://nodejs.org/)** - The framework is a powerful and robust javascript framework used for writing scripts for the command line. 
   Also equipped with many very useful modules for the command line.
*  **[colors](https://github.com/Marak/colors.js)** - This package enables the colorful display of command-line outputs.
*  **[readline-sync](https://github.com/anseki/readline-sync)** - This package enables synchronous [Readline](https://nodejs.org/api/readline.html) 
   to interactively run and to have a conversation with the user via a console. readline-sync tries to let your script have a conversation with the user 
   via a console, _even when the input/output stream is redirected_.



## Tests
*  The tests have been written using node.js's **[Jasmine](https://jasmine.github.io/)** module.
*  To run the tests, make sure you have installed the [jasmine](https://jasmine.github.io/2.0/node.html) package from node.
*  Navigate to the project's root folder (where the `complex.js` file is located).
*  Issue the following command on terminal.
  *  `jasmine tests.js`
*  If the tests are successful, they will complete without failures or errors.

  ```
  Started
  ..........................
  
  26 specs, 0 failures
  Finished in 0.046s

  ```
