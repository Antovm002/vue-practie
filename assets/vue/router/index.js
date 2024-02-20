import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue'; 
import Posts from '../pages/Posts.vue'; 
import PostView from '../pages/PostView.vue'; 
import Auth from '../pages/AuthView.vue'; 
import Social from '../pages/Social.vue'; 

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/posts', component: Posts, name: 'allPosts'},
  { path: '/posts/:id', component: PostView, name: 'Posts' },
  { path: '/auth', component: Auth, name: 'auth'},
  { path: '/social', component: Social, name: 'social'}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;