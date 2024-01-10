import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
export default defineNuxtRouteMiddleware((to) => {
    // ----
    const user = useStrapiUser()
    const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
    const browser_token = useCookie('strapi_jwt'); // get token from cookies
    const strapi_token = useStrapiToken()

    console.log("Auth---")
    console.log(strapi_token.value)
    console.log(user)
    console.log(browser_token.value)


    if (authenticated.value) {
    // route : / 
        // console.log("authenticated")
        return
    }else{

        return navigateTo('/login');
    } 

    // if (strapi_token.value) {
    //     abortNavigation();
    // }

});