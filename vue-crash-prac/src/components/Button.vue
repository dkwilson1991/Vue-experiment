<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">{{ text }}</button>
</template>

<script>
  export default {
    name: 'Button',
    props:  {
      text: String,
      color: String,
    },
    methods: {
      onClick() {
        console.log('click');
      }
    }
  }
</script>

<style scoped>
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
