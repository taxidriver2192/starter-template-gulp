/* eslint-disable arrow-body-style */
// [GROUP] IMPORTING EXTERNAL MODULES AND THE BASIC ASSEMBLY CONFIGURATION
// ===================================================================================================>
import { watch } from 'gulp';
import browserSync from 'browser-sync';
import changingMarkup from './changing-markup';
import changingStyles from './changing-styles';
import changingScripts from './changing-scripts';
import {
  fileTransferAudio,
  fileTransferVideo,
  fileTransferDocs,
  fileTransferFonts,
  fileTransferPhp,
} from './file-transfer';
import {
  graphicsOptimizationJpg,
  graphicsOptimizationPng,
  graphicsOptimizationFav,
  graphicsOptimizationSvg,
  creatingSprite,
} from './graphics-optimization';
import { config, buildDirectory } from '../config';

// [GROUP] SETTING UP A SERVER CREATION TASK
// ===================================================================================================>
const watchFiles = (callback) => {
  browserSync.init({
    server: {
      baseDir: buildDirectory,
    },
    port: 3000,
    notify: false,
    open: false,
  });
  callback();
};

// [GROUP] TRACKING CHANGES IN FILES AND FOLDERS
// ===================================================================================================>
watch(config.watch.html, changingMarkup);
watch(config.watch.styles, changingStyles);
watch(config.watch.scripts, changingScripts);
watch(config.watch.faviconsImages, graphicsOptimizationFav);
watch(config.watch.fullScaleJpgImages, graphicsOptimizationJpg);
watch(config.watch.fullScalePngImages, graphicsOptimizationPng);
watch(config.watch.svgWithoutEffectsImages, graphicsOptimizationSvg);
watch(config.watch.svgWithEffectsImages, creatingSprite);
watch(config.watch.audio, fileTransferAudio);
watch(config.watch.video, fileTransferVideo);
watch(config.watch.documents, fileTransferDocs);
watch(config.watch.fonts, fileTransferFonts);
watch(config.watch.php, fileTransferPhp);

// [GROUP] EXPORTING A TASK
// ===================================================================================================>
export default watchFiles;
