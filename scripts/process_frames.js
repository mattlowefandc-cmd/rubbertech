const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const INPUT_DIR = path.join(__dirname, '../public/sequences/tyre');
const THRESHOLD = 210; // Delete pixels brighter than 210 (whites and light greys)

async function processFrames() {
  console.log("Starting background removal process...");
  
  // Get all jpg frames
  const files = fs.readdirSync(INPUT_DIR)
    .filter(f => f.startsWith('frame_') && f.endsWith('.jpg'))
    .sort();

  if (files.length === 0) {
    console.log("No frames found.");
    return;
  }

  console.log(`Found ${files.length} frames to process.`);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const inputPath = path.join(INPUT_DIR, file);
    const outputPath = path.join(INPUT_DIR, file.replace('.jpg', '.png'));

    // Read image, ensure 4 channels (RGBA)
    const { data, info } = await sharp(inputPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Loop through pixels and make light grey/white background transparent
    for (let p = 0; p < data.length; p += 4) {
      const r = data[p];
      const g = data[p + 1];
      const b = data[p + 2];

      // If RGB are all above the threshold, or if it matches specific ezgif checkerboard #cccccc
      if ((r > THRESHOLD && g > THRESHOLD && b > THRESHOLD) || 
          (Math.abs(r - 204) < 10 && Math.abs(g - 204) < 10 && Math.abs(b - 204) < 10)) {
        data[p + 3] = 0; // Set Alpha to 0
      }
    }

    // Save as PNG
    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .png({ quality: 80 })
    .toFile(outputPath);

    // Provide progress update
    if ((i + 1) % 10 === 0 || i === files.length - 1) {
      console.log(`Processed ${i + 1}/${files.length} frames.`);
    }

    // Optionally delete the original JPG to clean up space
    fs.unlinkSync(inputPath);
  }

  console.log("Successfully removed backgrounds and generated transparent PNGs!");
}

processFrames().catch(console.error);
