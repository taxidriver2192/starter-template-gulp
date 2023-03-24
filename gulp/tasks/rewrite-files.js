/* eslint-disable arrow-body-style */
// [GROUP] IMPORTING EXTERNAL MODULES AND THE BASIC ASSEMBLY CONFIGURATION
// ===================================================================================================>
import { src, dest } from 'gulp';
import { readFileSync } from 'fs';
import revRewrite from 'gulp-rev-rewrite';
import { config, buildDirectory } from '../config';

// [GROUP] SETTING UP THE TASK OF REWRITING CACHED FILES
// ===================================================================================================>
const rewriteFiles = () => {
  const manifest = readFileSync(`${buildDirectory}/rev.json`);
  src(config.source.cacheStyles)
    .pipe(revRewrite({
      manifest,
    }))
    .pipe(dest(config.build.styles));
  src(config.source.cacheHtml)
    .pipe(revRewrite({
      manifest,
    }))
    .pipe(dest(config.build.root));
  src(config.source.cacheScripts)
    .pipe(revRewrite({
      manifest,
    }))
    .pipe(dest(config.build.scripts));
  src(config.source.cachePhp)
    .pipe(revRewrite({
      manifest,
    }))
    .pipe(dest(config.build.root));
  return src(config.source.cacheManifest)
    .pipe(revRewrite({
      manifest,
    }))
    .pipe(dest(config.build.root));
};

// [GROUP] EXPORTING A TASK
// ===================================================================================================>
export default rewriteFiles;
