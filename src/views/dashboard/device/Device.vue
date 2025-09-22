<template>
    <div class="container">
        <!-- Start Row -->
        <div class="row">
            <div class="col-12">
                <!-- Breadcrumb Start -->
                <Breadcrumb :items="BreadcrumbItems" />
                <!-- Breadcrumb End -->
            </div>
        </div>
        <!-- End Row -->
        <div class="row gy-4">
            <div class="col-lg-12">
                <!-- Section Title Start -->
                <SectionTitle :items="SectionTitleData[0]" />
            </div>
            <div class="col-12">
                <!-- Subscription Area -->
                <div class="subscription__area bg-color border ">
                    <div class="area__wrapper align-items-start">
                        <div class="title__area">
                            <div class="d-flex align-items-center gap-3">
                                <div class="sg-btn bg-purple text-11 lh-normal radius-32 px-10 py-1 text-white">Trial
                                    Period
                                    Active
                                </div>
                                <span class="text-heading fw-semibold text-12 text-capitalize">Expire: 01
                                    sep,2025</span>
                            </div>
                            <p class="text-content">1 of 1 WhatsApp Device available</p>
                        </div>
                        <div class="btn__group">
                            <router-link :to="{ name: 'subscription' }" class="sg-btn sg-btn-primary radius-10">
                                upgrade Subscription
                            </router-link>
                        </div>
                    </div>
                    <div class="progress mt-3">
                        <div class="progress-bar" style="width: 50%;" role="progressbar" aria-valuenow="75"
                            aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <!-- Subscription Area -->
                <div class="subscription__area">
                    <div class="area__wrapper">
                        <div class="title__area">
                            <h4 class="title">Subscription Required</h4>
                            <p>Upgrade to a paid plan to unlock WhatsApp sessions.</p>
                        </div>
                        <div class="btn__group">
                            <router-link :to="{ name: 'subscription' }" class="sg-btn sg-btn-danger radius-10">
                                View Subscription Plans
                            </router-link>
                        </div>
                    </div>
                </div>

                <!-- Top bar: Search + Filter -->
                <form action="#" class="search__form w-100 d-flex align-items-center gap-3 my-4">
                    <input type="search" name="search" class="form-control radius-10" placeholder="Search Devices">
                    <div class="mw-15 w-100">
                        <Vue3Select v-model="selected" :options="SelectDevice" placeholder="All Statuses" />
                    </div>
                </form>

                <!-- Device List Start -->
                <div class="deviceList">
                    <div class="row gy-4">
                        <div class="col-lg-4 col-md-6 col-sm-6" v-for="device in DeviceList" :key="device.id">
                            <div class="teamCard text-center">
                                <div class="teamCard__thumb">
                                    <div class="icon">
                                        <img :src="device.avatar" :alt="device.name" />
                                    </div>
                                    <div v-if="device.badges === 'Needs QR Scan'" class="badge badge-warning fw-medium">
                                        {{ device.badges }}
                                    </div>
                                    <div v-else-if="device.badges === 'Logged Out'"
                                        class="badge badge-danger fw-medium">
                                        {{ device.badges }}
                                    </div>
                                    <div v-else-if="device.badges === 'Connected'"
                                        class="badge badge-success fw-medium">
                                        {{ device.badges }}
                                    </div>
                                    <div v-else class="badge badge-secondary fw-medium">
                                        Unknown Badge
                                    </div>

                                </div>

                                <div class="teamCard__content">
                                    <h4 class="title">{{ device.name }}</h4>
                                    <div class="info__item">
                                        <a :href="`tel:${device.phone}`">{{ device.phone }}</a>
                                    </div>
                                </div>

                                <div class="agent">
                                    AI Agent:
                                    <router-link to="/chat-ai-agent" class="sg-btn active">
                                        Connect
                                        <!-- <span class="close">
                                            <HugeiconsIcon :icon="Cancel01Icon" />
                                        </span> -->
                                    </router-link>
                                </div>

                                <div class="teamCard__footer border-top pt-20 mt-4 d-block">
                                    <div class="btn__group justify-content-between">
                                        <router-link :to="device.to" class="sg-btn sg-btn-outline w-100 px-2">
                                            <HugeiconsIcon :icon="Edit03Icon" :size="15" /> Edit
                                        </router-link>
                                        <router-link :to="device.to" class="sg-btn sg-btn-outline w-100 px-2">
                                            <HugeiconsIcon :icon="Delete02Icon" :size="15" /> Delete
                                        </router-link>
                                        <router-link :to="device.to" class="sg-btn sg-btn-outline w-100 px-2">
                                            <HugeiconsIcon :icon="Settings02Icon" :size="15" /> Manage
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Empty state box -->
                <div class="empty__state text-center">
                    <div class="icon">
                        <HugeiconsIcon :icon="Alert01Icon" />
                    </div>
                    <div class="content mt-2">
                        <h2 class="title">No WhatsApp Device</h2>
                        <p class="desc">You haven't created any WhatsApp device yet. Create your first device to get
                            started.
                        </p>
                        <div class="btn__group mt-30">
                            <div class="disabled">
                                <router-link to="" class="sg-btn sg-btn-dark text-white radius-10 ">
                                    Create Device
                                </router-link>
                            </div>

                            <router-link :to="{ name: 'create-device' }"
                                class="sg-btn sg-btn-dark text-white radius-10 ">
                                Create Device
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue";
// import { DeviceList } from '@/data/createagentData.js'
import { DashboardCircleIcon, Edit03Icon, Delete02Icon, Settings02Icon, Alert01Icon, Cancel01Icon } from '@hugeicons/core-free-icons'
import Breadcrumb from '@/components/Breadcrumb.vue';
import SectionTitle from "@/components/SectionTitle.vue";

// BreadCrumb Data
const BreadcrumbItems = ref([
    { icon: DashboardCircleIcon, title: 'Dashboard', to: '/dashboard' },
    { icon: '', title: 'Devices' },
]);
// Section Title Data
const SectionTitleData = ref([
    {
        title: 'WhatsApp Devices',
        desc: 'Manage your WhatsApp devices and connections',
        button_link: '',
        button_text: ''
    },
]);


// Dropdown Login
const selected = ref(null)

const SelectDevice = ref([
    { label: 'Whatsapp', value: 'whatsapp' },
    { label: 'Telegram', value: 'telegram' },
    { label: 'Facebook', value: 'facebook' }
])


// Device List Data
const DeviceList = ref([
    {
        id: 1,
        name: 'SpaGreen Creative',
        phone: '+8801704639960',
        avatar: '../../../../public/assets/images/device-icon/icon-01.png',
        badges: 'Needs QR Scan',
        to: '/edit-team',
    },
    {
        id: 2,
        name: 'Rango Mart',
        phone: '+8801322-827799',
        avatar: '../../../../public/assets/images/device-icon/icon-02.png',
        badges: 'Logged Out',
        to: '/edit-team',
    },
    {
        id: 3,
        name: 'SpaGreen Creative',
        phone: '+8801322-827799',
        avatar: '../../../../public/assets/images/device-icon/icon-03.png',
        badges: 'Connected',
        to: '/edit-team',
    }
])


</script>
