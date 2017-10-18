<template>
  <div v-if="this.$parent.isLog" class="dashboard">
    <h2>{{ msg }}</h2>
  </div>
  <div class="text-xs-center" v-else>
    <v-alert color="info" icon="info" value="true">
      You can Loggin to acces to this page.
    </v-alert>
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
