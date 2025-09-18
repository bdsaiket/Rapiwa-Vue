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
                <form action="#" class="card px-20 py-20 mt-20">
                    <div class="row gy-3">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="name">Name <span class="required">*</span></label>
                                <input type="text" name="name" class="form-control" id="f_name" placeholder="Enter name"
                                    value="Foyshal Ahmed">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="email">Email <span class="required">*</span></label>
                                <input type="email" name="email" class="form-control" id="email"
                                    placeholder="Enter name" value="info@spagreen.net">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="billing_address">Billing Address<span class="required">*</span></label>
                                <input type="text" name="billing_address" class="form-control" id="billing_address"
                                    placeholder="Enter billing address" value="Dhaka, Bangladesh">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="billing_city">Billing City<span class="required">*</span></label>
                                <input type="text" name="billing_city" class="form-control" id="billing_city"
                                    placeholder="Enter billing city" value="Dhaka">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="billing_state">Billing State/Province<span class="required">*</span></label>
                                <input type="text" name="billing_state" class="form-control" id="billing_state"
                                    placeholder="Enter billing state" value="Mirpur DOHS">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="billing_zip">Billing Zip Code<span class="required">*</span></label>
                                <input type="number" name="billing_zip" class="form-control" id="billing_zip"
                                    placeholder="Enter zip code" value="2563">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="billing_country">Billing Country</label>
                                <Vue3Select v-model="selected" :options="BillingCountry"
                                    placeholder="Select Statuses" />
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="w_number">WhatsApp Number<span class="required">*</span></label>
                                <vue-tel-input v-model="phone" mode="international" :input-options="inputOptions"
                                    :enabled-country-code="true" :enabled-flags="true"
                                    :dropdown-options="dropdownOptions" placeholder="Search country and enter number" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="btn__group mt-30">
                                <button type="submit" class="sg-btn sg-btn-dark radius-10 fw-medium">Submit</button>
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
import Breadcrumb from '@/components/Breadcrumb.vue';
import SectionTitle from "@/components/SectionTitle.vue";

import { DashboardCircleIcon, ArrowLeft02Icon } from '@hugeicons/core-free-icons'

// BreadCrumb Data
const BreadcrumbItems = ref([
    { icon: DashboardCircleIcon, title: 'Dashboard', to: '/dashboard' },
    { icon: '', title: 'Settings' },
]);

// Section Title Data
const SectionTitleData = ref([
    {
        icon: '',
        to: '',
        title: 'Billing Details',
        desc: 'Enter your billing details accurately to complete the payment',
        button_link: '',
        button_text: ''
    },
]);

// Vue Select
const selected = ref(null)
// Options for Vue Select
const BillingCountry = ref([
    { label: 'Bangladesh', value: 'bangladesh' },
    { label: 'USA', value: 'usa' },
    { label: 'India', value: 'india' }
])

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
