<template>
    <div class="container">
        <h2 class="mt-5">Inicio de Sesión</h2>
        <form>
            <div class="form-group">
                <label for="email">Correo Electrónico:</label>
                <input type="email" class="form-control" placeholder="Ingresa tu correo electrónico" name="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label>Contraseña:</label>
                <input type="password" class="form-control" placeholder="Ingresa tu contraseña" name="pswd" v-model="password" required>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="authUser">Enviar</button>
        </form>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

    let email = ref("")
    let password = ref("")

    const authUser = () => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email.value, password.value).then((el) =>{
            console.log(el);
            alert("Logueado con Exito!")
        })
        .catch((error) => {
            alert("hubo un Error: " + error.message)
        })
    }

</script>