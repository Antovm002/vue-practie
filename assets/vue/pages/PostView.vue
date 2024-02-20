<template>
    <div class="container mt-5 w-100">
        <div class="rounded card list-group-item m-3">
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
            <button style="background-color: rgb(221, 221, 221); border-radius:10px; border:none; padding: 7px;"><router-link :to="{name: 'allPosts'}"> Back </router-link></button>

        </div>        
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import PostService from '../../services/PostService';
import { useRoute } from 'vue-router';

const car = ref({});

const fetchCar = async (carId) => {
    const service = new PostService();
    await service.fetchAll();
    
    const data = service.getPostById(carId); 

    car.value = data;
};

onMounted(() => {
    const route = useRoute();
    const carId = route.params.id

    fetchCar(carId)
});
</script>