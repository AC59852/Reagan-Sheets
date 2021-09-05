<template>
  <header>
      <nav id="topNav">
          <div class="navCon">
              <ul>
                <li><router-link to="/"><img src="/svgs/home.svg" alt="Home"></router-link></li>
                <li><router-link to="/feed"><img src="/svgs/rss.svg" alt="Subscriptions"></router-link></li>
                <li><router-link to="/featured"><img src="/svgs/fire.svg" alt="Featured"></router-link></li>
                <li><router-link to="/discover"><img src="/svgs/compass.svg" alt="Recents"></router-link></li>
          </ul>
          </div>
          <router-link class="settingsBtn" to="/settings"><img src="/svgs/settings.svg" alt=""></router-link>
      </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>