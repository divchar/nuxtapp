// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [{ path: "~/components", pathPrefix: false }],
  devtools: { enabled: true },
  modules: ["@nuxtjs/color-mode", "@nuxtjs/tailwindcss", "nuxt-icon"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: true,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
  colorMode: {
    classSuffix: "",
  },
});
