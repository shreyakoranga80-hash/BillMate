// ======================================
// 1. SELECT HTML ELEMENTS
// ======================================

const billInput = document.querySelector("#bill");

const peopleInput = document.querySelector("#people");

const tipButtons = document.querySelectorAll(".tip-btn");

const calculateButton = document.querySelector("#calculate-btn");

const tipAmountElement = document.querySelector("#tip-amount");

const totalAmountElement = document.querySelector("#total-amount");

const perPersonElement = document.querySelector("#per-person");

const errorMessage = document.querySelector("#error-message");


// ======================================
// 2. STORE SELECTED TIP
// ======================================

let selectedTip = 0;


// ======================================
// 3. CALCULATE TIP
// ======================================

const calculateTip = (bill, percentage) => {

    return bill * percentage / 100;

};


// ======================================
// 4. LOGIC ENGINE
// ======================================

const calculateBill = (bill, percentage, people) => {

    const tipAmount = calculateTip(bill, percentage);

    const totalAmount = bill + tipAmount;

    const amountPerPerson = totalAmount / people;

    return {
        tipAmount,
        totalAmount,
        amountPerPerson
    };

};


// ======================================
// 5. TIP BUTTON FUNCTIONALITY
// ======================================

tipButtons.forEach(button => {

    button.addEventListener("click", () => {

        selectedTip = Number(button.dataset.tip);

        tipButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});


// ======================================
// 6. CALCULATE BUTTON
// ======================================

calculateButton.addEventListener("click", () => {

    const bill = Number(billInput.value);

    const people = Number(peopleInput.value);

    errorMessage.textContent = "";

    // Validation

    if (!Number.isFinite(bill) || !Number.isFinite(people)) {

        errorMessage.textContent =
            "Please enter valid numbers.";

        return;

    }

    if (bill <= 0 || people <= 0) {

        errorMessage.textContent =
            "Please enter a valid bill and number of people.";

        return;

    }

    // Calculate bill

    const {
        tipAmount,
        totalAmount,
        amountPerPerson
    } = calculateBill(bill, selectedTip, people);

    // Update UI

    tipAmountElement.textContent =
        `₹${tipAmount.toFixed(2)}`;

    totalAmountElement.textContent =
        `₹${totalAmount.toFixed(2)}`;

    perPersonElement.textContent =
        `₹${amountPerPerson.toFixed(2)}`;

});