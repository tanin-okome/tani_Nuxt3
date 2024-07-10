// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';


export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  runtimeConfig: {
    mysqlHost: process.env.MYSQL_HOST || 'localhost',
    mysqlPort: process.env.MYSQL_PORT || '3307',
    mysqlDatabase: process.env.MYSQL_DATABASE || 'mydatabase',
    mysqlUser: process.env.MYSQL_USER || 'myuser',
    mysqlPassword: process.env.MYSQL_PASSWORD || 'mypassword',

    build: {
      transpile: ['h3'],
    },
  },
  modules: [
    '@primevue/nuxt-module'
],    
primevue: {
  options: {
      theme: {
          preset: Aura
      }
  }
}
  
})
