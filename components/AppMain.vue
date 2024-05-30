<script>
export default {
    props: {
        filterBtnClasses: {
            type: Array,
            required: true
        },
        hiddenClass: {
            type: String,
            required: true
        },
        colors: {
            type: Object,
            required: true
        }
    },
    methods: {
        changeStyle(btnClass) {
            this.$emit('ChangeStyle', btnClass)
        },
        toUpForBuy() {
            this.$emit('toUpForBuy')
            
        }
    }

}
</script>
<template>
    <main>
        <div class="main-container">
            <section>
                <div class="first-view">
                    <img v-show="colors.red" src="~/assets/img/red_air_pods.webp" alt="airpods_max">
                    <img v-show="colors.blue" src="~/assets/img/blue_air_pods.webp" alt="airpods_max">
                    <img v-show="colors.green" src="~/assets/img/green_air_pods.webp" alt="airpods_max">
                    <img v-show="colors.gray" src="~/assets/img/gray_air_pods.webp" alt="airpods_max">
                    <img v-show="colors.white" src="~/assets/img/white_air_pods.webp" alt="airpods_max">
                    <h1 class="general-title">AirPods Max</h1>
                </div>
            </section>
            <section>
                <div class="choose-colour" id="product">
                    <h2 class="choose-color-title">Choose your colour</h2>
                    <p class="choose-color-text">The perfect balance between the purityof hi‑fi and the magic of AirPods.
                    </p>
                    <p class="choose-color-text">The ultimate personal audio experience.</p>
                    <div class="choose-colour-btns">
                        <button @click="changeStyle(btnClass)" v-for="(btnClass, index) in  filterBtnClasses" :key="index"
                            :class="btnClass" class="choose-colour-btn">
                        </button>
                    </div>
                </div>
            </section>
            <section id="info">
                <div class="original-composition">
                    <h2 class="original-composition-title">An extremely original composition.</h2>
                    <p class="original-composition-disc">Introducing the reinvention of over-the-ear headphones. From the
                        cushion to the headband, the AirPods Max are designed with acoustic insulation in mind, adapted to
                        many head shapes, so you can immerse yourself in the purity of sound.</p>
                    <div class="original-composition-details">
                        <ul class="composition-details-text">
                            <li>
                                <p>The headband is made of breathable mesh, distributing the weight to reduce pressure on
                                    the head.</p>
                            </li>
                            <li>
                                <p>The stainless steel structure is wrapped in a soft-touch material to provide a remarkable
                                    harmony between resistance, flexibility and comfort.</p>
                            </li>
                            <li>
                                <p>The telescoping arms expand and stay in any position you want, allowing you to maintain
                                    fit and isolation.</p>
                            </li>
                        </ul>
                        <img class="composition-details-img" v-show="colors.red" src="~/assets/img/red_side.webp"
                            alt="air_pods">
                        <img class="composition-details-img" v-show="colors.blue" src="~/assets/img/blue_side.webp"
                            alt="air_pods">
                        <img class="composition-details-img" v-show="colors.green" src="~/assets/img/green_side.webp"
                            alt="air_pods">
                        <img class="composition-details-img" v-show="colors.gray" src="~/assets/img/gray_side.webp"
                            alt="air_pods">
                        <img class="composition-details-img" v-show="colors.white" src="~/assets/img/white_side.webp"
                            alt="air_pods">
                    </div>
                </div>
            </section>
            <section>
                <div class="preserves-battery">
                    <h2 class="preserves-battery-title">It even preserves the battery.</h2>
                    <p class="preserves-battery-disc">When stored in the sleek and lightweight Smart Case , AirPods Max
                        enter a low-power state to save energy.</p>
                    <img class="preserves-battery-img" v-show="colors.red" src="~/assets/img/smartcase_red.webp"
                        alt="smart_case_for_airpods">
                    <img class="preserves-battery-img" v-show="colors.blue" src="~/assets/img/smartcase_blue.webp"
                        alt="smart_case_for_airpods">
                    <img class="preserves-battery-img" v-show="colors.green" src="~/assets/img/smartcase_green.webp"
                        alt="smart_case_for_airpods">
                    <img class="preserves-battery-img" v-show="colors.gray" src="~/assets/img/smartcase_gray.webp"
                        alt="smart_case_for_airpods">
                    <img class="preserves-battery-img" v-show="colors.white" src="~/assets/img/smartcase_white.webp"
                        alt="smart_case_for_airpods">
                </div>
            </section>
            <section>
                <div class="stay-alive">
                    <h2 class="stay-alive-title">Stayin' alive, stayin' alive.</h2>
                    <p class="stay-alive-time">20</p>
                    <p class="stay-alive-disc">hours of music, movies and calls with Active Noise Cancellation and Custom
                        Spatial Audio turned on. 5 And just 5 minutes of charging via the Lightning connector gives you an
                        hour and a half of sound. 6</p>
                </div>
            </section>
            <section>
                <div class="last-view">
                    <div class="last-view-container">
                        <p class="last-view-text">Custom Spatial Audio with dynamic head tracking provides a surround sound
                            experience worthy of a
                            movie theater.
                        </p>
                        <p class="last-view-text">Through built-in gyroscopes and accelerometers, AirPods Max and your
                            iPhone,
                            iPad, Mac or Apple TV
                            detect the slightest head movements and keep the sound steady on your device.</p>
                        <p class="last-view-text">And with Apple Music, custom Spatial Audio with dynamic head tracking
                            creates
                            a unique
                            three-dimensional listening experience.</p>
                        <button @click.prevent="toUpForBuy" class="last-view-btn">BUY</button>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>
