<script setup lang="ts">
// No specific logic needed
</script>

<template>
  <footer id="footer" class="w-full py-20 px-6 md:px-12 bg-surface-container-low border-t border-outline-variant/10">
    <div class="flex flex-col md:flex-row justify-between items-center gap-8 max-w-screen-2xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1 }"
        class="font-sans text-[0.6875rem] tracking-[0.05em] uppercase font-bold text-on-surface-variant/60"
      >
        © 2026 Huu Anh Nguyen. Developer Portfolio, handcrafted with precision.
      </div>
      <div class="flex gap-8 items-center font-sans text-[0.6875rem] tracking-[0.05em] uppercase font-bold">
        <a href="https://github.com/anh-human" class="text-on-surface-variant/60 hover:text-secondary transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/huuanh/" class="text-on-surface-variant/60 hover:text-secondary transition-colors">LinkedIn</a>
        <a href="mailto:anhnguyenhuu9a1@gmail.com" class="text-on-surface-variant/60 hover:text-secondary transition-colors">Mail to anhnguyenhuu9a1@gmail.com</a>
      </div>
    </div>
  </footer>
</template>
