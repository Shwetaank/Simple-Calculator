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
     /* 
    Changes made:
    made a regex to check if last character of resultDisplay.textContent mathces with operator buttons.
    if it does then remove last character of resultDisplay.textContent and add newly pressed operator button.
    else it works normally by addin whatever is clicked.
    */
    const regex = /[\/\+\*\-]/;
    const str=resultDisplay.textContent.charAt(resultDisplay.textContent.length-1);
    if (regex.test(str)) {
    resultDisplay.textContent=resultDisplay.textContent.substring(0, resultDisplay.textContent.length-1);
    resultDisplay.textContent += button.textContent;
    }else{
        resultDisplay.textContent += button.textContent;
    }
      
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

  // Function to validate a mathematical expression
function isValidExpression(expression) {
  try {
    // Attempt to parse the expression
    eval(expression);
    return true;
  } catch (error) {
    return false;
  }
}

// ...

// Equal button functionality
document.getElementById("equal-button").addEventListener("click", () => {
  const expression = resultDisplay.textContent;

  if (isValidExpression(expression)) {
    try {
      const result = eval(expression);
      resultDisplay.textContent = isNaN(result) ? "Error" : result;
    } catch (error) {
      resultDisplay.textContent = "Error";
    }
  } else {
    resultDisplay.textContent = "Error";
  }
});

});

// Get the "SM" button element
const smButton = document.getElementById("sm-button");

// Add event listener to the "SM" button
smButton.addEventListener("click", () => {
  // Update the result display with the custom message
  resultDisplay.textContent = "From Shwetank (Version-2.0)";
});

