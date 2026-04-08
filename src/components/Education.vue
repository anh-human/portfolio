<script setup lang="ts">
import { Code, Database, Cloud, Award } from "lucide-vue-next";
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="py-32 px-6 md:px-12 bg-surface-container-low" id="education">
    <div class="max-w-screen-2xl mx-auto">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        class="text-3xl font-bold mb-16 tracking-tight text-on-surface"
      >
        {{ t('education.title') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visible-once="{ opacity: 1, x: 0 }"
          class="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl shadow-sm"
        >
          <div class="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h3 class="text-2xl font-bold text-on-surface">{{ t('education.degree') }}</h3>
              <p class="text-secondary font-semibold">{{ t('education.university') }}</p>
            </div>
            <span class="bg-surface-variant px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-on-surface-variant mt-4 md:mt-0">{{ t('education.period') }}</span>
          </div>
          <p class="text-on-surface-variant mb-8 text-lg leading-relaxed">
            {{ t('education.description') }}
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="bg-surface p-4 rounded-lg flex flex-col items-center text-center">
              <Code class="text-primary mb-2 w-6 h-6" />
              <p class="text-sm font-bold text-on-surface">{{ t('education.webDev') }}</p>
            </div>
            <div class="bg-surface p-4 rounded-lg flex flex-col items-center text-center">
              <Database class="text-primary mb-2 w-6 h-6" />
              <p class="text-sm font-bold text-on-surface">{{ t('education.dataStructures') }}</p>
            </div>
            <div class="bg-surface p-4 rounded-lg flex flex-col items-center text-center">
              <Cloud class="text-primary mb-2 w-6 h-6" />
              <p class="text-sm font-bold text-on-surface">{{ t('education.distributedSystems') }}</p>
            </div>
          </div>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :visible-once="{ opacity: 1, x: 0 }"
          class="bg-primary-container p-10 rounded-xl text-on-primary-container flex flex-col justify-center items-center text-center shadow-lg"
        >
          <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 shadow-inner">
            <Award class="text-on-primary w-10 h-10" />
          </div>
          <h4 class="text-xl font-bold mb-2">{{ t('education.expertise') }}</h4>
          <p class="text-sm opacity-80 uppercase tracking-widest font-bold">{{ t('education.tech') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
