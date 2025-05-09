import { parse_markdown } from '@yuichi176/puremark-rs'

function App() {
  const markdownText = `
# This is a heading1

This is a paragraph.

## This is a heading2
- item 1
- item 2

## This is a quote
> This is a quote
`
  const html = parse_markdown(markdownText)

  return (
    <>
      <div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </>
  )
}

export default App
