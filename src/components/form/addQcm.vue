<template>
  <div class="add-qcm">
    <div v-if="parent.isLog">
      <h2>{{ msg }}</h2>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step step="1" :complete="e1 > 1">Question 1</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2" :complete="e1 > 2">Question 2</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3" :complete="e1 > 3">Question 3</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="4" :complete="e1 > 4">Question 4</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="5">Question 5</v-stepper-step>
          </v-stepper-header>
          <v-stepper-content step="1">
            <v-text-field
              label="Question"
              v-model="q1"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse A"
              v-model="q1ra"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse B"
              v-model="q1rb"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse C"
              v-model="q1rc"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse D"
              v-model="q1rd"
              required
            ></v-text-field>
            <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
            <v-btn light @click.stop="reset1">Reset</v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-text-field
              label="Question"
              v-model="q2"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse A"
              v-model="q2ra"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse B"
              v-model="q2rb"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse C"
              v-model="q2rc"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse D"
              v-model="q2rd"
              required
            ></v-text-field>
            <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
            <v-btn color="orange" @click.native="e1 = 1">Precedent</v-btn>
            <v-btn light @click.stop="reset2">Reset</v-btn>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-text-field
              label="Question"
              v-model="q3"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse A"
              v-model="q3ra"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse B"
              v-model="q3rb"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse C"
              v-model="q3rc"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse D"
              v-model="q3rd"
              required
            ></v-text-field>
            <v-btn color="primary" @click.native="e1 = 4">Continue</v-btn>
            <v-btn color="orange" @click.native="e1 = 2">Precedent</v-btn>
            <v-btn light @click.stop="reset3">Reset</v-btn>
          </v-stepper-content>
          <v-stepper-content step="4">
            <v-text-field
              label="Question"
              v-model="q4"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse A"
              v-model="q4ra"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse B"
              v-model="q4rb"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse C"
              v-model="q4rc"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse D"
              v-model="q4rd"
              required
            ></v-text-field>
            <v-btn color="primary" @click.native="e1 = 5">Continue</v-btn>
            <v-btn color="orange" @click.native="e1 = 3">Precedent</v-btn>
            <v-btn light @click.stop="reset4">Reset</v-btn>
          </v-stepper-content>
          <v-stepper-content step="5">
            <v-text-field
              label="Question"
              v-model="q5"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse A"
              v-model="q5ra"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse B"
              v-model="q5rb"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse C"
              v-model="q5rc"
              required
            ></v-text-field>
            <v-text-field
              label="Réponse D"
              v-model="q5rd"
              required
            ></v-text-field>
            <v-btn
              @click.stop="submit"
              :disabled="!valid"
            >
              submit
            </v-btn>
            <v-btn color="orange" @click.native="e1 = 4">Precedent</v-btn>
            <v-btn light @click.stop="reset5">Reset</v-btn>
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
        e1: 0,
        msg: 'Add QCM',
        valid: true,
        q1: '',
        q1ra: '',
        q1rb: '',
        q1rc: '',
        q1rd: '',
        q2: '',
        q2ra: '',
        q2rb: '',
        q2rc: '',
        q2rd: '',
        q3: '',
        q3ra: '',
        q3rb: '',
        q3rc: '',
        q3rd: '',
        q4: '',
        q4ra: '',
        q4rb: '',
        q4rc: '',
        q4rd: '',
        q5: '',
        q5ra: '',
        q5rb: '',
        q5rc: '',
        q5rd: '',
      };
    },
    methods: {
      submit() {
        this.parent.createQCM();
      },
      reset1() {
        this.q1 = '';
        this.q1ra = '';
        this.q1rb = '';
        this.q1rc = '';
        this.q1rd = '';
      },
      reset2() {
        this.q2 = '';
        this.q2ra = '';
        this.q2rb = '';
        this.q2rc = '';
        this.q2rd = '';
      },
      reset3() {
        this.q3 = '';
        this.q3ra = '';
        this.q3rb = '';
        this.q3rc = '';
        this.q3rd = '';
      },
      reset4() {
        this.q4 = '';
        this.q4ra = '';
        this.q4rb = '';
        this.q4rc = '';
        this.q4rd = '';
      },
      reset5() {
        this.q5 = '';
        this.q5ra = '';
        this.q5rb = '';
        this.q5rc = '';
        this.q5rd = '';
      },
    },
  };
</script>
