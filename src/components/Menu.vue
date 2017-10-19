<template>
  <v-list dense>
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>dashboard</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <router-link to="/Dashboard" style="text-decoration: none;">Dashboard</router-link>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>folder</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <router-link to="/Themes" style="text-decoration: none;">Themes</router-link>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-action>
        <!--<i class="fa fa-file" aria-hidden="true"></i>-->
        <v-icon>assignment</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <router-link to="/Cours" style="text-decoration: none;">Courses</router-link>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
  export default {
    name: 'menu',
    props: ['parent'],
  };
</script>
