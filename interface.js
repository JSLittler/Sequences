$(document).ready(function() {
  var f

  $('#Last').click(function() {
    f = new FunctionTiming("last");
    $('#function').text(f.getFunction());
  });

  $('#My-Last').click(function() {
    f = new FunctionTiming("myLast");
    $('#function').text(f.getFunction());
  });

  $('#System-Reverse').click(function() {
    f = new FunctionTiming("systemReverse");
    $('#function').text(f.getFunction());
  });

  $('#My-Reverse').click(function() {
    f = new FunctionTiming("myReverse");
    $('#function').text(f.getFunction());
  });

  $('#Shuffle').click(function() {
    f = new FunctionTiming("shuffle");
    $('#function').text(f.getFunction());
  });

  $('#System-Sort').click(function() {
    f = new FunctionTiming("systemSort");
    $('#function').text(f.getFunction());
  });

  $('#My-Sort').click(function() {
    f = new FunctionTiming("mySort");
    $('#function').text(f.getFunction());
  });

  $('#Check-Duplicates').click(function() {
    f = new FunctionTiming("checkDuplicates");
    $('#function').text(f.getFunction());
  });

  $('#Test-Test').click(function() {
    f.runExecTest();
    $('#Testing-Scale').text(f.getSize());
  });

  $('#Test-10000').click(function() {
    f.runExec10000();
    $('#Testing-Scale').text(f.getSize());
  });

  $('#Test-100000').click(function() {
    f.runExec100000();
    $('#Testing-Scale').text(f.getSize());
  });

  $('#Test-1000000').click(function() {
    f.runExec1000000();
    $('#Testing-Scale').text(f.getSize());
  });

  function updateResults() {
    $('#output0').text(f.output0);
    $('#output1').text(f.output1);
    $('#output2').text(f.output2);
    $('#output3').text(f.output3);
    $('#output4').text(f.output4);
    $('#output5').text(f.output5);
  }

  $('#get-Results').click(function() {
    updateResults();
  });
});