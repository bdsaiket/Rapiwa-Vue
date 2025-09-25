<template>
    <div class="card px-20 py-20 radius-20">
        <div class="card__header mb-3 pb-3 border-bottom ">
            <h4 class="title">
                <router-link class="solid__btn" :to="{ name: 'service' }">
                    <HugeiconsIcon :icon="ArrowLeft02Icon" :size=22 />
                </router-link>
                view Service
            </h4>

        </div>
        <div class="card__body">
            <ul class="d-grid gap-2 list-unstyled">
                <li class="text-14 lh-normal text-content fw-medium">
                    <span class="me-1 text-heading text-capitalize"> Service Name:</span>
                    Software Installation
                </li>
                <li class="text-14 lh-normal text-content fw-medium">
                    <span class="me-1 text-heading text-capitalize">Hourly Rate:</span>
                    $60.00 - $150.00
                </li>
                <li class="text-14 lh-normal text-content fw-medium">
                    <span class="me-1 text-heading text-capitalize"> Get Quotes URL:</span>
                    https://spagreen.net/
                </li>
                <li class="text-14 lh-normal text-content fw-medium">
                    <span class="me-1 text-heading text-capitalize">Contact No:</span>
                    +880 1322-827799
                </li>
                <li class="text-14 lh-normal text-content fw-medium">
                    <span class="text-heading text-capitalize">Contact Email:</span>
                    info@spagreen.net
                </li>
                <li class="text-14 lh-normal text-content fw-medium">
                    <span class="text-heading text-capitalize">Description:</span>
                    SpaGreen Creative provides custom software and app solutions for ecommerce, movie
                    portal, online payment gateway, hotel booking system etc.
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