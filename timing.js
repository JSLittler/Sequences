'use strict';

function FunctionTiming(chosenMethod) {
  this.z;
  this.time;
  this.start;
  this.stop;
  this.numArray = [];
  this.chosenMethod = chosenMethod;
  this.list = []
};

FunctionTiming.prototype.listGenerator = function(size) {
  var x
  this.list = [];
  for (x = 0; x < size; x++) {
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

// FunctionTiming.prototype.checkDuplicates = function() {
//   var i
//   var j
//   for (i = 0; i < this.list.length; i++) {
//     for (j = i + 1; j < this.list.length; j++) {
//       if (this.list[i] == this.list[j]) {
//         console.log("Your list has duplicates");
//         return true;
//       };
//     };
//   };
//   console.log("Your list does not have any duplicates.");
// };

// method above replaced by method below to increase efficiency.

FunctionTiming.prototype.checkDuplicates = function() {
  var counts = [];
  for(var i = 0; i <= this.list.length; i++) {
      if(counts[this.list[i]] === undefined) {
          counts[this.list[i]] = 1;
      } else {
        console.log("Your list has duplicates.");
        return;
      }
    }
  console.log("Your list does not have any duplicates.");
};

FunctionTiming.prototype.last = function() {
  return this.numArray[length - 1];
};

FunctionTiming.prototype.myLast = function() {
  var x = this.numArray.length;
  return this.numArray[x - 1];
};

FunctionTiming.prototype.myReverse = function() {
  for (var i = this.numArray.length-2; i >=0; i--) {
    this.numArray.push(this.numArray.splice(i, 1)[0]);
  }
  return this.numArray;
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
  if (this.chosenMethod == "myLast") {
    this.start = performance.now();
    this.z = this.myLast(this.numArray);
    this.stop = performance.now();
  };
  if (this.chosenMethod == "reverse") {
    this.start = performance.now();
    this.z = this.numArray.reverse();
    this.stop = performance.now();
  };
  if (this.chosenMethod == "myReverse") {
    this.start = performance.now();
    this.z = this.myReverse(this.numArray);
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
  if (this.chosenMethod == "checkDuplicates") {
    this.start = performance.now();
    this.z = this.checkDuplicates(this.list);
    this.stop = performance.now();
  }
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
  if (this.chosenMethod == "checkDuplicates") {
    console.log("List size: " + this.list.length);
  } else {
    console.log("Array size: " + this.numArray.length);
  }

  console.log("Function Time: " + this.time);
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

var f = new FunctionTiming("myReverse");
f.runExec();
