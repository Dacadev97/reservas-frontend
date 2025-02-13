<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div id="app">
    <header id="header">
      <nav id="nav">
        <h1 id="title">Gestión de Eventos</h1>
        <ul id="nav-links">
          <li><RouterLink to="/">Eventos</RouterLink></li>
          <li><RouterLink to="/reservation/:id">Reservar</RouterLink></li>
          <li><RouterLink to="/event/create">Crear Evento</RouterLink></li>
        </ul>
      </nav>
    </header>

    <main id="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  background-color: #f3f4f6; /* bg-gray-100 */
  color: #1f2937; /* text-gray-900 */
  font-family: 'Arial', sans-serif;
}

#header {
  background-color: #3b82f6; /* bg-blue-600 */
  color: white;
  padding: 1rem;
}

#nav {
  max-width: 1280px; /* container mx-auto */
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#title {
  font-size: 1.5rem; /* text-2xl */
  font-weight: bold;
}

#nav-links {
  display: flex;
  gap: 1rem;
  list-style: none;
}

#nav-links li a {
  text-decoration: none;
  color: white;
}

#nav-links li a:hover {
  text-decoration: underline;
}

#main {
  max-width: 1280px; /* container mx-auto */
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
}
</style>