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

  if (suggestedTipHTML !== null && suggestedTipHTML !== undefined) {
    (suggestedTipHTML as HTMLElement).innerText = tipResult
      ?.toFixed(2)
      .toString();
  }
}
