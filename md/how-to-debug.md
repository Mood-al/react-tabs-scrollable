# How to Debug Step by Step

Debugging a React library package requires testing both the library internals and how it behaves when imported by an external application.

## 1. Debugging in the Local Dev Environment

The easiest way to debug is using the built-in Vite server.

1. **Start the dev server:**
   ```bash
   cd package
   npm run dev
   ```
2. **Add console logs or breakpoints:**
   Open `src/lib/components/Tabs/index.tsx`. You can add `console.log` statements here.
3. **Use the React Developer Tools:**
   Open the Chrome/Firefox DevTools and go to the **Components** tab. You can inspect the `Tabs` and `Tab` components, modify their props on the fly (like toggling `isRTL`), and see how they react.

## 2. Testing the Final Build via `npm link`

Sometimes bugs only appear in the final built version (e.g. tree-shaking issues, missing CSS). To test the exact bundle that will be published to npm inside a real project:

**Step A: Create the local link in the package**
1. Open terminal in the library folder:
   ```bash
   cd package
   npm run build
   npm link
   ```

**Step B: Use the link in your consumer project (e.g. `e-menu`)**
1. Open a new terminal in your consumer project folder:
   ```bash
   cd path/to/your/consumer/project
   npm link react-tabs-scrollable
   ```
2. Now, your consumer project is using the local build of `react-tabs-scrollable` instead of the one from the npm registry.
3. Run your consumer project (`npm run dev`). If you make changes to the library, simply run `npm run build` in the library folder, and your consumer project will instantly pick up the changes.

## 3. Resolving the "ReactCurrentDispatcher" Error (Duplicate React)

If you encounter the `Error: Cannot read properties of undefined (reading 'ReactCurrentDispatcher')` when debugging or after installing your package, it means there are **two copies of React** loading at the same time.

**How to fix it:**
1. Check your `package.json`. `react` and `react-dom` should **ONLY** be inside `peerDependencies` (and `devDependencies` for local testing), but **NEVER** inside `dependencies`.
2. If they are in `dependencies`, remove them:
   ```json
   "peerDependencies": {
     "react": ">=16.8.0",
     "react-dom": ">=16.8.0"
   }
   ```
3. Run `npm install` again to clean up the `node_modules` tree.
4. If you used `npm link`, duplicate Reacts can also happen because the linked library resolves `react` from its own `node_modules`. To fix this, tell Vite/Webpack in your consumer project to always resolve `react` to the consumer's `node_modules`.
