'use strict';

function FunctionTiming() {
  this.time
  this.start
  this.stop
  this.numArray = []
};

FunctionTiming.prototype.arrayGenerator = function(i) {
  var x = 0;
  for (x = 0; x < i; x++) {
    var y = Math.floor((Math.random() * 100) + 1);
    this.numArray.push(y);
  };
};

FunctionTiming.prototype.last = function() {
  return this.numArray[length - 1];
};

FunctionTiming.prototype.shuffle = function(array) {
  var input = array;
   
  for (var i = input.length-1; i >=0; i--) {
   
      var randomIndex = Math.floor(Math.random()*(i+1)); 
      var itemAtIndex = input[randomIndex]; 
       
      input[randomIndex] = input[i]; 
      input[i] = itemAtIndex;
  }
  return input;
}

FunctionTiming.prototype.timer = function() {
  this.time = this.stop - this.start;
  console.log(this.time);
};

FunctionTiming.prototype.operation = function(size) {
  console.log(size);
  this.arrayGenerator(size);

  this.start = performance.now();

  var z = this.numArray.sort();
  console.log(z);

  this.stop = performance.now();
};

FunctionTiming.prototype.exec = function(size) {
this.operation(size);
this.timer();
};

var f = new FunctionTiming();

f.exec(0);
f.exec(1000000);
f.exec(2000000);
f.exec(3000000);
f.exec(4000000);
f.exec(5000000);
