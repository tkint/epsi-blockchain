<template>
  <div class="add-themes">
    <div v-if="parent.isLog">
      <h2>{{ msg }}</h2>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
          label="Title"
          v-model="parent.bdd_theme.title"
          required
        ></v-text-field>
        <v-btn
          @click="submit"
          :disabled="!valid"
        >
          submit
        </v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
      <br>
      <h3>List of existing themes</h3>
      <v-list v-bind:item="parent.bdd_themes" item-text="title" >
          <v-list-tile v-for="(item, index) in parent.bdd_themes" :key="index">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
      </v-list>
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
    name: 'addThemes',
    props: ['parent'],
    data() {
      return {
        msg: 'Add Theme',
        valid: true,
      };
    },
    methods: {
      created() {
        this.parent.getThemes();
      },
      submit() {
        this.parent.createTheme();
      },
      clear() {
        this.$refs.form.reset();
      },
    },
  };
</script>
