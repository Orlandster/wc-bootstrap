import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'wc-bootstrap',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass({
      includePaths: ["node_modules"],
      injectGlobalPaths: [
        'node_modules/bootstrap/scss/functions.scss',
        'node_modules/bootstrap/scss/variables.scss',
        'node_modules/bootstrap/scss/mixins.scss'
      ]
    })
  ]
};
