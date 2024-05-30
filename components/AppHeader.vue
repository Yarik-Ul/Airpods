<script>
export default {
    data() {
        return {
            navActive: false,
            buyActive: false,
        }
    },
    props: {
        hiddenClass: {
            type: String,
            required: true
        },
        animateBtn: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        showNavigation() {
            this.navActive = !this.navActive
        },
        moveToLink(e) {
            let linkId = e.target.href.substr(e.target.href.indexOf("#") + 1);
            let elementPosition = document.getElementById(linkId).offsetTop;
            window.scrollTo({ top: elementPosition, left: 0, behavior: "smooth" });
        },
        showBuyWindow() {
            this.buyActive = !this.buyActive
        }
    }
}
</script>
<template>
    <header>
        <div class="header-container" :class="[{ 'show-navigation': navActive }, hiddenClass]">
            <div class="logo-wrapper">
                <a href="https://www.apple.com/" target="_blank">
                    <Icon name="MainLogo" size="30px" />
                </a>
            </div>
            <div class="navigation-container">
                <nav>
                    <ul @click.prevent="moveToLink($event)" class="navigation-menu" :class="{ 'menu-active': navActive }">
                        <li><a class="navigation-link" href="#info">Info</a></li>
                        <li><a class="navigation-link" href="#product">Product</a></li>
                        <li><a class="navigation-link" href="#contacts">Contacts</a></li>
                    </ul>
                </nav>
                <div class="btn-wrapper">
                    <button @click.prevent="showBuyWindow" class="btn-buy"
                        :class="{ 'animation-btn': animateBtn }">BUY</button>
                    <AppForm @closeBuyWindow="showBuyWindow" :buyActive="buyActive" />
                </div>
            </div>
            <div class="burger-menu" @click="showNavigation" :class="{ 'burger-menu-active': navActive }">
                <span class="burger-line"></span>
                <span class="burger-line"></span>
                <span class="burger-line"></span>
            </div>
        </div>
    </header>
</template>
<style scoped>
.header-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    padding: 40px 0 56px;
    margin: 0 auto;
}

.navigation-container {
    display: flex;
    gap: 40px;
    align-items: center;
}

.navigation-menu {
    display: flex;
    gap: 40px;
}

.navigation-link {
    display: block;
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: rgb(0 0 0);
    transition: all 600ms ease;
    transform: translateY(0);
}

.navigation-link:hover {
    border-bottom: 1px solid black;
    transform: translateY(-3px);
}

.btn-buy {
    position: relative;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 50px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: rgb(255 255 255);
    cursor: pointer;
    background-color: rgb(0 0 0);
    border: none;
    border-radius: 30px;
    transition: all 500ms ease;
    transform: scaleX(1);
}

.btn-buy:hover {
    color: rgb(0 0 0);
    background-color: rgb(255 255 255);
    transform: scaleX(1.1);
}

.burger-menu {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    display: none;
    width: 120px;
    height: 20px;
    cursor: pointer;
    transform: translate(-50%, -50%);
}

.burger-line {
    position: absolute;
    display: inline-block;
    width: 120px;
    height: 2px;
    background-color: black;
}

.burger-line:nth-child(1) {
    top: 0;
}

.burger-line:nth-child(2) {
    top: 50%;
    left: 50%;
    width: 100px;
    transform: translateX(-50%);
}

.burger-line:nth-child(3) {
    top: 100%;
    left: 50%;
    width: 80px;
    transform: translateX(-50%);
}

.btn-wrapper {
    position: relative;
}

.animation-btn {
    animation: activebutton 1s linear;
    animation-iteration-count: 3;

}

@keyframes activebutton {
    0% {
        scale: 1;
    }

    50% {
        scale: 1.2;
    }

    100% {
        scale: 1;
    }
}


@media (width >=768px) and (width <=1279px) {
    .header-container {
        padding: 10px;
    }
}

@media (width >=320px) and (width <=767px) {
    .header-container {
        position: fixed;
        z-index: 10;
        width: 100%;
        padding: 5px 20px;
        margin: 0 auto;
        transition: all 300ms ease;
    }

    .red {
        background-color: rgb(243 214 209);
    }

    .green {
        background: rgb(221 234 217);

    }

    .gray {
        background: rgb(182 182 182);
    }

    .white {
        background: rgb(250 250 250);
    }

    .blue {
        background: rgb(202 219 235);
    }

    .navigation-menu {
        position: absolute;
        top: -60px;
        left: 50%;
        transition: all 300ms ease;
        transform: translateX(-50%);
    }

    .btn-buy {
        width: 100px;
        height: 30px;
        font-size: 12px;
        font-weight: 700;
    }

    .burger-menu {
        display: block;
        transition: all 300ms ease;
    }

    .show-navigation {
        padding: 60px 10px 10px;
    }

    .burger-menu-active {
        top: 90%;
        height: 10px;
    }

    .menu-active {
        position: absolute;
        top: 20px;
        left: 50%;
        display: flex;
        transform: translateX(-50%);
    }
}

@media (width >=320px) and (width <=374px) {
    .btn-buy {
        width: 60px;
        height: 20px;
        font-size: 12px;
        font-weight: 700;
    }

}</style>