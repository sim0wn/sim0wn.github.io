import { octokit } from '@/utils/octokit'

export async function getPlatformDescription(platform: string) {
  const content = (
    await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: 'sim0wn',
      path: `${platform}/README.md`,
      repo: 'solutions',
    })
  ).data
  const [name, description] = Buffer.from(
    (content as { content: string }).content,
    'base64'
  )
    .toString('utf-8')
    .replace(/^#\s(.*)$/dgm, '$1')
    .trim()
    .split('\n')
  return { description: description, name: name }
}
