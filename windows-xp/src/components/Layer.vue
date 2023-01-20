<template>
  <div>
    <div class="layer" v-if="task.type === 'dir'">
      <div class="title">
        <img :src="task.icoPath" alt="" />
        <p>{{ task.title }}</p>
        <div class="btns">
          <button onclick="minimization()"><span class="hidden">최소화</span></button>
          <button onclick="maximize()"><span class="hidden">최대화</span></button>
          <button @click="layerClose"><span class="hidden">닫기</span></button>
        </div>
      </div>
      <div class="menu"></div>
      <div class="content">
        <ul>
          <li v-for="(file, i) in task.content" :key="i">
            <a href="javascript:void(0)">
              <p>{{ i + 1 }}. {{ file.name }}</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="layerTaskbar"></div>
    </div>

    <div class="txt" v-else-if="task.type === 'txt'">파일</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sampleData: ''
    }
  },
  props: { task: Object },
  methods: {
    layerClose() {
      this.$emit('layer-close')
    }
  }
}
</script>

<style scoped lang="scss">
.layer {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 500px;
  margin-top: -18px;
  border: 3px solid #005aeb;
  border-top: none;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  background-color: #fff;
}
.title {
  display: flex;
}
</style>
