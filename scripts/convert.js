import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('assets');
const filesToConvert = ['01.png', '02.png', '03.png', '04.png', '05.png'];

async function convert() {
    for (let i = 0; i < filesToConvert.length; i++) {
        const file = filesToConvert[i];
        const inputPath = path.join(assetsDir, file);
        const outputPath = path.join(assetsDir, `event_${file.replace('.png', '.webp')}`);

        if (fs.existsSync(inputPath)) {
            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);
            console.log(`Converted ${file} to ${path.basename(outputPath)}`);
        } else {
            console.log(`File not found: ${inputPath}`);
        }
    }
}

convert().catch(console.error);
