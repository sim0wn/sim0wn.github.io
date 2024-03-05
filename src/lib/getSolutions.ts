import { octokit } from '@/utils/octokit'

export async function getSolutions(platform: string) {
  const contents = (
    await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: 'sim0wn',
      path: `${platform}`,
      repo: 'solutions',
      request: {
        fetch: (url: string) => fetch(url, { next: { revalidate: 900 } }),
      },
    })
  ).data
  return (contents as Array<Partial<{ type: string }>>).filter(
    ({ type }) => type && type === 'dir'
  )
}
