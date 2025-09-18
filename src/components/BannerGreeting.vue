<template>
    <div class="banner__wrapper mb-30">
        <!-- Greeting Card -->
        <div class="greeting__card" style="background-image: url('/public/assets/images/banner/greeting-bg.jpg');">
            <div class="greeting__top">
                <h2 class="title pe-2">Hello! Foyshal Ahmed,</h2>
                <a href="#" class="link">Upgrade Subscription → Go Pro</a>
            </div>
            <a href="#" class="manage__btn w-100">Manage Subscription</a>
        </div>

        <!-- Metric Card Start -->
        <div class="metric__card" v-for="(item, index) in MetricCardData" :key="index">
            <div class="icon" v-if="item.icon">
                <HugeiconsIcon :icon="item.icon" />
            </div>
            <div class="content">
                <h5 class="title">{{ item.title }}</h5>
                <div class="value">{{ item.value }}</div>
                <div class="note">{{ item.note }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { WhatsappIcon, UserMultiple03Icon, Ticket01Icon, Diamond02Icon } from '@hugeicons/core-free-icons'

// Metric Card Data
const MetricCardData = ref([
    {
        icon: WhatsappIcon,
        title: "WhatsApp Devise Used",
        value: "1/1",
        note: "Limit: 1/1",
    },
    {
        icon: UserMultiple03Icon,
        title: "Team Members",
        value: "1",
        note: "Unlimited",
    },
    {
        icon: Ticket01Icon,
        title: "Ticket",
        value: "6",
        note: "Unlimited",
    },
    {
        icon: Diamond02Icon,
        title: "Subscription",
        value: "Free",
        note: "Upgrade to Pro",
    },
]);
</script>
