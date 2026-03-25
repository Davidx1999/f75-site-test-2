const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const { spawnSync } = require('child_process');
const path = require('path');

const inputPath = path.resolve(__dirname, 'Vídeo_com_Fundo_Branco_e_Espaçamento.mp4');
const outputPath = path.resolve(__dirname, 'public', 'hero-animation-white-optimized.mp4');

console.log(`Using ffmpeg at: ${ffmpeg.path}`);
const result = spawnSync(ffmpeg.path, [
  '-i', inputPath,
  '-c:v', 'libx264',
  '-preset', 'ultrafast',
  '-g', '1',
  '-crf', '28',
  '-pix_fmt', 'yuv420p',
  '-an',
  '-y',
  outputPath
], { stdio: 'inherit' });

if (result.error) {
  console.error("Error executing ffmpeg:", result.error);
  process.exit(1);
}

if (result.status !== 0) {
  console.error(`ffmpeg exited with code ${result.status}`);
  process.exit(result.status || 1);
}

console.log("Conversion complete.");
