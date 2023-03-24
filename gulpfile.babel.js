// eslint-disable max-len
// eslint-disable import/no-import-module-exports
// eslint-disable arrow-body-style
// [GROUP] IMPORT ALL TASKS
// ===================================================================================================>
import { series, parallel } from 'gulp';
import cleanRoot from './gulp/tasks/clean-root';
import changingMarkup from './gulp/tasks/changing-markup';
import changingMarkupPreCode from './gulp/tasks/changing-markup-precode';
import changingStylesBackend from './gulp/tasks/changing-styles-backend';
import changingStyles from './gulp/tasks/changing-styles';
import changingScriptsBackend from './gulp/tasks/changing-scripts-backend';
import changingScripts from './gulp/tasks/changing-scripts';
import archivingFiles from './gulp/tasks/archiving-files';
import cacheFiles from './gulp/tasks/cache-files';
import rewriteFiles from './gulp/tasks/rewrite-files';
import watchFiles from './gulp/tasks/watch-files';
import {
  fileTransferAudio,
  fileTransferVideo,
  fileTransferDocs,
  fileTransferFonts,
  fileTransferPhp,
  fileTransferRootOther,
  fileTransferRootSvg,
} from './gulp/tasks/file-transfer';
import {
  graphicsOptimizationJpg,
  graphicsOptimizationPng,
  graphicsOptimizationFav,
  graphicsOptimizationSvg,
  creatingSprite,
} from './gulp/tasks/graphics-optimization';
import { config } from './gulp/config';

// [GROUP] CALLING THE PARAMETER THAT IS RESPONSIBLE FOR SPLITTING THE ASSEMBLY
// ===================================================================================================>
config.setEnv();

// [GROUP] CREATING TASKS THAT WILL BE NEEDED TO COMBINE INTO A GROUP
// ===================================================================================================>
exports.cleanRoot = cleanRoot;
exports.graphicsOptimizationJpg = graphicsOptimizationJpg;
exports.graphicsOptimizationPng = graphicsOptimizationPng;
exports.graphicsOptimizationFav = graphicsOptimizationFav;
exports.graphicsOptimizationSvg = graphicsOptimizationSvg;
exports.creatingSprite = creatingSprite;
exports.archivingFiles = archivingFiles;

// [GROUP] COMBINING TASKS INTO A GROUP | TRANSFERRING ALL MEDIA FILES INCLUDING PHP
// ===================================================================================================>
const fileTransferAll = series(
  fileTransferAudio,
  fileTransferVideo,
  fileTransferDocs,
  fileTransferFonts,
  fileTransferPhp,
  fileTransferRootOther,
  fileTransferRootSvg,
);

// [GROUP] COMBINING TASKS INTO A GROUP | OPTIMIZATION OF ALL GRAPHICS AND CREATING A SPRITE
// ===================================================================================================>
const graphicsOptimizationAll = series(
  graphicsOptimizationJpg,
  graphicsOptimizationPng,
  graphicsOptimizationFav,
  graphicsOptimizationSvg,
  creatingSprite,
);

// [GROUP] COMBINING TASKS INTO A GROUP | BUILD FOR DEVELOPMENT WITHOUT A SERVER
// ===================================================================================================>
const build = parallel(
  changingMarkup,
  changingStyles,
  changingScripts,
);

// [GROUP] COMBINING TASKS INTO A GROUP | BUILD FOR DEVELOPMENT WITHOUT HTML MINIFICATION
// ===================================================================================================>
const buildPreCode = parallel(
  changingMarkupPreCode,
  changingStyles,
  changingScripts,
);

// [GROUP] COMBINING TASKS INTO A GROUP | ASSEMBLY FOR FURTHER TRANSFER TO THE BACKEND DEVELOPER
// ===================================================================================================>
const buildBackend = series(
  cleanRoot,
  parallel(
    changingMarkup,
    changingStylesBackend,
    changingScriptsBackend,
  ),
  fileTransferAll,
  graphicsOptimizationAll,
);

// [GROUP] COMBINING TASKS INTO A GROUP | CACHING OF ALL MAIN FILES
// ===================================================================================================>
const buildCache = series(
  cacheFiles,
  rewriteFiles,
);

// [GROUP] COMBINING TASKS INTO A GROUP | FULL BUILD LAUNCH FOR DEVELOPMENT WITHOUT A SERVER
// ===================================================================================================>
const buildFullStart = series(
  cleanRoot,
  build,
  fileTransferAll,
  graphicsOptimizationAll,
);

// [GROUP] COMBINING TASKS INTO A GROUP | FULL BUILD LAUNCH FOR DEVELOPMENT WITH THE SERVER
// ===================================================================================================>
const buildFullStartServer = series(
  cleanRoot,
  build,
  fileTransferAll,
  graphicsOptimizationAll,
  watchFiles,
);

// [GROUP] COMBINING TASKS INTO A GROUP | BUILD FOR DEVELOPMENT WITHOUT THE SERVER
// ===================================================================================================>
const watch = series(
  build,
  watchFiles,
);

// [GROUP] CREATING TASKS FROM THE COLLECTED GROUPS
// ===================================================================================================>
exports.build = build;
exports.buildPreCode = buildPreCode;
exports.buildBackend = buildBackend;
exports.buildCache = buildCache;
exports.buildFullStart = buildFullStart;
exports.buildFullStartServer = buildFullStartServer;
exports.graphicsOptimizationAll = graphicsOptimizationAll;
exports.fileTransferAll = fileTransferAll;
exports.watch = watch;
