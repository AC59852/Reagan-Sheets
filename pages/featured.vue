<template>
  <section id="featured" class="page">
      <PageIntro class="featuredIntro" title="The Best We've Ever Written" />
      <FeaturedTop :featuredTop="featuredTop" />
      <section class="featuredPosts">
          <div class="featuredPosts__wrapper">
              <nuxt-link to="/" class="featuredPosts__post" v-for="post in posts" :key="post.id">
                  <div class="featuredPosts__content">
                      <img class="featuredPosts__img" :src="post.img" :alt="'Image for Post Titled ' + post.heading">
                      <h3>{{ post.heading }}</h3>
                  </div>
              </nuxt-link>
          </div>
      </section>
  </section>
</template>

<script>
export default {
    head: {
        title: 'Featured | Reagan Sheets'
    },

    data() {
        return {
            featuredTop: {
                heading: 'Featured Content',
                para: 'Bibendum viverra est, at nisl nibh amet nulla sit. Diam nec aliquam at sed vel nisl. Diam aliquet gravida rhoncus, senectus nunc netus diam lorem. Sed purus lorem.',
                img: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            },

            posts: [
                {id: 0, heading: 'Ut cursus et fermentum blandit in sit.', img: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
                {id: 1, heading: 'Ut cursus et fermentum blandit in sit.', img: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
                {id: 2, heading: 'Ut cursus et fermentum blandit in sit.', img: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
                {id: 3, heading: 'Ut cursus et fermentum blandit in sit.', img: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
                {id: 4, heading: 'Ut cursus et fermentum blandit in sit.', img: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
                {id: 5, heading: 'Ut cursus et fermentum blandit in sit.', img: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
                {id: 6, heading: 'Ut cursus et fermentum blandit in sit.', img: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
                {id: 7, heading: 'Ut cursus et fermentum blandit in sit.', img: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
            ]
        }
    }
}
</script>

<style>

</style>