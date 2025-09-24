<template>
    <div class="container">
        <!-- Start Row -->
        <div class="row">
            <div class="col-12">
                <!-- Breadcrumb Start -->
                <Breadcrumb />
                <!-- Breadcrumb End -->
            </div>
        </div>
        <!-- End Row -->
        <div class="row gy-4">
            <div class="col-lg-12">
                <!-- Section Title Start -->
                <SectionTitle :items="SectionTitleData[0]" />
            </div>
            Create Device
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue";
import { DashboardCircleIcon, ArrowLeft02Icon, Alert01Icon } from '@hugeicons/core-free-icons'
import Breadcrumb from '@/components/Breadcrumb.vue';
import SectionTitle from "@/components/SectionTitle.vue";

// Section Title Data
const SectionTitleData = ref([
    {
        icon: ArrowLeft02Icon,
        to: '/device',
        title: 'Create WhatsApp Device',
        desc: '',
        button_link: '',
        button_text: ''
    },
]);
</script>
