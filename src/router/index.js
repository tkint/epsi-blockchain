import Vue from 'vue';
import Router from 'vue-router';
import Accueil from '@/components/Accueil';
import Dashboard from '@/components/Dashboard';
import Cours from '@/components/Cours';
import Diplome from '@/components/Diplome';
import Settings from '@/components/Settings';
import addCourses from '@/components/form/addCourses';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil,
      props: true,
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: true,
    },
    {
      path: '/Cours',
      name: 'Cours',
      component: Cours,
      props: true,
    },
    {
      path: '/Cours/add',
      name: 'Add Cours',
      component: addCourses,
      props: true,
    },
    {
      path: '/Diplome',
      name: 'Diplome',
      component: Diplome,
      props: true,
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings,
      props: true,
    },
  ],
});
