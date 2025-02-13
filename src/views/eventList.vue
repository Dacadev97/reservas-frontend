<script setup lang="ts">
import { onMounted } from 'vue';
import { useEventStore } from '../stores/eventStore';

const eventStore = useEventStore();

onMounted(() => {
  eventStore.fetchEvents();
});

const handlePageChange = (page: number) => {
  eventStore.fetchEvents(page);
};
</script>

<template>
  <div class="event-list">
    <h1>Eventos Disponibles</h1>
    <ul v-if="eventStore.events && eventStore.events.length">
      <li v-for="event in eventStore.events" :key="event.id">
        <router-link :to="'/event/' + event.id">{{ event.name }}</router-link>
      </li>
    </ul>
    <div v-else>
      <p>No hay eventos disponibles.</p>
    </div>
    <div v-if="eventStore.pagination" class="pagination">
      <button @click="handlePageChange(eventStore.pagination.current_page - 1)" :disabled="eventStore.pagination.current_page === 1">
        Anterior
      </button>
      <span>Página {{ eventStore.pagination.current_page }} de {{ eventStore.pagination.last_page }}</span>
      <button @click="handlePageChange(eventStore.pagination.current_page + 1)" :disabled="eventStore.pagination.current_page === eventStore.pagination.last_page">
        Siguiente
      </button>
    </div>
  </div>
</template>

<style scoped>
.event-list {
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.event-list h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.event-list ul {
  list-style: none;
  padding: 0;
}

.event-list li {
  margin-bottom: 0.5rem;
}

.event-list a {
  text-decoration: none;
  color: #3b82f6;
}

.event-list a:hover {
  text-decoration: underline;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.pagination button {
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>