<script setup>
	definePageMeta({
    	middleware: 'auth'
    }) // this should match the name of the file inside the middleware directory 
	
	let user = "User"
</script>
<template>
	<div class="">
		I N D E X : {{ user }}

		<br/>
		<br/>
		<hr/>
		<br/>
		<button class="button bg-red-500 text-white font-bold px-3 py-2 rounded-md">Logout</button>

	</div>
</template>