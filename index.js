// Select the HTML elements for the counter and clickable area
const counterEl = document.getElementById("counter"); // Element displaying the cookie count
const clickEl = document.getElementById("click"); // Element that triggers the counting when clicked

let counter = 0; // Initialize the counter variable to keep track of the cookie count

// Add a click event listener to the clickable element
clickEl.addEventListener("click", function () {
  counter++; // Increment the counter by 1 each time the element is clicked

  counterEl.textContent = counter; // Update the displayed cookie count
});
