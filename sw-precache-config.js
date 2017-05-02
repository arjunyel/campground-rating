/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/* eslint-env node */

module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    'src/json/crab.json',
    'src/json/giant.json',
    'src/json/lake.json',
    'src/json/little.json',
    'src/json/marion.json',
  ],
  navigateFallback: 'index.html',
  navigateFallbackWhitelist: [/^(?!\/__)/, ' /getProjectConfig/'],
};
