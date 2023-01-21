import axios from 'axios';
import { config } from '../config';
import IFetcher from '../models/IFetcher';

class RemoteRepoFetcher implements IFetcher {
  public async fetch(): Promise<any> {
    // Fetch data from GitHub API
    const { data: gitData } = await axios.get(config.api.endpoint);
    return gitData;
  }
}

export default RemoteRepoFetcher;
