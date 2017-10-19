<template>
  <div class="add-qcm">
    <div v-if="parent.isLog">
      <h2>{{ msg }}</h2>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-select
          v-bind:items="parent.bdd_courses"
          v-model="parent.bdd_exam.id_course"
          item-text="title"
          item-value="id_course"
          label="Course"
          single-line
          bottom
        ></v-select>
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step v-for="(question, index) in exam.questions" :key="index" :step="index" :complete="e1 > index">Question {{ index + 1 }}</v-stepper-step>
            <v-stepper-step :step="exam.questions.length">Validation</v-stepper-step>
          </v-stepper-header>
          <v-stepper-content v-for="(question, index) in exam.questions" :key="index" :step="index">
            <v-text-field
              label="Question"
              v-model="question.title"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse A"
              v-model="answer.title"
              required
              v-for="(answer, i) in question.answers"
              :key="i"
            ></v-text-field>
            <v-btn color="orange" v-if="index > 0" @click.stop="e1 = index - 1">Precedent</v-btn>
            <v-btn color="primary" v-if="index < exam.questions.length" @click.stop="e1 = index + 1">Continue</v-btn>
            <v-btn light @click.stop="reset(index)">Reset</v-btn>
          </v-stepper-content>
          <v-stepper-content :step="exam.questions.length">
            <v-btn color="orange" @click.stop="e1 = exam.questions.length - 1">Precedent</v-btn>
            <v-btn @click.stop="submit" :disabled="!valid">Finish</v-btn>
          </v-stepper-content>
        </v-stepper>
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
  /* eslint-disable no-param-reassign */

  export default {
    name: 'addQcm',
    props: ['parent'],
    data() {
      return {
        e1: 0,
        msg: 'Add QCM',
        valid: true,
        exam: {
          id_exam: null,
          id_course: null,
          title: null,
          description: null,
          questions: [
            {
              id_question: null,
              id_exam: null,
              title: null,
              description: null,
              answers: [
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
              ],
            },
            {
              id_question: null,
              id_exam: null,
              title: null,
              description: null,
              answers: [
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
              ],
            },
            {
              id_question: null,
              id_exam: null,
              title: null,
              description: null,
              answers: [
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
              ],
            },
            {
              id_question: null,
              id_exam: null,
              title: null,
              description: null,
              answers: [
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
              ],
            },
            {
              id_question: null,
              id_exam: null,
              title: null,
              description: null,
              answers: [
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
                {
                  id_answer: null,
                  id_question: null,
                  title: null,
                  correct: false,
                },
              ],
            },
          ],
        },
      };
    },
    methods: {
      submit() {
//        this.parent.createQCM();
      },
      reset(index) {
        this.exam.questions[index].answers.forEach((answer) => {
          answer.title = null;
        });
      },
    },
  };
</script>
