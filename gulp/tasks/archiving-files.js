/* eslint-disable arrow-body-style */
// [GROUP] IMPORTING EXTERNAL MODULES AND THE BASIC ASSEMBLY CONFIGURATION
// ===================================================================================================>
import { src, dest } from 'gulp';
import zip from 'gulp-zip';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import { config } from '../config';

// [GROUP] SETTING UP A FILE ARCHIVING TASK
// ===================================================================================================>
const archivingFiles = () => {
  return src(config.build.rootZip)
    .pipe(plumber(
      notify.onError({
        title: 'Error during archiving',
        message: 'Error: <%= error.message %>',
        sound: true,
      }),
    ))
    .pipe(zip('project.zip'))
    .pipe(dest(config.build.root));
};

// [GROUP] EXPORTING A TASK
// ===================================================================================================>
export default archivingFiles;
