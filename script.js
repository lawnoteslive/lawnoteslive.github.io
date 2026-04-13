function buyNote(id) {

  // Open UPI
  window.location.href = "upi://pay?pa=ammu00@ptaxis&pn=LawNotes&am=49&cu=INR";

  // Message
  document.getElementById("status-" + id).innerText =
    "After payment wait 5 seconds";

  // Unlock
  setTimeout(() => {
    document.getElementById("download-" + id).style.display = "block";
  }, 5000);
}
