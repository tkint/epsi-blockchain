<template>
  <v-app dark toolbar>
    <v-toolbar class="indigo" dark fixed>
      <v-spacer></v-spacer>
      <v-toolbar-title>Block Chain</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <v-container fluid>
        <transition name="slide-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  require('vuetify/dist/vuetify.min.css');

  export default {
    name: 'app',
    data() {
      return {
        bdd_api: 'http://home.thomaskint.com/ChainMoocWebServices',
        bdd_api_config: {
          headers: {
            Authorization: 'Basic dGtpbnQ6MzYyNjZacnBwYy4',
          },
        },
        bdd_user_type: null,
        bdd_user_types: [
          'STUDENT',
          'TEACHER',
        ],
        bdd_user: {
          id_user: null,
          id_blockchain: null,
          user_type: null,
          login: null,
          password: null,
          firstname: null,
          lastname: null,
        },
        bc_api: 'http://148.100.99.169:3000/api',
        bc_api_config: {},
        bc_user: null,
        bc_user_type: null,
        bc_user_types: [
          'fr.epsi.blockchain.Student',
          'fr.epsi.blockchain.Teacher',
        ],
        bc_user_type_id: [
          'studentID:',
          'teacherID:',
        ],
        bc_user_services: [
          '/fr.epsi.blockchain.Student',
          '/fr.epsi.blockchain.Teacher',
        ],
      };
    },
    created() {
      this.registerSample();
//      this.loginSample();
    },
    watch: {},
    computed: {},
    methods: {
      login() {
        this.axios.post(`${this.bdd_api}/user/login`, this.bdd_user, this.bdd_api_config).then((response) => {
          this.bdd_user = response.data;
        });
      },
      registerStudent() {
        this.register(0);
      },
      registerTeacher() {
        this.register(1);
      },
      register(type) {
        this.axios.post(`${this.bdd_api}/user/login`, this.bdd_user, this.bdd_api_config).then((responseBDDExistUser) => {
          const user = responseBDDExistUser.data;
          if (!user.id_user) {
            this.axios.get(`${this.bdd_api}/user/last`, this.bdd_api_config).then((responseID) => {
              let id = responseID.data.id_blockchain;
              const typeID = this.bc_user_type_id[type];
              if (id) {
                const number = parseInt(id.substring('10'), 10);
                id = `${typeID}${number + 1}`;
              } else {
                id = `${typeID}1`;
              }
              this.bdd_user_type = this.bdd_user_types[type];
              this.bc_user = {
                $class: this.bc_user_types[type],
                studentID: id,
                teacherID: id,
                firstname: this.bdd_user.firstname,
                lastname: this.bdd_user.lastname,
              };
              this.axios.post(`${this.bc_api}${this.bc_user_services[type]}`, this.bc_user, this.bc_api_config).then((responseBCUser) => {
                this.bc_user = responseBCUser.data;
                if (this.bc_user.studentID) {
                  if (type === 0) {
                    this.bdd_user.id_blockchain = this.bc_user.studentID;
                  } else {
                    this.bdd_user.id_blockchain = this.bc_user.teacherID;
                  }
                  this.axios.post(`${this.bdd_api}/user/${this.bdd_user_type}`, this.bdd_user, this.bdd_api_config).then((responseBDDUser) => {
                    this.bdd_user = responseBDDUser.data;
                  });
                }
              });
            });
          }
        });
      },
      registerSample() {
        this.bdd_user_type = this.bdd_user_types[0];
        this.bdd_user = {
          login: 'hjkbnklm,;lm',
          password: 'bhjkn,k,',
          firstname: 'Test',
          lastname: 'Numéro 8',
        };
        this.registerTeacher();
      },
      loginSample() {
        this.bdd_user = {
          login: 'Test',
          password: 'test',
        };
        this.login();
      },
    },
  };
</script>

<style>
  .slide-fade-enter-active {
    transition: all .1s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */
  {
    transform: translateY(10px);
    opacity: 0;
  }
</style>
