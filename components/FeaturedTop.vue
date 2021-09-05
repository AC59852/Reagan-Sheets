<template>
  <section class="featuredTop">
      <nuxt-link to="/" class="featuredTop__wrapper">
          <img :src="featuredTop.img" :alt="'Blog Post for ' + featuredTop.heading">
          <div class="featuredTop__text">
            <h2 class="featuredTop__heading">{{ featuredTop.heading }}</h2>
            <p>{{ featuredTop.para }}</p>
          </div>
      </nuxt-link>
  </section>
</template>

<script>
export default {
    props: ["featuredTop"]
}
</script>

<style>

</style>