---
title: "取消 Mac 键盘大写键 (Caps Lock) 延迟"
date: 2026-04-24
draft: false
summary: "使用 Karabiner-Elements 让 Caps Lock 立即切换输入法，同时保留原本的大写锁定功能。"
translationKey: "archive-caps-lock-delay"
categories: ["tool"]
tags: ["macOS", "keyboard"]
---

macOS 默认会把 Caps Lock 设计为“短按切输入法、长按切大小写”，这可能导致快速打字时出现按键判断延迟。如果你主要使用其他快捷键切换输入法，这个设计反而容易干扰输入节奏。

## 1. 关闭系统自带的 Caps Lock 切换输入法

在 `系统设置 > 键盘 > 文本输入 > 编辑` 中，关闭类似“使用大写锁定键切换输入法”的选项。

## 2. 把 Caps Lock 映射为 F19

打开 Karabiner-Elements，在 `Simple Modifications` 中添加一条映射：

- **From key**: `caps_lock`
- **To key**: `f19`

## 3. 修改 F19 为切换输入法

进入 `系统设置 > 键盘 > 键盘快捷键 > 输入法`。
将“选择上一个输入源”（或你实际使用的输入法切换动作）的快捷键设置为刚刚映射的 `F19`，在输入框按一下 Caps Lock 即可录入。

## 4. 恢复大小写锁定功能 (Command + Caps Lock)

经过上面的步骤，你会失去原本的大小写锁定功能。可以在 Karabiner-Elements 中加一条复杂规则，让 `Command + Caps Lock` 触发原始的 `Caps Lock`。

将以下 JSON 规则加入配置中，通常在 `~/.config/karabiner/karabiner.json` 的 `complex_modifications.rules` 里：

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

最终效果：

- 短按 `Caps Lock` 瞬间切换输入法，零延迟。
- 按住 `Command` 再按 `Caps Lock`，触发原本的大写锁定功能。
