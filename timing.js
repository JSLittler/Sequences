'use strict';

function FunctionTiming(chosenMethod) {
  this.time;
  this.start;
  this.stop;
  this.list = [];
  this.numArray = [];
  this.chosenMethod = chosenMethod;
  this.size;
  this.result;
  this.output0;
  this.output1;
  this.output2;
  this.output3;
  this.output4;
  this.output5;
};

FunctionTiming.prototype.getFunction = function() {
  return this.chosenMethod;
};

FunctionTiming.prototype.getSize = function() {
  return this.size;
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

FunctionTiming.prototype.systemReverse = function(array) {
  return array.reverse();
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

FunctionTiming.prototype.systemSort = function(array) {
  return array.sort();
};

FunctionTiming.prototype.mySort = function(array) {
  var a1 = [];
  var a2 = [];
  if (array.length <= 1) { return array };

  var pivot = array[0];
  a1, a2 = this.mySortPartition(array, pivot);
  sortedA1 = mySort(a1);
  sortedA2 = mySort(a2);
  return sortedA1 + [pivot] + sortedA2;
};

FunctionTiming.prototype.mySortPartition = function(array, pivot) {
  array.shift();
  a1 = [];
  a2 = [];
  array.forEach(function(element) {
    (element < pivot) ? a1.push(element) : a2.push(element);
  });
  return a1, a2 
  };

  // problems:
  // returning multiple things - is this possible in JS?

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
  if (this.chosenMethod == "systemReverse")       { this.runMethod(this.numArray, this.systemReverse) };
  if (this.chosenMethod == "myReverse")       { this.runMethod(this.numArray, this.myReverse) };
  if (this.chosenMethod == "shuffle")         { this.runMethod(this.numArray, this.shuffle) };
  if (this.chosenMethod == "systemSort")       { this.runMethod(this.numArray, this.systemSort) };
  if (this.chosenMethod == "mySort")       { this.runMethod(this.numArray, this.mySort) };
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
  (this.chosenMethod == "checkDuplicates") ? this.result = "List size: " + this.list.length + ", Function Time: " + this.time : this.result = "Array size: " + this.numArray.length + ", Function Time: " + this.time;

  console.log("Function Time: " + this.time);
};

FunctionTiming.prototype.exec = function(size) {
  this.operation(size);
  this.timer();
  this.output();
};

FunctionTiming.prototype.runExecTest= function() {
  this.size = "Test array, length 10."
  this.exec(10);
  this.output0 = this.result;
};

FunctionTiming.prototype.runExec10000 = function() {
  this.size = "Array length increments by 10,000"
  this.exec(0);
  this.output0 = this.result;
  this.exec(10000);
  this.output1 = this.result;
  this.exec(20000);
  this.output2 = this.result;
  this.exec(30000);
  this.output3 = this.result;
  this.exec(40000);
  this.output4 = this.result;
  this.exec(50000);
  this.output5 = this.result;
};

FunctionTiming.prototype.runExec100000 = function() {
  this.size = "Array length increments by 100,000"
  this.exec(0);
  this.output0 = this.result;
  this.exec(100000);
  this.output1 = this.result;
  this.exec(200000);
  this.output2 = this.result;
  this.exec(300000);
  this.output3 = this.result;
  this.exec(400000);
  this.output4 = this.result;
  this.exec(500000);
  this.output5 = this.result;
};

FunctionTiming.prototype.runExec1000000 = function() {
  this.size = "Array length increments by 1,000,000"
  this.exec(0);
  this.output0 = this.result;
  this.exec(1000000);
  this.output1 = this.result;
  this.exec(2000000);
  this.output2 = this.result;
  this.exec(3000000);
  this.output3 = this.result;
  this.exec(4000000);
  this.output4 = this.result;
  this.exec(5000000);
  this.output5 = this.result;
};

// var f = new FunctionTiming("last");
// f.runExec10000();
