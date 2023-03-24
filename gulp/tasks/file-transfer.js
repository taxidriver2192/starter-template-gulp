/* eslint-disable arrow-body-style */
// [GROUP] IMPORTING EXTERNAL MODULES AND THE BASIC ASSEMBLY CONFIGURATION
// ===================================================================================================>
import { src, dest } from 'gulp';
import rename from 'gulp-rename';
import svgMin from 'gulp-svgmin';
import { config } from '../config';

// [GROUP] SETTING UP THE TASK OF TRANSFERRING | AUDIO FILES
// ===================================================================================================>
const fileTransferAudio = () => {
  return src(config.source.audio)
    .pipe(dest(config.build.audio));
};

// [GROUP] SETTING UP THE TASK OF TRANSFERRING | VIDEO FILES
// ===================================================================================================>
const fileTransferVideo = () => {
  return src(config.source.video)
    .pipe(dest(config.build.video));
};

// [GROUP] SETTING UP THE TASK OF TRANSFERRING | DOCUMENT FILES
// ===================================================================================================>
const fileTransferDocs = () => {
  return src(config.source.documents)
    .pipe(dest(config.build.documents));
};

// [GROUP] SETTING UP THE TASK OF TRANSFERRING | FONT FILES
// ===================================================================================================>
const fileTransferFonts = () => {
  return src(config.source.fonts)
    .pipe(rename({
      dirname: './',
    }))
    .pipe(dest(config.build.fonts));
};

// [GROUP] SETTING UP THE TASK OF TRANSFERRING | PHP FILES
// ===================================================================================================>
const fileTransferPhp = () => {
  return src(config.source.php)
    .pipe(dest(config.build.root));
};

// [GROUP] SETTING UP THE TASK OF TRANSFERRING | ROOT OTHER FILES
// ===================================================================================================>
const fileTransferRootOther = () => {
  return src(config.source.rootOther)
    .pipe(dest(config.build.root));
};

// [GROUP] SETTING UP THE TASK OF TRANSFERRING | ROOT SVG FILES
// ===================================================================================================>
const fileTransferRootSvg = () => {
  return src(config.source.rootSvg)
    .pipe(svgMin())
    .pipe(dest(config.build.root));
};

// [GROUP] EXPORTING ALL TASKS
// ===================================================================================================>
export {
  fileTransferAudio,
  fileTransferVideo,
  fileTransferDocs,
  fileTransferFonts,
  fileTransferPhp,
  fileTransferRootOther,
  fileTransferRootSvg,
};
