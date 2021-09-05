<template>
  <section class="discoverTop">
      <div class="discoverFeatured">
          <nuxt-link to="/">
            <span class="discoverFeatured__content">
                <span class="discoverFeatured__tag">Tag</span>
                <h2 class="discoverFeatured__title">Featured Content</h2>
                <span class="discoverFeatured__info">Reagan Sheets | 30 August 2021</span>
            </span>
          </nuxt-link>
      </div>
      <div class="discoverRecents">
          <div class="discoverRecents__btns">
              <button class="active">Choice</button>
              <button>Recent</button>
          </div>
          <ul class="discoverRecents__list">
              <li to="/" v-for="item in items" :key="item.id" class="discoverRecents__item">
                 <nuxt-link to="/">
                    <img src="~/assets/images/rainforest.jpg" :alt="item.data.name" class="discoverRecents__img">
                    <span>
                        <h2 class="discoverRecents__title">{{ item.data.name }}</h2>
                        <p class="discoverRecents__info">{{ item.data.info }}</p>
                    </span>
                  </nuxt-link> 
              </li>
          </ul>
      </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    id: 1,
                    data: {
                        name: 'Item 1',
                        info: 'Bibendum viverra est, at nisl nibh amet nulla sit. Diam nec aliquam at sed vel nisl. Diam aliquet gravida rhoncus.'
                    }
                },
                {
                    id: 2,
                    data: {
                        name: 'Item 2',
                        info: 'Bibendum viverra est, at nisl nibh amet nulla sit. Diam nec aliquam at sed vel nisl. Diam aliquet gravida rhoncus.'
                    }
                },
                {
                    id: 3,
                    data: {
                        name: 'Item 3',
                        info: 'Bibendum viverra est, at nisl nibh amet nulla sit. Diam nec aliquam at sed vel nisl. Diam aliquet gravida rhoncus.'
                    }
                },
                {
                    id: 4,
                    data: {
                        name: 'Item 4',
                        info: 'Bibendum viverra est, at nisl nibh amet nulla sit. Diam nec aliquam at sed vel nisl. Diam aliquet gravida rhoncus.'
                    }
                },
            ]
        }
    }
}
</script>

<style>

</style>