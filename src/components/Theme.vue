<template>
  <div class="theme">
    <h2>{{ theme }}</h2>
    <v-container>
      <v-layout row wrap>
        <v-flex>
          <v-card theme--dark primary>
            <v-card-text>
              <div>
                <ul>
                  <li v-for="(course, index) in courses">
                    <router-link :to="{ name: 'Cours', params: { cours: cours.id_course  }}">{{ course.title }}</router-link>
                  </li>
                </ul>
              </div>
            </v-card-text>
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
      this.theme = this.$route.params.theme;
      this.getCoursesByTheme();
    },
    methods: {
      getCoursesByTheme() {
        this.parent.progressing = true;
        this.axios.get(`${this.parent.bdd_api}/cours/theme/${this.theme.title}`, this.parent.bdd_api_config).then((responseBDDCourses) => {
          this.courses = responseBDDCourses.data;
          this.parent.progressing = false;
        });
      },
    },
  };
</script>
