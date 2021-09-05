<template>
  <div class="pageIntro">
      <div class="topText">
        <h2>Hello, Person!</h2>
        <h1>{{ title }}</h1>
      </div>
      <div class="weather">
          <img src="/svgs/cloud-snow.svg" alt="Image of Weather">
          <div class="weatherTemp">-7c</div>
          <div class="weatherCity">
              <div>Snow</div>
              <div>Toronto</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style>

</style>