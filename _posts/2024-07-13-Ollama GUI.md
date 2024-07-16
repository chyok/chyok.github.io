---
title: A Simple Python Tkinter-based Ollama GUI with no external dependencies
date: 2024-07-13 07:42:18 +8000
categories: [Document]
tags: [python]
---

# Ollama-GUI

Hello everyone, I would like to share with you [ollama-gui](https://github.com/chyok/ollama-gui) - a lightweight, Tkinter-based python GUI for the Ollama.

## Overview

The project is very simple, with no other dependencies, and can be run in a single file.

![ollama-gui-1 2 0](https://github.com/user-attachments/assets/a4bb979b-68a4-4062-b484-7542f2a866e0)


It can serve as a first GUI page for beginners, without the need for Docker, VM or other dependencies, just Python (if not using the binary).


## 🚀 Features
### v1.1.0
+ 📁 One file project.
+ 📦 No external dependencies, only **tkinter** which is usually bundled.
+ 🔍 Auto check ollama model list.
+ 🌐 Customizable ollama host support.
+ 💬 Multiple conversations.
+ 📋 Menu bar and right-click menu.
+ 🛑 Stop generating at any time.

### v1.2.0
+ 🗂️ Model Management: Download and Delete Models
+ 🎨 UI Enhancement: Bubble dialog theme
+ 📝 Editable Conversation History

## Run
Choose any way you like:

### source code

```
python ollama_gui.py
```

### using pip

```
pip install ollama-gui
ollama-gui
```

### binary file
I have provided some Windows, Mac, and Linux binaries for convenient direct use, could be downloaded from the GitHub release page.

## Motivation

While looking for a UI interface for Ollama to experiment with large models locally, I found that many had heavy installation dependencies. Since I don't have particularly high requirements for the interface and UI, I decided to write an extremely minimalist UI using Python.

The project home is at https://github.com/chyok/ollama-gui

I would be most appreciative if anyone were interested, and also be tremendously grateful for any feedback or suggestions that anyone may have to offer.

Thanks,
chyok




