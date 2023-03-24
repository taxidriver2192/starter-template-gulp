/* eslint-disable max-len */
// [GROUP] DECLARING A VARIABLE WITH A SOURCE AND DESTINATION DIRECTORY
// ===================================================================================================>
const buildDirectory = './build';
const sourceDirectory = './source';

// [GROUP] BASIC ASSEMBLY CONFIGURATION
// ===================================================================================================>
const config = {
  source: {
    audio: `${sourceDirectory}/assets/audio/**/*.{mp3,ogg,wav,flac}`,
    video: `${sourceDirectory}/assets/video/**/*.{mp4,avi,webm}`,
    documents: `${sourceDirectory}/assets/documents/**/*.{pdf,docx,doc,txt,rtf,odt,xls,xlsx}`,
    fonts: `${sourceDirectory}/assets/fonts/**/*.{woff,woff2}`,
    faviconsImages: `${sourceDirectory}/assets/images/raster-graphics/favicons/**/*.png`,
    fullScaleJpgImages: `${sourceDirectory}/assets/images/raster-graphics/full-scale/**/*.{jpg,jpeg}`,
    fullScalePngImages: `${sourceDirectory}/assets/images/raster-graphics/full-scale/**/*.png`,
    svgWithEffectsImages: `${sourceDirectory}/assets/images/vector-graphics/with-effects/**/*.svg`,
    svgWithoutEffectsImages: `${sourceDirectory}/assets/images/vector-graphics/without-effects/**/*.svg`,
    rootOther: [
      `${sourceDirectory}/site.webmanifest`,
      `${sourceDirectory}/.htaccess`,
    ],
    rootSvg: `${sourceDirectory}/*.svg`,
    html: `${sourceDirectory}/*.html`,
    styles: [
      `${sourceDirectory}/scss/home-styles.scss`,
      `${sourceDirectory}/scss/pages/**/*.scss`,
      `${sourceDirectory}/scss/modules/**/*.scss`,
    ],
    homeScripts: `${sourceDirectory}/js/home-scripts.js`,
    notDeferScripts: `${sourceDirectory}/js/scripts/**/*.js`,
    pagesScripts: `${sourceDirectory}/js/pages/**/*.js`,
    php: `${sourceDirectory}/php/**/*.php`,
    cache: `${buildDirectory}/**/*.{css,js,woff,woff2,png,jpg,jpeg,webp,avif,gif,svg,mp3,ogg,wav,flac,mp4,avi,webm,pdf,docx,doc,txt,rtf,odt,xls,xlsx}`,
    cacheHtml: `${buildDirectory}/*.html`,
    cacheStyles: `${buildDirectory}/css/**/*.css`,
    cacheScripts: `${buildDirectory}/js/**/*.js`,
    cachePhp: `${buildDirectory}/*.php`,
    cacheManifest: `${buildDirectory}/site.webmanifest`,
  },
  build: {
    audio: `${buildDirectory}/assets/audio/`,
    video: `${buildDirectory}/assets/video/`,
    documents: `${buildDirectory}/assets/documents/`,
    fonts: `${buildDirectory}/assets/fonts/`,
    images: `${buildDirectory}/assets/images/`,
    root: `${buildDirectory}/`,
    rootZip: `${buildDirectory}/**/*.*`,
    styles: `${buildDirectory}/css/`,
    scripts: `${buildDirectory}/js/`,
  },
  watch: {
    audio: `${sourceDirectory}/assets/audio/**/*.{mp3,ogg,wav,flac}`,
    video: `${sourceDirectory}/assets/video/**/*.{mp4,avi,webm}`,
    documents: `${sourceDirectory}/assets/documents/**/*.{pdf,docx,doc,txt,rtf,odt,xls,xlsx}`,
    fonts: `${sourceDirectory}/assets/fonts/**/*.{woff,woff2}`,
    faviconsImages: `${sourceDirectory}/assets/images/raster-graphics/favicons/**/*.png`,
    fullScaleJpgImages: `${sourceDirectory}/assets/images/raster-graphics/full-scale/**/*.{jpg,jpeg}`,
    fullScalePngImages: `${sourceDirectory}/assets/images/raster-graphics/full-scale/**/*.png`,
    svgWithEffectsImages: `${sourceDirectory}/assets/images/vector-graphics/with-effects/**/*.svg`,
    svgWithoutEffectsImages: `${sourceDirectory}/assets/images/vector-graphics/without-effects/**/*.svg`,
    html: `${sourceDirectory}/**/*.html`,
    styles: `${sourceDirectory}/scss/**/*.scss`,
    scripts: `${sourceDirectory}/js/**/*.js`,
    php: `${sourceDirectory}/php/**/*.php`,
  },
  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

// [GROUP] EXPORTING THE MAIN VARIABLES
// ===================================================================================================>
export {
  buildDirectory,
  sourceDirectory,
  config,
};
