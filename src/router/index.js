import Vue from 'vue';
import Router from 'vue-router';
import Accueil from '@/components/Accueil';
import Dashboard from '@/components/Dashboard';
import Cours from '@/components/Cours';
import Diplome from '@/components/Diplome';
import Settings from '@/components/Settings';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil,
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/Cours',
      name: 'Cours',
      component: Cours,
    },
    {
      path: '/Diplome',
      name: 'Diplome',
      component: Diplome,
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings,
    },
  ],
});
