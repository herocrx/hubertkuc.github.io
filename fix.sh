#!/usr/bin/env bash
set -e

echo "⚡ Resetting Node modules and lockfile..."
rm -rf node_modules package-lock.json

echo "⚡ Installing Tailwind, PostCSS, Autoprefixer..."
npm install -D tailwindcss postcss autoprefixer

echo "⚡ Creating PostCSS config..."
cat > postcss.config.cjs <<EOL
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOL

echo "⚡ Creating Tailwind config..."
cat > tailwind.config.cjs <<EOL
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

echo "⚡ Creating globals.css if it doesn't exist..."
mkdir -p app
if [ ! -f app/globals.css ]; then
cat > app/globals.css <<EOL
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL
fi

echo "⚡ Installing remaining dependencies..."
npm install

echo "✅ Setup complete! You can now run:"
echo "   npm run dev   (for development)"
echo "   npm run build (for production build)"
