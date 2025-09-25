<template>
    <div class="card px-20 py-20 radius-20">
        <div class="card__header mb-3 pb-3 border-bottom ">
            <h4 class="title">
                <router-link class="solid__btn" :to="{ name: 'product' }">
                    <HugeiconsIcon :icon="ArrowLeft02Icon" :size=22 />
                </router-link>
                view Product
            </h4>

        </div>
        <div class="card__body">
            <ul class="d-grid gap-2 list-unstyled">
                <li class="text-14 lh-normal text-content fw-medium">
                    <span class="me-1 text-heading text-capitalize">Product Name:</span>
                    Yoori Ecommerce CMS
                </li>
                <li class="text-14 lh-normal text-content fw-medium">
                    <span class="me-1 text-heading text-capitalize">Product Image:</span>
                    <img src="../../../../../../public/assets/images/user-avatar.jpg"
                        class="mw-5 rounded d-inline-block" alt="img">
                </li>
                <li class="text-14 lh-normal text-content fw-medium">
                    <span class="me-1 text-heading text-capitalize">Product URL:</span>
                    https://yoori.spagreen.net/
                </li>
                <li class="text-14 lh-normal text-content fw-medium">
                    <span class="me-1 text-heading text-capitalize">Product Price:</span>
                    $60.00
                </li>
                <li class="text-14 lh-normal text-content fw-medium">
                    <span class="text-heading text-capitalize">Demo URL:</span>
                    https://demo.yoori.spagreen.net/
                </li>
                <li class="text-14 lh-normal text-content fw-medium">
                    <span class="text-heading text-capitalize">Demo Credentials:</span>
                    Email - demo@gmail.com, Password - 12345
                </li>
                <li class="text-14 lh-normal text-content fw-medium">
                    <span class="text-heading text-capitalize">Description:</span>
                    Technology has become a part of our daily lives and for a huge portion of our life, we
                    are dependent on tech products daily. There is hardly a home in Bangladesh without a tech product.
                    This is where we come in. YOORI & Engineering Ltd had started as a Tech product shop way back in
                    March 2007. We focused on giving the customers the best service possible. This is why YOORI is one
                    of The most trusted names in the tech industry of Bangladesh today.
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ArrowLeft02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/vue';

// Import File
import FileUpload from '@/components/FileUpload.vue';



</script>