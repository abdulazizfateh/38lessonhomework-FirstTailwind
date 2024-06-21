/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'client-bg': "url(../images/client-bg-img.svg)",
        'ready-bg': "url(../images/ready-bg-img.svg)"
      }
    },
  },
  plugins: [],
}

