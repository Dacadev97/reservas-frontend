import { createRouter, createWebHistory } from 'vue-router';
import EventList from '../views/eventList.vue';
import EventDetail from '../views/eventDetail.vue';
import EventForm from '../views/eventForm.vue';
import ReservationForm from '../views/reservationForm.vue';

const routes = [
  { path: '/', component: EventList },
  { path: '/event/:id', component: EventDetail, props: true },
  { path: '/event/create', component: EventForm },
  { path: '/reservation/:id', component: ReservationForm, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;