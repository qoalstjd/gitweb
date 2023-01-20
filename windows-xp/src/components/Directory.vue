<template>
  <li>
    <a href="javascript:void(0)" @click="layerOpen">
      <img :src="directory.icoPath" alt="" />
      <p>{{ directory.title }}</p>
    </a>
  </li>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  props: { directory: Object },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    layerOpen() {
      this.$emit('layer-open')
    }
  }
}
</script>
