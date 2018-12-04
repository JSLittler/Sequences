'use strict';

function FunctionTiming(chosenMethod) {
  this.z;
  this.time;
  this.start;
  this.stop;
  this.numArray = [];
  this.chosenMethod = chosenMethod;
};

FunctionTiming.prototype.arrayGenerator = function(size) {
  var x
  this.numArray = [];
  for (x = 0; x < size; x++) {
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

FunctionTiming.prototype.chooseMethod = function() {
  if (this.chosenMethod == "last") {
    this.start = performance.now();
    this.z = this.last(this.numArray);
    this.stop = performance.now();
  };
  if (this.chosenMethod == "reverse") {
    this.start = performance.now();
    this.z = this.numArray.reverse();
    this.stop = performance.now();
  };
  if (this.chosenMethod == "shuffle") {
    this.start = performance.now();
    this.z = this.shuffle(this.numArray);
    this.stop = performance.now();
  };
  if (this.chosenMethod == "sort") {
    this.start = performance.now();
    this.z = this.numArray.sort();
    this.stop = performance.now();
  };
};

FunctionTiming.prototype.operation = function(size) {
  this.arrayGenerator(size);
  this.chooseMethod();
};

FunctionTiming.prototype.timer = function() {
  this.time = (this.stop - this.start) * 1000;
};

FunctionTiming.prototype.output = function() {
  console.log("Array size: " + this.numArray.length)
  console.log("Function Time: " + this.time)
};

FunctionTiming.prototype.exec = function(size) {
this.operation(size);
this.timer();
this.output();
};

FunctionTiming.prototype.runExec = function() {
this.exec(0);
this.exec(1000000);
this.exec(2000000);
this.exec(3000000);
this.exec(4000000);
this.exec(5000000);
};

var f = new FunctionTiming("sort");
f.runExec();
