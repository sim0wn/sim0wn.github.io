export function parseMarkdown(markdown: string, rootUrl?: string) {
  if (rootUrl) {
    markdown = markdown.replace(
      /(\[.+\])\((?!https?:\/\/)(.+)\)/dgm,
      `$1(${rootUrl}/$2)`
    )
  }
  return markdown.replace(/^(#.?)\s(.+)$/dgm, '#$1 $2')
}
