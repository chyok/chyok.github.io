---
title: "Pause to Reveal Recent Subtitles in mpv.net"
date: 2026-04-25
draft: false
summary: "Configure mpv.net on Windows for blind listening: hide subtitles during playback and show recent lines when paused."
translationKey: "archive-mpvnet-pause-subtitles"
categories: ["tool"]
tags: ["Windows", "mpv.net", "language learning"]
---

This setup is useful for language learning: keep the video clean while listening, then pause to quickly check the current subtitle or the recent context.

mpv can do the simple version with a conditional profile. For the better version, where pausing shows the last few subtitle lines, use a small Lua script.

## 1. Open the mpv.net Config Folder

In mpv.net, use `Context Menu > Config > Open Config Folder`.

mpv.net searches config folders in this order:

- `MPVNET_HOME`, if that environment variable is set.
- `startup\portable_config`, where `startup` is the folder containing `mpvnet.exe`.
- `%APPDATA%\mpv.net`, usually `C:\Users\<Username>\AppData\Roaming\mpv.net`.

The important files are:

- `mpv.conf` for mpv options.
- `scripts\` for Lua scripts.

## 2. Simple Mode: Show Only the Current Subtitle on Pause

If current-line subtitles are enough, add this to `mpv.conf`:

```conf
# Blind listening mode: hide subtitles while playing, reveal them on pause.
sub-visibility=no

[pause-mode]
profile-cond=pause
profile-restore=copy
sub-visibility=yes
```

Behavior:

- Playing: subtitles are hidden.
- Paused: the current subtitle appears.
- Resume: subtitles hide again.

This is clean and native, but it only shows the current subtitle line.

## 3. Better Mode: Show the Last 3 Subtitle Lines on Pause

Create this folder if it does not exist:

```text
scripts
```

Then create:

```text
scripts\blind-listening.lua
```

Paste this script:

```lua
-- Blind listening review mode for mpv / mpv.net.
-- Hides native subtitles while playing, then shows recent subtitle lines when paused.

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
            content = "(No subtitle history yet)"
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

Behavior:

- Open a video with subtitles loaded.
- During playback, subtitles stay hidden.
- Press `Space` to pause.
- mpv.net shows the latest 3 subtitle lines as an OSD message.
- Press `Space` again to continue playback; the OSD disappears.

## 4. Usage Flow

A good listening loop:

1. Play with subtitles hidden.
2. If a sentence is unclear, press `Space`.
3. Read the recent subtitle context.
4. Press `Shift + Left` to jump back a little.
5. Press `Space` to continue listening without subtitles.

## Notes

- The video still needs a loaded subtitle track. Hidden subtitles are still readable by the script, but missing subtitles cannot be recovered.
- The script records subtitles as playback reaches them. If you jump directly into the middle of a file, history may only contain the current line until playback continues.
- If you use plain mpv instead of mpv.net, the Windows config folder is usually `%APPDATA%\mpv`.
