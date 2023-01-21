import { Router, Request, Response } from 'express';
import RepoService from '../services/RepoService';
import RemoteRepoFetcher from '../services/RemoteRepoFetcher';
import RepoFilter from '../services/ForkRepoFilter';
import RepoAggregator from '../services/RepoAggregator';
import LocalRepoFetcher from '../services/LocalRepoFetcher';

const repos = Router();
const repoService = new RepoService(
  new RepoAggregator([new RemoteRepoFetcher(), new LocalRepoFetcher()]),
  new RepoFilter()
);

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');
  res.header('Content-Type', 'application/json');
  try {
    const data = await repoService.getData();
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({
      error: _.hostname === 'localhost' ? err.message : 'Data unavailable.',
    });
  }
});

export { repos };
