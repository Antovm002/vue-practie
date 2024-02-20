<template>
    <h1>Social Login:</h1>
    <button @click="loginGoogle">Login with Google</button>
    <button>Login with Facebook</button>
    <button>Login with Twitter</button>
    <button>Login with Github</button>

</template>
<script setup>
    import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const loginGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken;
            alert("Login with Success")
        })
        .catch((error) => {
            alert("Login Failed :( error: "+error)
        })
    }

</script>