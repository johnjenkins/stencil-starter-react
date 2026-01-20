import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-lib',
  hashFileNames: false,
  sourceMap: true,
  outputTargets: [
    reactOutputTarget({
      outDir: '../stencil-lib-react/src/components',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
  ],
  extras: {
    enableImportInjection: true,
  },
};
