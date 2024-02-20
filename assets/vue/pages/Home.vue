<template>
    <div class="container-fluid h-100 w-100">
      <div class="row h-100 w-100">
        <!-- Panel Izquierdo: Visualización del Coche -->
        <div class="col-md-12  car-display d-flex flex-column justify-content-center align-items-center">
            <saludo nombre="Anto"></saludo>
            <h1 style="color: whitesmoke;">Toyota 86</h1>
            
          <div class="car-features d-flex justify-content-around flex-wrap">
            <!-- Tarjetas de características aquí -->
            <div class="feature card" v-for="feature in features" :key="feature.name">
              <div class="card-body d-flex align-items-center">
                <i :class="`fas ${feature.icon} feature-icon`"></i>
                <div>
                  <h5 class="card-title">{{ feature.name }}</h5>
                  <p class="card-text">{{ feature.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
import saludo from "../components/Saludo.vue"

export default {
    name: 'CarInterface',
    components: {
      saludo,
    },
    data() {
        return {
            features: [
                { name: 'Poder', value: '189 hp', icon: 'fa-horse' },
                { name: 'Consumo', value: '5.2 litros', icon: 'fa-gas-pump' },
                { name: 'Velocidad', value: '150 km', icon: 'fa-tachometer-alt' },
                { name: 'Aceleracion', value: '12.0 sec', icon: 'fa-stopwatch' },
                // Agrega aquí más características según sea necesario
            ],
            // Otros datos como el estado de la llamada
        };
    },
    
    // ... métodos, etc.
};
</script>