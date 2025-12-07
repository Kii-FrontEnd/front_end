function Click() {
  const x = document.getElementById("panel");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// visibility
function Remove() {
  document.getElementById("card1").style.display = "none";
}

function Hidden() {
  document.getElementById("card2").style.visibility = "hidden";
}

function Reset() {
  document.getElementById("card1").style.display = "block";
  document.getElementById("card2").style.visibility = "visible";
}
