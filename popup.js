const countrySelect = document.getElementById("country");
const phoneInput = document.getElementById("phone");
const errorDiv = document.getElementById("error");

// Populate country dropdown
countries.forEach(country => {
  const option = document.createElement("option");
  option.value = country.code;
  option.textContent = `${country.name} (+${country.code})`;
  countrySelect.appendChild(option);
});

// Load saved country
chrome.storage.local.get(["countryCode"], result => {
  countrySelect.value = result.countryCode || "91"; // Default India
});

// Save selected country
countrySelect.addEventListener("change", () => {
  chrome.storage.local.set({ countryCode: countrySelect.value });
});

// Allow digits and optional + at beginning
phoneInput.addEventListener("input", () => {
  phoneInput.value = phoneInput.value.replace(/(?!^\+)\D/g, "");
});

document.addEventListener("DOMContentLoaded", () => {

  const countrySelect = document.getElementById("country");

  countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country.code;
    option.textContent = `${country.name} (+${country.code})`;
    countrySelect.appendChild(option);
  });

});

document.getElementById("openBtn").addEventListener("click", () => {
  errorDiv.textContent = "";

  let phone = phoneInput.value.trim();

  if (!phone) {
    errorDiv.textContent = "Phone number is required.";
    return;
  }

  // Remove non-digits except leading +
  phone = phone.replace(/(?!^\+)\D/g, "");

  // If user already entered full international number
  if (phone.startsWith("+")) {
    phone = phone.substring(1);
  } else {
    const countryCode = countrySelect.value;

    // Remove leading zero
    if (phone.startsWith("0")) {
      phone = phone.substring(1);
    }

    phone = countryCode + phone;
  }

  // Final validation (E.164: 6–15 digits)
  if (!/^\d{6,15}$/.test(phone)) {
    errorDiv.textContent = "Invalid phone number.";
    return;
  }

  const url = `https://wa.me/${phone}`;
  chrome.tabs.create({ url });
});

