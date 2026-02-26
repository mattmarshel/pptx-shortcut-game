#!/usr/bin/env bash
# Build SCORM 2004 4th Edition package for PowerPoint Master
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
OUTPUT="$SCRIPT_DIR/pptx-shortcut-master-scorm.zip"

# Remove old package if it exists
rm -f "$OUTPUT"

# Create zip with manifest at root level
cd "$SCRIPT_DIR"
zip -9 "$OUTPUT" \
    imsmanifest.xml \
    index.html \
    app.js \
    scorm-api.js \
    style.css

echo ""
echo "SCORM package created: $OUTPUT"
echo "Upload this ZIP to your LMS or SCORM Cloud for testing."
