<script setup>
    definePageMeta({
        middleware: 'auth-user'
    })
    import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
    import { useAuthStore } from '~/store/auth'; // import the auth store we just created
    const { user } = storeToRefs(useAuthStore());
</script>
<template>
    <div class="h-full">
        <div class="flex items-center justify-center px-5 py-5 h-full">
            <div class="w-full max-w-xl px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white rounded-lg shadow-lg">
                <div class="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
                    <a href="#" class="relative block">
                        <img alt="profil" src="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Sunglasses&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Default&eyebrowType=SadConcerned&mouthType=Default&skinColor=Brown" class="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                </div>
                <div class="w-full mb-10">
                    <div class="h-3 text-3xl leading-tight text-left text-indigo-500">
                        
                        “
                        
                    </div>
                    <p class="px-5 text-sm text-center text-gray-600 ">
                        To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                    </p>
                    <div class="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
                        ”
                    </div>
                </div>
                <div class="w-full">
                    <p class="font-bold text-center text-indigo-500 text-md">
                        Component One
                    </p>
                    <p class="text-xs text-center text-gray-500 ">
                        @ {{ user.username }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>