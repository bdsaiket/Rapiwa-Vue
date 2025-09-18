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
                <!-- Ticket List -->
                <form action="#" class="card px-20 py-20 mt-20">
                    <div class="row gy-3">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="subject">Subject <span class="required">*</span></label>
                                <input type="text" name="subject" class="form-control" id="subject"
                                    placeholder="Enter subject">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="department">Department <span class="required">*</span></label>
                                <Vue3Select v-model="selected" :options="options" placeholder="Select Statuses" />
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="priority">Priority <span class="required">*</span></label>
                                <Vue3Select v-model="selected" :options="options" placeholder="Select Statuses" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label>Description <span class="required">*</span></label>
                                <div class="quill__editor">
                                    <QuillEditor theme="snow" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label>Upload Profile Photo</label>
                                <div class="file__control">
                                    <input type="file" id="fileInput1" accept="image/*" hidden="">
                                    <label for="fileInput1" class="form-control">
                                        <span class="file__name">No file chosen</span>
                                        <span class="choose__btn">Choose File</span>
                                    </label>
                                    <div class="preview">
                                        <div class="preview__thumb">
                                            <img src="./../../../../public/assets/images/user-avatar.jpg" alt="Preview">
                                            <button type="button" class="remove__btn">×</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="btn__group mt-30">
                                <button type="submit" class="sg-btn sg-btn-dark radius-10 fw-medium">Save
                                    Ticket</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed } from "vue";
import Breadcrumb from '@/components/Breadcrumb.vue';
import SectionTitle from "@/components/SectionTitle.vue";
import { DashboardCircleIcon, ArrowLeft02Icon, Message02Icon, Pen01Icon } from '@hugeicons/core-free-icons'

// BreadCrumb Data
const BreadcrumbItems = ref([
    { icon: DashboardCircleIcon, title: 'Dashboard', to: '/dashboard' },
    { icon: '', title: 'Support Tickets', to: '/ticket' },
    { icon: '', title: 'Open A Ticket' },
]);

// Section Title Data
const SectionTitleData = ref([
    {
        icon: ArrowLeft02Icon,
        to: '/ticket',
        title: 'Add New Ticket',
        desc: '',
        button_link: '',
        button_text: ''
    },
]);

// Vue Select
const selected = ref(null)
// Options for Vue Select
const options = ref([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' }
])


// Badge class mapping logic
const getStatusClass = (status) => {
    const normalized = status.toLowerCase()
    if (normalized.includes('low priority')) return 'badge-success'
    if (normalized.includes('high priority')) return 'badge-danger'
    if (normalized.includes('medium priority')) return 'badge-warning'
    // if (normalized.includes('pending')) return 'badge-info'
    return 'badge-secondary'
}

</script>
