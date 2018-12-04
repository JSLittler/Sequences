'use strict';

function FunctionTiming(chosenMethod) {
  this.time
  this.start
  this.stop
  this.numArray = []
  this.chosenMethod = chosenMethod
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

  if (this.chosenMethod == "last") {
    this.start = performance.now();
    var z = this.last(this.numArray);
  };
  if (this.chosenMethod == "reverse") {
    this.start = performance.now();
    var z = this.numArray.reverse();
  };
  if (this.chosenMethod == "shuffle") {
    this.start = performance.now();
    var z = this.shuffle(this.numArray);
  };
  if (this.chosenMethod == "sort") {
    this.start = performance.now();
    var z = this.numArray.sort();
  };

  var z = this.numArray.sort();
  this.stop = performance.now();
};

FunctionTiming.prototype.exec = function(size) {
this.operation(size);
this.timer();
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
