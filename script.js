function buyNote(id, amount = 49) {
  const upiLink = `upi://pay?pa=ammu00@ptaxis&pn=LawNotesLive&am=\( {amount}&cu=INR&tn=Notes- \){id}`;

  // Open UPI
  window.location.href = upiLink;

  const statusEl = document.getElementById("status-" + id);
  if (statusEl) statusEl.innerText = "UPI app opened. Complete payment & come back.";

  // Optional: Show manual confirmation button instead of auto-unlock
  setTimeout(() => {
    if (statusEl) {
      statusEl.innerHTML = `
        Did you complete the payment?<br>
        <button onclick="manualUnlock('${id}')" style="margin-top:8px; padding:8px 16px; background:#10b981; color:white; border:none; border-radius:6px;">
          Yes, Unlock Download
        </button>
      `;
    }
  }, 4000);
}

function manualUnlock(id) {
  const downloadBtn = document.getElementById("download-" + id);
  if (downloadBtn) {
    downloadBtn.style.display = "block";
    alert("✅ Notes unlocked! (Manual confirmation used)");
  }
}

function openSection(id) {
  document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function goBack() {
  document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
  document.getElementById("courses").classList.remove("hidden");
}
