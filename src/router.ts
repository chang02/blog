import Vue from 'vue';
import Router from 'vue-router';
import Profile from '@/views/Profile.vue';
import Resume from '@/views/Resume.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
    },
  ],
});
