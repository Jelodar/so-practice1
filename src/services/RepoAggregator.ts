import IFetcher from '../models/IFetcher';

class RepoAggregator {
  private readonly fetchers: IFetcher[];

  constructor(fetchers: IFetcher[]) {
    this.fetchers = fetchers;
  }

  public async aggregate() {
    const repos = [];
    for (const fetcher of this.fetchers) {
      repos.push(await fetcher.fetch());
    }

    // Flatten the array of repos from all sources
    return [].concat(...repos);
  }
}

export default RepoAggregator;
