import { createApp } from 'vue';
import App from './pages/App.vue';
import router from './router';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDuLvOYWTA_Qpw8uly0_KkQjtwoFWybiRM",
    authDomain: "curso-vue3-874c4.firebaseapp.com",
    projectId: "curso-vue3-874c4",
    storageBucket: "curso-vue3-874c4.appspot.com",
    messagingSenderId: "571563376971",
    appId: "1:571563376971:web:17428e6e92e206dc6668ce"
};

const firebaseApp = initializeApp(firebaseConfig);

createApp(App).use(router).use(firebaseApp).mount('#app');