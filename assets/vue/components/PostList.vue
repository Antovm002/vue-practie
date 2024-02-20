<template>
    <div class="container mt-5 w-100">
      <div class="row">
        <div class="col-12">
          <ul class="row d-flex justify-content-center">
            <router-link v-for="car in posts" :key="car.id" :to="{name: 'Posts', params: {'id': car.id}}"  class="rounded card list-group-item m-3 col-md-3">
              <h5 class="mb-1">{{ car.car }} {{ car.car_model }} ({{ car.car_model_year }})</h5>
              <p class="mb-1">Color: {{ car.car_color }}</p>
              <p class="mb-1">VIN: {{ car.car_vin }}</p>
              <p class="mb-1">Price: {{ car.price }}</p>
              <p class="mb-0">Availability: 
                <span v-if="car.availability" class="text-success">
                  <i class="fas fa-check-circle"></i> Available
                </span>
                <span v-else class="text-danger">
                  <i class="fas fa-times-circle"></i> Not Available
                </span>
              </p>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import PostService from '../../services/PostService';

// Utilizamos ref para crear una referencia reactiva para los posts
const posts = ref([]);

// Ahora definimos la función fetchPosts como una función regular
// La lógica de inicialización del servicio y la obtención de los posts se maneja aquí
const fetchPosts = async () => {
    const service = new PostService();
    await service.fetchAll(); // Asegúrate de esperar la finalización de fetchAll antes de obtener los posts

    const data = service.getPosts(); // Actualizamos la referencia de posts con los nuevos valores
    posts.value = data.cars;
};

// onMounted se utiliza para ejecutar fetchPosts cuando el componente se monta
onMounted(fetchPosts);
</script>