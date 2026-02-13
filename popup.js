document.getElementById("openBtn").addEventListener("click", function () {
  const countryCode = document.getElementById("country").value;
  let phone = document.getElementById("phone").value;

  // Remove all non-digits
  phone = phone.replace(/\D/g, "");

  if (phone.length < 6) {
    alert("Please enter a valid phone number.");
    return;
  }

  const fullNumber = countryCode + phone;

  const url = `https://wa.me/${fullNumber}`;

  chrome.tabs.create({ url: url });
});

