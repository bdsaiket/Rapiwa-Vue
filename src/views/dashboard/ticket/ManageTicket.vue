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
                <div class="pt-30 d-flex align-items-baseline justify-content-between flex-wrap gap-3">
                    <!-- Section Title Start -->
                    <SectionTitle class="pt-0 " :items="SectionTitleData[0]" />
                    <div class="d-flex align-items-center flex-wrap gap-2">
                        <div class="badge badge-danger">High Priority</div>
                        <ul class="from__info m-0">
                            <li><span>Department:</span> Billing</li>
                            <li><span>Status:</span> Open</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <!-- Ticket List -->
                <div class="card px-20 py-20 mt-20">
                    <form action="#" class="mb-30">
                        <div class="form-group">
                            <label class="fw-semibold">Add Reply</label>
                            <div class="quill__editor">
                                <QuillEditor theme="snow" />
                            </div>
                        </div>
                        <div class="form__checkbox my-3">
                            <input class="form-check-input" type="checkbox" value="" id="return__ticket">
                            <label class="form-check-label" for="return__ticket">
                                Return to ticket after response is submitted
                            </label>
                        </div>
                        <div class="form-group">
                            <label class="fw-semibold">File</label>
                            <FileUpload class="flex-row" />
                        </div>
                        <div class="btn__group mt-30">
                            <button type="submit" class="sg-btn sg-btn-dark radius-10 fw-medium">
                                Submit Response
                            </button>
                        </div>
                    </form>

                    <!-- Title Area -->
                    <div
                        class="title__area d-flex align-items-center justify-content-between flex-wrap mb-3 pb-3 border-bottom gap-3">
                        <h4 class="title text-16 lh-sm text-heading fw-semibold mb-0">Ticket Details</h4>
                        <p class="m-0 text-14 lh-sm text-heading fw-medium">
                            <span class="text-content fw-normal">Last Reply</span> : 11 minutes ago
                        </p>
                    </div>
                    <!-- ticket -->
                    <div class="message__card">
                        <div class="card__content align-items-center">
                            <div class="icon">
                                <HugeiconsIcon :icon="Ticket01Icon" />
                            </div>
                            <div class="card__details">
                                <div class="top__row align-items-center">
                                    <div class="content">
                                        <div class="title text-14">Hello! I have problem, how can fix it? You have any
                                            idea to solve it immediately!
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center align-items-lg-end gap-3 flex-wrap flex-lg-column">
                                        <router-link to="" class="sg-btn sg-btn-gray radius-10">
                                            <HugeiconsIcon :icon="Download01Icon" />
                                            Download Image
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Title Area -->
                    <div
                        class="title__area d-flex align-items-center justify-content-between flex-wrap mb-3 pb-3 border-bottom gap-3">
                        <h4 class="title text-16 lh-sm text-heading fw-semibold mb-0">Replies</h4>
                    </div>
                    <!-- ticket -->
                    <div class="overflow-y-auto" style="max-height: 200px;">
                        <div class="message__card" v-for="(item, index) in TicketData" :key="index">
                            <div class="card__content">
                                <div class="icon">
                                    <img v-if="item.thumb" :src="item.thumb" :alt="item.name">
                                    <HugeiconsIcon v-if="item.icon" :icon="item.icon" />
                                </div>
                                <div class="card__details">
                                    <div class="top__row flex-lg-row flex-column">
                                        <div class="content">
                                            <div class="title">{{ item.name }}
                                                <span :class="['badge', getStatusClass(item.ticket_status)]">
                                                    {{ item.ticket_status }}
                                                </span>
                                            </div>
                                            <div class="message">{{ item.message }}</div>
                                        </div>
                                        <div
                                            class="d-flex align-items-center align-items-lg-end gap-3 flex-wrap flex-lg-column">
                                            <span class="time">{{ item.time }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed } from "vue";
import Breadcrumb from '@/components/Breadcrumb.vue';
import SectionTitle from "@/components/SectionTitle.vue";
import { DashboardCircleIcon, ArrowLeft02Icon, Message02Icon, Pen01Icon, Download01Icon, Ticket01Icon } from '@hugeicons/core-free-icons'
import FileUpload from "@/components/FileUpload.vue";

// BreadCrumb Data
const BreadcrumbItems = ref([
    { icon: DashboardCircleIcon, title: 'Dashboard', to: '/dashboard' },
    { icon: '', title: 'Support Tickets', to: '/ticket' },
    { icon: '', title: 'Manage Ticket' },
]);
// Section Title Data
const SectionTitleData = ref([
    {
        icon: ArrowLeft02Icon,
        to: '/ticket',
        title: '#38300 - Create UIUX Design',
        desc: '',
        button_link: '',
        button_text: ''
    },
]);

const selected = ref(null)

const options = ref([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' }
])


// Ticket Data
const TicketData = ref([
    {
        icon: '',
        thumb: './../../../../public/assets/images/user-avatar.jpg',
        name: 'Foyshal Ahmed',
        ticket_status: 'Client staff',
        message: 'Hello! I have problem, how can fix it? You have any idea to solve it immediately!',
        time: 'Sep 07, 2025 10:15 am',
    },
    {
        icon: '',
        thumb: './../../../../public/assets/images/user-avatar2.jpg',
        name: 'Michael Leon',
        ticket_status: 'Client',
        message: '“Your support request has been received. Ticket ID: #12345. Our team will review and get back to you shortly.”',
        time: 'Sep 07, 2025 10:15 am',
    },
]);

// Badge class mapping logic
const getStatusClass = (status) => {
    const normalized = status.toLowerCase()
    if (normalized.includes('low priority')) return 'badge-success'
    if (normalized.includes('high priority')) return 'badge-danger'
    if (normalized.includes('client staff')) return 'badge-purple' // 🔁 moved up
    if (normalized.includes('client')) return 'badge-warning'
    return 'badge-secondary'
}
</script>
