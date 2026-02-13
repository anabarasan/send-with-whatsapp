#!/bin/bash

rm -f send-with-whatsapp.zip

zip -r send-with-whatsapp.zip \
  LICENSE \
  popup.js \
  manifest.json \
  icons/ \
  style.css \
  background.js \
  countries.js \
  popup.html \
  README.md

echo "Build Complete"

