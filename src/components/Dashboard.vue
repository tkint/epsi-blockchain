<template>
  <div v-if="parent.isLog" class="dashboard">
    <h2>{{ msg }}</h2>
    <v-container grid-list-md text-xs-left>
      <v-layout row wrap>
        <v-flex xs6>
          <v-card theme--dark primary>
            <v-card-text class="px-0">
              <h3 class="text-xs-center">Cours suivis</h3>
              <div>
                <ul>
                  <li v-for="(course, index) in parent.getCoursesByStudent">
                    <a href="#">Cours 1</a>
                  </li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card theme--dark primary>
            <v-card-text class="px-0">
              <h3 class="text-xs-center">Vos Diplômes</h3>
              <div>
                <ul>
                  <li>Diplome 1</li>
                  <li>Diplome 2</li>
                  <li>Diplome 3</li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <div v-if="parent.bdd_user_type === 'TEACHER'">
      A
    </div>
    <div v-else-if="parent.bdd_user_type === 'STUDENT'">
      B
    </div>
  </div>
  <div class="text-xs-center" v-else>
    <v-alert color="info" icon="info" value="true">
      You can Loggin to acces to this page.
    </v-alert>
  </div>
</template>

<script>
  export default {
    name: 'Dashboard',
    props: ['parent'],
    data() {
      return {
        studentCourses: [],
        msg: 'Bienvenue sur votre tableau de bord',
      };
    },
    created() {
      this.parent.getCoursesByStudent();
    },
  };
</script>
