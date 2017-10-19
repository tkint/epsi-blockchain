<template>
  <div class="cours">
    <h2>
      <router-link :to="{ name: 'Theme', params: { title: course.theme  }}" v-if="course.theme">{{ course.theme }}</router-link>
      - {{ course.title }}</h2>
    <v-container>
      <v-layout row wrap>
        <v-flex>
          <v-card theme--dark primary>
            <v-card-text>
              <div>
                {{ course.description }}
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
    name: 'Cours',
    props: ['parent'],
    data() {
      return {
        course: {
          id_course: null,
          theme: null,
          title: null,
          description: null,
        },
      };
    },
    created() {
      this.getCourse();
    },
    methods: {
      getCourse() {
        this.parent.progressing = true;
        this.axios.get(`${this.parent.bdd_api}/course/${this.$route.params.id}`, this.parent.bdd_api_config).then((responseBDDCourse) => {
          this.course = responseBDDCourse.data;
          this.parent.progressing = false;
        });
      },
    },
  };
</script>
