<template>
  <div class="cours">
    {{ $route.params.slug }}
    <h2>{{ course.theme.title }} {{ course.title }}</h2>
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
        course: null,
      };
    },
    created() {
      this.getCourse();
    },
    methods: {
      getCourse() {
        this.parent.progressing = true;
        this.axios.get(`${this.parent.bdd_api}/course/${this.$route.params.slug}`, this.parent.bdd_api_config).then((responseBDDCourse) => {
          this.course = responseBDDCourse.data;
          this.parent.progressing = false;
        });
      },
    },
  };
</script>
