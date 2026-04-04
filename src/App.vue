<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Education from "./components/Education.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="min-h-screen bg-background selection:bg-secondary/20 selection:text-secondary">
    <Navbar />
    <main>
      <Hero />
      <Education />
      <Experience />
      <Projects />
    </main>
    <Footer />
  </div>
</template>
