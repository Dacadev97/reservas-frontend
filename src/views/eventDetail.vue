<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import api from '../services/api';

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
}

const route = useRoute();
const event = ref<Event | null>(null);

onMounted(async () => {
  try {
    const response = await api.get(`/events/${route.params.id}`);
    event.value = response.data;
  } catch (error) {
    console.error('Error al cargar evento', error);
  }
});
</script>

<template>
  <div v-if="event" class="event-detail">
    <h1 class="event-title">{{ event.name }}</h1>
    <p class="event-description">{{ event.description }}</p>
    <p class="event-date"><strong>Fecha:</strong> {{ event.date }}</p>
  </div>
</template>

<style scoped>
.event-detail {
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.event-title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.event-description {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.event-date {
  font-size: 1rem;
  color: #555;
}
</style>