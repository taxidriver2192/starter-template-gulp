/* eslint-disable arrow-body-style */
// [GROUP] IMPORTING EXTERNAL MODULES AND THE BASIC ASSEMBLY CONFIGURATION
// ===================================================================================================>
import del from 'del';
import { buildDirectory } from '../config';

// [GROUP] SETTING UP AN OUTPUT FOLDER CLEANUP TASK
// ===================================================================================================>
const cleanRoot = () => {
  return del(buildDirectory);
};

// [GROUP] EXPORTING A TASK
// ===================================================================================================>
export default cleanRoot;
