<template>
  <div class="themes">
    <h2>{{ msg }}</h2>
    <div>
      <p v-html="description">
      </p>
    </div>
    <v-container grid-list-md text-xs-left>
      <v-layout row wrap>
        <v-flex xs3 v-for="(theme, index) in parent.bdd_themes" @click.stop="openTheme(theme.title)" :key="index" style="cursor: pointer;">
          <v-card theme--dark primary>
            <v-card-title>
              {{ theme.title }}
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Themes',
    props: ['parent'],
    data() {
      return {
        msg: 'Themes',
        description: null,
      };
    },
    created() {
      this.parent.getThemes();
    },
    methods: {
      openTheme(themeTitle) {
        this.$router.push({ name: 'Theme', params: { title: themeTitle } });
      },
    },
  };
</script>
