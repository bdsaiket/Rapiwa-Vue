<template>
    <div class="card">
        <div class="card__header">
            <h2 class="title">Log Statistic</h2>
            <p class="desc m-0">Recent activity and events for all devices</p>
        </div>
        <div class="card__body" v-for="(item, index) in LogStatisticData" :key="index">
            <!-- Message card Start -->
            <div class="message__card">
                <!-- Card Content -->
                <div class="card__content">
                    <div class="icon" v-if="item.icon">
                        <HugeiconsIcon :icon="item.icon" />
                    </div>
                    <div class="card__details">
                        <div class="top__row align-items-center">
                            <div class="content">
                                <div class="title">Device: {{ item.device }}</div>
                                <div class="message">{{ item.message }}</div>
                            </div>
                            <span class="time fw-medium">{{ item.time }}</span>
                        </div>
                    </div>
                </div>
                <!-- Status Area -->
                <div class="status__area mt-15" v-for="(status, index) in item.statusData" :key="index">
                    <div class="status__content">
                        <div class="title">
                            {{ status.title }}
                            <span :class="['badge', getStatusClass(status.status)]">
                                {{ status.status }}
                            </span>
                        </div>
                        <div class="message">{{ status.message }}</div>
                    </div>
                    <span class="time">{{ status.timestamp }}</span>
                </div>
            </div>
            <!-- Message card End -->
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { SmartPhone01Icon } from '@hugeicons/core-free-icons'

const LogStatisticData = ref([
    {
        icon: SmartPhone01Icon,
        device: 'SpaGreen Creative',
        message: 'Recent activity and events for this device',
        time: '4162 Total Logs',

        statusData: [
            {
                title: 'Status Change',
                status: 'Needs qr scan',
                message: 'Device status changed from needs QR scan to pending',
                timestamp: '2025-09-07 10:32 AM'
            },
            {
                title: 'Status Change',
                status: 'Connected',
                message: 'The WhatsApp Device is successfully connected.',
                timestamp: '2025-09-07 10:32 AM'
            },
            {
                title: 'Status Change',
                status: 'Logged Out',
                message: 'Device status changed from connected to logged Out',
                timestamp: '2025-09-07 10:32 AM'
            },
        ]
    },
    {
        icon: SmartPhone01Icon,
        device: 'iphone 13',
        message: 'Recent activity and events for this device',
        time: '4162 Total Logs',

        statusData: [
            {
                title: 'Status Change',
                status: 'Needs qr scan',
                message: 'Device status changed from needs QR scan to pending',
                timestamp: '2025-09-07 10:32 AM'
            },
            {
                title: 'Status Change',
                status: 'Connected',
                message: 'The WhatsApp Device is successfully connected.',
                timestamp: '2025-09-07 10:32 AM'
            },
        ]
    },
])

// Badge class mapping logic
const getStatusClass = (status) => {
    const normalized = status.toLowerCase()
    if (normalized.includes('connected')) return 'badge-success'
    if (normalized.includes('logged out')) return 'badge-danger'
    if (normalized.includes('qr scan')) return 'badge-warning'
    if (normalized.includes('pending')) return 'badge-info'
    return 'badge-secondary'
}

</script>
