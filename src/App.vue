<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Vue 3 SPA" />
      <nav>
        <Counter />
      </nav>
    </div>
  </header>

  <main>
    <div class="card">
      <p>Built with Vite and TypeScript</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

main {
  padding: 2rem;
}

.card {
  padding: 2em;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 1rem 0;
}
</style>