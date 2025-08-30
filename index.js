// Your code here
function moveDodgerLeft() {
  const dodger = document.getElementById('dodger');
  
  if (dodger) {
    // Get current left position
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
    
    // Move left by decreasing the left position
    // Make sure we don't go below 0
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
}

function moveDodgerRight() {
  const dodger = document.getElementById('dodger');
  
  if (dodger) {
    // Get current left position
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
    
    // Move right by increasing the left position
    // You might want to add a boundary check here too
    // For example, if you know the game area width:
    // const gameWidth = 400; // adjust based on your game
    // if (left < gameWidth - dodgerWidth) {
    dodger.style.left = `${left + 1}px`;
    // }
  }
}

// Alternative version with boundary checking
function moveDodgerLeftWithBounds() {
  const dodger = document.getElementById('dodger');
  
  if (dodger) {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
    
    // Don't move if already at left edge
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
}

function moveDodgerRightWithBounds() {
  const dodger = document.getElementById('dodger');
  
  if (dodger) {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
    
    // Assuming game area is 400px wide and dodger is 40px wide
    const gameWidth = 400;
    const dodgerWidth = 40;
    
    // Don't move if already at right edge
    if (left < gameWidth - dodgerWidth) {
      dodger.style.left = `${left + 1}px`;
    }
  }
}