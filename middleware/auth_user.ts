  import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
  import { useAuthStore } from '~/store/auth'; // import the auth store we just created
  export default defineNuxtRouteMiddleware((to) => {
      // ----
    
      const strapi_token = useStrapiToken()
      const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
      console.log("Auth---")

      const browser_token = useCookie('strapi_jwt'); // get token from cookies
      const strapi_token = useStrapiToken()

      if (!authenticated.value) {
          return navigateTo('/login');
      }
  });