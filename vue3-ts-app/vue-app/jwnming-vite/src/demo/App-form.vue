<template>
  <!-- 文本框 -->
  <input type="text" v-model="searchKey" @keydown.enter="search" />
  <h1>{{ searchKey }}</h1>

  <!-- 多行文本输入 -->
  <textarea v-model="textValue" name="textarea" id="" cols="30" rows="5"></textarea> <br />

  <!-- 复选框 -->
  <input v-model="isChecked" name="check" type="checkbox" /> 
   {{ isChecked }} <br />
  <input v-model="list" name="list" type="checkbox" value="苹果" /> 苹果
  <input v-model="list" name="list" type="checkbox" value="香蕉" /> 香蕉
   {{ list }} <br />

  <!-- 单选框 -->
  <input type="radio" name="sex" value="男" v-model="sex" />
  <input type="radio" name="sex" value="女"  v-model="sex" />
  {{ sex }} <br />

  <!-- 下拉框 -->
  <!-- <select name="city" v-model="city" :style="{width: 300,}">
    <option value="郑州">郑州</option>
    <option value="上海">上海</option>
  </select>
  {{ city }} <br /> -->
  <select :style="{width: 300,}" v-model="city" >
    <option v-for="(item, index) in cities">  {{ item }}</option>
  </select>
  {{ city }} <br />

  <!-- 失焦事件 .lazy -->
  <input type="text" v-model.lazy="lazyValue" />
  <h1>{{ lazyValue }}</h1>

  <!-- 数值 -->
  <input type="text" v-model.lazy.number="lazyValue" />
  <input type="text" v-model.lazy.trim="lazyValue" />  <!-- 去掉后面空格 -->



</template>

<script>
export default {
  name: "App",
  data() {
    return {
      searchKey: "百度一下",
      textValue: "打发手动阀发生",
      isChecked: false,
      list: [],
      sex: "",
      cities: ["郑州", '上海'],
      city: "未选择",
      lazyValue: "输入内容",
    }
  },
  methods: {
    search: function() {
      this.searchKey = "";
    },
   
  },
};
</script>
