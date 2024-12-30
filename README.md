# Project - Tip Calculator 💰🧮

<img src="./src/assets/img/screenshot-tip-calculator-new.png" alt="Screenshot of the Tip Calculator" height="250">

The Tip Calculator is a user-friendly web application designed to calculate the tip amount, total bill, and split it among multiple people based on the service quality. It features a clean interface, responsive design, and dynamic functionality for a seamless user experience.

This project was developed as part of my Web Development Bootcamp.

---

## Table of Contents 📑

- [About](#about)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Design](#design)
  - [Logic Flow](#logic-flow)
    - [Logic Implementation](#logic-implementation)
    - [Flowchart](#flowchart)

---

## About

The Tip Calculator calculates:

- The suggested tip based on service quality.
- The total bill amount including the tip.
- The amount each person owes when splitting the bill.

It includes:

- Real-time input validation for fields like bill amount, number of sharers, and service quality.
- A responsive layout.
- Dynamic feedback to display results.
- A reset feature for clearing the form and results.

---

## Tech Stack

**Markup:**

- HTML5

**Styling:**

- Tailwind CSS

**Interactivity:**

- TypeScript

**IDE:**

- Visual Studio Code

**Version Control:**

- Git & GitHub

---

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have the following installed:

- Git
- Node.js
- A modern browser (Chrome, Edge, etc.)
- Visual Studio Code

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/jutuli/TipCalculator.git
    ```

2.  Install dependencies:
    npm install

3.  Start the development server:
    npm run dev

## Design

The Tip Calculator features:

- A minimalistic layout with clear input fields and a prominent results section.
- A responsive design optimized for both desktop and mobile views.
- Interactive elements styled using Tailwind CSS.

### Logic Flow

#### Logic Implementation

**Input of Bill Amount and Number of Sharers:**

- Users enter the bill amount in the provided input field (e.g., 47.32).
- Users specify the number of people sharing the bill (default is 1).
- Real-time validation ensures inputs are numeric and greater than zero.

**Service Quality Selection:**

- Users can select from four predefined service levels: ☹️, 😐, 🙂, 🤩.
- Buttons dynamically update their state (`aria-selected`) based on user interaction.

**Input Validation:**

- Ensures valid input for bill amount and number of sharers.
- Prompts users for corrections when values are missing or incorrect.

**Calculation:**

- Tip is calculated based on the selected service level (2%, 10%, 15%, or 20% of the bill).
- The total amount is computed by adding the tip to the bill amount.
- The per-person amount is derived by dividing the total by the number of sharers.

**Dynamic Feedback:**

- Results are dynamically displayed in a hidden results section, revealed after calculation.

**Reset Functionality:**

- Clears inputs and resets the interface, including service quality button states.

#### Flowchart

The following flowchart outlines the application's core logic:
<br>
<img src="./src/assets/img/flowchart-tip-calculator.png" alt="Flowchart for Tip Calculator" height="500">
