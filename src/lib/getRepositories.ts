import { octokit } from '../utils/octokit'

export async function getRepositories() {
  return await octokit.rest.repos.listForAuthenticatedUser({
    sort: 'pushed',
  })
}
