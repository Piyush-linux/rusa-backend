// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    // modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth',"@nuxtjs/strapi"],
    modules: ['@nuxtjs/tailwindcss', "@nuxtjs/strapi","@pinia/nuxt"],
    css: ["~/assets/css/main.css"],
    // modules: ['@nuxtjs/strapi','modules: ['@nuxtjs/tailwindcss']'],
    // strapi: {
    //   url: process.env.STRAPI_URL || 'http://localhost:1337',
    //   prefix: '/api',
    //   admin: '/admin',
    //   version: 'v4',
    //   cookie: {},
    //   cookieName: 'strapi_jwt'
    // }
    runtimeConfig: {
        // The private keys which are only available server-side    
        NUXT_SECRET: process.env.NUXT_SECRET,
        // Default http://localhost:1337/api    
        STRAPI_BASE_URL: process.env.STRAPI_URL,
    },
    strapi: {
     url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    admin: '/admin',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
    // auth: {
    //     provider: {
    //         type: 'local'
    //     },
    //     baseURL: '/api/auth',
    //     endpoints: {
    //         signIn: { path: '/login', method: 'post' },
    //         signOut: { path: '/logout', method: 'post' },
    //         signUp: { path: '/register', method: 'post' },
    //         getSession: { path: '/session', method: 'get' }
    //     }
    // }
})