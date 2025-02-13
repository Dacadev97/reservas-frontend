<script setup lang="ts">
import { ref } from 'vue';
import api from '../services/api';
import { useRouter } from 'vue-router';

const router = useRouter();
const name = ref('');
const description = ref('');
const date = ref('');

const createEvent = async () => {
  try {
    await api.post('/events', { name: name.value, description: description.value, date: date.value });
    router.push('/');
  } catch (error) {
    console.error('Error al crear evento', error);
  }
};
</script>

<template>
  <div class="event-form">
    <h1>Crear Evento</h1>
    <form @submit.prevent="createEvent">
      <input v-model="name" placeholder="Nombre del evento" required />
      <textarea v-model="description" placeholder="Descripción" required></textarea>
      <input type="date" v-model="date" required />
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<style scoped>
.event-form {
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.event-form h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.event-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.event-form input,
.event-form textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.event-form button {
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.event-form button:hover {
  background-color: #2563eb;
}
</style>