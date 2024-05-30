<script>
export default {
    data() {
        return {
            namePattern: /^(?:[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ']{2,}|[a-zA-Z]{2,})$/,
            phonePattern: /^\+380\d{9}$/,
            messegeActive: false,
            emptyinput: false,
            validName: false,
            unvalidName: false,
            validPhone: false,
            unvalidPhone: false,
            url: '#',
            userForm: {
                userName: '',
                userPhone: ''
            }
        }
    },
    props: {
        buyActive: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        closeBuyWindow() {
            this.$emit('closeBuyWindow')
        },

        validateName() {
            this.validName = this.userForm.userName.match(this.namePattern);
            this.unvalidName = !this.validName;
        },
        validatePhone() {
            this.validPhone = this.userForm.userPhone.match(this.phonePattern);
            this.unvalidPhone = !this.validPhone;
        },
        async sendForm() {
            if (this.validName && this.validPhone) {
                await fetch(this.url, {
                    method: 'POST',
                    body: JSON.stringify(this.userForm)
                })
                this.messegeActive = !this.messegeActive;
                this.emptyinput = false;
                setTimeout(() => {
                    this.messegeActive = !this.messegeActive;
                    this.validName = false,
                        this.validPhone = false,
                        this.userForm = {
                            userName: '',
                            userPhone: ''
                        }
                }, 2500);
            } else {
                this.emptyinput = true;
            }
        }
    }
}
</script>
<template>
    <div class="buy-window" :class="{ 'buy-window-active': buyActive }">
        <button @click="closeBuyWindow" class="close-buy-window">&#10006;</button>
        <p class="buy-form-title">Please fill the form</p>
        <form class="buy-form" action="#">
            <input @input="validateName" v-model="userForm.userName" :class="{ 'valid': validName, 'unvalid': unvalidName }"
                class="buy-form-inputs" type="text" name="name" placeholder="Name:" autocomplete="on">
            <input @input="validatePhone" v-model="userForm.userPhone"
                :class="{ 'valid': validPhone, 'unvalid': unvalidPhone }" class="buy-form-inputs" type="tel" name="phone"
                placeholder="+380" autocomplete="on">
            <button @click.prevent="sendForm" class="buy-form-btn" type="submit">Submit</button>
            <p class="error-text" v-if="emptyinput">Complete all fields!</p>
        </form>
        <div class="message" :class="{ 'message-active': messegeActive }">
            <p>Thank you! We will contact you!</p>
        </div>
    </div>
</template>
<style scoped>
.buy-window {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 140px;
    height: 20px;
    background-color: #fff;
    border-radius: 15px;
    opacity: 0;
    transition: all 400ms ease;
}

.buy-form-title {
    margin-top: 30px;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
}

.buy-window-active {
    z-index: 5;
    width: 300px;
    height: 300px;
    box-shadow: 0 0 10px 2px #000;
    opacity: 1;
}

.buy-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;

}

.buy-form-inputs {
    width: 200px;
    height: 30px;
    padding-left: 10px;
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 4px 1px #000;
}

.buy-form-inputs::placeholder {
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #4d4d4d;
}

.close-buy-window {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    font-size: 19px;
    line-height: inherit;
    cursor: pointer;
    background-color: #fff;
    border-radius: 50%;
    transition: all 300ms ease;
}

.close-buy-window:hover {
    box-shadow: 0 0 4px 1px #000;
}

.buy-form-btn {
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
}

.buy-form-btn:active {
    color: rgb(0 0 0);
    background-color: rgb(255 255 255);
}

.valid {
    box-shadow: 0 0 4px 1px #33ff00c2;
}

.unvalid {
    box-shadow: 0 0 4px 1px #f00;
}

.error-text {
    margin-top: 5px;
    color: #f00;
}

.message {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: flex;
    align-items: center;
    width: 100%;
    height: 1%;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    background-color: #fff;
    border-radius: 15px;
    opacity: 0;
    transition: all 400ms ease;
}

.message-active {
    z-index: 6;
    width: 100%;
    height: 100%;
    opacity: 1;
}
</style>