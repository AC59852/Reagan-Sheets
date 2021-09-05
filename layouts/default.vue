<template>
  <main id="app">
      <Navigation />
      <div id="container">
        <div id="routerWrapper">
            <Nuxt />
        </div>
      </div>
  </main>
</template>

<script>
export default {
  mounted() {
    let topNav = document.querySelector("header")


    document.addEventListener('touchstart', touchDown, false);
    document.addEventListener('touchmove', touchMove, false);

    var xtouch = null;
    var ytouch = null;

    function getTouches(e) {
        return e.touches || e.originalEvent.touches;
    }

    function touchDown(e) {
        const firstTouch = getTouches(e)[0];                                      
        xtouch = firstTouch.clientX;
        ytouch = firstTouch.clientY;
    }

    function touchMove(e) {
        if ( ! xtouch || ! ytouch ) {
            return;
        }

        var xUp = e.touches[0].clientX;
        var yUp = e.touches[0].clientY;

        var xDiff = xtouch - xUp;
        var yDiff = ytouch - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
            if ( xDiff > 0 ) {
                return;
            } else {
                return;
            } } else {
            if ( yDiff > 0 ) {
                topNav.classList.add("lower");
                console.log("pushing down");
            } else {
                topNav.classList.remove("lower");
                console.log("pulling up");
            }         
        }

        xtouch = null;
        ytouch = null;
    }
  }
}
</script>

<style>

</style>