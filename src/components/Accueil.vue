<template>
  <div class="accueil">
    <h2>{{ msg }}</h2>
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <v-container grid-list-md text-xs-left>
      <v-layout row wrap>
        <v-flex xs4>
          <v-card theme--dark primary>
            <v-card-text class="px-0">
              <h3 class="text-xs-center">Courses</h3>
              <div>
                <ul>
                  <li><a href="#">JAVA</a></li>
                  <li><a href="#">VueJS</a></li>
                  <li><a href="#">PHP</a></li>
                  <li><a href="#">HTML</a></li>
                  <li><a href="#">CSS</a></li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card theme--dark primary>
            <v-card-text class="px-0">
              <h3 class="text-xs-center">Diplomas</h3>
              <div>
                <ul>
                  <li>Bachelor</li>
                  <li>Master</li>
                  <li>Doctorat</li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card theme--dark primary>
            <v-card-text class="px-0">
              <h3 class="text-xs-center">Statistics</h3>
              <div>
                <ul>
                  <li>Bachelor - 3</li>
                  <li>Master - 4</li>
                  <li>Doctorat - 34</li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Accueil',
    data() {
      return {
        msg: 'Welcome to Your ChainMOOC !',
      };
    },
  };
</script>
