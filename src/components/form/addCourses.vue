<template>
  <div class="add-courses">
    {{ parent.bdd_course }}
    <div v-if="parent.isLog">
      <h2>{{ msg }}</h2>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
          label="Title"
          v-model="parent.bdd_course.title"
          required
        ></v-text-field>
        <v-select
          v-bind:items="parent.bdd_themes"
          v-model="parent.bdd_course.theme"
          item-text="title"
          label="Themes"
          single-line
          bottom
        ></v-select>
        <v-flex>
          <v-text-field
            name="description-courses"
            label="Description"
            v-model="parent.bdd_course.description"
            value=""
            multi-line
            required
          ></v-text-field>
        </v-flex>
        <v-btn
          @click.stop="submit"
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
    name: 'addCourses',
    props: ['parent'],
    data() {
      return {
        msg: 'Add Courses',
        valid: true,
      };
    },
    created() {
      this.parent.getThemes();
    },
    methods: {
      submit() {
        this.parent.createCourse();
      },
      clear() {
        this.$refs.form.reset();
      },
    },
  };
</script>
