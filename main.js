let amount;
function getAmount() {
  amount = Number(document.getElementById("amount").value);
  return amount;
}

function getDollar() {
  document.getElementById("output-value-1").innerHTML = getAmount() * 107.5;
}

function getEuro() {
  document.getElementById("output-value-1").innerHTML = getAmount() * 118.06;
}

document.getElementById("dollar").addEventListener("click", getDollar, false);
document.getElementById("euro").addEventListener("click", getEuro, false);

let radius;
function getRadius() {
  radius = Number(document.getElementById("radius").value);
  return radius;
}

function getArea() {
  document.getElementById("output-value-2").innerHTML =
    3.1416 * getRadius() * getRadius();
}

document.getElementById("area").addEventListener("click", getArea, false);

let marks;
function getMarks() {
  marks = Number(document.getElementById("marks").value);
  return marks;
}

function getGrade() {
  let mark = getMarks();
  if (mark > 100 || mark < 0) {
    document.getElementById("output-value-3").innerHTML =
      "Don't Be Smart Enter your Marks Between Limit";
  } else if (mark < 33) {
    document.getElementById("output-value-3").innerHTML = "Your Grade is: F";
  } else {
    let string = "";
    switch (Math.floor(mark / 10)) {
      case 10:
        /* Marks 100*/
        string = "Your Grade is: A+";
        break;
      case 9:
        /* Marks between 90-99 */
        string = "Your Grade is: A+";
        break;
      case 8:
        /* Marks between 80-89 */
        string = "Your Grade is: A+";
        break;
      case 7:
        /* Marks between 70-79 */
        string = "Your Grade is: A";
        break;
      case 6:
        /* Marks between 60-69 */
        string = "Your Grade is: A-";
        break;
      case 5:
        /* Marks between 50-59 */
        string = "Your Grade is: B";
        break;
      case 4:
        /* Marks between 40-49 */
        string = "Your Grade is: C";
        break;
      default:
        /* Marks between 33-39 */
        string = "Your Grade is: D";
        break;
    }
    document.getElementById("output-value-3").innerHTML = string;
  }
}

document.getElementById("grade").addEventListener("click", getGrade, false);
