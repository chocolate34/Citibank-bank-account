// Hide loading screen after 2 seconds
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loading-screen");
    if (loader) loader.style.display = "none";
  }, 1500);
});

// Modal logic
function showModal(action) {
  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");
  modal.style.display = "block";

  switch (action) {
    case 'create':
      title.innerText = "Create Account";
      break;
    case 'send':
      title.innerText = "Send Money";
      break;
    case 'flight':
      title.innerText = "Book Flight";
      break;
    default:
      title.innerText = "Action";
  }
}

function hideModal() {
  document.getElementById("modal").style.display = "none";
}
