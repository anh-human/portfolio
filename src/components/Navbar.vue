<script setup lang="ts">
// No specific logic needed for now
</script>

<template>
  <nav class="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/10">
    <div class="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :enter="{ opacity: 1, x: 0 }"
        class="text-xl font-black text-primary tracking-tighter"
      >
        Huu Anh Nguyen
      </div>
      <div class="hidden md:flex gap-8 items-center font-sans tracking-tight text-sm uppercase font-semibold">
        <a href="#education" class="text-on-surface-variant hover:text-secondary transition-colors duration-300">Education</a>
        <a href="#experience" class="text-on-surface-variant hover:text-secondary transition-colors duration-300">Experience</a>
        <a href="#projects" class="text-on-surface-variant hover:text-secondary transition-colors duration-300">Projects</a>
        <button
          v-motion
          :hovered="{ scale: 0.95 }"
          :tapped="{ scale: 0.9 }"
          class="primary-gradient text-on-primary px-6 py-2 rounded shadow-lg hover:shadow-xl transition-all cursor-pointer"
        >
          <a href="#footer">Contact me</a>
        </button>
      </div>
      <div class="md:hidden text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </div>
    </div>
  </nav>
</template>
