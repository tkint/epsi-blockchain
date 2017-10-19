<template>
  <div class="accueil">
    <h2>{{ msg }}</h2>
    <div>
      <p v-html="description">
      </p>
    </div>
    <v-container grid-list-md text-xs-left>
      <v-layout row wrap>
        <v-flex xs4>
          <v-card theme--dark primary>
            <v-card-text class="px-0">
              <h3 class="text-xs-center">Themes</h3>
              <div>
                <ul>
                  <li v-for="(theme, index) in parent.bdd_themes">
                    <router-link :to="{ name: 'Theme', params: { theme: theme.title  }}">{{ theme.title }}</router-link>
                  </li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card theme--dark primary>
            <v-card-text class="px-0">
              <h3 class="text-xs-center">Courses</h3>
              <div>
                <ul>
                  <li v-for="(course, index) in parent.bdd_courses">
                    <router-link :to="{ name: 'Cours', params: { cours: cours.id_course  }}">{{ course.title }}</router-link>
                  </li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card theme--dark primary>
            <v-card-text class="px-0">
              <h3 class="text-xs-center">Statistics</h3>
              <div>
                <ul>
                  <li>Students: {{ statistics.nb_students }}</li>
                  <li>Teachers: {{ statistics.nb_teachers }}</li>
                  <li>Themes: {{ statistics.nb_themes }}</li>
                  <li>Courses: {{ statistics.nb_courses }}</li>
                  <li>Exams: {{ statistics.nb_exams }}</li>
                  <li>Followed courses: {{ statistics.nb_followedCourses }}</li>
                  <li>Diplomas: {{ statistics.nb_diplomas }}</li>
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
    name: 'Accueil',
    props: ['parent'],
    data() {
      return {
        msg: 'Welcome to Your ChainMOOC !',
        description: 'ChainMOOC is an online platform providing Massive Open Online Courses to everyone.<br/><br/>' +
        'You just have to register as a student and follow courses you are interested in!<br/>' +
        'At the end of a course, you have to pass an exam. If your score is good enough, the teacher in charge of this course ' +
        'will validate your diploma. It is as easy as it looks like!<br/><br/>' +
        'In the case you would like to give some of your knowledge to students, you can register as a teacher and create your own course.<br/>' +
        'You will have to follow your students progress and help them to validate your course.',
        statistics: {
          nb_students: 0,
          nb_teachers: 0,
          nb_themes: 0,
          nb_courses: 0,
          nb_exams: 0,
          nb_followedCourses: 0,
          nb_diplomas: 0,
        },
      };
    },
    created() {
      this.getStatistics();
    },
    methods: {
      getStatistics() {
        this.parent.progressing = true;
        this.axios.get(`${this.parent.bdd_api}/statistics`, this.parent.bdd_api_config).then((responseBDDStatistics) => {
          this.statistics = responseBDDStatistics.data;
          this.parent.progressing = false;
        });
      },
    },
  };
</script>
