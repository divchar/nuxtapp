<template>
  <div class="container">
    <div class="flex justify-between items-center py-4">
      <NuxtLink to="/">
        <div class="flex items-center space-x-2">
          <Icon name="ic:baseline-app-registration" class="h-10 w-10" />
          <h1 class="text-3xl font-black">Logo</h1>
        </div>
      </NuxtLink>
      <div class="flex items-center space-x-2">
        <p>Login</p>
        <DarkMode />
      </div>
    </div>
  </div>
</template>

<script setup>
// const colorMode = useColorMode();
// console.log(colorMode.preference);
</script>

<style></style>
