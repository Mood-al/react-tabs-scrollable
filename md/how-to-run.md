# How to Run the Project

This project contains two main parts:
1. The **library code** (`/package` folder)
2. A **demo/playground** to test the package locally.

## Step-by-Step Guide

### 1. Initial Setup
Make sure you have Node.js installed. We recommend using `npm`.

Open a terminal and navigate to the `package` folder where the library code lives:
```bash
cd package
npm install
```

### 2. Running the Development Server
The project uses **Vite** for local development. We have a built-in demo app (`src/App.tsx`) to test the components directly.

```bash
npm run dev
```

This will start a local server, usually at `http://localhost:5173`. Open this URL in your browser. You can edit the code inside `src/lib/` and Vite will automatically reload the page.

### 3. Building for Production
Before publishing or testing the final output, build the bundle:
```bash
npm run build
```
This generates the final bundle files inside the `package/dist/` directory (UMD, ES Modules, and CSS).

### 4. Previewing the Build
If you want to see exactly what the built bundle looks like in the demo app:
```bash
npm run preview
```
