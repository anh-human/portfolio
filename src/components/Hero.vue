<script setup lang="ts">
import { ref } from 'vue'
import pic from '../assets/pic.jpg'

</script>

<template>
  <section class="min-h-[80vh] flex items-center px-6 md:px-12 max-w-screen-2xl mx-auto pt-32 pb-20">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="lg:col-span-7 space-y-8"
      >
        <div class="space-y-4">
          <span class="font-sans text-[0.6875rem] tracking-[0.05em] uppercase font-bold text-secondary">Available for Hire</span>
          <h1 class="text-5xl md:text-7xl font-bold tracking-[-0.02em] leading-tight text-on-surface">
            Crafting Scalable <span class="text-secondary">Full-Stack</span> Solutions.
          </h1>
          <p class="text-lg text-on-surface-variant leading-relaxed max-w-xl">
            A fresh developer with a curator's eye for clean code and seamless user experiences. Specializing in modern web architectures and robust backend systems.
          </p>
        </div>
        <div class="flex flex-wrap gap-4">
          <a
            v-motion
            :hovered="{ scale: 0.98 }"
            :tapped="{ scale: 0.95 }"
            class="primary-gradient text-on-primary px-8 py-4 rounded-lg font-bold shadow-lg cursor-pointer"
            href="CV_2026-04_HuuAnhNGUYEN.pdf"
            target="_blank"
          >
            Show CV
          </a>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 800, delay: 200 } }"
        class="lg:col-span-5 relative"
      >
        <div class="aspect-square rounded-full bg-surface-container-high overflow-hidden shadow-2xl relative z-10 border-8 border-surface-container-lowest/20">
          <img
            class="w-full h-full object-cover"
            :src="pic"
            alt="Professional headshot"
            referrerPolicy="no-referrer"
          />
        </div>
        <div class="absolute -top-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  </section>
</template>
