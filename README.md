# Toaster

A small, customizable module to create HTML toast notifications for your web projects.

## Features

- Easy integration with your project
- Customizable styles and options
- Lightweight and fast
- Responsive design

## Installation

```bash
npm install toaster
```

Or include the files manually in your project.

## Usage

### Import and Use in JavaScript/TypeScript

```js
import toaster from "toaster";

toaster.add({
  message: "Hello, world!",
  image: {
    src: "https://picsum.photos/200/150?random=1",
    alt: "Random image",
    width: 50,
    height: 50,
  }
}, {
  priority: "high",
  type: "success",
  duration: 4000,
});
```

### Example (see `/test/index.html`)

Open `test/index.html` in your browser and try the buttons to see toasts in action.

## API

### `toaster.add(content, options)`

- `content`: `{ message, image?, button? }`
- `options`: `{ duration?, type?, position?, progressBar?, priority? }`

### `toaster.remove(id)`

Removes a toast by its ID.

## Types

See `types/index.d.ts` for full TypeScript types.

## License

ISC

---

[GitHub Repository](https://github.com/fabske0/HTML-Toaster)
