<script setup lang="ts">
import { ref } from 'vue'
import './styles.css'

import Header from './components/Header.vue'
import ProjectsGrid from './components/ProjectsGrid.vue'

import { projects as sampleProjects } from './data/projects'

const projects = ref(sampleProjects)
const activeTags = ref<string[]>([])
const query = ref('')

const mainStack = ['Vue', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Linux']
const secondaryStack = ['Java', 'Spring Boot', 'React', 'MySQL']
const methodologies = ['Agile', 'TDD', 'Cycle en V', 'CI/CD', 'REST']
const others = ['Python', 'Bash']
const languages = ['Français C1', 'Anglais C1 (920 TOEIC)', 'Vietnamien natif']
</script>

<template>
  <v-app>
    <Header />
    <main class="container">
      <section class="hero">
        <h1 class="text-h3">Huu Anh Nguyen - Développeur full stack</h1>
        <p class="text-body-1">Développeur habitué à travailler sur des architectures microservices et des pipelines CI/CD, motivé pour intégrer et maintenir des solutions SI. Titulaire d'un master en Ingénierie Logiciel.</p>
      </section>

      <h2>Expériences</h2>
      <div class="experience-item">
        <h3>Alternance : Développeur Fullstack chez Blueway à Vannes (9/2024 – 9/2025)</h3>
        <div class="experience-details">
          <p>Maintenance et évolution des microservices : 5 évolutions sur 30 microservices</p>
          <p>Refonte des interfaces utilisateur (frontend) : migration de 5 services de Vue 2 vers Vue 3, soit ~100 écrans avec l'UI moderne</p>
          <p>Mise à jour du backend, écriture de tests unitaires : taux de couverture moyen passé de 67% à 84%</p>
          <p>Assure le bon fonctionnement du pipeline CI/CD : 100% des services ont un workflow automatisé</p>
          <div class="chips">
            <v-chip v-for="tech in ['Vue', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Docker']" :key="tech" small>{{ tech }}</v-chip>
          </div>
        </div>
      </div>
      <div class="experience-item">
        <h3>Stage en distanciel chez Les 1001 Clicks (6/2024 – 8/2024)</h3>
        <div class="experience-details">
          <p>Conception et développement du back-end d'un site e-commerce</p>
          <div class="chips">
            <v-chip v-for="tech in ['JavaScript', 'Node.js', 'MongoDB']" :key="tech" small>{{ tech }}</v-chip>
          </div>
        </div>
      </div>
      <div class="experience-item">
        <h3>Stage chez FPT Software à Hanoi (5/2022 – 7/2022)</h3>
        <div class="experience-details">
          <p>Participation à l'implémentation du back-end d'une application ERP</p>
          <div class="chips">
            <v-chip v-for="tech in ['JavaScript', 'Node.js', 'Jest']" :key="tech" small>{{ tech }}</v-chip>
          </div>
        </div>
      </div>

      <section class="section">
        <h2>Formations</h2>
        <p>Master Ingénierie Logiciel | Université de Rennes | 2023–2025</p>
        <p>Licence Informatique | Université de Rennes 1 | 2018–2022</p>
      </section>

      <section class="section">
        <h2>Compétences Techniques</h2>
        <div>
          <strong>Stack principale :</strong>
          <div class="chips">
            <v-chip v-for="skill in mainStack" :key="skill" small>{{ skill }}</v-chip>
          </div>
        </div>
        <div>
          <strong>Stack secondaire :</strong>
          <div class="chips">
            <v-chip v-for="skill in secondaryStack" :key="skill" small>{{ skill }}</v-chip>
          </div>
        </div>
        <div>
          <strong>Méthodologies :</strong>
          <div class="chips">
            <v-chip v-for="methodology in methodologies" :key="methodology" small>{{ methodology }}</v-chip>
          </div>
        </div>
        <div>
          <strong>Autres :</strong>
          <div class="chips">
            <v-chip v-for="other in others" :key="other" small>{{ other }}</v-chip>
          </div>
        </div>
        <div>
          <strong>Langues :</strong>
          <div class="chips">
            <v-chip v-for="language in languages" :key="language" small>{{ language }}</v-chip>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>Soft Skills</h2>
        <div class="chips">
          <v-chip v-for="skill in ['Communication', 'Travail en équipe / Collaboration', 'Résolution de problèmes', 'Adaptabilité / Curiosité', 'Gestion de stress et des priorités']" :key="skill" small>{{ skill }}</v-chip>
        </div>
      </section>

      <section class="section">
        <h2>Centres d'Intérêt</h2>
        <div class="chips">
          <v-chip v-for="interest in ['Football', 'Coding', 'Cuisiner', 'Géopolitique']" :key="interest" small>{{ interest }}</v-chip>
        </div>
      </section>

      <ProjectsGrid :projects="projects" :tags="activeTags" :query="query" />
      <footer class="footer">
        <div>© {{ new Date().getFullYear() }} HUU ANH NGUYEN — built with Vue + Vite</div>
      </footer>
    </main>
  </v-app>
</template>

<style scoped>
.container { padding-bottom: 40px; }
.hero { margin-top: 24px; }
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}
</style>
