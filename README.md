# ⬡ 3D Showroom

A clean, dark-themed interactive 3D model showcase built for displaying original Blender artworks directly in the browser — no plugins, no installs.

---

## ✨ Features

- 🖤 Minimal black & white design with soft violet accents
- 🔄 Rotate, zoom, and pan every 3D model in real-time
- 📥 Direct download links for each model
- ⚡ Lightweight — pure HTML, CSS & JavaScript
- 📱 Fully responsive on all screen sizes
- 🔢 Auto-updating model count in navbar & footer

---

## 📁 Project Structure

```
3d-showroom/
├── index.html        # Main page
├── style.css         # All styles (dark theme)
├── script.js         # Loads & renders models dynamically
├── projects.json     # Model data (title, src, download link)
└── models/
    └── Part-1.glb    # 3D model files go here
```

---

## ➕ How to Add a New Model

1. Place your `.glb` file inside the `models/` folder
2. Open `projects.json` and add a new entry:

```json
{
  "title": "Your Model Name",
  "src": "./models/your-model.glb",
  "downloadUrl": "https://your-download-link.com"
}
```

3. Save & refresh — the model will appear automatically on the site.

---

## 🚀 Run Locally

Just open `index.html` in any modern browser.  
No build step or server required.

> **Note:** If models don't load locally due to CORS, use a local server:
> ```bash
> npx serve .
> ```

---

## 🛠 Tech Used

| Technology | Purpose |
|---|---|
| HTML5 / CSS3 | Structure & styling |
| Vanilla JavaScript | Dynamic model loading |
| [model-viewer](https://modelviewer.dev/) | Interactive 3D rendering |
| [Inter](https://fonts.google.com/specimen/Inter) | Font |
| Blender | Creating all 3D models |

---

## 📄 License

All 3D models are original artworks. © 2026 3D Showroom.
