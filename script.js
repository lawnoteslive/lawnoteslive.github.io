function buyNote() {
  document.getElementById("unlockMsg").innerText =
    "Pay ₹49 via UPI: yourupi@bank\nAfter payment, send screenshot on WhatsApp";

  setTimeout(() => {
    document.getElementById("downloadLink").style.display = "block";
  }, 3000);
}
