<template>
  <div class="add-qcm">
    <div v-if="parent.isLog">
      <h2>{{ msg }}</h2>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-select
          v-bind:items="parent.bdd_courses"
          v-model="exam.id_course"
          item-text="title"
          item-value="id_course"
          label="Course"
          single-line
          bottom
        ></v-select>
        <v-stepper v-model="stepper">
          <v-stepper-header>
            <v-stepper-step
              :step="1"
              :complete="stepper > 1"
              style="cursor: pointer;">
              <span @click.stop="stepper = 1">
                General
              </span>
            </v-stepper-step>
            <v-stepper-step
              v-for="(question, index) in exam.questions"
              :key="index"
              :step="index + 2"
              :complete="stepper > index + 2"
              style="cursor: pointer;">
              <span @click.stop="stepper = index + 2">
                Question {{ index + 1 }}
              </span>
            </v-stepper-step>
          </v-stepper-header>
          <v-stepper-content :step="1">
            <v-text-field
              label="Title"
              v-model="exam.title"
              required
            ></v-text-field>
            <v-flex>
              <v-text-field
                name="description-courses"
                label="Description"
                v-model="exam.description"
                multi-line
                required
              ></v-text-field>
            </v-flex>
            <v-btn color="primary" @click.stop="stepper = stepper + 1">Continue</v-btn>
          </v-stepper-content>
          <v-stepper-content v-for="(question, index) in exam.questions" :key="index" :step="index + 2">
            <v-text-field
              label="Question"
              v-model="question.title"
              required
            ></v-text-field>
            <v-text-field
              :label="'Réponse ' + (i + 1)"
              v-model="answer.title"
              required
              v-for="(answer, i) in question.answers"
              :key="i"
            ></v-text-field>
            <v-btn color="orange" dark @click.stop="stepper = stepper - 1">Precedent</v-btn>
            <v-btn color="primary" v-if="index < exam.questions.length - 1" @click.stop="stepper = stepper + 1">
              Continue
            </v-btn>
            <v-btn color="primary" v-if="index === exam.questions.length - 1" @click.stop="submit" :disabled="!valid">
              Finish
            </v-btn>
            <v-btn color="secondary" @click.stop="reset(index)">Reset</v-btn>
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
  export default {
    name: 'addQcm',
    props: ['parent'],
    data() {
      return {
        stepper: 0,
        msg: 'Add QCM',
        valid: true,
        nbQuestions: 2,
        nbAnswers: 2,
        exam: {
          id_exam: null,
          id_course: null,
          title: null,
          description: null,
          questions: [],
        },
      };
    },
    created() {
      this.initExam();
    },
    methods: {
      initExam() {
        for (let i = 0; i < this.nbQuestions; i += 1) {
          const question = {
            id_question: null,
            id_exam: null,
            title: null,
            description: null,
            answers: [],
          };
          for (let j = 0; j < this.nbAnswers; j += 1) {
            const answer = {
              id_answer: null,
              id_question: null,
              title: null,
              correct: false,
            };
            question.answers.push(answer);
          }
          this.exam.questions.push(question);
        }
      },
      submit() {
        this.parent.createExam(this.exam);
      },
      reset(index) {
        this.exam.questions[index].answers.forEach((answer) => {
          answer.title = null;
        });
      },
    },
  };
</script>
