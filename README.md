# Send with Whatsapp (Chrome Extension)

A lightweight Chrome Extension that allows you to:

📱 Send WhatsApp messages without saving contacts

🌍 Select country with automatic country code handling (default: India)

🌗 Supports system dark / light mode

🖱 Right-click any phone number and send via WhatsApp

💾 Remembers last selected country

Made with ChatGPT

---

## Features

### Popup Mode

1. Enter a phone number
2. Select country from dropdown
3. Automatically formats to E.164 standard
4. Opens WhatsApp Web

Handles:
* 9876543210
* 09876543210
* +919876543210

### Context Menu Mode

1. Select any phone number on a webpage
2. Right-click → Send via WhatsApp
3. Automatically:
    - Cleans number
    - Applies saved country code (if no +)
    - Opens WhatsApp Web

---

### Smart Number Handling

1. Removes spaces, dashes, brackets
2. Supports + prefix
3. Removes leading zero
4. Validates 6–15 digit international format (E.164 compliant)

---

## Project Structure

```
.
├── manifest.json       # Extension configuration
├── popup.html          # Popup UI
├── popup.js            # Popup logic
├── countries.js        # Country list data
├── style.css           # Light/Dark theme styling
├── background.js       # Context menu logic
└── README.md
```

---

## Installation (Developer Mode)

1. Open Chrome
2. Go to `chrome://extensions`
3. Enable Developer Mode
4. Click Load unpacked
5. Select the project folder

--- 

## Permissions Used

* storage - Used to save the last selected country.
* contextMenus - Adds right-click option for selected text.
* activeTab - Allows opening WhatsApp Web in a new tab.

---

## Known Limitations

* Context menu always appears for selected text
* Does not auto-detect phone numbers inside large sentences
* No per-country validation rules (length varies globally)

---

## Security & Privacy

* No data collection
* No analytics
* No external servers
* Runs entirely in browser
