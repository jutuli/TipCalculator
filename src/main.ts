// Imports
import "./assets/css/output.css";

// Adding Event Listener for Form Submit
document
  .getElementById("tipCalculationForm")
  ?.addEventListener("submit", calculateTip);

// - Calculate Tip Function
function calculateTip(event: Event) {
  // Prevent Default Page Reload
  event.preventDefault();

  // Get Values of Form Input Elements in HTML
  const billInput = parseFloat(
    (document.getElementById("billAmount") as HTMLInputElement).value
  );
  let sharersInput = parseInt(
    (document.getElementById("numberSharers") as HTMLInputElement).value
  );
  const serviceSatisfactionSelect = parseInt(
    (document.getElementById("serviceSatisfaction") as HTMLSelectElement).value
  );

  // Validate Form Inputs
  if (isNaN(billInput) || billInput <= 0) {
    window.alert(
      "Please provide the exact bill amount as a number (decimal separator is .)"
    );
    return false;
  }

  if (isNaN(sharersInput) || sharersInput <= 0) {
    sharersInput = 1;
  }

  if (isNaN(serviceSatisfactionSelect) || serviceSatisfactionSelect <= 0) {
    window.alert("Please choose a satisfaction level");
    return false;
  }

  // Get Output Elements from HTML
  const suggestedTipHTML = document.querySelector(
    ".suggestedTip"
  ) as HTMLElement;
  const totalAmountHTML = document.querySelector(".sum") as HTMLElement;
  const individualAmountHTML = document.querySelector(
    ".individualShare"
  ) as HTMLElement;

  // Declare Output Calculation Variables
  let tipResult = 0;
  let totalAmount = billInput;

  // Calculate Tip, Total Amount + Individual Contribution
  if (serviceSatisfactionSelect === 1) {
    tipResult = billInput * 0.02;
  } else if (serviceSatisfactionSelect === 2) {
    tipResult = billInput * 0.1;
  } else if (serviceSatisfactionSelect === 3) {
    tipResult = billInput * 0.15;
  } else if (serviceSatisfactionSelect === 4) {
    tipResult = billInput * 0.2;
  }

  totalAmount = billInput + tipResult;

  let individualAmount = totalAmount / sharersInput;

  // Write Results to HTML
  if (suggestedTipHTML !== null && suggestedTipHTML !== undefined) {
    (suggestedTipHTML as HTMLElement).innerText = tipResult
      .toFixed(2)
      .toString()
      .concat(" €");
  }

  if (totalAmountHTML !== null && totalAmountHTML !== undefined) {
    (totalAmountHTML as HTMLElement).innerText = totalAmount
      .toFixed(2)
      .toString()
      .concat(" €");
  }

  if (individualAmountHTML !== null && individualAmountHTML !== undefined) {
    (individualAmountHTML as HTMLElement).innerText = individualAmount
      .toFixed(2)
      .toString()
      .concat(" €");
  }

  // Show Results in HTML
  document.getElementById("results")?.classList.remove("hidden");
}

// Adding Event Listener for Form Reset
document.getElementById("formReset")?.addEventListener("click", resetForm);

// - Reset Form Function
function resetForm() {
  (document.getElementById("tipCalculationForm") as HTMLFormElement).reset();
  // Hide Results in HTML
  document.getElementById("results")?.classList.add("hidden");
}
