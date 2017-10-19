<template>
  <div class="answer">
    <v-checkbox></v-checkbox>{{ answer.title }}
    <br />
    {{ answer.description }}
  </div>
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
