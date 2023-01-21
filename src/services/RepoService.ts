import RepoAggregator from './RepoAggregator';
import RepoFilter from './ForkRepoFilter';
import { Repo } from '../models/Repo';

class RepoService {
  private repoAggregator: RepoAggregator;
  private repoFilter: RepoFilter;

  constructor(repoAggregator: RepoAggregator, repoFilter: RepoFilter) {
    this.repoAggregator = repoAggregator;
    this.repoFilter = repoFilter;
  }

  public async getData(): Promise<Repo[]> {
    const repos = await this.repoAggregator.aggregate();
    return this.repoFilter.apply(repos);
  }
}

export default RepoService;
