# Browser Extensions Manager UI

![Design preview for the Browser extensions manager UI coding challenge](./preview.jpg)

## Overview

A responsive UI for managing browser extensions, built as a solution to the
 [Frontend Mentor challenge](incandescent-flan-c05a6c.netlify.app).

### Features

- Toggle extensions between active and inactive states
- Filter extensions by status (all, active, inactive)
- Remove extensions from the list
- Select between light and dark color themes
- Responsive layout for mobile and desktop
- Accessible focus and hover states for all interactive elements

## Demo

- [Live Site](https://fancy-lebkuchen-e1bd4d.netlify.app/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/browser-extensions-manager-ui.git
   cd browser-extensions-manager-ui
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the mock API server (in a separate terminal):
   ```sh
   npx json-server --watch data.json --port 3000
   ```

4. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Built With

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest)
- [json-server](https://github.com/typicode/json-server) (for local API)

## Folder Structure

- [`src/`](src/) - Main application source code
- [`data.json`](data.json) - Mock data for extensions
- [`public/`](public/) - Static assets
- [`design/`](design/) - Challenge design files

## Customization

- Update extension data in [`data.json`](data.json).
- Modify styles in [`src/index.css`](src/index.css) or Tailwind config.

## Author

<!-- - [Your Name](https://your-site.com) -->
- [Frontend Mentor](https://www.frontendmentor.io/solutions/browser-extensions-manager-ui-rzerCtp9Jo)
<!-- - [Twitter](https://twitter.com/yourusername) -->

## Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io/) for the challenge and design assets.

---
