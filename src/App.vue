<template>
  <v-app>
    <!-- CODE FOR PROGRESS BAR -->
    <v-progress-linear v-if="processing" v-bind:indeterminate="true"
                       style="z-index: 999; position: absolute; margin: 0"></v-progress-linear>
    <!-- CODE FOR NAVIGATION MENU -->
    <v-navigation-drawer
      clipped
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
      v-if="isLog"
    >
      <menu-vertical></menu-vertical>
    </v-navigation-drawer>
    <!-- CODE FOR HEADER TOOLBAR -->
    <v-toolbar app fixed clipped-left dark>
      <v-toolbar-side-icon v-if="isLog" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" style="text-decoration: none; color:#fff;">ChainMOOC</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- CODE FOR POPUP SIGN IN/SIGN UP -->
      <v-btn v-if="!isLog" color="blue" @click.stop="dialogSignIn = true">SIGN IN</v-btn>
      <v-btn v-if="!isLog" color="green" @click.stop="dialogSignUp = true">SIGN UP</v-btn>
      <!-- CODE FOR USER MENU -->
      <v-menu v-if="isLog" bottom left>
        <v-btn icon slot="activator" dark>
          <v-icon>account_circle</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-if="!isStudent">
            <v-list-tile-title>
              <router-link to="/Themes/add" style="text-decoration: none;">Add Theme</router-link>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-if="!isStudent">
            <v-list-tile-title>
              <router-link to="/Cours/add" style="text-decoration: none;">Add Course</router-link>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>
              <router-link to="/Settings" style="text-decoration: none;">Settings</router-link>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title @click.stop="disconnect" style="cursor: pointer">
              <a>Log Out</a>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <!-- CODE FOR POPUP SIGN IN -->
    <v-layout row justify-center style="display:none">
      <v-dialog v-model="dialogSignIn" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Sign in</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Login" required v-model="bdd_user.login"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Password" type="password" required v-model="bdd_user.password"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <small>* Indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.stop="dialogSignIn = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.stop="connect">Log in</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <!-- CODE FOR POPUP SIGN UP -->
    <v-layout row justify-center style="display:none">
      <v-dialog v-model="dialogSignUp" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Sign up </span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md12>
                  <v-text-field label="First name" required v-model="bdd_user.firstname"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md12>
                  <v-text-field label="Last name" required v-model="bdd_user.lastname"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md12>
                  <v-text-field label="Login" required v-model="bdd_user.login"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md12>
                  <v-text-field label="Password" type="password" required v-model="bdd_user.password"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <small>* Indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native.stop="dialogSignUp = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native.stop="registerStudent">Sign up as Student</v-btn>
            <v-btn color="blue darken-1" flat @click.native.stop="registerTeacher">Sign up as Teacher</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <!-- CODE FOR MAIN CONTENT -->
    <main>
      <v-content>
        <v-container fluid>
          <transition name="slide-fade" mode="out-in">
            <router-view :key="$route.name" :parent="this"></router-view>
          </transition>
        </v-container>
      </v-content>
    </main>
    <!-- CODE FOR FOOTER -->
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>


