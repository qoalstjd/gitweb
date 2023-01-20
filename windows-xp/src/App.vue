<template>
  <div>
    <section class="wallpaper">
      <ul class="icons">
        <Directory
          v-for="(directory, i) in directoryList"
          :key="i"
          :directory="directory"
          :i="i"
          v-on:layerOpen="layerOpen(i)"
        />
      </ul>
    </section>

    <section class="layers">
      <Layer
        v-for="(task, i) in taskList"
        :key="i"
        :task="task"
        :i="i"
        v-on:layerClose="layerClose(i)"
      />
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
@import '@/assets/css/reset.css';
.wallpaper {
  position: relative;
  width: 100vw;
  height: calc(100vh - 36px);
  background: url(@/assets/img/main.jpg) no-repeat center;
  background-size: cover;
  .icons {
    display: flex;
    flex-flow: column nowrap;
    width: 50px;
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
import Directory from '@/components/Directory.vue'
import Layer from '@/components/Layer.vue'
export default {
  components: { Directory, Layer },
  data() {
    return {
      directoryList: [
        {
          icoPath: require('@/assets/img/dir.png'),
          title: 'JavaScript',
          type: 'dir',
          content: [
            { icoPath: '', name: '1기본 개념과 동작 원리 이해의 중요성.txt' },
            { icoPath: '', name: '1기본 개념과 동작 원리 이해의 중요성.txt' }
          ]
        },
        {
          icoPath: require('@/assets/img/dir.png'),
          title: 'Vue',
          type: 'dir',
          content: [
            { icoPath: '', name: '2기본 개념과 동작 원리 이해의 중요성.txt' },
            { icoPath: '', name: '2기본 개념과 동작 원리 이해의 중요성.txt' }
          ]
        },
        {
          icoPath: require('@/assets/img/dir.png'),
          title: 'React',
          type: 'txt',
          content: [
            { icoPath: '', name: '3기본 개념과 동작 원리 이해의 중요성.txt' },
            { icoPath: '', name: '3기본 개념과 동작 원리 이해의 중요성.txt' }
          ]
        }
      ],
      taskList: []
    }
  },
  methods: {
    layerOpen(i) {
      this.taskList.push(this.directoryList[i])
    },
    layerClose(i) {
      this.taskList.splice(i, 1)
    }
  }
}
</script>
