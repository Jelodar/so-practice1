import IFetcher from '../models/IFetcher';
import { readFile, watchFile } from 'fs';

const REPO_JSON_FILE = '../api/data/repos.json';
let cache: any = null;

class LocalRepoFetcher implements IFetcher {
  constructor() {
    watchFile(REPO_JSON_FILE, () => {
      //clear the cache
      cache = null;
    });
  }

  public async fetch(): Promise<any> {
    if (cache !== null) {
      return cache;
    }
    return new Promise((resolve, reject) => {
      readFile(REPO_JSON_FILE, 'utf-8', (err, data) => {
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
