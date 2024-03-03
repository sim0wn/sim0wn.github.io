import { octokit } from '@/utils/octokit'

export async function getSolution(platform: string, solution: string) {
  const content = (
    await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: 'sim0wn',
      path: `${platform}/${solution}/README.md`,
      repo: 'solutions',
    })
  ).data
  return Buffer.from(
    (content as { content: string }).content,
    'base64'
  ).toString('utf-8')
}
