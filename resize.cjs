const sharp = require('sharp');
const path = require('path');

async function resize() {
  const input = path.join(__dirname, 'public/images/khaled.webp');
  
  await sharp(input)
    .resize({ width: 400 })
    .webp({ quality: 80 })
    .toFile(path.join(__dirname, 'public/images/khaled-400.webp'));
    
  await sharp(input)
    .resize({ width: 800 })
    .webp({ quality: 80 })
    .toFile(path.join(__dirname, 'public/images/khaled-800.webp'));
    
  console.log('Done resising');
}

resize().catch(console.error);
