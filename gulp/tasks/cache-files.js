/* eslint-disable arrow-body-style */
// [GROUP] IMPORTING EXTERNAL MODULES AND THE BASIC ASSEMBLY CONFIGURATION
// ===================================================================================================>
import { src, dest } from 'gulp';
import rev from 'gulp-rev';
import revDelete from 'gulp-rev-delete-original';
import { config, buildDirectory } from '../config';

// [GROUP] SETTING UP A FILE CACHING TASK
// ===================================================================================================>
const cacheFiles = () => {
  return src(config.source.cache, {
    base: buildDirectory,
  })
    .pipe(rev())
    .pipe(revDelete())
    .pipe(dest(config.build.root))
    .pipe(rev.manifest('rev.json'))
    .pipe(dest(config.build.root));
};

// [GROUP] EXPORTING A TASK
// ===================================================================================================>
export default cacheFiles;
