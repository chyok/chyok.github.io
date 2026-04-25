---
title: "Recommended Software"
date: 2026-04-23
draft: false
summary: "A short list of tools worth installing and keeping around."
translationKey: "archive-software-recommendations"
categories: ["tool"]
tags: ["macOS", "Windows", "CLI"]
---

This page keeps software recommendations separate from configuration notes, so the archive can stay focused on reusable setup records.

## Apps

### All ecosystems

| Software | Platform | Use | Why I Keep It |
| --- | --- | --- | --- |
| [Bitwarden](https://bitwarden.com/download/) | Browser, macOS, Windows, Linux, iOS, Android, CLI | Password manager | Open-source password manager with apps and browser extensions everywhere, so vaults, passkeys, and autofill stay portable across devices. |
| [Eudic](https://www.eudic.net/mobile/eudic.aspx) | macOS, Windows, Linux, iOS, Android, Web | Dictionary and language learning | Cross-device dictionary with offline word banks, notes, vocabulary sync, and reading/translation helpers. |
| [Ollama](https://ollama.com/) | macOS, Windows, Linux | Local LLM runtime | Simple local runtime for downloading and running open models, with offline use, CLI workflows, and integrations for tools like OpenClaw and Claude Code. |
| [PixPin](https://pixpin.com/) | macOS, Windows | Screenshot and pinning | Combines screenshots, screen recording, OCR, long captures, and pinned references in one tool. |
| [Zed](https://zed.dev/) | macOS, Linux, Windows | Code editor | Fast Rust-based editor with built-in collaboration and AI workflows. A good lightweight alternative to heavier IDEs. |

### macOS and Apple ecosystem

| Software | Platform | Use | Why I Keep It |
| --- | --- | --- | --- |
| [Caffeinated](https://caffeinated.app/) | macOS | Keep Mac awake | Menu bar toggle for preventing sleep, display dimming, and screensaver during calls, downloads, or presentations. |
| [IINA](https://iina.io/) | macOS | Media player | Modern open-source macOS media player powered by mpv, with Picture-in-Picture, subtitles, and online stream support. |
| [Karabiner-Elements](https://karabiner-elements.pqrs.org/) | macOS | Keyboard remapping | Powerful key remapping for macOS, especially useful for input-source switching and custom shortcuts. |
| [oMLX](https://omlx.ai/) | Apple Silicon, macOS 15+ | Local LLM server | macOS-native MLX inference server with menu bar controls, OpenAI/Anthropic-compatible APIs, and SSD KV caching for faster local coding-agent workflows. |
| [PasteNow](https://pastenow.app/) | macOS, iOS, iPadOS | Clipboard manager | Native clipboard history with iCloud sync, smart lists, exclusion rules, and keyboard-friendly paste workflows. |
| [rcmd](https://lowtechguys.com/rcmd/) | macOS | App switching | Uses the right Command key plus an app's first letter to switch or launch apps quickly, which feels faster than cycling through Command-Tab. |

### Windows

| Software | Platform | Use | Why I Keep It |
| --- | --- | --- | --- |
| [BCUninstaller](https://www.bcuninstaller.com/) | Windows | Bulk uninstaller | Finds normal, hidden, broken, portable, Store, Steam, and other installed apps, then removes batches and leftover files with less manual cleanup. |
| [ImageGlass](https://imageglass.org/) | Windows | Image viewer | Lightweight open-source image viewer with a modern UI and broad format support, useful as a faster Windows Photos replacement. |
| [LosslessCut](https://losslesscut.net/) | Windows, macOS, Linux | Lossless media cutting | FFmpeg-based editor for trimming and merging video or audio without re-encoding, so exports are fast and quality stays intact. |
| [mpv.net](https://github.com/mpvnet-player/mpv.net) | Windows | Media player | Windows media player based on mpv/libmpv, with a modern GUI, mpv-style config, scripting, and high-quality video output. |
| [Sandboxie-Plus](https://sandboxie-plus.com/) | Windows | App sandboxing | Runs apps in an isolated environment so tests, browsing, and unknown software do not permanently modify the main system. |
| [ScreenToGif](https://www.screentogif.com/) | Windows | GIF and screen recording | Records screen, webcam, or sketchboard, then edits and exports as GIF, APNG, video, PSD, or image frames. |
| [ShanaEncoder](https://sourceforge.net/projects/shanaencoder/) | Windows | Video encoding | FFmpeg-based audio/video encoder with presets and practical features like subtitles, crop, segments, and logo overlay. |

## CLI

### macOS and Apple ecosystem

| Tool | Platform | Use | Why I Keep It |
| --- | --- | --- | --- |
| [Homebrew](https://brew.sh/) | macOS | Package manager | The default way to install and update developer tools on Mac, and an easy base layer for repeatable setup. |

### Cross-platform

| Tool | Platform | Use | Why I Keep It |
| --- | --- | --- | --- |
| [uv](https://docs.astral.sh/uv/) | macOS, Linux, Windows | Python tooling | Fast Rust-based Python package and project manager that can replace many separate tools like pip, pipx, virtualenv, poetry, and pyenv. |
