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
      submit() {
        console.log('test');
        // const course = this.parent.bdd_course;
        this.parent.createTheme();
      },
      clear() {
        this.$refs.form.reset();
      },
    },
  };
</script>
