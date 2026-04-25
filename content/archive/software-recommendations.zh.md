---
title: "常用软件和工具"
date: 2026-04-23
draft: false
summary: "记录常用、备用或值得长期保留的软件和工具。"
translationKey: "archive-software-recommendations"
categories: ["tool"]
tags: ["macOS", "Windows", "CLI"]
---

这里记录一些常用、备用，或者以后装机时可能还会想起的软件和工具。

## 软件

### 全生态

| 软件 | 平台 | 用途 | 推荐理由 |
| --- | --- | --- | --- |
| [Bitwarden](https://bitwarden.com/download/) | 浏览器, macOS, Windows, Linux, iOS, Android, CLI | 密码管理 | 开源密码管理器，桌面端、移动端、浏览器扩展和 CLI 都有，密码库、Passkey 和自动填充可以跨设备保持一致。 |
| [Eudic](https://www.eudic.net/mobile/eudic.aspx) | macOS, Windows, Linux, iOS, Android, Web | 词典与语言学习 | 跨设备词典，支持离线词库、生词本、笔记同步，以及阅读和翻译辅助。 |
| [Ollama](https://ollama.com/) | macOS, Windows, Linux | 本地 LLM 运行时 | 下载和运行开源模型很顺手，支持离线使用、CLI 工作流，也能接 OpenClaw、Claude Code 这类工具。 |
| [PixPin](https://pixpin.com/) | macOS, Windows | 截图与贴图 | 截图、录屏、OCR、长截图、贴图都在一个工具里，适合日常标注和资料对照。 |
| [Zed](https://zed.dev/) | macOS, Linux, Windows | 代码编辑器 | Rust 写的轻量高速编辑器，内置协作和 AI 工作流，适合替代偏重的 IDE。 |

### macOS 与 Apple 生态

| 软件 | 平台 | 用途 | 推荐理由 |
| --- | --- | --- | --- |
| [Caffeinated](https://caffeinated.app/) | macOS | 防止休眠 | 菜单栏一键防止休眠、屏幕变暗和启动屏保，开会、下载、演示时很省心。 |
| [IINA](https://iina.io/) | macOS | 视频播放器 | 基于 mpv 的现代 macOS 开源播放器，支持画中画、字幕、在线流和常见媒体格式。 |
| [Karabiner-Elements](https://karabiner-elements.pqrs.org/) | macOS | 键盘改键 | 强大的 macOS 改键工具，适合处理输入法切换、自定义快捷键等场景。 |
| [oMLX](https://omlx.ai/) | Apple Silicon, macOS 15+ | 本地 LLM 服务 | macOS 原生 MLX 推理服务器，有菜单栏控制、OpenAI/Anthropic 兼容接口和 SSD KV cache，适合加速本地 coding agent 工作流。 |
| [PasteNow](https://pastenow.app/) | macOS, iOS, iPadOS | 剪贴板管理 | 原生剪贴板历史，支持 iCloud 同步、智能列表、排除规则和键盘操作。 |
| [rcmd](https://lowtechguys.com/rcmd/) | macOS | 应用切换 | 用右 Command 加应用首字母快速切换或启动 App，比反复 Command-Tab 更直接，适合常驻。 |

### Windows

| 软件 | 平台 | 用途 | 推荐理由 |
| --- | --- | --- | --- |
| [BCUninstaller](https://www.bcuninstaller.com/) | Windows | 批量卸载 | 能识别普通、隐藏、损坏、便携、商店、Steam 等来源的应用，适合批量卸载和清理残留。 |
| [ImageGlass](https://imageglass.org/) | Windows | 图片查看 | 轻量开源图片查看器，界面现代、格式支持广，适合替代 Windows Photos。 |
| [LosslessCut](https://losslesscut.net/) | Windows, macOS, Linux | 无损剪辑 | 基于 FFmpeg，适合快速裁切、合并视频或音频，不重新编码，导出快且不损画质。 |
| [mpv.net](https://github.com/mpvnet-player/mpv.net) | Windows | 视频播放器 | 基于 mpv/libmpv 的 Windows 播放器，有现代 GUI，同时保留 mpv 配置、脚本和高质量视频输出能力。 |
| [Sandboxie-Plus](https://sandboxie-plus.com/) | Windows | 应用沙盒 | 把应用放进隔离环境运行，测试软件、浏览网页或打开不太确定的程序时不污染主系统。 |
| [ScreenToGif](https://www.screentogif.com/) | Windows | GIF 与录屏 | 可以录屏、录摄像头或画板，并内置编辑器，导出 GIF、APNG、视频、PSD 或图片帧。 |
| [ShanaEncoder](https://sourceforge.net/projects/shanaencoder/) | Windows | 视频编码 | 基于 FFmpeg 的音视频编码工具，有预设，也支持字幕、裁剪、分段、Logo 叠加等实用功能。 |

## CLI

### macOS 与 Apple 生态

| 工具 | 平台 | 用途 | 推荐理由 |
| --- | --- | --- | --- |
| [Homebrew](https://brew.sh/) | macOS | 包管理器 | Mac 上安装和更新开发工具的默认底座，也方便把装机配置沉淀成可复用清单。 |

### 跨平台

| 工具 | 平台 | 用途 | 推荐理由 |
| --- | --- | --- | --- |
| [uv](https://docs.astral.sh/uv/) | macOS, Linux, Windows | Python 工具链 | Rust 写的高速 Python 包和项目管理器，可以替代 pip、pipx、virtualenv、poetry、pyenv 等多个工具。 |
