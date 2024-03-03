import { octokit } from '@/utils/octokit'

export async function getPlatforms() {
  const contents = (
    await octokit.request('GET /repos/{owner}/{repo}/contents/', {
      owner: 'sim0wn',
      path: '',
      repo: 'solutions',
    })
  ).data
  return contents.filter((content: { type: string }) => content.type === 'dir')
}
