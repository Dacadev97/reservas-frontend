<script setup lang="ts">
import { ref } from 'vue';
import api from '../services/api';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const userName = ref('');
const userEmail = ref('');
const seats = ref(1);

const makeReservation = async () => {
  try {
    await api.post(`/events/${route.params.id}/reservations`, {
      user_name: userName.value,
      user_email: userEmail.value,
      seats: seats.value,
    });
    router.push('/');
  } catch (error) {
    console.error('Error al reservar', error);
  }
};
</script>

<template>
  <div class="reservation-form">
    <h1>Reservar Evento</h1>
    <form @submit.prevent="makeReservation">
      <input v-model="userName" placeholder="Nombre" required />
      <input v-model="userEmail" type="email" placeholder="Correo" required />
      <input v-model="seats" type="number" min="1" required />
      <button type="submit">Reservar</button>
    </form>
  </div>
</template>

<style scoped>
.reservation-form {
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.reservation-form h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.reservation-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.reservation-form input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.reservation-form button {
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.reservation-form button:hover {
  background-color: #2563eb;
}
</style>