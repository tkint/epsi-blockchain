<template>
  <div class="accueil">
    <h3>{{ msg }}</h3>
    <h3>Courses</h3>
    <ul>
      <li><a href="" target="_blank">JAVA</a></li>
      <li><a href="" target="_blank">VueJS</a></li>
      <li><a href="" target="_blank">C++</a></li>
      <li><a href="" target="_blank">C#</a></li>
      <br>
    </ul>
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
