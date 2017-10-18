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
      // Children is just another route definition of sub-routes.
      children: [
        {
          // Note: No leading slash. This can trip people up sometimes.
          path: 'add',
          component: addCourses,
        },
      ],
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
