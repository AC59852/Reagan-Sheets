<template>
  <section class="discoverTopics">
      <div class="discoverTopics__wrapper">
          <div class="discoverTopics__content">
              <h2>{{ currentTopic.tag }}</h2>
              <div class="discoverTopics__contentWrapper">
                  <nuxt-link to="/" class="discoverTopics__main">
                      <div>
                          <img src="~/assets/images/lantern.jpg" alt="">
                      </div>
                      <span>{{ currentItem.data.info }}</span>
                      <h3>{{ currentItem.data.title }}</h3>
                      <p>{{ currentItem.data.para }}</p>
                  </nuxt-link>
                  <div class="discoverTopics__list">
                      <nuxt-link to="/" v-for="item in currentTopic.items" :key="item.id" class="discoverTopics__item">
                        <img src="~/assets/images/hiking.jpg" :alt="item.data.name" class="discoverTopics__img">
                        <span>
                            <h3 class="discoverTopics__title">{{ item.data.name }}</h3>
                            <span class="discoverTopics__info">{{ item.data.info }}</span>
                        </span>
                      </nuxt-link>
                  </div>
              </div>
          </div>
          <div class="discoverTopics__topics">
              <h2>Explore</h2>
              <ul class="discoverTopics__list--topics">
                  <li v-for="topic in topics" :key="topic.id" class="discoverTopics__topic">{{ topic.name }}</li>
              </ul>
          </div>
      </div>
  </section>
</template>

<script>
export default {

    data() {
        return {

            topics: [
                {id: 1, name: 'Anime'},
                {id: 2, name: 'Video Games'},
                {id: 3, name: 'Cartoons'},
                {id: 4, name: 'Technology'},
                {id: 5, name: 'Food'},
            ],

            currentTopic: {
                tag: 'Anime',
                items: [
                    {
                        id: 1,
                        data: {
                            name: 'Item 1',
                            info: 'Ut cursus et fermentum blandit in sit.'
                        }
                    },
                    {
                        id: 2,
                        data: {
                            name: 'Item 2',
                            info: 'Ut cursus et fermentum blandit in sit.'
                        }
                    },
                    {
                        id: 3,
                        data: {
                            name: 'Item 3',
                            info: 'Ut cursus et fermentum blandit in sit.'
                        }
                    },
                    {
                        id: 4,
                        data: {
                            name: 'Item 4',
                            info: 'Ut cursus et fermentum blandit in sit.'
                        }
                    },
                    {
                        id: 5,
                        data: {
                            name: 'Item 5',
                            info: 'Ut cursus et fermentum blandit in sit.'
                        }
                    },
                ]
            },

            currentItem: {
                data: {
                    info: 'Reagan Sheets | 30 August 2021',
                    title: 'Ut cursus et fermentum blandit in sit.',
                    para: 'Bibendum viverra est, at nisl nibh amet nulla sit. Diam nec aliquam at sed vel nisl. Diam aliquet gravida rhoncus, senectus nunc netus diam lorem. Sed purus lorem.'
                }
            }
        }
    }

}
</script>

<style>

</style>