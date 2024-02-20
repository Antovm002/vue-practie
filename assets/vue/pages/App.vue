<template>
    <nav>
        <router-link to="/">Home</router-link> | 
        <router-link to="/posts">Posts</router-link> | 
        <router-link to="/about">About</router-link> | 
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/auth">Access</router-link> |
        <router-link to="/social">Social</router-link>


    </nav>
    <div>
        <router-view></router-view>
    </div>
</template>
  
<script>
    export default {
        name: 'App'
    };
</script>
 
<style>

</style>