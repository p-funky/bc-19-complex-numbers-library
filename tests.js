(function(){
  'use strict';

  var myCode = require('./complex.js');
 
  describe("Complex Class: Create a complex number", function() {

    describe("Constructor: It should instantiate a new complex number", function(){

      it("The number should be a type of `object`, and an instance of the `Complex` class", function() {
        var num = new myCode.Complex(2, 3);
        expect(typeof num).toEqual(typeof {});
        expect(num instanceof myCode.Complex).toBeTruthy();
        expect(num.real).toBe(2);
        expect(num.imaginary).toBe(3);
      });

      it("The number should be 0 if no parameters are passed in", function() {
        var num = new myCode.Complex();
        expect(typeof num).toEqual(typeof {});
        expect(num instanceof myCode.Complex).toBeTruthy();
        expect(num.real).toBe(0);
        expect(num.imaginary).toBe(0);
      });

    });


    describe("It should add a complex number with another", function(){

      it("The real and imaginary should add to one another irrespective of sign", function() {
        var comp1 = new myCode.Complex(1, -2);
        var comp2 = new myCode.Complex(1, 1);

        expect(typeof comp1.add(comp2)).toEqual(typeof {});
        expect(comp1.add(comp2) instanceof myCode.Complex).toBeTruthy();        
        expect(comp1.add(comp2).real).toEqual(2);
        expect(comp1.add(comp2).imaginary).toEqual(-1);
      });

      it("Addition can be done multiple times with complex numbers", function() {
        var comp1 = new myCode.Complex(1, -2);
        var comp2 = new myCode.Complex(1, 1);
        var comp3 = new myCode.Complex(-3, -2); 

        expect(typeof comp1.add(comp2).add(comp3)).toEqual(typeof {});
        expect(comp1.add(comp2).add(comp3) instanceof myCode.Complex).toBeTruthy();     
        expect(comp1.add(comp2).add(comp3).real).toEqual(-1);
        expect(comp1.add(comp2).add(comp3).imaginary).toEqual(-3);
      });

    });


    describe("It should subtract a complex number from another", function(){

      it("The real and imaginary should subtract from one another irrespective of sign", function() {
        var comp1 = new myCode.Complex(1, -2);
        var comp2 = new myCode.Complex(1, 1);

        expect(typeof comp1.subtract(comp2)).toEqual(typeof {});
        expect(comp1.subtract(comp2) instanceof myCode.Complex).toBeTruthy();        
        expect(comp1.subtract(comp2).real).toEqual(0);
        expect(comp1.subtract(comp2).imaginary).toEqual(-3);
      });

      it("Subtraction can be done multiple times with complex numbers", function() {
        var comp1 = new myCode.Complex(1, -2);
        var comp2 = new myCode.Complex(1, 1);
        var comp3 = new myCode.Complex(-3, -2); 

        expect(typeof comp1.subtract(comp2).subtract(comp3)).toEqual(typeof {});
        expect(comp1.subtract(comp2).subtract(comp3) instanceof myCode.Complex).toBeTruthy();     
        expect(comp1.subtract(comp2).subtract(comp3).real).toEqual(3);
        expect(comp1.subtract(comp2).subtract(comp3).imaginary).toEqual(-1);
      });

    });


    describe("It should multiply a complex number with another", function(){

      it("Multiplication should be correct irrespective of sign", function() {
        var comp1 = new myCode.Complex(1, -2);
        var comp2 = new myCode.Complex(1, 1);

        expect(typeof comp1.multiply(comp2)).toEqual(typeof {});
        expect(comp1.multiply(comp2) instanceof myCode.Complex).toBeTruthy();        
        expect(comp1.multiply(comp2).real).toEqual(3);
        expect(comp1.multiply(comp2).imaginary).toEqual(-1);
      });

      it("Multiplication can be done multiple times with complex numbers", function() {
        var comp1 = new myCode.Complex(1, -2);
        var comp2 = new myCode.Complex(1, 1);
        var comp3 = new myCode.Complex(-3, -2); 

        expect(typeof comp1.multiply(comp2).multiply(comp3)).toEqual(typeof {});
        expect(comp1.multiply(comp2).multiply(comp3) instanceof myCode.Complex).toBeTruthy();     
        expect(comp1.multiply(comp2).multiply(comp3).real).toEqual(-11);
        expect(comp1.multiply(comp2).multiply(comp3).imaginary).toEqual(-3);
      });

    });


    describe("It should divide a complex number by another", function(){

      it("Division should be correct irrespective of sign", function() {
        var comp1 = new myCode.Complex(1, -2);
        var comp2 = new myCode.Complex(1, 1);

        expect(typeof comp1.divide(comp2)).toEqual(typeof {});
        expect(comp1.divide(comp2) instanceof myCode.Complex).toBeTruthy();        
        expect(comp1.divide(comp2).real).toEqual(-0.5);
        expect(comp1.divide(comp2).imaginary).toEqual(-1.5);
      });

      it("Division can be done multiple times with complex numbers and with decimal inputs", function() {
        var comp1 = new myCode.Complex(1, -2);
        var comp2 = new myCode.Complex(1, 1);
        var comp3 = new myCode.Complex(-3, -2); 

        expect(typeof comp1.multiply(comp2).multiply(comp3)).toEqual(typeof {});
        expect(comp1.divide(comp2).divide(comp3) instanceof myCode.Complex).toBeTruthy();     
        expect(comp1.divide(comp2).divide(comp3).real).toEqual(4.5/13);
        expect(comp1.divide(comp2).divide(comp3).imaginary).toEqual(3.5/13);
      });

    });


    describe("It should be the square of the complex number", function(){

      it("Square should be correct irrespective of sign", function() {
        var comp1 = new myCode.Complex(3, 4);
        var comp2 = new myCode.Complex(-3, 4);
        var comp3 = new myCode.Complex(3, -4);
        var comp4 = new myCode.Complex(-3, -4);

        expect(typeof comp1.square()).toEqual(typeof {});
        expect(typeof comp2.square()).toEqual(typeof {});

        expect(comp3.square() instanceof myCode.Complex).toBeTruthy();        
        expect(comp4.square() instanceof myCode.Complex).toBeTruthy();

        expect(comp1.square().real).toBe(-7);
        expect(comp2.square().imaginary).toBe(-24);
        expect(comp3.square().real).toBe(-7);
        expect(comp4.square().imaginary).toBe(24);
      });

    });


    describe("It should return a copy of the complex number", function(){

      it("Copy should be exact", function() {
        var comp1 = new myCode.Complex(3, 4);
        var comp2 = new myCode.Complex(-3, 4);

        expect(typeof comp1.copy()).toEqual(typeof {});
        expect(typeof comp2.copy()).toEqual(typeof {});

        expect(comp1.copy() instanceof myCode.Complex).toBeTruthy();        
        expect(comp2.copy() instanceof myCode.Complex).toBeTruthy();

        expect(comp1.copy()).toEqual(comp1);
        expect(comp2.copy()).toEqual(comp2);
      });

    });


    describe("It should return a boolean comparison of the equality of complex numbers", function(){

      it("Equals should be true if complex number is a copy", function() {
        var comp1 = new myCode.Complex(3, 4);
        var comp2 = comp1.copy();

        expect(typeof comp1.equals(comp2)).toEqual("boolean");

        //returns false because the natural order of equality in javascript checks for same reference
        expect(comp1 == comp2).toBe(false);           
        
        //Naturally, if '==' is false, then '===' would be false as well
        expect(comp1 === comp2).toBe(false);          
        
        //Hence we define our own equality method
        expect(comp1.equals(comp2)).toBe(true);       
      });

      it("Equals should be true only if both reals and both imaginaries are respectively equal in magnitude", function() {

        var comp3 = new myCode.Complex(-2, -2);
        var comp4 = new myCode.Complex(2, 2);
        var comp5 = new myCode.Complex(2, 3);
        var comp6 = new myCode.Complex(1, 2);
        
        expect(comp3.equals(comp4)).toBe(false);
        expect(comp5.equals(comp6)).toBe(false);

        var comp1 = new myCode.Complex(3, 4);
        var comp2 = comp4.add(comp6);
        var comp7 = new myCode.Complex(3, 4);

        expect(comp1.equals(comp2)).toBe(true);
        expect(comp1.equals(comp7)).toBe(true);
        expect(comp2.equals(comp7)).toBe(true);
        expect(comp5.equals(comp6)).toBe(false);
        
        //That's because the natural order of equality in javascript checks for same reference
        expect(comp1 == comp2).toBe(false);         
        
        //That's because the natural order of equality in javascript checks for same reference
        expect(comp1 == comp7).toBe(false);         
      });

    });



    describe("The number should be properly formatted in display", function(){

      it("The number should be 0 if both paramaters are 0", function() {
        var num = new myCode.Complex(0, 0);
        expect(typeof num).toEqual(typeof {});
        expect(num instanceof myCode.Complex).toBeTruthy();
        expect(num.toString()).toBe(0);
      });

      it("The number should be -i and not -1i if the real is zero and the imaginary is -1", function() {
        var num = new myCode.Complex(0, -1);
        expect(num.real).toBe(0);
        expect(num.imaginary).toBe(-1);
        expect(num.toString()).toBe('-i');
      });

      it("The number should be -2i if the real is zero and the imaginary is -2", function() {
        var num = new myCode.Complex(0, -2);
        expect(num.real).toBe(0);
        expect(num.imaginary).toBe(-2);
        expect(num.toString()).toEqual('-2i');
      }); 

      it("The number should be i and not 1i if the real is 0 and the imaginary is 1", function() {
        var num = new myCode.Complex(0, 1);
        expect(num.real).toBe(0);
        expect(num.imaginary).toBe(1);
        expect(num.toString()).toBe('i');
      });     

      it("The number should be -i if the real is 0 and the imaginary is -1", function() {
        var num = new myCode.Complex(0, 3);
        expect(num.real).toBe(0);
        expect(num.imaginary).toBe(3);
        expect(num.toString()).toEqual('3i');
      });

      it("The number should be the real number when the imaginary is 0 and it should be able to accept decimal inputs", function() {
        var num = new myCode.Complex(6.2, 0);
        expect(num.real).toBe(6.2);
        expect(num.imaginary).toBe(0);
        expect(num.toString()).toEqual(6.2);
      });

      it("The number should be 1 - i and not 1 - 1i when the real is 1 and the imaginary is -1", function() {
        var num = new myCode.Complex(1, -1);
        expect(num.real).toBe(1);
        expect(num.imaginary).toBe(-1);
        expect(num.toString()).toBe('1 - i');
      });            

      it("The number should be -3 - 2.5i when the real is -3 and the imaginary is -2.5", function() {
        var num = new myCode.Complex(-3, -2.5);
        expect(num.real).toBe(-3);
        expect(num.imaginary).toBe(-2.5);
        expect(num.toString()).toBe('-3 - 2.5i');
      });    

      it("The number should be 4 + i and not 4 + 1i if the real is 4 and the imaginary is 1", function() {
        var num = new myCode.Complex(4, 1);
        expect(num.real).toBe(4);
        expect(num.imaginary).toBe(1);
        expect(num.toString()).toBe('4 + i');
      });

      it("The number should be 5 + 6i if the real is 5 and the imaginary is 6", function() {
        var num = new myCode.Complex(5, 6);
        expect(num.real).toEqual(5);
        expect(num.imaginary).toEqual(6);
        expect(num.toString()).toBe('5 + 6i');
      });              
            
    });
    

    describe("It should be able to perform multiple calculations between the various methods", function(){

      it("Should calculate from left to right", function() {
        var comp1 = new myCode.Complex(2, 3);
        var comp2 = new myCode.Complex(3, -5);
        var comp3 = new myCode.Complex(4, -7);
        var comp4 = new myCode.Complex(3, -10);
        var comp5 = new myCode.Complex(2, 20);

        var comp6 = comp1.add(comp2).subtract(comp3).multiply(comp4).divide(comp5);
        

        expect(typeof comp6).toEqual(typeof {});
        expect(comp5 instanceof myCode.Complex).not.toBeFalsy(); 

        expect(comp6.real).toBeCloseTo(0.50990099);
        expect(comp6.imaginary).toBeCloseTo(-2.5990099);
        expect(comp6.toString()).toEqual(206/404 + " - " + 1050/404 + "i");
      });

      it("Should evaluate brackets first", function() {

        var comp1 = new myCode.Complex(2, 3);
        var comp2 = new myCode.Complex(3, -5);
        var comp3 = new myCode.Complex(4, -7);
        var comp4 = new myCode.Complex(3, -10);
        var comp5 = new myCode.Complex(2, 20);


        var comp6 = comp1.add(((comp2).subtract(comp3)).multiply((comp4).divide(comp5)));
        

        expect(typeof comp6).toEqual(typeof {});
        expect(comp6 instanceof myCode.Complex).not.toBeFalsy(); 

        expect(comp6.real).toBeCloseTo(2.8762376);
        expect(comp6.imaginary).toBeCloseTo(2.2376238);
      });

    });

  });

})();