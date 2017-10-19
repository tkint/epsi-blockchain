<template>
  <div v-if="parent.isLog" class="cours">
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
    name: 'Cours',
    props: ['parent'],
    data() {
      return {
        msg: 'Courses',
      };
    },
  };
</script>
