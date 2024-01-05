<script setup>
  const { data } = await useFetch('http://app.devshakti.tech:1337/api/projects')
  // const { find } = useStrapi()
  // const data = async () => await find('projects')
</script>

<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <!-- hello {{ data.hello }} -->
    hello {{ data.data }}
  </div>
</template>
