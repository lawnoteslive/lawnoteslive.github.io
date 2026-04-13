function buyNote(id) {

  // Open UPI app
  window.location.href = "upi://pay?pa=ammu00@ptaxis&pn=LawNotes&am=49&cu=INR";

  // Show message
  document.getElementById("status-" + id).innerText =
    "After payment, wait 5 seconds and download";

  // Unlock download after delay
  setTimeout(() => {
    document.getElementById("download-" + id).style.display = "block";
  }, 5000);
}
