// tailwind.config.js
module.exports = {
     mode: "jit",
     content: [
      "./src/screens/**/*.{js,jsx,ts,tsx}", 
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }