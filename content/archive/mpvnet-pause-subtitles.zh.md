---
title: "Windows 下配置 mpv.net 暂停显示字幕"
date: 2026-04-25
draft: false
summary: "给 mpv.net 配一个外语盲听模式：播放时隐藏字幕，暂停时显示最近几句字幕。"
translationKey: "archive-mpvnet-pause-subtitles"
categories: ["tool"]
tags: ["Windows", "mpv.net", "language learning"]
---

这个配置适合外语盲听：播放时画面干净，不显示字幕；听不懂时按一下暂停，字幕浮出来，看完再继续播放。

mpv 原生配置可以做到“暂停显示当前这一句”。如果想暂停时显示最近 3 句上下文，需要加一个 Lua 脚本。

## 1. 打开 mpv.net 配置文件夹

在 mpv.net 里打开 `右键菜单 > Config > Open Config Folder`。

mpv.net 会按这个顺序查找配置目录：

- `MPVNET_HOME` 环境变量指定的目录。
- `startup\portable_config`，其中 `startup` 是 `mpvnet.exe` 所在目录。
- `%APPDATA%\mpv.net`，通常是 `C:\Users\<Username>\AppData\Roaming\mpv.net`。

这次会用到两个位置：

- `mpv.conf`：写 mpv 配置。
- `scripts\`：放 Lua 脚本。

## 2. 简单版：暂停时显示当前字幕

如果只需要看当前这一句，把下面内容加到 `mpv.conf`：

```conf
# 盲听模式：播放时隐藏字幕，暂停时显示字幕。
sub-visibility=no

[pause-mode]
profile-cond=pause
profile-restore=copy
sub-visibility=yes
```

效果：

- 播放中：字幕隐藏。
- 暂停时：当前字幕显示。
- 继续播放：字幕再次隐藏。

这个方式最简单，也最接近 mpv 原生能力，但它只能显示当前这一句。

## 3. 进阶版：暂停时显示最近 3 句字幕

如果你想回看上下文，在配置文件夹里新建这个目录：

```text
scripts
```

然后新建脚本文件：

```text
scripts\blind-listening.lua
```

写入下面这段脚本：

```lua
-- mpv / mpv.net 盲听复习模式。
-- 播放时隐藏原生字幕，暂停时用 OSD 显示最近几句字幕。

local settings = {
    lines_to_show = 3,
    osd_duration = 9999,
}

local history = {}

local function clean_text(text)
    if not text then
        return ""
    end

    text = text:gsub("{\\[^}]-}", "")
    text = text:gsub("\\N", "\n")
    text = text:gsub("^%s+", ""):gsub("%s+$", "")

    return text
end

local function record_subtitle(_, text)
    text = clean_text(text)

    if text == "" then
        return
    end

    if history[#history] ~= text then
        table.insert(history, text)
    end

    while #history > settings.lines_to_show do
        table.remove(history, 1)
    end
end

local function on_pause_change(_, paused)
    if paused then
        local content = table.concat(history, "\n")

        if content == "" then
            content = "(暂无字幕记录)"
        end

        mp.osd_message(content, settings.osd_duration)
    else
        mp.osd_message("", 0)
    end
end

mp.set_property("sub-visibility", "no")
mp.observe_property("sub-text", "string", record_subtitle)
mp.observe_property("pause", "bool", on_pause_change)
```

效果：

- 打开带字幕的视频。
- 正常播放时，字幕保持隐藏。
- 按 `Space` 暂停。
- mpv.net 会用 OSD 显示最近 3 句字幕。
- 再按 `Space` 继续播放，OSD 文字消失。

## 4. 推荐使用方式

一个比较顺手的盲听流程：

1. 播放时不看字幕，先逼自己听。
2. 没听懂时按 `Space` 暂停。
3. 看最近几句字幕，补上下文。
4. 按 `Shift + Left` 回退一点。
5. 再按 `Space` 继续播放，字幕消失，重新听一遍。

## 注意

- 视频仍然需要加载字幕轨。字幕可以隐藏，但不能没有。
- 脚本是边播放边记录字幕。如果刚打开视频就直接跳到中间，历史记录可能暂时只有当前这一句。
- 如果你用的是普通 mpv，不是 mpv.net，Windows 下配置目录通常是 `%APPDATA%\mpv`。
