<template>
  
  <ol v-for="(item, index) in arr" :key="index">{{ index }} - {{ item }}</ol> <!-- in -->
   
  <ol v-for="(item, index) of goods" :key="index">{{ item.name }} - {{ item.price }}</ol>  <!-- of -->

  
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      arr: [
        'item1',
        'item2',
        'item3',
      ],
      goods: [
        {
          name: "苹果手机",
          price: 1233.2,
        },
        {
          name: "华为手机",
          price: 1223.2,
        },
      ]
    };
  },
  methods: {
   
  },
};
</script>
