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
                <form action="#" class="card px-20 py-20 mt-20">
                    <div class="row gy-3">
                        <div class="col-12">
                            <div class="form-group">
                                <label>Type <span class="required">*</span></label>
                                <Vue3Select v-model="selected" :options="SelectAgent" class="radius-10"
                                    placeholder="Select Type" />
                            </div>
                            <div class="card px-20 py-20 radius-16 mt-20">
                                <div class="card__header pb-3 mb-3 border-bottom">
                                    <h4 class="title">Last Trained job </h4>
                                </div>
                                <div class="card__body">
                                    <ul class="d-grid gap-2 ps-4">
                                        <li class="text-14 lw-normal text-content fw-medium">
                                            <span class="me-1 text-heading text-capitalize">
                                                job ID:
                                            </span> XsbhjsJSDXNsxma2sxh
                                        </li>
                                        <li class="text-14 lw-normal text-content fw-medium">
                                            <span class="me-1 text-heading text-capitalize">
                                                Training base model:
                                            </span> gpt-5-2025-08-12
                                        </li>
                                        <li class="text-14 lw-normal text-content fw-medium">
                                            <span class="me-1 text-heading text-capitalize">
                                                Status:
                                            </span>
                                            <div class="badge badge-success">success</div>
                                        </li>
                                        <li class="text-14 lw-normal text-content fw-medium">
                                            <span class="me-1 text-heading text-capitalize">
                                                Trained model:
                                            </span>
                                            gpt-5-2025-08-12:personal:pcrm-5143236:DCHBSC1s
                                        </li>
                                        <li class="text-14 lw-normal text-content fw-medium">
                                            <span class="text-heading text-capitalize">
                                                Created at:
                                            </span>
                                            10-9-2025 5:02:30
                                        </li>
                                        <li class="text-14 lw-normal text-content fw-medium">
                                            <span class="text-heading text-capitalize">
                                                Finished at:
                                            </span>
                                            10-9-2025 5:04:21
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card px-20 py-20 radius-16 mt-20">
                                <div class="card__header pb-3 mb-3 border-bottom">
                                    <h4 class="title">Source Data for training </h4>
                                </div>
                                <div class="card__body">
                                    <ul class="d-grid gap-2 ps-4">
                                        <li class="text-14 lw-normal text-content fw-medium">
                                            <span class="me-1 text-heading text-capitalize">
                                                job ID:
                                            </span> XsbhjsJSDXNsxma2sxh
                                        </li>
                                        <li class="text-14 lw-normal text-content fw-medium">
                                            <span class="me-1 text-heading text-capitalize">
                                                Training base model:
                                            </span> gpt-5-2025-08-12
                                        </li>
                                        <li class="text-14 lw-normal text-content fw-medium">
                                            <span class="me-1 text-heading text-capitalize">
                                                Status:
                                            </span>
                                            <div class="badge badge-success">success</div>
                                        </li>
                                        <li class="text-14 lw-normal text-content fw-medium">
                                            <span class="me-1 text-heading text-capitalize">
                                                Trained model:
                                            </span>
                                            gpt-5-2025-08-12:personal:pcrm-5143236:DCHBSC1s
                                        </li>
                                        <li class="text-14 lw-normal text-content fw-medium">
                                            <span class="text-heading text-capitalize">
                                                Created at:
                                            </span>
                                            10-9-2025 5:02:30
                                        </li>
                                        <li class="text-14 lw-normal text-content fw-medium">
                                            <span class="text-heading text-capitalize">
                                                Finished at:
                                            </span>
                                            10-9-2025 5:04:21
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="btn__group">
                                <button type="submit" class="sg-btn sg-btn-dark radius-10 fw-medium">Confirm</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue";
import { DashboardCircleIcon, ArrowLeft02Icon, Alert01Icon } from '@hugeicons/core-free-icons'
import Breadcrumb from '@/components/Breadcrumb.vue';
import SectionTitle from "@/components/SectionTitle.vue";

// BreadCrumb Data
const BreadcrumbItems = ref([
    { icon: DashboardCircleIcon, title: 'Dashboard', to: '/dashboard' },
    { icon: '', title: 'Devices', to: '/device' },
    { icon: '', title: 'Connect AI Agent' },
]);

// Section Title Data
const SectionTitleData = ref([
    {
        icon: ArrowLeft02Icon,
        to: '/device',
        title: 'Connect AI Agent',
        desc: '',
        button_link: '',
        button_text: ''
    },
]);


// Dropdown Login
const selected = ref(null)

const SelectAgent = ref([
    { label: 'Sales Agent', value: 'sales_agent' },
    { label: 'Telegram', value: 'telegram' },
    { label: 'Facebook', value: 'facebook' }
])


</script>
