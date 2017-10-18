<template>
    <v-list dense>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <router-link to="/Dashboard" v-list-tile-title style="text-decoration: none;">Dashboard</router-link>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="">
        <v-list-tile-action>
          <i class="fa fa-file" aria-hidden="true"></i>
        </v-list-tile-action>
        <v-list-tile-content>
          <router-link to="/Cours" v-list-tile-title style="text-decoration: none;">Courses</router-link>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
      <v-list-tile-action>
        <i class="fa fa-graduation-cap" aria-hidden="true"></i>
      </v-list-tile-action>
      <v-list-tile-content>
        <router-link to="/Diplomes" v-list-tile-title style="text-decoration: none;">Diplomas</router-link>
      </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <router-link to="/Settings" v-list-tile-title style="text-decoration: none;">Settings</router-link>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
</template>

<script>
  export default {
    name: 'menu',
  };
</script>
