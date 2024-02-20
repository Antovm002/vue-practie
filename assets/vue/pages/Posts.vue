<template>
    <h1 style="color: whitesmoke;">POSTS:</h1>

    <posts></posts>

</template>

<script>
    import posts from "../components/PostList.vue"
    export default {
    name: 'PostsListed',
    components: {
      posts
       }
    }
</script>