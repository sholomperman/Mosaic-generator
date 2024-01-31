// run this if you need more details on the mosaic -
// image and wanna add a second layer of the original -
// image over the mosaic with a opacity

const Jimp = require('jimp');

async function addInputImageToMosaic(inputImagePath, mosaicImagePath, outputImagePath) {
    const mosaicImage = await Jimp.read(mosaicImagePath);
    const inputImage = await Jimp.read(inputImagePath);
    inputImage.resize(mosaicImage.bitmap.width, mosaicImage.bitmap.height);

    // change the opacity to your causing
    mosaicImage.composite(inputImage.opacity(0.3), 0, 0);
    await mosaicImage.writeAsync(outputImagePath);
}


addInputImageToMosaic('input.jpg', 'outputs/mosaic.jpg', 'outputs/mosaic-with-details.jpg');
