<template>
  <input type="text" v-model="msg" />
  <h1>{{ msg }}</h1>
  
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      msg: 'gniMnWj',
    }
  },
  watch: {
    msg: function(newValue, oldValue) {
      alert("new：" + newValue + "   old：" + oldValue);

    }
  },
  
  
}
</script>
<style>
</style>