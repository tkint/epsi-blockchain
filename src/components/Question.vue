<template>
  <v-flex xs12 class="question">
    <v-card>
      <v-card-title>
        {{ question.title }}
        <br/>
        {{ question.description }}
      </v-card-title>
      <v-container grid-list-md text-xs-left>
        <v-layout row wrap>
          <answer v-for="(item, index) in answers" :answer="item" :key="index" :parent="parent"></answer>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
  import Answer from './Answer';

  export default {
    name: 'Question',
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
        console.log('test');
        this.parent.progressing = true;
        this.axios.get(`${this.parent.bdd_api}/answer/question/${this.question.id_question}`, this.parent.bdd_api_config).then((responseBDDAnswers) => {
          this.answers = responseBDDAnswers.data;
          this.parent.progressing = false;
        });
      },
    },
  };
</script>