<style scoped>
.main-container {
    max-width: 1920px;
    margin: 0 auto
}

.first-view {
    max-width: 1200px;
    height: auto;
    margin: 0 auto 180px;
}

.general-title {
    text-indent: -99999px;
}

.choose-colour {
    max-width: 1200px;
    margin: 0 auto 180px;
}

.choose-color-title {
    margin-bottom: 20px;
    font-size: 36px;
    font-weight: 700;
    line-height: 120%;
    text-align: center;
}

.choose-color-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 120%;
    text-align: center;
}

.choose-colour-btns {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: space-around;
    margin-top: 78px;
}

.choose-colour-btn {
    width: 260px;
    height: 275px;
    cursor: pointer;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 150px 175px;
    border: 1px solid rgb(119 119 119);
    border-radius: 20px;
    transition: all 300ms ease;
    transform: scale(1)
}

.choose-colour-btn:hover {
    box-shadow: 0 0 2px 2px #A3A3A3;
    transform: scale(1.03);
}

.green {
    background-image: url('~/assets/img/airpods_green_mini.webp');
}

.blue {
    background-image: url('~/assets/img/airpods_blue_mini.webp');
}

.white {
    background-image: url('~/assets/img/airpods_white_mini.webp');
}

.gray {
    background-image: url('~/assets/img/airpods_gray_mini.webp');
}

.red {
    background-image: url('~/assets/img/airpods_red_mini.webp');
}

.original-composition {
    margin: 0 auto 180px;
}

.original-composition-title,
.preserves-battery-title,
.stay-alive-title {
    margin-bottom: 20px;
    font-size: 64px;
    font-weight: 700;
    line-height: 120%;
    text-align: center;
}

.stay-alive-title {
    margin-bottom: 40px;
}

.original-composition-disc {
    max-width: 652px;
    margin: 0 auto 40px;
    font-size: 16px;
    font-weight: 500;
    line-height: 120%;
    text-align: center;
}

.original-composition-details {
    display: flex;
    gap: 150px;
    max-width: 624px;
    margin: 0 auto;

}

.composition-details-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.composition-details-img {
    width: 244px;
}

.preserves-battery,
.stay-alive {
    max-width: 1200px;
    padding: 80px 0;
    margin: 0 auto;
    background-color: #fafafa;
}

.preserves-battery-disc {
    text-align: center;
}

.preserves-battery-img {
    display: block;
    width: 400px;
    margin: 0 auto;
}

.stay-alive-time {
    margin-bottom: 40px;
    font-size: 210px;
    font-weight: 700;
    line-height: 120%;
    text-align: center;
}

.stay-alive-disc {
    max-width: 402px;
    margin: 0 auto;
}

.last-view {
    max-width: 1920px;
    margin: 0 auto;
    background-color: black;
    background-image: url('~/assets/img/bg_men.webp');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.last-view-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    max-width: 296px;
    padding: calc(10px + 55vw) 0 calc(10px + 30vw);
    margin: 0 auto;
}

.last-view-text {
    font-weight: 500;
    line-height: 130%;
    color: rgb(255 255 255);
    text-align: center;
}

.last-view-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 50px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: rgb(0 0 0);
    cursor: pointer;
    background-color: rgb(255 255 255);
    border: none;
    border-radius: 30px;
    transition: all 500ms ease;
    transform: scale(1);
}

.last-view-btn:hover {
    color: rgb(255 255 255);
    background-color: rgb(0 0 0);
    transform: scale(1.2);
}


@media (width >= 320px) and (width <= 767px) {
    .main-container {
        padding-top: 64px;
    }

    .first-view,
    .choose-colour,
    .original-composition {
        padding: 0 10px;
        margin-bottom: 20px;
    }

    .preserves-battery,
    .stay-alive {
        padding: 10px;
    }

    .choose-colour-btns {
        padding: 0 20px;
    }

    .choose-color-text,
    .original-composition-disc,
    .composition-details-text {
        font-size: 20px;
    }

    .original-composition-details {
        gap: 10px;
        padding: 10px;
    }



}

@media (width >= 320px) and (width <= 480px) {
    .original-composition-title,
    .preserves-battery-title,
    .stay-alive-title {
        font-size: 36px;
    }

    .original-composition-details {
        flex-direction: column;
        align-items: center;

    }

    .composition-details-text {
        gap: 20px;
    }
}
</style>