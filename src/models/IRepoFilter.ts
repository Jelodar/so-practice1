import { Repo } from './Repo';

interface IRepoFilter {
  apply(repoData: Repo[]): any;
}

export default IRepoFilter;
