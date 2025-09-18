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
        <div class="row ">
            <div class="col-lg-12">
                <!-- Section Title Start -->
                <SectionTitle :items="SectionTitleData[0]" />
            </div>
            <div class="col-12">
                <!-- Top bar: Search + Filter -->
                <form action="#" class="search__form w-100 d-flex align-items-center gap-3 mt-20">
                    <input type="search" name="search" class="form-control radius-10" placeholder="Search Team">
                    <div class="mw-15 w-100">
                        <Vue3Select v-model="selected" :options="options" placeholder="All Statuses" />
                    </div>
                </form>
            </div>
            <div class="col-lg-6 col-md-6" v-for="member in teamMembers" :key="member.id">
                <!-- Team Card Start -->
                <TeamCard :member="member" @toggle-ban="toggleBan" @toggle-status="toggleStatus" />
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue";
import Breadcrumb from '@/components/Breadcrumb.vue';
import SectionTitle from "@/components/SectionTitle.vue";
import TeamCard from "@/components/TeamCard.vue";

import { DashboardCircleIcon, Edit03Icon, UnavailableIcon } from '@hugeicons/core-free-icons'

// BreadCrumb Data
const BreadcrumbItems = ref([
    { icon: DashboardCircleIcon, title: 'Dashboard', to: '/dashboard' },
    { icon: '', title: 'Team Members' },
]);

// Section Title Data
const SectionTitleData = ref([
    {
        title: 'Client Teams',
        desc: 'Manage team members',
        button_link: 'add-team',
        button_text: 'Add Team Member'
    },
]);

// Select Options team
const selected = ref(null)
const options = ref([
    { label: 'All Statuses', value: 'all_statuses' },
    { label: 'Statuses One', value: 'statuses_one' },
    { label: 'Statuses Two', value: 'statuses_two' }
])


// Team Member Data
const teamMembers = ref([
    {
        id: 1,
        name: 'Abdul Mannan Zinnat',
        phone: '+8801704639960',
        email: 'info@spagreen.net',
        avatar: '/assets/images/user-avatar.jpg',
        status: 'active',
        to: '/edit-team',
        isBanned: false,
        teamStatus: true
    },
    {
        id: 2,
        name: 'Foyshal Ahmed',
        phone: '+8801322-827799',
        email: 'info@spagreen.net',
        avatar: '/assets/images/user-avatar.jpg',
        status: 'closed',
        to: '/edit-team',
        isBanned: true,
        teamStatus: false
    }
])

const toggleBan = (member) => {
    member.isBanned = !member.isBanned
}


const toggleStatus = (member) => {
    member.teamStatus = !member.teamStatus
}


</script>
