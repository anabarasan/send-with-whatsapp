const MENU_ID = "sendToWhatsApp";

// Create context menu once
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ID,
    title: "Send via WhatsApp",
    contexts: ["selection"]
  });
});

// Handle click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== MENU_ID) return;

  let selectedText = info.selectionText;
  if (!selectedText) return;

  // Clean text (allow leading +)
  selectedText = selectedText.trim().replace(/(?!^\+)\D/g, "");

  if (!selectedText) return;

  chrome.storage.local.get(["countryCode"], result => {

    let phone = selectedText;

    if (phone.startsWith("+")) {
      phone = phone.substring(1);
    } else {
      const countryCode = result.countryCode || "91";

      if (phone.startsWith("0")) {
        phone = phone.substring(1);
      }

      phone = countryCode + phone;
    }

    if (!/^\d{6,15}$/.test(phone)) return;

    const url = `https://wa.me/${phone}`;
    chrome.tabs.create({ url });

  });
});

