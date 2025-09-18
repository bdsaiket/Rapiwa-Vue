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
            <div class="col-lg-6">
                <form action="#" class="card px-20 py-20 mt-20">
                    <div class="card__header gap-0 pb-3 border-bottom">
                        <h4 class="title mb-10">Link Your WhatsApp Number</h4>
                        <p class="text-14 lh-base text-content">Set up a new WhatsApp session. You will need to scan a
                            QR code to connect
                            after creating.</p>
                    </div>
                    <div class="row gy-3">
                        <div class="col-12">
                            <div class="form-group">
                                <label for="device_name">Device Name</label>
                                <input type="text" name="device_name" class="form-control" id="device_name"
                                    placeholder="Enter Device Name">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label for="device_name">WhatsApp Number</label>
                                <vue-tel-input v-model="phone" mode="international" :input-options="inputOptions"
                                    :enabled-country-code="true" :enabled-flags="true"
                                    :dropdown-options="dropdownOptions" placeholder="Search country and enter number" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form__checkbox align-items-start mb-3">
                                <input class="form-check-input mt-1" type="checkbox" value="" id="ac_protection">
                                <div class="d-block">
                                    <label class="form-check-label" for="ac_protection">
                                        Enable Account Protection
                                    </label>
                                    <span class="d-block text-12 lw-1">Prevents WhatsApp restrictions by controlling
                                        sending frequency.
                                    </span>
                                </div>
                            </div>
                            <div class="form__checkbox align-items-start mt-3">
                                <input class="form-check-input mt-1" type="checkbox" value="" id="message_login">
                                <div class="d-block">
                                    <label class="form-check-label" for="message_login">
                                        Enable Message Logging
                                    </label>
                                    <span class="d-block text-12 lw-1">Stores message content and delivery status if
                                        enabled.
                                    </span>
                                </div>
                            </div>
                            <div class="form__checkbox align-items-start mt-3">
                                <input class="form-check-input mt-1" type="checkbox" value="" id="incoming_message">
                                <div class="d-block">
                                    <label class="form-check-label" for="incoming_message">
                                        Read Incoming Messages
                                    </label>
                                    <span class="d-block text-12 lw-1">Prevents WhatsApp restrictions by controlling
                                        sending frequency.
                                    </span>
                                    <!-- Sub Checkbox -->
                                    <div class="form__checkbox  mt-3">
                                        <input class="form-check-input" type="checkbox" value="" id="record_message">
                                        <label class="form-check-label" for="record_message">
                                            Message record
                                        </label>
                                    </div>
                                    <div class="form__checkbox  mt-3">
                                        <input class="form-check-input" type="checkbox" value="" id="read_direcly">
                                        <label class="form-check-label" for="read_direcly">
                                            Read Directly
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form__checkbox align-items-start mt-3 disable">
                                <input class="form-check-input mt-1" type="checkbox" value="" id="ai_agent"
                                    v-model="isAIAgentConnected">
                                <div class="d-block">
                                    <div class="d-flex align-items-center gap-2 flex-wrap ">
                                        <label class="form-check-label" for="ai_agent">
                                            Connect AI Agent
                                        </label>
                                        <div class="badge badge-danger fw-medium">Upgrade Plan with AI
                                            Bot</div>
                                    </div>
                                    <span class="d-block text-12 lw-1">AI Bot for smarter interactions and seamless
                                        automation
                                    </span>
                                </div>
                            </div>
                            <div class="form-group mt-3" v-if="isAIAgentConnected">
                                <Vue3Select v-model="selected" :options="SelectAgent" class="radius-10"
                                    placeholder="Select Type" />
                            </div>

                            <!-- Checkbox to enable webhook notifications -->
                            <div class="form__checkbox align-items-start mt-3">
                                <input class="form-check-input mt-1" type="checkbox" id="enable_webhook"
                                    v-model="IsEnableWebhook">
                                <div class="d-block">
                                    <label class="form-check-label" for="enable_webhook">
                                        Enable Webhook Notifications
                                    </label>
                                    <span class="d-block text-12 lw-1">
                                        Sends message events to your webhook URL.
                                    </span>
                                </div>
                            </div>

                            <!-- Webhook URL input shown only if checkbox is checked -->
                            <div class="form-group mt-2" v-if="IsEnableWebhook">
                                <label for="webhook_url">
                                    Webhook URL <span class="required">*</span>
                                </label>
                                <input type="url" v-model="webHookUrl" name="webhook_url" class="form-control"
                                    id="webhook_url" placeholder="https://yourdomain.com/webhook-endpoint">
                            </div>

                        </div>
                        <div class="col-12">
                            <div class="mt-3">
                                <button type="button" class="sg-btn sg-btn-dark lh-base">Create & Connect
                                    Session
                                </button>
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
    { icon: '', title: 'Create Device' },
]);

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


// Checkbox state
const isAIAgentConnected = ref(false);
// Dropdown Login
const selected = ref(null)

const SelectAgent = ref([
    { label: 'Sales Agent', value: 'sales_agent' },
    { label: 'Sales Agent', value: 'sales_agent' },
    { label: 'Sales & Support Agent', value: 'sales_support_agent' },
]);

// Webhook Url
const IsEnableWebhook = ref(false)
const webHookUrl = ref('')

// Phone Input
const phone = ref('')

// Optional config for better UX
const inputOptions = {
    showDialCode: true
}

const dropdownOptions = {
    showFlags: true,
    showSearchBox: true,
    searchBoxPlaceholder: 'Search country'
}


</script>
