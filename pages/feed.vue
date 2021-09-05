<template>
  <section id="feed" class="page">
      <div class="headings">
          <div class="fonts" v-for="heading in headings" :key="heading.id" :style="{ fontFamily: heading.font }">
          <div>
              <h2>{{ heading.font }}</h2>
              <h3>{{ heading.text }}</h3>
          </div>
          <span>
              <button @click="changeHeading(heading)">Heading</button>
              <button @click="changePara(heading)">Paragraph</button>
          </span>
      </div>
      </div>
      <div class="text">
          <h2 :style="{ fontFamily: currentText.headingFont }">Reagan Review's: The Duke of Death and His Maid</h2>
          <p :style="{ fontFamily: currentText.paraFont }">Written by Kohara Inoue and published in Japanese by Shogakukan, this gothic romantic comedy manga follows the Duke, his maid Alice, and other colorful characters you’ll meet throughout the manga. The Duke, also known as the Duke of Death or Bocchan (the readers are not given an actual name for the Duke), was cursed by a witch at a young age that made him kill everything he touches. His mother forced him to live at the old family estate nestled deep in the woods due to his curse. Although he fears being around other people, to help him maintain the estate and keep him company are Alice and Rob, his maid and butler. Alice loves to playfully tease, harass, and get in the Duke’s personal space, even though he can’t touch her due to the curse. With all the time that the two spend together, growing closer and closer toward one another with all of the antics that the Duke and Alice get up to, the Duke makes a promise to himself and her that he’ll break free from the curse. With this goal in mind, the Duke seeks help in figuring out how to undo the curse from a variety of supernatural beings. </p>
          <h3 :style="{ fontFamily: currentText.headingFont }">Reagan Review's: The Duke of Death and His Maid</h3>
      </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            headings: [
                {id: 0, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', font: 'Roboto'},
                {id: 1, text: 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', font: 'Open Sans'},
                {id: 2, text: 'quis nostrud exercitation ullamco laboris nisi ut', font: 'Heebo'},
                {id: 3, text: 'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum', font: 'Lato'},
                {id: 4, text: 'dolore eu fugiat nulla pariatur. Excepteur sint', font: 'Montserrat'},
                {id: 5, text: 'occaecat cupidatat non proident, sunt in culpa qui officia deserunt', font: 'Poppins'},
                {id: 6, text: 'mollit anim id est laborum.', font: 'Noto Sans'},
                {id: 7, text: 'Sed ut perspiciatis unde omnis iste natus', font: 'Spartan'},
                {id: 8, text: 'error sit voluptatem accusantium doloremque laudantium, totam rem', font: 'Rubik'},
            ],

            currentText: {
                headingFont: null,
                paraFont: null
            }
        }
    },

    methods: {
        changeHeading(heading) {
            this.currentText.headingFont = heading.font 
        },

        changePara(heading) {
            this.currentText.paraFont = heading.font
        }
    }
}
</script>

<style>

</style>