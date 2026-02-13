#!/bin/bash

# Delete any existing previous extension archive files
rm -f send-with-whatsapp-v*.zip

# Extract version from manifest.json
VERSION=$(grep '"version"' manifest.json | head -1 | sed -E 's/.*"version": *"([^"]+)".*/\1/')

ZIP_NAME="send-with-whatsapp-v${VERSION}.zip"

zip -r "${ZIP_NAME}" \
  LICENSE \
  popup.js \
  manifest.json \
  icons/ \
  style.css \
  background.js \
  countries.js \
  popup.html \
  README.md

echo "Build Complete ${ZIP_NAME}"

