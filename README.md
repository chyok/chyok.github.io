# chyok.github.io

This is a Hugo site using the PaperMod theme. The main configuration file is `hugo.yaml`, and page content lives under `content/`.

## Local Preview

```bash
hugo server -D
```

Open `http://localhost:1313/`.

## Archive Content Guide for AI and Agents

The Archive section is a normal article section. Use front matter `categories` and `tags` to classify articles instead of creating special content types.

Use these paths:

- Section landing page: `content/archive/_index.md`
- Chinese section landing page: `content/archive/_index.zh.md`
- English articles: `content/archive/<slug>.md`
- Chinese articles: `content/archive/<slug>.zh.md`

The section landing pages should stay short. PaperMod automatically renders the article list below the section content, so do not manually maintain a link list there unless the layout changes.

## Adding Configuration Notes

Create a new article under `content/archive/`. Configuration notes should each get their own normal article and be classified with `categories` and `tags`.

Recommended front matter:

```yaml
---
title: "Article Title"
date: 2026-04-24
draft: false
summary: "One sentence that appears in the Archive article list."
translationKey: "archive-short-stable-key"
categories: ["tool"]
tags: ["macOS"]
---
```

For Chinese content, use the same slug with `.zh.md` and the same `translationKey`:

```yaml
---
title: "中文标题"
date: 2026-04-24
draft: false
summary: "显示在 Archive 文章列表里的一句话摘要。"
translationKey: "archive-short-stable-key"
categories: ["tool"]
tags: ["macOS"]
---
```

Use `categories` for broad grouping and `tags` for specific tools, systems, or topics. Keep both lists small and reuse existing values before creating new ones.

Current broad categories:

- `tool` for tools, software, and setup notes.
- `dev` for development notes.

Current tags include `macOS` and `keyboard`. Add new tags only when they make filtering meaningfully better.

Configuration articles should normally include:

- The problem or motivation.
- The exact system or app path when relevant.
- Step-by-step instructions.
- Config snippets in fenced code blocks.
- The final expected behavior.

## Adding Software Recommendations

Software recommendations are ordinary articles too. The main recommendation list currently lives in:

- `content/archive/software-recommendations.md`
- `content/archive/software-recommendations.zh.md`

Keep these as curated lists, not long setup tutorials. If a recommended tool needs detailed configuration steps, add or link a separate configuration article.

Use a compact table when possible:

```markdown
| Software | Use | Why I Keep It |
| --- | --- | --- |
| [Name](https://example.com/) | Short purpose | Practical reason. |
```

For Chinese:

```markdown
| 软件 | 用途 | 推荐理由 |
| --- | --- | --- |
| [名称](https://example.com/) | 简短用途 | 推荐原因。 |
```

## Navigation

The Archive menu entries are configured in `hugo.yaml`:

- English: `/archive/`
- Chinese: `/zh/archive/`

Do not add new Archive articles to `hugo.yaml`; Hugo discovers section articles automatically.

## Build Check

Before finishing changes, run:

```bash
hugo --minify
```
