/**
* This is the description for the class Complex.
* Represents a complex number.
*
* @class Complex - Creates a Complex object as a complex number
* @constructor
* @param {real} real - The real part of the number. If undefined, should pass in 0 by default
* @param {imaginary} imaginary - The coefficient of the imaginary part of the number, i.e. without the 'i'
* If undefined, should pass in 0 by default
*/
function Complex(real, imaginary) {
  if (typeof(real)==='undefined') real = 0;
  if (typeof(imaginary)==='undefined') imaginary = 0;

  this.real = real;
  this.imaginary = imaginary;
};


/**
* It should add one complex number to another. 
*
* @method add
* @constructor {Complex} this - The complex number calling the function
* @param {Complex} that - Second complex number to be added to
* @return {Complex} Returns an addition of this and that
*/
Complex.prototype.add = function(that) {
  var r = this.real + that.real;
  var i = this.imaginary + that.imaginary;
  var result = {};
  var result = new Complex(r, i);
  return result;
};


/**
* It should subtract one complex number from another. 
*
* @method add
* @constructor {Complex} this - The complex number calling the function and will be subtracted from
* @param {Complex} that - Second complex number which is what will be subtracted
* @return {Complex} Returns a subtraction of that from this
*/
Complex.prototype.subtract = function(that) {
  var r = this.real - that.real;
  var i = this.imaginary - that.imaginary;
  var result = {};
  var result = new Complex(r, i);
  return result;
};


/**
* It should multiply one complex number by another. 
*
* @method multiply
* @constructor {Complex} this - The complex number calling the function
* @param {Complex} that - Second number to be multiplied by
* @return {Complex} Returns a product of this and that
*/
Complex.prototype.multiply = function(that) {
  var r = (this.real * that.real) - (this.imaginary * that.imaginary);
  var i = (this.real * that.imaginary) + (this.imaginary * that.real);
  var result = new Complex(r, i);
  return result;
};


/**
* It should divide one complex number by another. 
*
* @method divide
* @constructor {Complex} this - The complex number calling the function
* @param {Complex} that - Second number to be divided by
* @return {Complex} Returns a division of this by that
*/
Complex.prototype.divide = function(that) {
  if (that.real == 0 && that.imaginary == 0){
    return "NaN. Cannot divide by 0";
  }
  var divisor = Math.pow(that.real, 2) + Math.pow(that.imaginary, 2);
  var r = ((this.real * that.real) + (this.imaginary * that.imaginary))/divisor;
  var i = ((this.real * -that.imaginary) + (this.imaginary * that.real))/divisor;
  var result = new Complex(r, i);
  return result;

};


/**
* It should square a complex number. 
*
* @method square
* @constructor {Complex} this - The complex number calling the function
* @return {Complex} Returns a square of this
*/
Complex.prototype.square = function() {
  var r = (this.real * this.real) - (this.imaginary * this.imaginary);
  var i = 2 * (this.real * this.imaginary);
  var result = new Complex(r, i);
  return result;
};


/**
* It should make a copy of a complex number. 
*
* @method copy
* @constructor {Complex} this - The complex number calling the function.
* @return {Complex} Returns a copy of this
*/
Complex.prototype.copy = function() {
  var result = new Complex(this.real, this.imaginary);
  return result;
};


/**
* it should check for equality between two complex numbers.
*
* @method equals
* @constructor {Complex} this - The complex number calling the function.
* @param {Complex} that - Second number to be evaluate for equality.
* @return {boolean} Returns true if this is equal to that
*/
Complex.prototype.equals = function(that) {
  return this.real - that.real == that.imaginary - this.imaginary;
};


/**
* It should print out a properly formatted complex number. 
*
* @method toString
* @constructor {Complex} this - The complex number calling the function.
* @return {String} Returns a properly formatted output of this
*/
Complex.prototype.toString = function() {
  if (this.real == 0 && this.imaginary == 0){
    return 0;
  }

  if (this.real == 0){
    if (this.imaginary == -1) {
        return "-i";
    }
    if (this.imaginary < 0) {
      return this.imaginary + "i"; 
    }
    if (this.imaginary == 1) {
      return "i";
    }
    return this.imaginary + "i";
  }

  if (this.imaginary == 0){
    return this.real;
  }

  if (this.imaginary == -1) {
        return this.real + " - i";
    }

  if (this.imaginary < 0){
    return this.real + " - " + Math.abs(this.imaginary) + "i" ; 
  }

  if (this.imaginary == 1) {
      return this.real + " + i";
    }

  return this.real + " + " + this.imaginary + "i";

}



module.exports = {
    Complex : Complex
}