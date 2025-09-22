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
                <!-- Pricing Tab Section Start -->
                <div class="pricing__tabs">
                    <div class="tab__wrapper">
                        <div class="tab__buttons">
                            <button class="tab__link active" data-tab="monthly">Monthly</button>
                            <button class="tab__link" data-tab="quarterly">Quarterly</button>
                            <button class="tab__link" data-tab="half">Half-Yearly</button>
                            <button class="tab__link" data-tab="yearly">Yearly</button>
                        </div>
                        <div class="divider">Or</div>
                        <div class="tab__buttons with__ai">
                            <button class="tab__links ai">With a Agent</button>
                            <button class="tab__link" data-tab="ai-monthly">Monthly</button>
                            <button class="tab__link" data-tab="ai-quarterly">Quarterly</button>
                            <button class="tab__link" data-tab="ai-half">Half-Yearly</button>
                            <button class="tab__link" data-tab="ai-yearly">Yearly</button>
                        </div>
                    </div>
                    <!-- Tab Content -->
                    <div class="tab__content-wrapper">
                        <!-- Tab Content -->
                        <div class="tab-content active" id="monthly">
                            <!-- Subscription Area -->
                            <div class="subscription__area bg-color border">
                                <div class="area__wrapper">
                                    <div class="title__area">
                                        <h4 class="title text-heading">3 Days Trial - Free</h4>
                                        <p class="text-content">Test all premium features free for 3 days with rate
                                            limits and full
                                            tool access.</p>
                                    </div>
                                    <div class="btn__group">
                                        <router-link :to="{ name: 'subscription' }"
                                            class="sg-btn sg-btn-primary radius-10">
                                            Try For Free
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-content" id="quarterly">
                            tab quarterly
                        </div>
                        <div class="tab-content" id="half">
                            tab half
                        </div>
                        <div class="tab-content" id="yearly">
                            tab yearly
                        </div>

                        <!-- AI Bot Tab Contents -->
                        <!-- <div class="tab-content" id="ai"></div> -->
                        <div class="tab-content" id="ai-monthly">
                            tab monthly
                        </div>
                        <div class="tab-content" id="ai-quarterly">
                            tabs ai
                        </div>
                        <div class="tab-content" id="ai-half">
                            tabs-half
                        </div>
                        <div class="tab-content" id="ai-yearly">
                            ai yearly
                        </div>
                    </div>
                </div>
                <!-- Pricing Tab Section End -->
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue";
import Breadcrumb from '@/components/Breadcrumb.vue';
import SectionTitle from "@/components/SectionTitle.vue";
import { DashboardCircleIcon, Diamond02Icon } from '@hugeicons/core-free-icons'

// BreadCrumb Data
const BreadcrumbItems = ref([
    { icon: DashboardCircleIcon, title: 'Dashboard', to: '/dashboard' },
    { icon: '', title: 'Subscription plans' },

]);

// Section Title Data
const SectionTitleData = ref([
    {
        icon: '',
        to: '',
        title: 'Subscription Plans',
        desc: 'Choose the right plan for your WhatsApp messaging needs',
        button_link: '',
        button_text: ''
    },
]);

</script>
