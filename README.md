# Documentation

## Style markdown

- use a scoped container (see `PostLayout.astro`)
- use `is:global` to propagate to all the container 
- use `p > code` to style the inline code block
- use `.astro-code` in `variables.css` to style the code block in languages

## Troubleshooting

- Authentication problem in wrangler
`pnpm dlx wrangler logout`
`pnpm dlx wrangler login`
