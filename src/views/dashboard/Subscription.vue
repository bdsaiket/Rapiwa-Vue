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
                <div class="section__title pt-30">
                    <div class="title__area">
                        <h2 class="title">WhatsApp Devices</h2>
                        <p>Manage your WhatsApp devices and connections</p>
                    </div>
                    <div class="btn__group">
                        <a href="#" class="sg-btn sg-btn-dark radius-10">Add New Device</a>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <!-- Subscription Area -->
                <div class="subscription__area">
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

                <!-- Top bar: Search + Filter -->
                <form action="#" class="search__form w-100 d-flex align-items-center gap-3 my-4">
                    <input type="search" name="search" class="form-control radius-10" placeholder="Search Devices">
                    <select class="status-select">
                        <option>All Statuses</option>
                    </select>
                </form>

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
                            <button class="sg-btn sg-btn-gray text-white radius-10" disabled>Create Device</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue";
import Breadcrumb from '@/components/Breadcrumb.vue';
import { DashboardCircleIcon, Diamond02Icon } from '@hugeicons/core-free-icons'

// BreadCrumb Data
const BreadcrumbItems = ref([
    { icon: DashboardCircleIcon, title: 'Dashboard', to: '/dashboard' },
    { icon: '', title: 'Subscription', to: '/device' },
    { icon: '', title: 'Upgrade Subscription' },

]);

</script>
