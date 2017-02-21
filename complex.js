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