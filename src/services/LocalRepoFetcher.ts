import IFetcher from '../models/IFetcher';
import { readFile, watchFile } from 'fs';
import { config } from '../config';

let cache: any = null;

class LocalRepoFetcher implements IFetcher {
  constructor() {
    watchFile(config.api.localRepo, () => {
      //clear cache
      cache = null;
    });
  }

  public async fetch(): Promise<any> {
    if (cache !== null) {
      return cache;
    }
    return new Promise((resolve, reject) => {
      readFile(config.api.localRepo, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          cache = JSON.parse(data);
          resolve(cache);
        }
      });
    });
  }
}

export default LocalRepoFetcher;
