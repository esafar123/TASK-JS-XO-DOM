const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let currentfillx = [];
let currentfillo = [];
// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
  document.getElementById(index).disabled = true;
  if (text == "X") {
    currentfillx.push(index);
  } else {
    currentfillo.push(index);
  }
  checkWinner();
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let plyer = "X";
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  if (plyer == "X") {
    fillButton(index, "X");
    plyer = "O";
  } else {
    fillButton(index, "O");
    plyer = "X";
  }
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
function checkWinner() {
  wins.forEach((win) => {
    if (win.every((x) => currentfillx.includes(x))) {
      alert(" the winner is X");
    }
    if (win.every((x) => currentfillo.includes(x))) {
      alert(" the winner is O");
    }
  });
}
// function restartGame
