import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
export default defineNuxtRouteMiddleware((to) => {
    // ----
    const strapi_user = useStrapiUser()
    const { authenticated, user } = storeToRefs(useAuthStore()); // make authenticated state reactive
    const browser_token = useCookie('strapi_token'); // get token from cookies 
    const strapi_token = useStrapiToken()

    console.log("Auth---")
    console.log(strapi_token)
    console.log(user)
    // console.log(browser_token.value)

    // if()

    if (strapi_token.value) {
        user.value = strapi_user;
        authenticated.value = true;

    } else {
        console.log("Nav Else")
        abortNavigation();
        return navigateTo("/login");
    }
});