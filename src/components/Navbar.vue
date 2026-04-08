<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTheme } from '../composables/useTheme'

const { t, locale } = useI18n()
const { theme, toggleTheme } = useTheme()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'fr' : 'en'
}
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
        <a href="#education" class="text-on-surface-variant hover:text-secondary transition-colors duration-300">{{ t('navbar.education') }}</a>
        <a href="#experience" class="text-on-surface-variant hover:text-secondary transition-colors duration-300">{{ t('navbar.experience') }}</a>
        <a href="#projects" class="text-on-surface-variant hover:text-secondary transition-colors duration-300">{{ t('navbar.projects') }}</a>
        <button
          @click="toggleLanguage"
          class="text-on-surface-variant hover:text-secondary transition-colors duration-300 px-3 py-2 rounded"
        >
          {{ locale === 'en' ? 'FR' : 'EN' }}
        </button>
        <button
          @click="toggleTheme"
          class="text-on-surface-variant hover:text-secondary transition-colors duration-300 px-3 py-2 rounded"
        >
          <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
        <button
          v-motion
          :hovered="{ scale: 0.95 }"
          :tapped="{ scale: 0.9 }"
          class="primary-gradient text-on-primary px-6 py-2 rounded shadow-lg hover:shadow-xl transition-all cursor-pointer"
        >
          <a href="#footer">{{ t('navbar.contact') }}</a>
        </button>
      </div>
      <div class="md:hidden text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </div>
    </div>
  </nav>
</template>
