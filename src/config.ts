import path from 'path';
import { config as dotenv } from 'dotenv-flow';

dotenv({ default_node_env: 'development', path: `${__dirname}/../` });

export const config = {
  server: {
    port: process.env.SERVER_PORT || '4000',
  },
  api: {
    localRepo:
      process.env.LOCAL_REPO_PATH ||
      path.resolve(__dirname, '..') + '/data/repos.json',
    endpoint:
      process.env.API_ENDPOINT ||
      'https://api.github.com/users/silverorange/repos',
  },
};
