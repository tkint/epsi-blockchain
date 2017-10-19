<template>
    <v-flex xs3>
      <v-checkbox :label="answer.title"></v-checkbox>
    </v-flex>
</template>

<script>
  export default {
    name: 'Answer',
    props: ['parent', 'answer'],
    data() {
      return {
      };
    },
    created() {
    },
    methods: {
    },
  };
</script>
