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
                <h4 class="title">Login / Register To Your Account</h4>
                <p class="desc">Enter you WhatsApp number</p>
            </div>

            <form action="otp" class="card px-30 py-30 text-start">
                <div class="form-group">
                    <label for="w_number">WhatsApp Number</label>
                    <vue-tel-input v-model="phone" mode="international" :input-options="inputOptions"
                        :enabled-country-code="true" :enabled-flags="true" :dropdown-options="dropdownOptions"
                        placeholder="Search country and enter number" />
                </div>
                <div class="submit__btn">
                    <button type="submit" class="sg-btn sg-btn-dark mt-30 ">Send OTP</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Phone Input
const phone = ref('')

// Optional config for better UX
const inputOptions = {
    showDialCode: true
}

const dropdownOptions = {
    showFlags: true,
    showSearchBox: true,
    searchBoxPlaceholder: 'Search country'
}

</script>