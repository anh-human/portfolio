<script setup lang="ts">
const experiences = [
  {
    period: "Sept 2024 - Sept 2025",
    role: "Full-Stack Developer",
    company: "Blueway, Vannes (Alternance)",
    points: [
      "Maintained and evolved 5 microservices out of 30 on the platform, implementing new features and improvements.",
      "Migrated 5 services from Vue 2 to Vue 3, modernizing ~100 screens with updated UI components.",
      "Improved backend test coverage from 67% to 84% through unit testing and TDD practices.",
      "Ensured 100% of services have automated CI/CD workflows for reliable deployments."
    ]
  },
  {
    period: "Jun 2024 - Aug 2024",
    role: "Backend Developer",
    company: "Les 1001 Clicks (Stage)",
    points: [
      "Designed and developed the backend architecture for an e-commerce platform.",
      "Implemented RESTful APIs and database schemas for product management and order processing.",
      "Collaborated with frontend team on API integration and data structure optimization."
    ]
  },
  {
    period: "May 2022 - Jul 2022",
    role: "QA Tester",
    company: "FPT Software, Hanoi (Stage)",
    points: [
      "Participated in backend implementation of an ERP application.",
      "Conducted functional and integration testing of core business modules.",
      "Reported and tracked critical bugs through the development lifecycle."
    ]
  }
];
</script>

<template>
  <section class="py-32 px-6 md:px-12 bg-surface" id="experience">
    <div class="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div class="lg:col-span-4">
        <h2
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visible-once="{ opacity: 1, x: 0 }"
          class="text-3xl font-bold tracking-tight text-on-surface lg:sticky lg:top-32"
        >
          Experience <br/><span class="text-secondary">& Professional Growth</span>
        </h2>
      </div>
      <div class="lg:col-span-8 space-y-24">
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 200 } }"
          class="relative pl-8"
        >
          <div class="absolute left-0 top-2 w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(113,42,226,0.5)]"></div>
          <div class="mb-2">
            <span class="font-sans text-[0.6875rem] tracking-[0.05em] uppercase font-bold text-on-surface-variant">{{ exp.period }}</span>
          </div>
          <h3 class="text-2xl font-bold text-on-surface">{{ exp.role }}</h3>
          <p class="text-primary font-bold mb-6">{{ exp.company }}</p>
          <ul class="space-y-4 text-on-surface-variant leading-relaxed">
            <li v-for="(point, i) in exp.points" :key="i" class="flex gap-4">
              <span class="text-tertiary font-black text-xl leading-none">•</span>
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
