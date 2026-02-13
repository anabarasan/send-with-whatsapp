const countries = [
  { name: "India", code: "91" },
  { name: "United States", code: "1" },
  { name: "United Kingdom", code: "44" },
  { name: "Australia", code: "61" },
  { name: "Singapore", code: "65" },
  { name: "Canada", code: "1" }
];

const countrySelect = document.getElementById("country");

countries.forEach(country => {
  const option = document.createElement("option");
  option.value = country.code;
  option.textContent = `${country.name} (+${country.code})`;
  countrySelect.appendChild(option);
});

// Default = India
countrySelect.value = "91";

