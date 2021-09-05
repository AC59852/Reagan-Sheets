<template>
  <section id="home" class="page">
    <!-- Home Intro is the heading, "Hello Person", and weather content -->
    <PageIntro title="Explore the opinions of today"/>
    <section class="homeArticles" id="articlesOne">
      <h2>Featured Tech Blog Posts</h2>
      <div class="articlesWrapper" id="articleWrapper1">
        <nuxt-link v-for="post in posts1" :key="post.uid" :to="'/post/' + post.uid" class="article">
          <prismic-image :field="post.data.image"/>
          <h2>{{ $prismic.asText(post.data.title) }}</h2>
          <prismic-rich-text class="firstPara" :field="post.data.preview_text" />
        </nuxt-link>
    </div>
    </section>
    <section class="homeArticles" id="articlesOne">
      <h2>Featured Video Game Blog Posts</h2>
      <div class="articlesWrapper" id="articleWrapper2">
        <nuxt-link v-for="post in posts2" :key="post.uid" :to="'/post/' + post.uid" class="article">
          <prismic-image :field="post.data.image"/>
          <h2>{{ $prismic.asText(post.data.title) }}</h2>
          <div class="firstPara">
            <p>{{ post.data.preview_text[0].text }}</p>
          </div>
        </nuxt-link>
    </div>
    </section>
  </section>
</template>

<script>
// ~ is an alias to /src

export default {
  // Name of the page
  name: 'Home',

  data() {
    return {
      posts1: [],
      posts2: [],
    }
  },

  async asyncData({ $prismic, params, error }) {
    const data1 = await $prismic.api.query(
      $prismic.predicates.at('document.tags', ['tech'])
    )
    const data2 = await $prismic.api.query(
      $prismic.predicates.at('document.tags', ['game'])
    )

    return { data1: data1.results, data2: data2.results }
  },

  mounted() {

    this.addPosts()

  },

  methods: {

    addPosts() {
      this.posts1 = this.data1
      this.posts2 = this.data2

      this.posts1.forEach(post => {
        var length = 105;
        var postText = post.data.preview_text[0].text
        var truncatedText = postText.substring(0, length)

        this.$nextTick(() => {
          if(postText.slice(-5) == ". . .") {
            return
          } else {
            postText = truncatedText.substr(0, truncatedText.lastIndexOf(" ")) + '. . .'
            post.data.preview_text[0].text = postText
          }
        })
      })

      this.posts2.forEach(post => {
        var length = 105;
        var postText = post.data.preview_text[0].text
        var truncatedText = postText.substring(0, length)

        this.$nextTick(() => {
          if(postText.slice(-5) == ". . .") {
            return
          } else {
            postText = truncatedText.substr(0, truncatedText.lastIndexOf(" ")) + '. . .'
            post.data.preview_text[0].text = postText
          }
        })
      })
    }

  }

}
</script>
