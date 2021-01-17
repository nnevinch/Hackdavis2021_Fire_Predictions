var zipCode = document.querySelector(".zipCode");
var dateValue = document.querySelector(".date");
const calculateButton = document.querySelector(".calculate");
const results = document.querySelector(".results");
const predictionResults = document.querySelector(".predictionResults");
var percentage = Math.floor(Math.random() * 99 + 1);

function create() {
  var para = document.createElement("p");
  para.classList.add("para");
  para.innerHTML = "2 Week Forecast";
  results.appendChild(para);
  elem = document.createElement("hr");
  elem.setAttribute("width", "80%");
  results.appendChild(elem);
  dateValue = new Date(
    dateValue.value.substring(0, 4),
    dateValue.value.substring(5, 7) - 1,
    dateValue.value.substring(8, 10)
  );
  console.log(dateValue);
  console.log(zipCode.value);
  for (var j = 0; j < 2; j++) {
    var resultRow = document.createElement("div");
    resultRow.classList.add("resultRow");
    for (var i = 0; i < 7; i++) {
      var newDiv = document.createElement("div");
      newDiv.classList.add("day");
      var newDay = document.createElement("li");
      newDay.classList.add("dateInput");
      newDay.innerHTML = dateValue.getMonth() + 1 + "/" + dateValue.getDate();
      newDiv.appendChild(newDay);
      var newLi = document.createElement("li");
      newLi.classList.add("percentage");
      if (percentage <= 30) {
        newLi.classList.add("green");
      } else if (percentage <= 60) {
        newLi.classList.add("yellow");
      } else {
        newLi.classList.add("red");
      }
      newLi.innerHTML = percentage + "%";
      newDiv.appendChild(newLi);
      resultRow.appendChild(newDiv);
      dateValue.setDate(dateValue.getDate() + 1);
      percentage = Math.floor(Math.random() * 100 + 1);
    }
    results.appendChild(resultRow);
  }
  // window.scrollBy(0, 100);
  predictionResults.scrollIntoView();

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
