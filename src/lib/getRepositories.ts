import { octokit } from '../utils/octokit'

export async function getRepositories() {
  return (
    await octokit.rest.repos.listForAuthenticatedUser({
      request: {
        fetch: (url: string) => fetch(url, { next: { revalidate: 900 } }),
      },
      sort: 'pushed',
    })
  ).data
}
