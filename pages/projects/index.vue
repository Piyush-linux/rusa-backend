<script setup>
	import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
	import { useAuthStore } from '@/store/auth'; 
const { user } = storeToRefs(useAuthStore());
	let pj = [{
		img:"https://images.unsplash.com/photo-1704883800515-2e95381324f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
	},{
		img:"https://images.unsplash.com/photo-1506816422468-dc9bcb91c5f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
	}]
</script>
<template>
    <div class="">
        <!-- Header -->
        <header class="bg-white rounded-lg">
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="text-center sm:text-left">
                        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, {{ user.username }} !</h1>
                        <p class="mt-1.5 text-sm text-gray-500">Let's write a new blog post! 🎉</p>
                    </div>
                    <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <button class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring" type="button">
                            <span class="text-sm font-medium"> View Website </span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </button>
                        <button class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring" type="button">
                            Create Project
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <!-- Boady -->
        <!-- <div class="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8 mt-6">
            <div class="h-fit rounded-lg bg-gray-200">
        
            </div>
        </div> -->
        <section class=" mt-6" style="overflow-y: auto;height: 600px;">
            <div class="container px-6 py-10 mx-auto">
        <h1 class="mt-6 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">Projects  </h1>
        <div v-for="card in pj">
                <userCard :img="card.img" />
        </div>
            </div>
        </section>
    </div>
</template>