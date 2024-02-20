<template>
    <h1>{{saludar(nombre)}}</h1>
    <h1  style="color: whitesmoke;">{{ msg }}</h1>
</template>

<script>
export default {
    props: {
        nombre: {
        required: true
        }
    },
    data() {
        return {
            msg: '...'
        }
    },
    methods: {
        saludar(nombre) {
            this.msg = 'Hola ' + nombre + ' como estas?'  
        }
    }
};
</script>