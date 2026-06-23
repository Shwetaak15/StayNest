const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/store/index.ejs",
    "./views/store/home-list.ejs",
    "./views/store/home-details.ejs",
    "./views/store/favourite-list.ejs",
    "./views/store/bookings.ejs",
    "./views/partials/nav.ejs",
    "./views/host/host-home-list.ejs",
    "./views/host/edit-home.ejs",
    "./views/auth/signup.ejs",
    "./views/auth/login.ejs",
    "./views/404.ejs",
    "./views/**/*.ejs",
    "./routes/**/*.js",
    "./app.js"
  ],
  theme: {
    extend: {
      colors: {
        beige: colors.indigo
      }
    },
  },
  plugins: [],
}
