<script>
export default {
  data() {
    return {
      buttonClasses: ['green', 'blue', 'white', 'gray', 'red'],
      hiddenClass: 'red',
      animateBtn: false,
      colors: {
        red: true,
        green: false,
        blue: false,
        gray: false,
        white: false
      }
    }
  },
  computed: {
    buttonClasses() {
      return this.buttonClasses.filter(btnClass => btnClass !== this.hiddenClass)
    }
  },
  methods: {
    changeStyle(btnClass) {
      this.hiddenClass = btnClass;
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
      for (let color in this.colors) {
        if (color === this.hiddenClass) {
          this.colors[color] = true;
        } else {
          this.colors[color] = false;
        }
      }

    },
    toUpForBuy() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
      this.animateBtn = true;
      setTimeout(()=>{
        this.animateBtn = false;
      },3500)
  }
}
}
</script>
<template>
  <div class="container" :class="hiddenClass">
    <AppHeader :hiddenClass="hiddenClass" :animateBtn="animateBtn" />
    <AppMain @changeStyle="changeStyle" @toUpForBuy="toUpForBuy" :buttonClasses="buttonClasses" :hiddenClass="hiddenClass" :colors="colors" />
    <AppFooter />
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  height: 100vh;
  font-family: Inter, sans-serif;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}

.red {
  background: linear-gradient(180.00deg, rgb(243 214 209), rgb(235 235 235 / 0%) 100%);
}

.green {
  background: linear-gradient(180.00deg, rgb(221 234 217), rgb(235 235 235 / 0%) 100%);

}

.gray {
  background: linear-gradient(180.00deg, rgb(182 182 182), rgb(235 235 235 / 0%) 100%);
}

.white {
  background: linear-gradient(180.00deg, rgb(250 250 250), rgb(235 235 235 / 0%) 100%);
}

.blue {
  background: linear-gradient(180.00deg, rgb(202 219 235), rgb(235 235 235 / 0%) 100%);
}
</style>

