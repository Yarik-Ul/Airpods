<script></script>
<template>
    <footer>
        <div class="footer" id="contacts">
            <div class="footer-container">
                <div class="footer-first-side">
                    <a class="footer-links" href="https://www.ctrs.com.ua/ru/brands/apple/" target="_blank">Find a retailer near you</a>
                    <p>Or call <a class="footer-links" href="tell: 800 207 758">800 207 758</a></p>
                    <a href="https://www.apple.com/" target="_blank">
                        <Icon name="FooterLogo" size="30px" />
                    </a>
                </div>
                <div class="footer-second-side">
                    <p>Copyright © 2023 Apple Inc.</p>
                    <p>All rights reserved.</p>
                    <a class="footer-links" href="https://www.apple.com/legal/" target="_blank">Legal Notices</a>
                    <a class="footer-links" href="#">Site Map</a>
                    <a class="footer-links" href="https://www.apple.com/legal/privacy/" target="_blank">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>
.footer {
    width: 100%;
    color: #fff;
    background-color: #000;
}

.footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    padding: 50px 0 40px;
    margin: 0 auto;

}

.footer-icon {
    color: #fff;
}

.footer-first-side {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
}

.footer-links {
    color: #fff;
}
.footer-links:hover {
    color: #aaaaaa;
}

.footer-second-side {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}


@media (width >= 320px) and (width <= 767px) {
    .footer-container {
        padding: 20px 10px;
}

.footer-first-side {
        margin-bottom: 20px;
    }
}
</style>