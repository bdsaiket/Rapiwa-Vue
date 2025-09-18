<template>
    <div class="authentication__wrapper">
        <div class="left__side">
            <div class="background__shape"
                style="background-image: url('../../../public/assets/images/login-thumb.jpg');">
                <div class="content">
                    <h1 class="title">
                        “Affordable <span>WhatsApp API</span> for Developers”
                    </h1>
                </div>
            </div>
        </div>
        <div class="form__wrapper text-center">
            <div class="icon">
                <img src="../../../public/assets/images/logo/favicon.svg" alt="favicon">
            </div>
            <div class="content">
                <h4 class="title">Enter OTP</h4>
                <p class="desc">Enter the OTP sent to your WhatsApp number</p>
            </div>

            <form action="dashboard" class="card px-30 py-30 text-start">
                <div class="form-group">
                    <label>enter OTP</label>
                    <div class="otp__input">
                        <input type="text" name="text" maxlength="1" />
                        <input type="text" name="text" maxlength="1" />
                        <input type="text" name="text" maxlength="1" />
                        <input type="text" name="text" maxlength="1" />
                        <input type="text" name="text" maxlength="1" />
                        <input type="text" name="text" maxlength="1" />
                    </div>
                </div>
                <div class="submit__btn">
                    <button type="submit" class="sg-btn sg-btn-dark mt-30">Login</button>
                </div>
                <div class="back__btn text-center mt-30">
                    <router-link class="solid__btn text-14 fw-normal text-content justify-content-center"
                        :to="{ name: 'login' }">
                        <HugeiconsIcon :icon="ArrowLeft02Icon" :size="18" />
                        Back To <span class="text-primary">Login</span>
                    </router-link>
                </div>

            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowLeft02Icon } from '@hugeicons/core-free-icons'

</script>