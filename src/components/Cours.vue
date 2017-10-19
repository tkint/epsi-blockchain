<template>
  <div class="cours">
    <h2>
      <router-link :to="{ name: 'Theme', params: { title: course.theme  }}" v-if="course.theme">{{ course.theme }}</router-link>
      - {{ course.title }}<v-btn @click.stop="passExam = !passExam">Pass exam</v-btn></h2>
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
        this.parent.progressing = true;
        this.axios.get(`${this.parent.bdd_api}/course/${this.$route.params.id}`, this.parent.bdd_api_config).then((responseBDDCourse) => {
          this.course = responseBDDCourse.data;
          this.parent.progressing = false;
        });
      },
    },
  };
</script>
