<template>
  <div class="add-qcm">
    <div v-if="parent.isLog">
      <h2>{{ msg }}</h2>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-select
          v-bind:items="parent.bdd_courses"
          v-model="parent.bdd_course.title"
          item-text="title"
          item-value="id_courses"
          label="Sélectionnez le cours contenant le QCM"
          single-line
          bottom
        ></v-select>
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
            <v-container grid-list-md>
              <v-layout row wrap>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse A"
                    v-model="q1ra"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q1gra"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse B"
                    v-model="q1rb"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q1grb"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse C"
                    v-model="q1rc"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q1grc"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse D"
                    v-model="q1rd"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q1grd"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
              </v-layout>
            </v-container>
            <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
            <v-btn light @click.stop="reset1">Reset</v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-text-field
              label="Question"
              v-model="q2"
              required
            ></v-text-field>
            <v-container grid-list-md>
              <v-layout row wrap>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse A"
                    v-model="q2ra"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q2gra"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse B"
                    v-model="q2rb"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q2grb"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse C"
                    v-model="q2rc"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q2grc"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse D"
                    v-model="q2rd"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q2grd"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
              </v-layout>
            </v-container>
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
            <v-container grid-list-md>
              <v-layout row wrap>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse A"
                    v-model="q3ra"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q3gra"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse B"
                    v-model="q3rb"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q3grb"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse C"
                    v-model="q3rc"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q3grc"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse D"
                    v-model="q3rd"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q3grd"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
              </v-layout>
            </v-container>
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
            <v-container grid-list-md>
              <v-layout row wrap>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse A"
                    v-model="q4ra"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q4gra"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse B"
                    v-model="q4rb"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q4grb"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse C"
                    v-model="q4rc"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q4grc"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse D"
                    v-model="q4rd"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q4grd"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
              </v-layout>
            </v-container>
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
            <v-container grid-list-md>
              <v-layout row wrap>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse A"
                    v-model="q5ra"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q5gra"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse B"
                    v-model="q5rb"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q5grb"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse C"
                    v-model="q5rc"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q5grc"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs10 sm10>
                  <v-text-field
                    label="Réponse D"
                    v-model="q5rd"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-checkbox
                    label="Correct"
                    v-model="q5grd"
                    :error-messages="checkboxErrors"
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                    required
                  ></v-checkbox>
                </v-flex>
              </v-layout>
            </v-container>
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
        q1gra: '',
        q1grb: '',
        q1grc: '',
        q1grd: '',
        q2: '',
        q2ra: '',
        q2rb: '',
        q2rc: '',
        q2rd: '',
        q2gra: '',
        q2grb: '',
        q2grc: '',
        q2grd: '',
        q3: '',
        q3ra: '',
        q3rb: '',
        q3rc: '',
        q3rd: '',
        q3gra: '',
        q3grb: '',
        q3grc: '',
        q3grd: '',
        q4: '',
        q4ra: '',
        q4rb: '',
        q4rc: '',
        q4rd: '',
        q4gra: '',
        q4grb: '',
        q4grc: '',
        q4grd: '',
        q5: '',
        q5ra: '',
        q5rb: '',
        q5rc: '',
        q5rd: '',
        q5gra: '',
        q5grb: '',
        q5grc: '',
        q5grd: '',
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
        this.q1gra = false;
        this.q1grb = false;
        this.q1grc = false;
        this.q1grd = false;
      },
      reset2() {
        this.q2 = '';
        this.q2ra = '';
        this.q2rb = '';
        this.q2rc = '';
        this.q2rd = '';
        this.q2gra = false;
        this.q2grb = false;
        this.q2grc = false;
        this.q2grd = false;
      },
      reset3() {
        this.q3 = '';
        this.q3ra = '';
        this.q3rb = '';
        this.q3rc = '';
        this.q3rd = '';
        this.q3gra = false;
        this.q3grb = false;
        this.q3grc = false;
        this.q3grd = false;
      },
      reset4() {
        this.q4 = '';
        this.q4ra = '';
        this.q4rb = '';
        this.q4rc = '';
        this.q4rd = '';
        this.q4gra = false;
        this.q4grb = false;
        this.q4grc = false;
        this.q4grd = false;
      },
      reset5() {
        this.q5 = '';
        this.q5ra = '';
        this.q5rb = '';
        this.q5rc = '';
        this.q5rd = '';
        this.q5gra = false;
        this.q5grb = false;
        this.q5grc = false;
        this.q5grd = false;
      },
    },
  };
</script>
