# Threema SidenNav Ergonomy

A small Chrome (Manifest V3) extension that adds a burger-menu button to
[Threema Web](https://web.threema.com) so you can toggle the sidebar / side
navigation and reclaim screen space for the conversation.

## Features

- Injects a modern burger-menu button into the Threema Web interface
- One click hides or shows the side navigation to declutter the layout
- Tooltip and hover animation on the button
- Works on both `web.threema.com` and `web.threema.ch`

## Tech Stack

- Chrome Extension, Manifest V3
- Vanilla JavaScript content script (`content.js`)
- Background service worker (`background.js`)

## Files

```
manifest.json    # MV3 config (content script, host permissions, popup, icons)
content.js       # injects and wires up the toggle button
background.js     # service worker
popup.html       # extension action popup
icons/           # extension icons
```

## Installation

1. Open `chrome://extensions` in Chrome (or any Chromium browser).
2. Enable **Developer mode** (top right).
3. Click **Load unpacked** and select this folder.
4. Open [Threema Web](https://web.threema.com) — the toggle button appears in the
   interface.
