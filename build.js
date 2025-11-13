const fs = require('fs');
const path = require('path');

// Build script to copy extension files to dist directory

const distDir = path.join(__dirname, 'dist');
const filesToCopy = [
  'manifest.json',
  'popup.html',
  'popup.js',
  'background.js'
];

const dirsToCopy = [
  'icons'
];

console.log('Building Edge Extension...');

// Clean dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
  console.log('Cleaned dist directory');
}

// Create dist directory
fs.mkdirSync(distDir, { recursive: true });
console.log('Created dist directory');

// Copy files
filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(distDir, file);
  
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file}`);
  } else {
    console.warn(`Warning: ${file} not found`);
  }
});

// Copy directories
dirsToCopy.forEach(dir => {
  const srcDir = path.join(__dirname, dir);
  const destDir = path.join(distDir, dir);
  
  if (fs.existsSync(srcDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    
    const files = fs.readdirSync(srcDir);
    files.forEach(file => {
      const srcFile = path.join(srcDir, file);
      const destFile = path.join(destDir, file);
      
      if (fs.statSync(srcFile).isFile()) {
        fs.copyFileSync(srcFile, destFile);
      }
    });
    
    console.log(`Copied ${dir} directory (${files.length} files)`);
  } else {
    console.warn(`Warning: ${dir} directory not found`);
  }
});

console.log('\nBuild completed successfully!');
console.log(`Extension ready in: ${distDir}`);
