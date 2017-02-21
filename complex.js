function Complex(real, imaginary) {
  if (typeof(real)==='undefined') real = 0;
  if (typeof(imaginary)==='undefined') imaginary = 0;
  
  this.real = real;
  this.imaginary = imaginary;
};

Complex.prototype.add = function(that) {
  var r = this.real + that.real;
  var i = this.imaginary + that.imaginary;
  var result = {};
  var result = new Complex(r, i);
  return result;
};

Complex.prototype.subtract = function(that) {
  var r = this.real - that.real;
  var i = this.imaginary - that.imaginary;
  var result = {};
  var result = new Complex(r, i);
  return result;
};

Complex.prototype.multiply = function(that) {
  var r = (this.real * that.real) - (this.imaginary * that.imaginary);
  var i = (this.real * that.imaginary) + (this.imaginary * that.real);
  var result = new Complex(r, i);
  return result;
};

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



module.exports = {
    Complex : Complex
}