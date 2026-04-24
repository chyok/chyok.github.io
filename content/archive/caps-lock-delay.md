---
title: "Remove the Caps Lock Delay on Mac"
date: 2026-04-24
draft: false
summary: "Use Karabiner-Elements to make Caps Lock switch input sources immediately while keeping the original Caps Lock behavior available."
translationKey: "archive-caps-lock-delay"
categories: ["tool"]
tags: ["macOS", "keyboard"]
---

macOS can treat Caps Lock as both an input-source switch and an actual caps-lock key. That behavior may introduce a small delay when typing quickly. If you switch input sources with another shortcut, mapping Caps Lock through Karabiner-Elements can make the key respond immediately.

## 1. Disable the Native Caps Lock Input Switch

Open `System Settings > Keyboard > Text Input > Edit`, then disable the option that uses Caps Lock to switch input sources.

## 2. Map Caps Lock to F19

Open Karabiner-Elements and add a `Simple Modifications` rule:

- **From key**: `caps_lock`
- **To key**: `f19`

## 3. Use F19 as the Input Source Shortcut

Open `System Settings > Keyboard > Keyboard Shortcuts > Input Sources`.
Set the previous input-source action to `F19` by pressing Caps Lock in the shortcut field.

## 4. Keep Caps Lock Available with Command + Caps Lock

Add this rule to Karabiner-Elements, usually inside the `complex_modifications.rules` section of `~/.config/karabiner/karabiner.json`:

```json
{
    "description": "Press Command+F19 to trigger Caps Lock",
    "manipulators": [
        {
            "from": {
                "key_code": "f19",
                "modifiers": {
                    "mandatory": ["command"],
                    "optional": ["any"]
                }
            },
            "to": [{ "key_code": "caps_lock" }],
            "type": "basic"
        }
    ]
}
```

Final behavior:

- Press `Caps Lock` to switch input sources immediately.
- Press `Command + Caps Lock` to trigger the original Caps Lock behavior.
