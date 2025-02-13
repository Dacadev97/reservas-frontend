import { defineStore } from 'pinia';
import api from '../services/api';
import { ref } from 'vue';

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  location: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

interface Pagination {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export const useEventStore = defineStore('eventStore', () => {
  const events = ref<Event[]>([]);
  const pagination = ref<Pagination | null>(null);

  async function fetchEvents(page = 1) {
    try {
      const response = await api.get(`/events?page=${page}`);
      events.value = response.data.data;
      pagination.value = {
        current_page: response.data.current_page,
        last_page: response.data.last_page,
        per_page: response.data.per_page,
        total: response.data.total,
      };
    } catch (error) {
      console.error('Error al cargar eventos', error);
    }
  }

  return { events, pagination, fetchEvents };
});