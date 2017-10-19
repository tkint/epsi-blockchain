<template>
  <div class="exam" v-if="exam && exam.id_exam">
    <v-card>
      <v-card-title>
        <h3>{{ exam.title }}</h3>
      </v-card-title>
      <v-card-title>
        {{ exam.description }}
      </v-card-title>
      <question v-for="(item, index) in questions" :question="item" :parent="parent" :key="index"></question>
    </v-card>
  </div>
</template>

<script>
  import Question from './Question';

  export default {
    name: 'Exam',
    props: ['parent', 'course'],
    components: {
      Question,
    },
    data() {
      return {
        exam: {
          id_exam: null,
        },
        questions: [],
      };
    },
    created() {
      this.getExam();
    },
    methods: {
      getExam() {
        this.parent.progressing = true;
        this.axios.get(`${this.parent.bdd_api}/exam/course/${this.course.id_course}`, this.parent.bdd_api_config).then((responseBDDExam) => {
          this.exam = responseBDDExam.data;
          this.getQuestions();
          this.parent.progressing = false;
        });
      },
      getQuestions() {
        this.parent.progressing = true;
        this.axios.get(`${this.parent.bdd_api}/question/exam/${this.exam.id_exam}`, this.parent.bdd_api_config).then((responseBDDAnswers) => {
          this.questions = responseBDDAnswers.data;
          this.parent.progressing = false;
        });
      },
    },
  };
</script>
