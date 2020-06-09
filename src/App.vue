<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link>
    </div>
    <div class="bg-light">
      <router-view/>
    </div>
    
  </div>
</template>

<style>

</style>
