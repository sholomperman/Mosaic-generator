const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function createThumbnails(folderPath) {
    const thumbnailsPath = path.join(__dirname, 'thumbnails');
    if (!fs.existsSync(thumbnailsPath)) {
        fs.mkdirSync(thumbnailsPath);
    }

    fs.readdir(folderPath, (err, files) => {
        if (err) throw err;

        files.forEach(file => {
            const filePath = path.join(folderPath, file);
            const thumbnailPath = path.join(thumbnailsPath, file);

            sharp(filePath)
            // try 15 x 15 30 x 30 or 50 x 50 and use the one that works best for you
                .resize(50, 50)
                .toFile(thumbnailPath, (err) => {
                    if (err) throw err;
                });
        });
    });
}
createThumbnails('./assets');