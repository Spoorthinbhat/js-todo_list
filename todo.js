let data;
let count = 0;
let completed = 0;

function add() {
  let line = document.getElementById("insert").value;
  console.count(line);
  if (line === "") {
    alert("Add an Event");
    return;
  }
  count++;
  let checkid = "c_" + Date.now();
  document.getElementById("work").innerHTML +=
    "<div class='point'>" +
    "<i><img src='bullet.png'></i>" +
    "<button id='sent' id='" +
    checkid +
    "' onclick='strike(this)'>" +
    line +
    "<button id='cross' onclick='deletelist(this)'></button>" +
    "<br>" +
    "</button>" +
    "</div>";
  //to clear the text box
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
    // a.style.backgroundColor = "#FFFFFF";
    completed++;
  }
  comp();
}
// comp() to update the status of complete status

function comp() {
  document.getElementById("status").innerText =
    "Completed : " + "\n" + completed;
  document.getElementById("status_1").innerText = "Created : " + "\n" + count;
}
function deletelist(element) {
  // Get the parent element of the button to be deleted
  let parentElement = element.parentElement;

  // Remove the parent element from the DOM
  parentElement.remove();
}
