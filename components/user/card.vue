<script setup>
	let props = defineProps(["img"])
</script>
<template>
    <div class="">
      <div class="mt-8 bg-white py-6 rounded-lg lg:-mx-6 lg:flex lg:items-center">
                    <img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" :src="img" alt="">
                    <div class="lg:w-1/2 lg:mt-0 lg:mx-6 ">
                        <p class="text-sm text-blue-500 uppercase">category</p>
                        <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline">
                            All the features you want to know
                        </a>
                        <p class="mt-3 text-sm text-gray-500 md:text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                            laudantium quia tempore delect
                        </p>
                        <a href="#" class="inline-block text-blue-500 underline hover:text-blue-400 my-3">Read more</a>
                        <div class="flex items-center">
                            <img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="">
                            <div class="mx-4">
                                <h1 class="text-sm text-gray-700 ">Amelia. Anderson</h1>
                                <p class="text-sm text-gray-500 ">Lead Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
</template>