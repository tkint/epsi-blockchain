<template>
  <div class="settings">
    <div v-if="parent.isLog">
      <h2>{{ msg }}</h2>
    </div>
    <div class="text-xs-center" v-else>
      <v-alert color="info" icon="info" value="true">
        You can Loggin to acces to this page.
      </v-alert>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Dashboard',
    props: ['parent'],
    data() {
      return {
        msg: 'Settings',
      };
    },
  };
</script>
