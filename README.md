# Create a Mosaic 

## Installation Guide

1. Clone the repository:
```bash
git clone git@github.com:sholomperman/Mosaic-generator.git
cd Mosaic-generator
```
2. Install the dependencies:
```bash
npm install
```

## Usage Guide

### The Mosaic program has 3 parts after install

1. Create thumbnails if not existent by running (you can edit the size of the image in the thumbnail_maker.js where indicated)
```bash
node thumbnail_maker.js
```

2. Create the main Mosaic
```bash
node mosaic_create.js
```

3. This is optional if you want the image to have more detail you can add the input image over the Mosaic with opacity to see the image more vibrant (you can edit how much opacity in the add_image_opacity.js where indicated)
```bash
node add_image_opacity.js
```

### How the image looks

![Mosaic image](./outputs/output_1706661155459.jpg)

> [!WARNING]
> If you change the thumbnail size you also need to change the generateMosaic to function from 50 to the dimantions you change it to (mosaic_create.js:26)

> [!NOTE]
> The images do get repeated often
