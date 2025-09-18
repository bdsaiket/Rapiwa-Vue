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
                <form action="#" class="search__form w-100 d-flex align-items-center gap-3 my-4">
                    <input type="search" name="search" class="form-control radius-10" placeholder="Search Devices">
                    <div class="mw-15 w-100">
                        <Vue3Select v-model="selected" :options="options" placeholder="All Statuses" />
                    </div>
                </form>

                <!-- Ticket List -->
                <div class="card px-20 py-20">
                    <!-- ticket -->
                    <div class="message__card" v-for="(item, index) in paginatedTickets" :key="index">
                        <div class="card__content">
                            <div class="icon" v-if="item.icon">
                                <HugeiconsIcon :icon="item.icon" />
                            </div>
                            <div class="card__details">
                                <div class="top__row flex-lg-row flex-column">
                                    <div class="content">
                                        <div class="title">{{ item.subject }}: {{ item.to }}
                                            <span :class="['badge', getStatusClass(item.ticket_status)]">
                                                {{ item.ticket_status }}
                                            </span>
                                        </div>
                                        <div class="message">{{ item.message }}</div>
                                        <ul class="from__info">
                                            <li v-if="item.id"><span>ID:</span> {{ item.id }}</li>
                                            <li v-if="item.department"><span>Department:</span> {{ item.department }}
                                            </li>
                                            <li v-if="item.status"><span>Status:</span> {{ item.status }}</li>
                                        </ul>
                                    </div>
                                    <div
                                        class="d-flex align-items-center align-items-lg-end gap-3 flex-wrap flex-lg-column">
                                        <span class="time">{{ item.time }}</span>
                                        <router-link :to="{ name: 'manage-ticket' }"
                                            class="sg-btn sg-btn-outline radius-10">
                                            <HugeiconsIcon :icon="Pen01Icon" />
                                            Manage
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Pagination Start  -->
                    <Pagination :totalItems="TicketData.length" :perPage="perPage" v-model="currentPage" />
                    <!-- Pagination End  -->
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed } from "vue";
import Breadcrumb from '@/components/Breadcrumb.vue';
import SectionTitle from "@/components/SectionTitle.vue";
import Pagination from "@/components/Pagination.vue";
import { DashboardCircleIcon, ArrowLeft02Icon, Message02Icon, Pen01Icon } from '@hugeicons/core-free-icons'

// BreadCrumb Data
const BreadcrumbItems = ref([
    { icon: DashboardCircleIcon, title: 'Dashboard', to: '/dashboard' },
    { icon: '', title: 'Tickets' },
]);

// Section Title Data
const SectionTitleData = ref([
    {
        icon: '',
        to: '',
        title: 'Support Tickets',
        desc: 'Manage All Tickets',
        button_link: 'add-new-ticket',
        button_text: 'Open a Ticket'
    },
]);

// Dropdown Login
const selected = ref(null)

const options = ref([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' }
])


// Ticket Data
const TicketData = ref([
    {
        icon: Message02Icon,
        subject: 'Subject',
        to: 'Create UIUX Design',
        ticket_status: 'High Priority',
        message: 'Hello! I have problem, how can fix it? You have any idea to solve it immediately!',
        id: '38300',
        department: 'Billing',
        status: 'Open',
        time: 'Aug 27, 2025 05:15 PM',
    },
    {
        icon: Message02Icon,
        subject: 'Subject',
        to: 'Create UIUX Design',
        ticket_status: 'Medium Priority',
        message: 'Hello! I have problem, how can fix it? You have any idea to solve it immediately!',
        id: '38300',
        department: 'Billing',
        status: 'Open',
        time: 'Aug 27, 2025 05:15 PM',
    },
    {
        icon: Message02Icon,
        subject: 'Subject',
        to: 'Create UIUX Design',
        ticket_status: 'Low Priority',
        message: 'Hello! I have problem, how can fix it? You have any idea to solve it immediately!',
        id: '38300',
        department: 'Billing',
        status: 'Open',
        time: 'Aug 27, 2025 05:15 PM',
    },
    {
        icon: Message02Icon,
        subject: 'Subject',
        to: 'Create UIUX Design',
        ticket_status: 'High Priority',
        message: 'Hello! I have problem, how can fix it? You have any idea to solve it immediately!',
        id: '38300',
        department: 'Billing',
        status: 'Open',
        time: 'Aug 27, 2025 05:15 PM',
    },
    {
        icon: Message02Icon,
        subject: 'Subject',
        to: 'Create UIUX Design',
        ticket_status: 'Medium Priority',
        message: 'Hello! I have problem, how can fix it? You have any idea to solve it immediately!',
        id: '38300',
        department: 'Billing',
        status: 'Open',
        time: 'Aug 27, 2025 05:15 PM',
    },
    {
        icon: Message02Icon,
        subject: 'Subject',
        to: 'Create UIUX Design',
        ticket_status: 'Low Priority',
        message: 'Hello! I have problem, how can fix it? You have any idea to solve it immediately!',
        id: '38300',
        department: 'Billing',
        status: 'Open',
        time: 'Aug 27, 2025 05:15 PM',
    },
    {
        icon: Message02Icon,
        subject: 'Subject',
        to: 'Create UIUX Design',
        ticket_status: 'Low Priority',
        message: 'Hello! I have problem, how can fix it? You have any idea to solve it immediately!',
        id: '38300',
        department: 'Billing',
        status: 'Open',
        time: 'Aug 27, 2025 05:15 PM',
    },
]);

// Badge class mapping logic
const getStatusClass = (status) => {
    const normalized = status.toLowerCase()
    if (normalized.includes('low priority')) return 'badge-success'
    if (normalized.includes('high priority')) return 'badge-danger'
    if (normalized.includes('medium priority')) return 'badge-warning'
    // if (normalized.includes('pending')) return 'badge-info'
    return 'badge-secondary'
}

// Pagination Logic
const perPage = ref(6);
const currentPage = ref(1);

const paginatedTickets = computed(() => {
    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return TicketData.value.slice(start, end);
});


</script>
