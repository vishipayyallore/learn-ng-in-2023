import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'blog-app',
  outDir: './dist/static',
  routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: './mdfiles',
      },
    },
  },
};
