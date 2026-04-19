<script setup lang="ts">
import { ref } from 'vue'
import cv_ano from '../assets/CV_anonymizer.png'

const projects = [
  {
    title: "SkillStack",
    description: "Application de réservation de ressources humaines",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBerm5zNYpL0TVm6vJjNMuQ_xEtbVkVvaEkbnHIGfOC68OlRgARsyZhmO2E7xyK2Xzb931vtQdaUA8YjuClTTkugJI_0IhURfeLqo4mytc79jbg7qC8SDrv1X6WHQ5JeRLu93WmZpR_GtjzftMA2hVwfRwg-Ru0WVO43cchvSkdLjTRKuYouSX3uh50Zu75MSUtad4uPMH_yBmRDV4Fo8hNKaTTFIqq7klhvB2X2oU9iEuytv9Go5DRo3zA29ba_IUPSaS0rgmQdOg4",
    tags: ["Spring Boot", "Vue.js", "CI/CD",],
    code: "https://github.com/alexxbout/hackathon-istic"
  },
  {
    title: "CV anomyzer",
    description: "Application d'anomymiser les informations personnelles sur un CV",
    image: cv_ano,
    tags: ["Node.js", "Vue.js","in progress"],
    code: "https://github.com/anh-human/CV-anonymizer"
  }
];
const video = ref(false)
</script>

<template>
  <section class="py-32 px-6 md:px-12 bg-surface-container-high" id="projects">
    <div class="max-w-screen-2xl mx-auto">
      <div class="flex justify-between items-end mb-16">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          class="text-3xl font-bold tracking-tight text-on-surface"
        >
          Selected Works
        </h2>
        <span class="text-secondary font-bold text-sm underline underline-offset-8 cursor-pointer hover:text-primary transition-colors">View All Projects</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          class="group bg-surface-container-lowest rounded-xl overflow-hidden hover:translate-y-[-8px] transition-all duration-500 shadow-sm hover:shadow-2xl"
        >
          <div class="aspect-video relative overflow-hidden">
            <img
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              :src="project.image"
              :alt="project.title"
              referrerPolicy="no-referrer"
            />
            <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div class="p-8 space-y-4">
            <h3 class="text-xl font-bold text-on-surface">{{ project.title }}</h3>
            <p class="text-sm text-on-surface-variant line-clamp-2 leading-relaxed">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="(tag, i) in project.tags" :key="i" class="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full text-[0.625rem] font-bold uppercase tracking-wider">
                {{ tag }}
              </span>
            </div>
            <div class="flex gap-4 pt-4">
              <button
                v-if="!project.tags.includes('in progress')"
                @click="video=!video"
                class="flex-1 py-2 bg-secondary-fixed text-on-secondary-fixed rounded text-xs font-bold uppercase tracking-widest hover:bg-secondary hover:text-on-secondary transition-all shadow-sm cursor-pointer"
              >
                Watch demo
              </button>
              <button class="flex-1 py-2 text-on-surface-variant border border-outline-variant rounded text-xs font-bold uppercase tracking-widest hover:border-secondary hover:text-secondary transition-all cursor-pointer">
                <a :href="project.code"> View Code</a>
              </button>
            </div>
            <object v-if="video">
              <video controls>
                <source src="../assets/demo-skillstack.mov" type="video/mp4" />
                Télécharger la vidéo
                <a href="/shared-assets/videos/flower.mp4">MP4</a>
                .
              </video>
            </object>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
