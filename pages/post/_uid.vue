<template>
  <section :class="'page blogPost'">
      <div class="postWrapper">
        <div class="postSmall">
          <h1>{{ $prismic.asText(post.title) }}</h1>
          <prismic-rich-text class="postPreview" :htmlSerializer="anotherHtmlSerializer" :field="post.preview_text" />
        </div>
        <prismic-image class="postImage" :field="post.image"/>
        <div class="postSmall">
          <prismic-rich-text :htmlSerializer="anotherHtmlSerializer" :field="post.text_block_1" />
          <prismic-rich-text :htmlSerializer="anotherHtmlSerializer" :field="post.text_block_2" />
        </div>
        <prismic-image class="postImage postImage2" :field="post.image_2"/>
        <div class="postSmall">
          <prismic-rich-text :htmlSerializer="anotherHtmlSerializer" :field="post.text_block_3" />
          <prismic-rich-text :htmlSerializer="anotherHtmlSerializer" :field="post.text_block_4" />
        </div>
      </div>
  </section>
</template>

<script>
import prismicDOM from 'prismic-dom';

const Elements = prismicDOM.RichText.Elements;

const anotherHtmlSerializer = function (type, element, content, children) {
  // Add a class to paragraph elements
  if (type === Elements.paragraph) {
    return `<p class="">${children.join('')}</p>`;
  }

  // Return null to stick with the default behavior for everything else
  return null;
}
export default {
    head () {
    return {
      title: `Post | ${this.post.title[0].text}`,

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.preview_text[0].text
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title[0].text
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.preview_text[0].text
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:  this.post.image.url
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.post.title[0].text
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.post.title[0].text
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.post.preview_text[0].text
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.post.image.url
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          content: this.post.title[0].text
        },
        { property: "og:image:width", content: "500" },
        { property: "og:image:height", content: "500" },
      ]
    }
  },
  async asyncData({ $prismic, params, error }) {
    try{
      // Query to get post content
      const post = (await $prismic.api.getByUID('tech_blog_post', params.uid)).data
      // Returns data to be used in template
      return {
        post
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

  data() {
    return {
      anotherHtmlSerializer,
    }
  }
}
</script>

<style>

</style>