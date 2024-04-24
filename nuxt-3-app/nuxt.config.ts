// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    // BootstrapのJavaScriptを追加
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ],
  // CSSを追加する
  css: [
    // BootstrapのCSSを追加
    'bootstrap/dist/css/bootstrap.css'
  ]
})
