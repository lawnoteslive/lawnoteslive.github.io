function buyNote() {

  // 🔴 Your UPI ID (already added)
  let upi = "ammu00@ptaxis";

  let amount = "49";
  let name = "LawNotes Live";

  // 💳 UPI payment link
  let url = `upi://pay?pa=${upi}&pn=${name}&am=${amount}&cu=INR`;

  // 📱 Open payment app
  window.location.href = url;

  // 💬 Message after clicking
  document.getElementById("unlockMsg").innerText =
    "✅ After payment, send screenshot on WhatsApp to get access";

  // 🔓 Unlock download (temporary demo)
  document.getElementById("downloadLink").style.display = "block";
}
