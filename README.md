# Documentation

## Style markdown

- use a scoped container (see `PostLayout.astro`)
- use `is:global` to propagate to all the container 
- use `p > code` to style the inline code block
- use `.astro-code` in `variables.css` to style the code block in languages

## Images

- thumbnails have to be in the sub-route of the markdown files now
- images are in /public folder

## Deploy

`pnpm astro build && pnpm dlx wrangler deploy`

## Troubleshooting

- Authentication problem in wrangler
`pnpm dlx wrangler logout`
`pnpm dlx wrangler login`