<script>
  import menuVertical from './components/Menu';

  require('vuetify/dist/vuetify.min.css');

  export default {
    name: 'app',
    components: { menuVertical },
    data() {
      return {
        // APP DATA
        drawer: true,
        dialogSignIn: false,
        dialogSignUp: false,
        processing: false,
        // BDD API
        bdd_api: 'http://home.thomaskint.com/public/ChainMoocWebServices',
        bdd_api_config: {
          headers: {
            Authorization: 'Basic dGtpbnQ6MzYyNjZacnBwYy4',
          },
        },
        // USER TYPE
        bdd_user_type: null,
        bdd_user_types: [
          'STUDENT',
          'TEACHER',
        ],
        // USER
        bdd_users: [],
        bdd_user: {
          id_user: null,
          id_blockchain: null,
          user_type: null,
          login: null,
          password: null,
          firstname: null,
          lastname: null,
        },
        // THEME
        bdd_themes: [],
        bdd_theme: {
          title: null,
        },
        // COURSE
        bdd_courses: [],
        bdd_course: {
          id_course: null,
          id_blockchain: null,
          theme: null,
          title: null,
          description: null,
        },
        // BC API
        bc_api: 'http://148.100.98.167:3000/api',
        bc_api_config: {},
        // USER
        bc_user: null,
        // USER TYPE
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
        // COURSE
        bc_courses: [],
        bc_course: null,
        bc_course_type: 'fr.epsi.blockchain.Course',
        bc_course_id: 'courseID:',
        // FOLLOWED COURSE
        bc_followed_course: 'fr.epsi.blockchain.FollowedCourse',
        bc_followed_courses: [],
      };
    },
    watch: {
      bdd_user: {
        handler(val) {
          this.bdd_user_type = val.user_type;
        },
        deep: true,
      },
    },
    created() {
      this.getThemes();
      this.getCourses();
    },
    computed: {
      isLog() {
        return this.bdd_user.id_user !== null;
      },
      isStudent() {
        return this.bdd_user.user_type === this.bdd_user_types[0];
      },
    },
    methods: {
      // USER
      connect() {
        this.processing = true;
        this.axios.post(`${this.bdd_api}/user/login`, this.bdd_user, this.bdd_api_config).then((response) => {
          this.bdd_user = response.data;
          this.processing = false;
          if (this.isLog) {
            this.getBCUser(this.getUserTypeIndexByUser(this.bdd_user));
            this.dialogSignIn = false;
            this.$router.push('/Dashboard');
          }
        });
        this.getCoursesByStudent();
      },
      disconnect() {
        this.processing = true;
        this.drawer = false;
        setTimeout(() => {
          this.bdd_user = {
            id_user: null,
            id_blockchain: null,
            user_type: null,
            login: null,
            password: null,
            firstname: null,
            lastname: null,
          };
          this.bc_user = null;
          this.$router.push('/');
          this.processing = false;
        }, 500);
      },
      registerStudent() {
        this.register(0);
      },
      registerTeacher() {
        this.register(1);
      },
      register(type) {
        this.processing = true;
        // Get user type
        this.bdd_user_type = this.bdd_user_types[type];
        // Try to login
        this.axios.post(`${this.bdd_api}/user/login`, this.bdd_user, this.bdd_api_config).then((responseBDDExistUser) => {
          const user = responseBDDExistUser.data;
          // If can't login
          if (!user.id_user) {
            // Get the last user
            this.axios.get(`${this.bdd_api}/user/last/${this.bdd_user_type}`, this.bdd_api_config).then((responseBDDUserID) => {
              let id = responseBDDUserID.data.id_blockchain;
              // Build the id
              const typeID = this.bc_user_type_id[type];
              if (id) {
                const number = parseInt(id.substring(typeID.length), 10);
                id = `${typeID}${number + 1}`;
              } else {
                id = `${typeID}1`;
              }
              // Build the blockchain asset
              this.bc_user = {
                $class: this.bc_user_types[type],
              };
              if (type === 0) {
                this.bc_user.studentID = id;
              } else {
                this.bc_user.teacherID = id;
              }
              // Create the asset
              this.axios.post(`${this.bc_api}${this.bc_user_services[type]}`, this.bc_user, this.bc_api_config).then((responseBCUser) => {
                this.bc_user = responseBCUser.data;
                // If the asset has been created
                if (this.bc_user.studentID || this.bc_user.teacherID) {
                  // Get the correct id of the asset
                  if (type === 0) {
                    this.bdd_user.id_blockchain = this.bc_user.studentID;
                  } else {
                    this.bdd_user.id_blockchain = this.bc_user.teacherID;
                  }
                  // Create the user in database
                  this.axios.post(`${this.bdd_api}/user/${this.bdd_user_type}`, this.bdd_user, this.bdd_api_config).then((responseBDDUser) => {
                    this.bdd_user = responseBDDUser.data;
                    this.processing = false;
                    if (this.isLog) {
                      this.dialogSignUp = false;
                    }
                  });
                }
              });
            });
          }
        });
      },
      getStudentsByCourse() {
        // Check if teacher
        if (this.bc_user.teacherID && this.bc_user.teacherID === this.bdd_user.id_blockchain) {
          // Get every followedCourses from BC
          this.axios.get(`${this.bc_api}/${this.bc_followed_course}`, this.bc_api_config).then((responseBCFollowedCourse) => {
            // Filter followedCourses on courseID
            this.bc_followed_courses = responseBCFollowedCourse.data.filter((followedCourse) => {
              const resource = `resource:${this.bc_course_type}#`;
              return followedCourse.course.substring(resource.length)
                .equals(this.bc_course.courseID);
            });
            // Get every student from BDD
            this.axios.get(`${this.bdd_api}/user/${this.bc_user_types[0]}`, this.bdd_api_config).then((responseBDDUser) => {
              // Filter students on followedCourses
              this.bdd_users = responseBDDUser.data.filter((user) => {
                const resource = `resource:${this.bc_user_types[0]}#`;
                let i = 0;
                while (i < this.bc_followed_courses.length) {
                  if (this.bc_followed_courses[i].student.substring(resource.length)
                      .equals(user.id_blockchain)) {
                    return true;
                  }
                  i += 1;
                }
                return false;
              });
            });
          });
        }
      },
      getBCUser(type) {
        this.axios.get(`${this.bc_api}${this.bc_user_services[type]}`, this.bc_api_config).then((responseBCUser) => {
          this.bc_user = responseBCUser.data;
        });
      },
      getUserTypeIndexByUser(bddUser) {
        return this.bdd_user_types.findIndex(userType => userType === bddUser.user_type);
      },
      // THEME
      getThemes() {
        this.processing = true;
        this.axios.get(`${this.bdd_api}/theme`, this.bdd_api_config).then((responseBDDTheme) => {
          this.bdd_themes = responseBDDTheme.data;
          this.processing = false;
        });
      },
      createTheme() {
        this.axios.post(`${this.bdd_api}/theme`, this.bdd_theme, this.bdd_api_config).then((responseBDDTheme) => {
          this.bdd_theme = responseBDDTheme.data;
          this.bdd_themes.push(this.bdd_theme);
        });
      },
      updateTheme(theme) {
        this.axios.put(`${this.bdd_api}/theme/${this.bdd_theme.title}`, theme, this.bdd_api_config).then((responseBDDTheme) => {
          this.bdd_theme = responseBDDTheme.data;
        });
      },
      deleteTheme() {
        this.axios.delete(`${this.bdd_api}/theme/${this.bdd_theme.title}`, this.bdd_api_config);
      },
      // COURSE
      getCourses() {
        this.processing = true;
        this.axios.get(`${this.bdd_api}/course`, this.bdd_api_config).then((responseBDDCourse) => {
          this.bdd_courses = responseBDDCourse.data;
          this.processing = false;
        });
      },
      getCoursesByStudent() {
        // Check if student
        if (this.bc_user &&
          this.bc_user.studentID &&
          this.bc_user.studentID === this.bdd_user.id_blockchain) {
          // Get every followedCourses from BC
          this.axios.get(`${this.bc_api}/${this.bc_followed_course}`, this.bc_api_config).then((responseBCFollowedCourse) => {
            // Filter followedCourses on studentID
            this.bc_followed_courses = responseBCFollowedCourse.data.filter((followedCourse) => {
              const resource = `resource:${this.bc_user_types[0]}#`;
              return followedCourse.student.substring(resource.length).equals(this.bc_user.studentID);
            });
            // Get every courses from BDD
            this.axios.get(`${this.bdd_api}/course`, this.bdd_api_config).then((responseBDDCourse) => {
              // Filter courses on followedCourses
              this.bdd_courses = responseBDDCourse.data.filter((course) => {
                let i = 0;
                while (i < this.bc_followed_courses.length) {
                  if (this.bc_followed_courses[i].courseID.equals(course.id_blockchain)) {
                    return true;
                  }
                  i += 1;
                }
                return false;
              });
            });
          });
        }
      },
      getCourse(id) {
        this.axios.get(`${this.bdd_api}/course/${id}`, this.bdd_api_config).then((responseBDDCourse) => {
          this.bdd_course = responseBDDCourse.data;
        });
      },
      createCourse() {
        console.log('STEP 1');
        if (this.bc_user.teacherID) {
          console.log('STEP 2');
          // Get theme
          this.axios.get(`${this.bdd_api}/theme`, this.bdd_course.theme, this.bdd_api_config).then((responseBDDTheme) => {
            // Verify if theme exists
            console.log('STEP 3');
            if (responseBDDTheme.data) {
              // Get last entity
              console.log('STEP 4');
              this.axios.get(`${this.bdd_api}/course/last`, this.bdd_api_config).then((responseBDDCourseID) => {
                // Build the id
                let id = responseBDDCourseID.data.id_blockchain;
                if (id) {
                  const number = parseInt(id.substring(this.bc_course_id.length), 10);
                  id = `${this.bc_course_id}${number + 1}`;
                } else {
                  id = `${this.bc_course_id}1`;
                }
                // Build the blockchain asset
                this.bc_course = {
                  $class: this.bc_course_type,
                  courseID: id,
                  teacher: `resource:${this.bc_user_types[1]}#${this.bc_user.teacherID}`,
                };
                // Create asset
                this.axios.post(`${this.bc_api}/course`, this.bc_course, this.bc_api_config).then((responseBCCourse) => {
                  this.bc_course = responseBCCourse.data;
                  // If the asset has been created
                  if (this.bc_course.courseID) {
                    // Get id from asset
                    this.bdd_course.id_blockchain = this.bc_course.courseID;
                    // Create user in database
                    this.axios.post(`${this.bdd_api}/course`, this.bdd_course, this.bdd_api_config).then((responseBDDCourse) => {
                      this.bdd_course = responseBDDCourse.data;
                    });
                  }
                });
              });
            }
          });
        }
      },
      updateCourse() {
        this.axios.put(`${this.bdd_api}/course`, this.bdd_course, this.bdd_api_config).then((responseBDDTheme) => {
          this.bdd_course = responseBDDTheme.data;
        });
      },
      deleteCourse() {
        this.axios.delete(`${this.bdd_api}/course/${this.bdd_course.id_course}`, this.bdd_api_config);
      },
      // SAMPLES
      registerSample() {
        this.bdd_user = {
          login: 'dfbfbvxvdsvxdqfqdvdvd',
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
