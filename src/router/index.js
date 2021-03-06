import Vue from 'vue';
import Router from 'vue-router';
import Accueil from '@/components/Accueil';
import Dashboard from '@/components/Dashboard';
import Cours from '@/components/Cours';
import Themes from '@/components/Themes';
import Settings from '@/components/Settings';
import Theme from '@/components/Theme';
import addCourses from '@/components/form/addCourses';
import addThemes from '@/components/form/addThemes';
import addQcm from '@/components/form/addQcm';

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
      path: '/Themes',
      name: 'Themes',
      component: Themes,
      props: true,
    },
    {
      path: '/Themes/add',
      name: 'Add Themes',
      component: addThemes,
      props: true,
    },
    {
      path: '/Cours/',
      name: 'Cours Liste',
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
      path: '/Cours/:id',
      name: 'Cours',
      component: Cours,
      props: true,
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings,
      props: true,
    },
    {
      path: '/Theme/:title',
      name: 'Theme',
      component: Theme,
      props: true,
    },
    {
      path: '/add-qcm',
      name: 'Add QCM',
      component: addQcm,
      props: true,
    },

  ],
});
