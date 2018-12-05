'use strict';

function FunctionTiming(chosenMethod) {
  this.time;
  this.start;
  this.stop;
  this.list = [];
  this.numArray = [];
  this.chosenMethod = chosenMethod;
};

FunctionTiming.prototype.listGenerator = function(size) {
  this.list = [];
  for (var x = 0; x < size; x++) {
    var y = x + 1;
    this.list.push(y);
  };
  // this.list.push(size)
};

FunctionTiming.prototype.arrayGenerator = function(size) {
  var x
  this.numArray = [];
  for (x = 0; x < size; x++) {
    var y = Math.floor((Math.random() * 100) + 1);
    this.numArray.push(y);
  };
};

FunctionTiming.prototype.last = function(array) {
  return array[length - 1];
};

FunctionTiming.prototype.myLast = function(array) {
  var x = array.length;
  return array[x - 1];
};

FunctionTiming.prototype.myReverse = function(array) {
  for (var i = array.length-2; i >=0; i--) {
    array.push(array.splice(i, 1)[0]);
  }
  return array;
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
};

FunctionTiming.prototype.checkDuplicates = function(list) {
  var counts = [];
  for(var i = 0; i <= list.length; i++) {
      if(counts[list[i]] === undefined) {
          counts[list[i]] = 1;
      } else {
        console.log("Your list has duplicates.");
        return;
      }
    }
  console.log("Your list does not have any duplicates.");
};

FunctionTiming.prototype.runMethod = function(data, callback) {
  this.start = performance.now();
  callback(data);
  this.stop = performance.now();
};

FunctionTiming.prototype.chooseMethod = function() {
  if (this.chosenMethod == "last")            { this.runMethod(this.numArray, this.last) };
  if (this.chosenMethod == "myLast")          { this.runMethod(this.numArray, this.myLast) };
  if (this.chosenMethod == "myReverse")       { this.runMethod(this.numArray, this.myReverse) };
  if (this.chosenMethod == "shuffle")         { this.runMethod(this.numArray, this.shuffle) };
  if (this.chosenMethod == "checkDuplicates") { this.runMethod(this.list, this.checkDuplicates) };
};

FunctionTiming.prototype.operation = function(size) {
  this.arrayGenerator(size);
  this.listGenerator(size);
  this.chooseMethod(size);
};

FunctionTiming.prototype.timer = function() {
  this.time = (this.stop - this.start) * 1000;
};

FunctionTiming.prototype.output = function() {
  (this.chosenMethod == "checkDuplicates") ? console.log("List size: " + this.list.length) : console.log("Array size: " + this.numArray.length);

  console.log("Function Time: " + this.time);
};

FunctionTiming.prototype.exec = function(size) {
this.operation(size);
this.timer();
this.output();
};

FunctionTiming.prototype.runExec = function() {
this.exec(0);
this.exec(10000);
this.exec(20000);
this.exec(30000);
this.exec(40000);
this.exec(50000);
};

var f = new FunctionTiming("checkDuplicates");
f.runExec();
