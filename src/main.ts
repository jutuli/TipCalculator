// Adding Event Listener for Form Submit
document
  .getElementById("tipCalculationForm")
  ?.addEventListener("submit", calculateTip);

// - Calculate Tip Function
function calculateTip(event: Event) {
  // event.preventDefault
  event.preventDefault();
  // getElementbyId for Inputs
  const billInput = parseFloat(
    (document.getElementById("billAmount") as HTMLInputElement).value
  );
  const sharersInput = parseInt(
    (document.getElementById("numberSharers") as HTMLInputElement).value
  );
  const serviceSatisfactionSelect = parseInt(
    (document.getElementById("serviceSatisfaction") as HTMLSelectElement).value
  );

  // Input Validation
  // if (isNaN(billInput) || billInput == null || billInput <= 0) {
  //   window.alert("Please provide the correct bill amount");
  //   return false;
  // }
  // if (
  //   isNaN(serviceSatisfactionSelect) ||
  //   serviceSatisfactionSelect == null ||
  //   serviceSatisfactionSelect <= 0
  // ) {
  //   window.alert("Please choose a satisfaction level");
  //   return false;
  // }

  // getElementbyId for Outputs
  const suggestedTipHTML = document.querySelector(
    ".suggestedTip"
  ) as HTMLElement;
  const totalAmountHTML = document.querySelector(".sum") as HTMLElement;
  const individualAmountHTML = document.querySelector(
    ".individualShare"
  ) as HTMLElement;

  let tipResult;
  let totalAmount;

  if (serviceSatisfactionSelect === 1) {
    tipResult = serviceSatisfactionSelect * 1.02;
  } else if (serviceSatisfactionSelect === 2) {
    tipResult = serviceSatisfactionSelect * 1.1;
  } else if (serviceSatisfactionSelect === 3) {
    tipResult = serviceSatisfactionSelect * 1.15;
  } else if (serviceSatisfactionSelect === 4) {
    tipResult = serviceSatisfactionSelect * 1.2;
  }

  totalAmount = billInput + tipResult;

  let individualAmount = totalAmount / sharersInput;

  if (suggestedTipHTML !== null && suggestedTipHTML !== undefined) {
    (suggestedTipHTML as HTMLElement).innerText = tipResult
      ?.toFixed(2)
      .toString();
  }
}
