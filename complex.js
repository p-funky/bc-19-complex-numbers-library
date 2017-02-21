function Complex(real, imaginary) {
  if (typeof(real)==='undefined') real = 0;
  if (typeof(imaginary)==='undefined') imaginary = 0;
  
  this.real = real;
  this.imaginary = imaginary;
};