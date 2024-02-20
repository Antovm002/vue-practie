<template>
    <div class="container bg-light h-100 w-100">
        <h1>Register Page</h1>
        <p>This is the Register Page.</p>

        <info></info>
        <saludo nombre="usuario"></saludo>
    </div>

    <div class="card text-bg-dark mb-3">
        <ul class="list-group list-group-flush">
            <li v-for="user in users">
                name: {{ user.name }} - email: {{ user.email }}
                <button v-on:click="deleteUser(user)" class="btn btn-outline-danger">Delete</button>
                <hr>
            </li>
        </ul>
        <!-- formulario clientes -->
        <client></client>
    </div>
</template>


<script>
import client from "../components/ClientForm.vue"
import info from "../components/Info.vue"
import saludo from "../components/Saludo.vue"

export default {
    name: 'CarInterface',
    components: {
        client,
        info,
        saludo
    },
    data() {
        return {
            users: [
                {
                    name: 'jose',
                    email: 'jose@mail.com'
                },
                {
                    name: 'maria',
                    email: 'maria@mail.com'
                },
                {
                    name: 'juan',
                    email: 'juan@mail.com'
                }
            ],
            newUser: {}
        }
    },
    methods: {
        addUser() {
            if (this.newUser.name !== undefined && this.newUser.email !== undefined) {
                this.users.push(this.newUser);
                this.newUser = {};
            } else {
                alert('agregue datos para continuar.');
            }
        },
        deleteUser(user) {
            this.users.splice(this.users.indexOf(user), 1);
        }
    }
};
</script>