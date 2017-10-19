<template>
  <div class="theme">
    <h2>{{ theme }}</h2>
    <v-container grid-list-md text-xs-left>
      <v-layout row wrap>
        <v-flex xs3 v-for="(course, index) in courses" @click.stop="openCourse(course.id_course)" :key="index" style="cursor: pointer;">
          <v-card theme--dark primary>
            <v-card-title>
              {{ course.title }}
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Theme',
    props: ['parent'],
    data() {
      return {
        theme: null,
        courses: null,
      };
    },
    created() {
      this.theme = this.$route.params.title;
      this.getCoursesByTheme();
    },
    methods: {
      getCoursesByTheme() {
        this.parent.progressing = true;
        this.axios.get(`${this.parent.bdd_api}/course/theme/${this.theme}`, this.parent.bdd_api_config).then((responseBDDCourses) => {
          this.courses = responseBDDCourses.data;
          this.parent.progressing = false;
        });
      },
      openCourse(idCourse) {
        this.$router.push({ name: 'Cours', params: { id: idCourse } });
      },
    },
  };
</script>
