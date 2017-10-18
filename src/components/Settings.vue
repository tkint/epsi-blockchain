<template>
  <div class="dashboard">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Dashboard',
    data() {
      return {
        msg: 'Bienvenue sur la page des paramètres',
      };
    },
  };
</script>
