

document.getElementById("salaryForm").addEventListener("submit", function(event) {
  event.preventDefault();


  const name = document.getElementById("name").value;
  const basic = Number(document.getElementById("basic").value);
  const bonus = Number(document.getElementById("bonus").value) || 0;
  const deduction = Number(document.getElementById("deduction").value) || 0;

 
  const total = basic + bonus - deduction;


  document.getElementById("result").innerHTML =
    `✅ <b>${name}</b>, your total salary is <b>₹${total.toFixed(2)}</b>`;
});
