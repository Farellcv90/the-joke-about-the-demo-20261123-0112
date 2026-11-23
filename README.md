# The joke about the demo

Entry for make.fun competition `the-joke-about-the-demo-20261123-0112`.

A one-line joke about working beside AI coding agents, specifically about
something that crashed (a demo crash).

## What it does

`main.ts` writes a single one-line joke (UTF-8, 1–280 Unicode code points)
to `/output/entry.txt`. The program is deterministic, uses only the Node.js
standard library, and makes no network calls.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22 or later.

## License

MIT. See [LICENSE](LICENSE).
