<script setup>
    // ------
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '@/store/auth'; // import the auth store we just created

const router = useRouter();
const { logout } = useStrapiAuth()

// const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore());

const LogoutUser = () => {
        // logUserOut();
        authenticated.value = false ;        
        logout();
        router.push('/login');
    }
</script>
<template>
    <div class="">
        <!-- source https://gist.github.com/dsursulino/369a0998c0fc8c25e19962bce729674f -->
        <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
        <div class="bg-orange-100 min-h-screen">
            <div class="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
                <div class="flex items-center justify-between py-2 text-5x1">
                    <div class="font-bold text-blue-900 text-xl">Admin<span class="text-orange-600">Panel</span></div>
                    <div class="flex items-center text-gray-500">
                        <span class="material-icons-outlined p-2" style="font-size: 30px">search</span>
                        <span class="material-icons-outlined p-2" style="font-size: 30px">notifications</span>
                        <div class="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2" style="background-image: url(https://i.pinimg.com/564x/de/0f/3d/de0f3d06d2c6dbf29a888cf78e4c0323.jpg)"></div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row pt-24 px-10 pb-4">
                <div class="w-2/12 mr-6">
                    <div class="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                        <NuxtLink to="/profile" class="inline-block text-gray-600 hover:text-black my-4 w-full">
                            <span class="material-icons-outlined float-left pr-2">face</span>
                            Profile
                            <span class="material-icons-outlined float-right">keyboard_arrow_right</span>
                        </NuxtLink>
                        <NuxtLink to="/" class="inline-block text-gray-600 hover:text-black my-4 w-full">
                            <span class="material-icons-outlined float-left pr-2">dashboard</span>
                            Home
                            <span class="material-icons-outlined float-right">keyboard_arrow_right</span>
                        </NuxtLink>
                        <NuxtLink to="/projects" class="inline-block text-gray-600 hover:text-black my-4 w-full">
                            <span class="material-icons-outlined float-left pr-2">tune</span>
                            Projects
                            <span class="material-icons-outlined float-right">keyboard_arrow_right</span>
                        </NuxtLink>
                        <a href="" class="inline-block text-gray-600 hover:text-black my-4 w-full">
                            <span class="material-icons-outlined float-left pr-2">file_copy</span>
                            Another menu item
                            <span class="material-icons-outlined float-right">keyboard_arrow_right</span>
                        </a>
                        <a href="" class="inline-block text-gray-600 hover:text-black my-4 w-full">
                            <span class="material-icons-outlined float-left pr-2">file_copy</span>
                            Another menu item
                            <span class="material-icons-outlined float-right">keyboard_arrow_right</span>
                        </a>
                    </div>
                    <div class="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                        <a href="" class="inline-block text-gray-600 hover:text-black my-4 w-full">
                            <span class="material-icons-outlined float-left pr-2">settings</span>
                            Settings
                            <span class="material-icons-outlined float-right">keyboard_arrow_right</span>
                        </a>
                    </div>
                    <div class="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                        <div @click="LogoutUser" class="cursor-pointer inline-block text-gray-600 hover:text-black my-4 w-full">
                            <span class="material-icons-outlined float-left pr-2">power_settings_new</span>
                            Log out
                            <span class="material-icons-outlined float-right">keyboard_arrow_right</span>
                        </div>
                    </div>
                </div>
                <!-- Content  -->
                <div class="w-10/12">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>