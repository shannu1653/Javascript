// 💡 Salary Calculation Script

document.getElementById("salaryForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get values from form
  const name = document.getElementById("name").value;
  const basic = Number(document.getElementById("basic").value);
  const bonus = Number(document.getElementById("bonus").value) || 0;
  const deduction = Number(document.getElementById("deduction").value) || 0;

  // Calculate total salary
  const total = basic + bonus - deduction;

  // Display the result
  document.getElementById("result").innerHTML =
    `✅ <b>${name}</b>, your total salary is <b>₹${total.toFixed(2)}</b>`;
});
