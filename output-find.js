(function () {
  // here 1 print immediately
  console.log(1);
  //   here setTimeout so 2 logged after 1 second delay
  setTimeout(function () {
    console.log(2);
  }, 1000);
  //   here also setTimeout so 3 logged after 0 millisecond delay
  setTimeout(function () {
    console.log(3);
  }, 0);
  // here 4 logged after the 1 print
  console.log(4);
})();

// Here the final output are:
// 1
// 4
// 3
// 2
