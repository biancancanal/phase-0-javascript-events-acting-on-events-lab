// Your code here
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 


function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  } 


/*  function moveDodgerRight() {
    var newPosition = dodger.style.left
    newPosition = parseInt(newPosition)
  }

  var left = dodger.style.left
  left = parseInt(left)

  moveDodgerRight()

  var newPosition = dodger.style.left
  newPosition = parseInt(newPosition)*/