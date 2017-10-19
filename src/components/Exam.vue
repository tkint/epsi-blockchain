<template>
  <div class="exam" v-if="exam && exam.id_exam">
    {{ title }}
    <br/>
    {{ description }}
    <question v-for="(item, index) in questions" :question="item" :key="index" :parent="parent"></question>
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
      this.getQuestions();
    },
    methods: {
      getExam() {
        this.parent.progressing = true;
        this.axios.get(`${this.parent.bdd_api}/exam/course/${this.course.id_course}`, this.parent.bdd_api_config).then((responseBDDExam) => {
          this.exam = responseBDDExam.data;
          this.parent.progressing = false;
        });
      },
      getQuestions() {
        this.parent.progressing = true;
        this.axios.get(`${this.parent.bdd_api}/question/exam/${this.exam.id_exam}`, this.parent.bdd_api_config).then((responseBDDAnswers) => {
          this.answers = responseBDDAnswers.data;
          this.parent.progressing = false;
        });
      },
    },
  };
</script>
