import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assetsDir = path.join(__dirname, 'src', 'assets')

// Define target dimensions for each image based on display size
const imageConfigs = {
  'aboutme.jpg': { width: 526, height: 395 },
  'accessories.png': { width: 209, height: 209 },
  'bedding.jpg': { width: 209, height: 209 },
  'cashmere.jpg': { width: 314, height: 209 },
  'clothes.png': { width: 526, height: 526 },
  'customs.png': { width: 209, height: 209 },
  'hero.png': { width: 466, height: 466 },
  'kandbcleaners_qr.png': { width: 200, height: 200 },
  'leather.jpg': { width: 209, height: 209 },
  'sewingmachine.jpg': { width: 529, height: 526 },
  'silk.jpg': { width: 209, height: 279 },
  'sportswear.png': { width: 209, height: 209 },
  'uggs.jpg': { width: 209, height: 222 },
  'weddingdress.png': { width: 209, height: 209 },
  'wool.jpg': { width: 209, height: 314 },
}

async function optimizeImages() {
  console.log('Starting image optimization...\n')

  for (const [filename, dimensions] of Object.entries(imageConfigs)) {
    const inputPath = path.join(assetsDir, filename)
    const outputPath = path.join(assetsDir, filename.replace(/\.[^.]+$/, '.webp'))

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${filename} - file not found`)
      continue
    }

    try {
      console.log(`Processing ${filename}...`)
      console.log(`  Target: ${dimensions.width}x${dimensions.height}`)

      await sharp(inputPath)
        .resize(dimensions.width, dimensions.height, {
          fit: 'cover',
          position: 'center',
        })
        .webp({ quality: 80 })
        .toFile(outputPath)

      const originalSize = fs.statSync(inputPath).size
      const optimizedSize = fs.statSync(outputPath).size
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1)

      console.log(`  ✓ Saved as ${path.basename(outputPath)}`)
      console.log(`  Size: ${(originalSize / 1024).toFixed(1)}KB → ${(optimizedSize / 1024).toFixed(1)}KB (${savings}% reduction)`)
      console.log()
    } catch (error) {
      console.error(`✗ Error processing ${filename}:`, error.message)
    }
  }

  console.log('Image optimization complete!')
  console.log('\nNext steps:')
  console.log('1. Update App.jsx to import the new .webp images')
  console.log('2. Replace all image imports and ensure WebP fallbacks are in place')
}

optimizeImages().catch(console.error)
