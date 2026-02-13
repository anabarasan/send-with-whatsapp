// Create context menu on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "sendToWhatsApp",
    title: "Send via WhatsApp",
    contexts: ["selection"]
  });
});

// When user clicks context menu
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "sendToWhatsApp") {

    let selectedText = info.selectionText;

    if (!selectedText) return;

    // Clean number (allow + at start)
    selectedText = selectedText.trim().replace(/(?!^\+)\D/g, "");

    if (!selectedText) return;

    // Remove + if present
    if (selectedText.startsWith("+")) {
      selectedText = selectedText.substring(1);
    }

    // Validate length
    if (!/^\d{6,15}$/.test(selectedText)) {
      return;
    }

    const url = `https://wa.me/${selectedText}`;

    chrome.tabs.create({ url });
  }
});

