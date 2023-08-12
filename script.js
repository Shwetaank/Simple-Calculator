// Get all the number buttons
const numberButtons = document.querySelectorAll(".number");

// Get all the operator buttons
const operatorButtons = document.querySelectorAll(
  ".calculator button:not(.number):not(#clear-button):not(#delete-button):not(#equal-button)"
);

// Get the result display element
const resultDisplay = document.getElementById("result");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    resultDisplay.textContent += button.textContent;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    resultDisplay.textContent += button.textContent;
  });
});

//! Clear button functionality
document.getElementById("clear-button").addEventListener("click", () => {
  resultDisplay.textContent = "";
});

//! Delete button functionality
document.getElementById("delete-button").addEventListener("click", () => {
  resultDisplay.textContent = resultDisplay.textContent.slice(0, -1);
});

//! Equal button functionality
document.getElementById("equal-button").addEventListener("click", () => {
  const expression = resultDisplay.textContent;

  // Check if the expression is valid
  if (/^[0-9+\-*/.]+$/.test(expression)) {
    // Evaluate the expression
    const result = eval(expression);
    
    // Display the resulut
    resultDisplay.textContent = result;
  } else {
    // Display an error message
    resultDisplay.textContent = "Error";
  }
});

// Get the "SM" button element
const smButton = document.getElementById("sm-button");

// Add event listener to the "SM" button
smButton.addEventListener("click", () => {
  // Update the result display with the custom message
  resultDisplay.textContent = "From Shwetank (Version-1.0)";
});

