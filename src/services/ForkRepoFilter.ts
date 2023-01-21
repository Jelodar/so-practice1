import { IRepoFilter } from '../models/IRepoFilter';
import { Repo } from '../models/Repo';

class ForkRepoFilter implements IRepoFilter {
  public apply(repoData: Repo[]): Repo[] {
    return repoData.filter((repo: any) => !repo.fork);
  }
}

export default ForkRepoFilter;
