<template>
  <div class="cours">
    <div v-if="course.id_course">
      <h2>
        <router-link :to="{ name: 'Theme', params: { title: course.theme  }}" v-if="course.theme">{{ course.theme }}
        </router-link>
        - {{ course.title }}
        <v-btn v-if="parent.isLog && parent.isStudent" @click.stop="passExam = !passExam">Pass exam</v-btn>
      </h2>
      <v-container>
        <v-layout row wrap>
          <v-flex>
            <v-card theme--dark primary>
              <exam :course="course" :parent="parent" v-if="passExam"></exam>
              <v-card-text v-else>
                <div>
                  {{ course.description }}
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div v-else>
      <h2>{{ msg }}</h2>
      <div>
        <p v-html="description">
        </p>
      </div>
      <v-container grid-list-md text-xs-left>
        <v-layout row wrap>
          <v-flex xs3 v-for="(c, index) in parent.bdd_courses" @click.stop="openCourse(c.id_course)" :key="index" style="cursor: pointer;">
            <v-card theme--dark primary>
              <v-card-title>
                {{ c.title }}
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
  import Exam from './Exam';

  export default {
    name: 'Cours',
    props: ['parent'],
    components: {
      Exam,
    },
    data() {
      return {
        msg: 'Courses',
        description: null,
        passExam: false,
        course: {
          id_course: null,
          theme: null,
          title: null,
          description: null,
        },
      };
    },
    created() {
      this.getCourse();
    },
    methods: {
      getCourse() {
        if (this.$route.params.id) {
          this.parent.progressing = true;
          this.axios.get(`${this.parent.bdd_api}/course/${this.$route.params.id}`, this.parent.bdd_api_config).then((responseBDDCourse) => {
            this.course = responseBDDCourse.data;
            this.parent.progressing = false;
          });
        }
      },
      openCourse(courseId) {
        this.$router.push({ name: 'Cours', params: { id: courseId } });
      },
    },
  };
</script>
