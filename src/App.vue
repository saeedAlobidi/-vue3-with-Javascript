<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <br/>
    
  </div>
  
    <br/>
  <router-view/>
</template>

<script>
  import js from "@/page/views/app/main.js";
    export default js;

</script>

<style>
 @import './page/views/app/style.css';
</style>
