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
                  <li><a href="#">Cours 1</a></li>
                  <li><a href="#">Cours 2</a></li>
                  <li><a href="#">Cours 3</a></li>
                  <li><a href="#">Cours 4</a></li>
                  <li><a href="#">Cours 5</a></li>
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
        msg: 'Dashboard',
      };
    },
  };
</script>
