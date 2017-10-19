<template>
  <div class="answer">
    {{ title }}
    <br/>
    {{ description }}
    <answer v-for="(item, index) in answers" :answer="item" :key="index" :parent="parent"></answer>
  </div>
</template>

<script>
  import Answer from './Answer';

  export default {
    name: 'Answer',
    props: ['parent', 'question'],
    components: {
      Answer,
    },
    data() {
      return {
        answers: [],
      };
    },
    created() {
      this.getAnswers();
    },
    methods: {
      getAnswers() {
        this.parent.progressing = true;
        this.axios.get(`${this.parent.bdd_api}/answer/question/${this.question.id_question}`, this.parent.bdd_api_config).then((responseBDDAnswers) => {
          this.answers = responseBDDAnswers.data;
          this.parent.progressing = false;
        });
      },
    },
  };
</script>
