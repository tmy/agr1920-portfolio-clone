import Vue from 'vue';
import Router from 'vue-router';
import AboutPage from '@/components/AboutPage';
import WorksPage from '@/components/WorksPage';
import BlogPage from '@/components/BlogPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'About',
      component: AboutPage,
    },
    {
      path: '/works',
      name: 'Works',
      component: WorksPage,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogPage,
    },
  ],
});
