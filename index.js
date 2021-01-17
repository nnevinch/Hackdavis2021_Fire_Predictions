var zipCode = document.querySelector(".zipCode");
var dateValue = document.querySelector(".date");
const calculateButton = document.querySelector(".calculate");
const results = document.querySelector(".results");
const percentage = "0%";

function create() {
  console.log(dateValue.value);
  dateValue = new Date(
    dateValue.value.substring(0, 4),
    dateValue.value.substring(5, 7) - 1,
    dateValue.value.substring(8, 10)
  );
  console.log(dateValue);
  console.log(zipCode.value);
  for (var i = 0; i < 7; i++) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("day");
    var newDay = document.createElement("li");
    newDay.classList.add("dateInput");
    newDay.innerHTML = dateValue.getMonth() + 1 + "/" + dateValue.getDate();
    newDiv.appendChild(newDay);
    var newLi = document.createElement("li");
    newLi.classList.add("percentage");
    newLi.innerHTML = percentage;
    newDiv.appendChild(newLi);
    results.appendChild(newDiv);
    dateValue.setDate(dateValue.getDate() + 1);
  }
  return;
}

calculateButton.addEventListener("click", check);

function check(e) {
  e.preventDefault();

  if (zipCode.value.trim() != "" && dateValue.value != "") {
    create();
    zipCode.value = "";
    dateValue.value = "";
  }
}
