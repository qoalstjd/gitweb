<template>
  <div>
    <section class="wallpaper">
      <ul class="icons">
        <li v-for="(directory, i) in directoryList" :key="i">
          <a href="javascript:void(0)" @click="layerOpen(i)">
            <img :src="directory.icoPath" alt="" />
            <p>{{ directory.title }}</p>
          </a>
        </li>
      </ul>
    </section>

    <section class="layers">
      <div class="layer" v-for="(task, i) in taskList" :key="i">
        <div class="title">
          <img :src="task.icoPath" alt="" />
          <p>{{ task.title }}</p>
          <div class="btns">
            <button onclick="minimization()"><span class="hidden">최소화</span></button>
            <button onclick="maximize()"><span class="hidden">최대화</span></button>
            <button @click="layerClose(i)"><span class="hidden">닫기</span></button>
          </div>
        </div>
        <div class="menu"></div>
        <div class="content">
          <div v-for="file in task.content" :key="file.id">
            <p>{{ file.id }}. {{ file.name }}</p>
          </div>
        </div>
        <div class="layerTaskbar"></div>
      </div>
    </section>

    <section class="taskbar">
      <button class="start" onclick="menuOpen()"><p>시작</p></button>
      <ul class="taskList">
        <li v-for="task in taskList" :key="task.id">
          <img :src="task.icoPath" alt="" />
          <p>{{ task.title }}</p>
        </li>
      </ul>
      <div class="toolBox">
        <button class="time" onclick="ccOpen()">오후 3:15</button>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.wallpaper {
  position: relative;
  width: 100vw;
  height: calc(100vh - 36px);
  background: url(@/assets/img/main.jpg) no-repeat center;
  background-size: cover;
}

.layers {
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
}

.taskbar {
  position: relative;
  display: flex;
  height: 36px;
  overflow: hidden;
  .taskList {
    display: flex;
    li {
      display: flex;
      align-items: center;
    }
  }
}
</style>

<script>
export default {
  components: {},
  data() {
    return {
      directoryList: [
        {
          icoPath: require('@/assets/img/dir.png'),
          title: 'JavaScript',
          content: [
            { id: 1, name: '기본 개념과 동작 원리 이해의 중요성' },
            { id: 2, name: '기본 개념과 동작 원리 이해의 중요성' }
          ]
        },
        {
          icoPath: require('@/assets/img/dir.png'),
          title: 'Vue',
          content: [
            { id: 1, name: '기본 개념과 동작 원리 이해의 중요성' },
            { id: 2, name: '기본 개념과 동작 원리 이해의 중요성' }
          ]
        },
        {
          icoPath: require('@/assets/img/dir.png'),
          title: 'React',
          content: [
            { id: 1, name: '기본 개념과 동작 원리 이해의 중요성' },
            { id: 2, name: '기본 개념과 동작 원리 이해의 중요성' }
          ]
        }
      ],
      taskList: [],
      running: false
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    layerOpen(i) {
      this.taskList.push(this.directoryList[i])
    },
    layerClose(i) {
      this.taskList.splice(this.taskList[i])
    }
  }
}
</script>
