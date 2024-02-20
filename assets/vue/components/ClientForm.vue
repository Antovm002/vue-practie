<template>
    <div class="container">
        <!-- Form Section -->
        <div class="row">
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Name</label>
                    <input type="text" class="form-control" id="nombre" name="nombre" required v-model="client.clientName">
                </div>
                <div class="mb-3">
                    <label for="apellido" class="form-label">Surname</label>
                    <input type="text" class="form-control" id="apellido" name="apellido" required v-model="client.surname">
                </div>
                <div class="mb-3">
                    <label for="dni" class="form-label">DNI</label>
                    <input type="text" class="form-control" id="dni" name="dni" required v-model="client.dni">
                </div>
                <div class="mb-3">
                    <label for="autos" class="form-label">Favorite Cars</label>
                    <input type="text" class="form-control" id="autos" name="autos" required v-model="favCar">
                    <button type="submit" class="btn btn-primary mt-2" @click="handleFavCar">Add</button>
                </div>
                <div>
                    <!--SHOW FAV CARS LIST-->
                    <ul class="list-group list-group-flush">
                        <li v-for="(car, index) in client.favCars" v-bind:key="index">{{ car }}</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="docEntregado" name="docEntregado" v-model="client.doc">
                        <label class="form-check-label" for="docEntregado">¿Document delivered?</label>
                        <button type="submit" class="btn btn-primary mt-2" @click="handleAddClient()">Add Client</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Clients List Section -->
        <h1>Clients List:</h1>
        <div v-for="person in clients" :key="person.dni">
            <div class="list-group">
                <li class="list-group-item">
                    <b>client info:</b> <br>
                    <b>name:</b> {{ person.clientName }} <br>
                    <b>surname:</b> {{ person.surname }} <br>
                    <b>dni:</b> {{ person.dni }} <br>

                    <b>Favorite Cars:</b>
                    <ul class="list-group">
                        <li v-for="(item, index) in person.favCars" :key="index" class="list-group-item">{{ item }}</li>
                    </ul>
                    <p v-if="person.doc"> <b>Document status:</b> Delivered.</p>
                    <p v-else><b>Document status:</b> Undelivered.</p>
                    <button @click="deleteClient(person)" class="btn btn-outline-danger">Delete</button>
                </li>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

let client = ref({
    clientName: '',
    surname: '',
    dni: '',
    favCars: [],
    doc: false
})

let clients = ref([])

let favCar = ref([])

//function that push favCar to favCars.
const handleFavCar = () => {
    client.value.favCars.push(favCar.value)
    favCar.value = ""
}

//push to clients array a new object no-reactive 
//that stays stored and it will not gonna be updated.
//to the properties we asign the value of the reactive-propertie
// what has at that time.
const handleAddClient = () => {
    clients.value.push({
        clientName: client.value.clientName,
        surname: client.value.surname,
        dni: client.value.dni,
        favCars: client.value.favCars,
        doc: client.value.doc
    })
    client.value.clientName = ""
    client.value.surname = ""
    client.value.dni = ""
    client.value.favCars = []
    client.value.doc = false
}

const deleteClient = () => {
    clients.value.splice(clients.value.indexOf(client), 1);
}

</script>

<style scoped></style>