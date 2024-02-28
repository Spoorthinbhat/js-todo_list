let data;
let count = 0;
let completed = 0;

function add() {
  let line = document.getElementById("insert").value;
  console.count(line);
  if (line == "") {
    alert("Add an Event");
    return;
  }
  count++;
  let checkid = "c_" + Date.now();
  document.getElementById("work").innerHTML +=
    "<div class='point'>" +
    "<button id='sent'+ id='" +
    checkid +
    "' onclick='strike(this)'>" +
    line +
    "<br>" +
    "</button>" +
    "</div>";
  // "<div class='point'>" +
  // "<input type='checkbox' id='" +
  // checkid +
  // "' onclick='strike(this)'>" +
  // line +
  // "<br>" +
  // "</div>";
  document.getElementById("insert").value = "";
  comp();
}
function strike(a) {
  if (a.style.textDecoration === "line-through") {
    a.style.textDecoration = "none";
    a.style.backgroundColor = "#68bbe3";
    completed--;
  } else {
    a.style.textDecoration = "line-through";
    a.style.backgroundColor = "#FFFFFF";
    completed++;
  }
  comp();
}
X;
function comp() {
  document.getElementById("status").innerText =
    "Completed : " + "\n" + completed;
  document.getElementById("status_1").innerText = "Created : " + "\n" + count;
  document.getElementById("status_2").innerText =
    "To complete : " + "\n" + (count - completed);
}
