function buyNote(id) {

  // Open UPI
  window.location.href = "upi://pay?pa=ammu00@ptaxis&pn=LawNotes&am=49&cu=INR";

  // Message
  document.getElementById("status-" + id).innerText =
    "Payment opened... wait 5 seconds";

  // Unlock
  setTimeout(() => {
    document.getElementById("download-" + id).style.display = "block";
  }, 5000);
}
function openSection(id) {
  document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function goBack() {
  document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
  document.getElementById("courses").classList.remove("hidden");
}
