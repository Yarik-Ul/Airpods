// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/normalize.css"],
  modules: [
    "nuxt-icon",
    [
      "@nuxtjs/google-fonts",
      {
        googleFonts: {
          families: {
            Inter: true,
          },
        },
      },
    ],
  ],
});
