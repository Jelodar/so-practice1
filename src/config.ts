import { config as dotenv } from 'dotenv-flow';

dotenv({ default_node_env: 'development', path: `${__dirname}/../` });

export const config = {
  server: {
    port: process.env.SERVER_PORT || '4000',
  },
  api: {
    endpoint:
      process.env.API_ENDPOINT ||
      'https://api.github.com/users/silverorange/repos',
  },
};
