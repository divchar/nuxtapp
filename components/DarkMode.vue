<script setup>
const colorMode = useColorMode();
const onClick = () =>
  (colorMode.preference = colorMode.value === "light" ? "dark" : "light");
</script>

<template>
  <main>
    <ColorScheme placeholder="" tag="span">
      <button
        aria-label="Color Mode"
        class="flex items-center space-x-3 py-2 px-4"
        @click="onClick"
      >
        <Icon
          v-if="colorMode.value === 'dark'"
          name="heroicons:moon"
          class="text-xl"
        />
        <Icon v-else name="heroicons:sun" class="text-xl" />
      </button>
    </ColorScheme>
  </main>
</template>
