// Imports
import "./assets/css/output.css";

// Add Event Listener for Form Submit
document
  .getElementById("tipCalculationForm")
  ?.addEventListener("submit", calculateTip);

// Add Event Listener for Service Quality Button Choice

document
  .getElementById("serviceSatisfaction")
  ?.addEventListener("click", buttonClick);

//- Service Quality Select Button Click Function
let selectedServiceSatisfactionLevel = 0;

function buttonClick(event: Event) {
  const serviceQualityChoice = event.target as HTMLButtonElement;

  if (serviceQualityChoice && serviceQualityChoice.dataset.value) {
    selectedServiceSatisfactionLevel = parseInt(
      serviceQualityChoice.dataset.value
    );
    // Deselect all service-quality-buttons
    const serviceQualityButtons = document.querySelectorAll(
      ".service-quality-button"
    );
    serviceQualityButtons.forEach((button) => {
      button.setAttribute("aria-selected", "false");
    });

    // Select the chosen service-quality-button
    serviceQualityChoice.setAttribute("aria-selected", "true");
  } else {
    window.alert(
      "There was an error in the choice of the service quality. Please try again"
    );
  }
}

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

  if (
    isNaN(selectedServiceSatisfactionLevel) ||
    selectedServiceSatisfactionLevel <= 0
  ) {
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
  if (selectedServiceSatisfactionLevel === 1) {
    tipResult = billInput * 0.02;
  } else if (selectedServiceSatisfactionLevel === 2) {
    tipResult = billInput * 0.1;
  } else if (selectedServiceSatisfactionLevel === 3) {
    tipResult = billInput * 0.15;
  } else if (selectedServiceSatisfactionLevel === 4) {
    tipResult = billInput * 0.2;
  }

  totalAmount = billInput + tipResult;

  let individualAmount = totalAmount / sharersInput;

  // Write Results to HTML
  if (suggestedTipHTML) {
    suggestedTipHTML.innerText = `${tipResult.toFixed(2)} €`;
  }

  if (totalAmountHTML) {
    totalAmountHTML.innerText = `${totalAmount.toFixed(2)} €`;
  }

  if (individualAmountHTML) {
    individualAmountHTML.innerText = `${individualAmount.toFixed(2)} €`;
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
  // Deselect all service-quality-buttons
  const serviceQualityButtons = document.querySelectorAll(
    ".service-quality-button"
  );
  serviceQualityButtons.forEach((button) => {
    button.setAttribute("aria-selected", "false");
  });
}
