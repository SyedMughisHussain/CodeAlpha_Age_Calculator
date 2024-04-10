const dateValue = document.querySelector("#dateInput");
const button = document.querySelector("#dateCalculate");

const years = document.querySelector("#years");
const months = document.querySelector("#months");
const date1 = document.querySelector("#date");

button.addEventListener("click", () => {
  if (!dateValue.value) {
    alert("Please enter a valid date to continue.");
    return;
  }
  const currentDate = dateValue.value;
  const splitDate = currentDate.split("-");

  const date = new Date();
  const fullYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();

  years.innerHTML = fullYear - splitDate[0];
  months.innerHTML = currentMonth - splitDate[1];
  date1.innerHTML = currentDay - splitDate[2];

  console.log(fullYear - splitDate[0]);
  console.log(currentMonth - splitDate[1]);
  console.log(currentDay - splitDate[2]);
});
