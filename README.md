# BillMate 💰

A simple and responsive tip calculator and bill-splitting web application built with HTML, CSS, and JavaScript.

BillMate allows users to enter a bill amount, select a tip percentage, specify the number of people sharing the bill, and instantly calculate the tip, total bill, and amount to be paid per person.

---

## 📸 Preview

<img width="1920" height="971" alt="Screenshot (179)" src="https://github.com/user-attachments/assets/16628780-df56-4277-9351-3fe7a1593e54" />

---

## ✨ Features

- Enter and validate the bill amount
- Select a tip percentage
- Enter the number of people sharing the bill
- Calculate the total tip amount
- Calculate the final bill amount
- Calculate the amount payable per person
- Interactive tip percentage buttons
- Dynamic results using JavaScript
- Input validation and error handling
- Responsive layout for different screen sizes
- Glassmorphism-inspired user interface
- Background image with overlay effect
- Indian Rupee (₹) currency support

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and semantic elements |
| CSS3 | Styling, layout, responsiveness and glassmorphism UI |
| JavaScript | Calculations, DOM manipulation and user interactions |

---

## 🧮 How It Works

The application uses three main inputs:

**1. Bill Amount**

The user enters the total bill amount.

**2. Tip Percentage**

The user selects a tip percentage such as 5%, 10%, 15% or 20%.

**3. Number of People**

The user enters the number of people who will share the bill.

The application then performs the following calculations:

```text
Tip Amount = Bill Amount × Tip Percentage / 100

Total Amount = Bill Amount + Tip Amount

Amount Per Person = Total Amount / Number of People
