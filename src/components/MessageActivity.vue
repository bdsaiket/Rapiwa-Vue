<template>
    <div class="card">
        <div class="card__header">
            <h2 class="title">Message Activity</h2>
            <div class="mw-15 w-100">
                <Vue3Select v-model="selected" :options="BillingCountry" placeholder="Select.." />

            </div>
        </div>
        <div class="card__body">
            <!-- Message card Start -->
            <div class="message__card" v-for="(item, index) in MessagesActivityData" :key="index">
                <div class="card__content">
                    <div class="icon" v-if="item.icon">
                        <HugeiconsIcon :icon="item.icon" />
                    </div>
                    <div class="card__details">
                        <div class="top__row">
                            <div class="content">
                                <div class="title">To: {{ item.to }}</div>
                                <div class="message">{{ item.message }}</div>
                            </div>
                            <span class="time">{{ item.time }}</span>
                        </div>
                        <ul class="from__info">
                            <li><span>From:</span> {{ item.from }} • {{ item.phone }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Message card End -->
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Message02Icon } from '@hugeicons/core-free-icons'

// Vue Select
const selected = ref(null)
// Options for Vue Select
const BillingCountry = ref([
    { label: 'Today', value: 'today' },
    { label: 'Yesterday', value: 'yesterday' },
    { label: 'This Week', value: 'this_week' }
])


// Message Activity Data
const MessagesActivityData = ref([
    {
        icon: Message02Icon,
        to: '+88 01322-827799',
        message:
            'This is a long piece of text that will be truncated after two lines if it exceeds that length.The ellipsis will appear at the end of the second line.',
        from: 'SpaGreen',
        phone: '+8801704639960',
        time: 'Just now',
    },
    {
        icon: Message02Icon,
        to: '+88 01322-827799',
        message: 'Hello! How are you? …',
        from: 'SpaGreen',
        phone: '+8801704639960',
        time: '10 min ago',
    },
    {
        icon: Message02Icon,
        to: '+88 01322-827799',
        message: 'Hello! How are you? …',
        from: 'SpaGreen',
        phone: '+8801704639960',
        time: '1 day ago',
    },
    {
        icon: Message02Icon,
        to: '+88 01322-827799',
        message: 'Hello! How are you? …',
        from: 'SpaGreen',
        phone: '+8801704639960',
        time: '2 months ago',
    },
    {
        icon: Message02Icon,
        to: '+88 01322-827799',
        message: 'Hello! How are you? …',
        from: 'SpaGreen',
        phone: '+8801704639960',
        time: '20 July',
    },
]);

</script>
