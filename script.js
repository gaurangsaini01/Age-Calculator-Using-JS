const form = document.querySelector(".form");
const inputs = document.getElementsByTagName("input");

//inputs
const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");
//outputs
const daysoutput = document.querySelector(".d3");
const yearsoutput = document.querySelector(".y3");
const monthsoutput = document.querySelector(".m3");
const ErrorChecker=document.querySelectorAll(".box");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
  calculateAge();
});

function validate() {
  const monthDays = new Date(year.value, month.value, 0).getDate();

  //validating if any field is empty .

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      inputs[i].parentElement.classList.add("error");
      inputs[i].parentElement.children[4].textContent =
        "This field is required";
    } else {
      inputs[i].parentElement.classList.remove("error");
    }
  }
  if (day.value > monthDays) {
    day.parentElement.classList.add("error");
    day.parentElement.children[4].textContent = "Must be a valid Day";
  }
  if (month.value > 12) {
    month.parentElement.classList.add("error");
    month.parentElement.children[4].textContent = "Must be a valid Month";
  }
  if(year.value.length!=4){
    year.parentElement.classList.add("error");
    year.parentElement.children[4].textContent = "Must be a valid year";
  }
  if(year.value>new Date().getFullYear()){
    year.parentElement.classList.add("error");
    year.parentElement.children[4].textContent = "Year must be in the past";
  }
}
function calculateAge() {
  var userDob = new Date(year.value, month.value, day.value);
  var currentDate = new Date();

  //For current Date

  const y2 = currentDate.getFullYear();
  const m2 = currentDate.getMonth() + 1;
  const d2 = currentDate.getDate();

  //For User Date of birth(D.O.B)

  const y1 = userDob.getFullYear();
  const m1 = userDob.getMonth() + 1;
  const d1 = userDob.getDate();

  let y3, m3, d3;

  y3 = y2 - y1;
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    // m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  //dispalying

  daysoutput.textContent = d3;
  monthsoutput.textContent = m3;
  yearsoutput.textContent = y3;
}
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
