const mng = require('mosaic-node-generator');
const fs = require('fs');
const path = require('path');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateMosaic(inputImagePath, assetDirectoryPath, tileWidth, tileHeight, rows, columns, thumbnailDirectoryPath) {
    // Read all image files in the asset directory
    const assetFiles = fs.readdirSync(assetDirectoryPath)
        .filter((fileName) => path.extname(fileName).toLowerCase() === '.jpg' || path.extname(fileName).toLowerCase() === '.jpeg');

    // Shuffle the array of asset files randomly
    shuffleArray(assetFiles);

    // Generate the mosaic
    mng.mosaic(inputImagePath, assetDirectoryPath, tileWidth, tileHeight, rows, columns, thumbnailDirectoryPath, null, true);
}

// Generate a mosaic image with randomized image selection
generateMosaic('input.jpg', 'assets',50 ,50, 180, 180, 'thumbnails');
