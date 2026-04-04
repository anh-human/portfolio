<script setup lang="ts">
const projects = [
  {
    title: "Quantum Analytics",
    description: "Real-time data visualization platform for crypto traders featuring interactive D3.js charts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBerm5zNYpL0TVm6vJjNMuQ_xEtbVkVvaEkbnHIGfOC68OlRgARsyZhmO2E7xyK2Xzb931vtQdaUA8YjuClTTkugJI_0IhURfeLqo4mytc79jbg7qC8SDrv1X6WHQ5JeRLu93WmZpR_GtjzftMA2hVwfRwg-Ru0WVO43cchvSkdLjTRKuYouSX3uh50Zu75MSUtad4uPMH_yBmRDV4Fo8hNKaTTFIqq7klhvB2X2oU9iEuytv9Go5DRo3zA29ba_IUPSaS0rgmQdOg4",
    tags: ["React", "D3.js", "Node"]
  },
  {
    title: "LuxeCart",
    description: "High-performance e-commerce engine with integrated Stripe payments and custom inventory management.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsw3cSH4qqp7xuo9F8ICAoFrJ3SGOjyr9W-_4ScOSS-xZpeEFfb7LExxgB4pkOiX-G2kXcASKD5XjXw5UsHKswsDE0BXQYKi60mlGcZYiwAt7dAAkYshASXiOot_1OBEyQhQk1bO250sKsbHHsmKZ9hUaH7SvE1URlf95xZGaW3m-I0R_lNhzHLCsc5tXVl4Cep99Kuc1Q05PAH2AxZZUn8exQ0fC_hMTcrLbSxcr3y2cxKD_5BoEaWSQd974YUXf6P4F9Bn_W89-3",
    tags: ["Next.js", "PostgreSQL", "Stripe"]
  },
  {
    title: "FlowTask",
    description: "Collaborative project management tool using WebSockets for instant state synchronization across teams.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWQrl2iw4AGAja3v25-gxlnLWkX_m13NX3-300oI_vnuawTSVXN3PuMdp5AyOZSsFGKmM9vyBLaQCtG0LyVQLVGXQKWzBUalcFPQbsZqOyrtH8XrIGr2iYFk_6ZkpVULGy8g8KuHmA7IQKZCf1_73VKxjnj7mYNsY0uo7QRoBC_TlL2Co3o7B3bP7e6Z0q0wtSFgRY0aVWEi_caySARuDxZx_5baCpvjFFyZlvkr-RvMh8jwG5RXg_0H5W5Znq0PqlixT8UtZZspUe",
    tags: ["Socket.io", "Express", "Redux"]
  }
];
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
              <button class="flex-1 py-2 bg-secondary-fixed text-on-secondary-fixed rounded text-xs font-bold uppercase tracking-widest hover:bg-secondary hover:text-on-secondary transition-all shadow-sm cursor-pointer">Live Demo</button>
              <button class="flex-1 py-2 text-on-surface-variant border border-outline-variant rounded text-xs font-bold uppercase tracking-widest hover:border-secondary hover:text-secondary transition-all cursor-pointer">View Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
