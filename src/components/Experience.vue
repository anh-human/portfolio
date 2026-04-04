<script setup lang="ts">
const experiences = [
  {
    period: "Jan 2024 - Present",
    role: "Junior Full-Stack Developer",
    company: "InnovateTech Solutions",
    points: [
      "Developed and maintained scalable RESTful APIs using Node.js and Express, reducing server response times by 15%.",
      "Collaborated with UI/UX designers to translate Figma mockups into pixel-perfect React components.",
      "Optimized database queries in PostgreSQL, improving dashboard loading speed for enterprise clients."
    ]
  },
  {
    period: "Jun 2023 - Dec 2023",
    role: "Software Engineering Intern",
    company: "CloudStream Media",
    points: [
      "Implemented automated testing suites using Jest and RTL, achieving 85% code coverage on core modules.",
      "Assisted in the migration of legacy monolithic architecture to a microservices-based approach.",
      "Debugged critical production issues during sprint cycles, working closely with senior mentors."
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
