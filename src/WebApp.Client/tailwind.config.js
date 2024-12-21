/** @type {import('tailwindcss').Config} */

const path = require('path');
const lumexuiPath = path.join(process.env.HOME, '.nuget', 'packages', 'lumexui', '1.0.0-preview.4', 'theme', 'plugin');
const lumexui = require(lumexuiPath);


module.exports = {
  content: [
      "./Components/**/*.{razor,html,cshtml,cs}",
      "./Layout/**/*.{razor,html,cshtml,cs}",
      "./Pages/**/*.{razor,html,cshtml,cs}",
      "~/.nuget/packages/lumexui/1.0.0-preview.4/theme/**/*.cs",
  ],
  darkMode: 'class',
  theme: {
      extend: {},
  },
  plugins: [lumexui],
}