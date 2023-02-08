<template>
  <section>
    <ul>
      <li>
        <div class="directory"></div>
        <p class="icoTit">JavaScript</p>
      </li>
      <li>
        <div class="directory"></div>
        <p class="icoTit">React</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
section {
  position: relative;
  flex: 1;
  background: url(./../assets/img/main.jpg) no-repeat center;
  background-size: cover;

  ul {
    display: flex;
    flex-flow: column wrap;
    padding: 10px 0;
    text-align: center;

    li {
      width: 70px;
      height: 78px;
      padding: 5px;

      .directory {
        @include ico(48, 0, 0);
      }
      p {
        /* text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap; */
        font-size: 14px;
        word-break: break-all;
        color: $primary-color-dark;
      }
    }
  }
}
</style>
