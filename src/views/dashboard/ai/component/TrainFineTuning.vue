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
        <div class="row g-3">
          <div class="col-lg-2">
            <div class="agent__sidebar">
              <ul class="nav flex-column sidebar__menu">
                <li>
                  <router-link :to="{ name: 'train-ai-agent' }"> Dashboard </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'train-ai-agent-pdf' }"> PDF </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'train-ai-agent-text-file' }">Text File</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'train-ai-agent-faq' }"> FAQ </router-link>
                </li>
                <li>
                  <router-link to="/knowledge-base">Knowledge Base</router-link>
                </li>
                <li>
                  <router-link to="/product">Product</router-link>
                </li>
                <li>
                  <router-link to="/service">Service</router-link>
                </li>
                <li>
                  <router-link to="/company-info">Company Info</router-link>
                </li>
                <li>
                  <router-link to="/open-ai-configure"> Open AI Configure </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="card px-20 py-20 radius-16">
              <div class="card__header pb-3 mb-3 border-bottom">
                <router-link :to="{ name: 'train-ai-agent' }" class="title">
                  <HugeiconsIcon :icon="ArrowLeft02Icon" />Source Data for training
                </router-link>
              </div>
              <div class="card__body">
                <ul class="d-grid gap-2 ps-4">
                  <li class="text-14 lw-normal text-content fw-medium">
                    <span class="me-1 text-heading text-capitalize">Available PDF: </span>
                    50
                  </li>
                  <li class="text-14 lw-normal text-content fw-medium">
                    <span class="me-1 text-heading text-capitalize"> Available text File: </span>
                    20
                  </li>

                  <li class="text-14 lw-normal text-content fw-medium">
                    <span class="me-1 text-heading text-capitalize"> Available FAQ: </span>
                    14
                  </li>
                  <li class="text-14 lw-normal text-content fw-medium">
                    <span class="text-heading text-capitalize"> Available knowledge Base: </span>
                    6
                  </li>
                  <li class="text-14 lw-normal text-content fw-medium">
                    <span class="text-heading text-capitalize"> Available Products: </span>
                    10
                  </li>
                  <li class="text-14 lw-normal text-content fw-medium">
                    <span class="text-heading text-capitalize"> Available Services: </span>
                    3
                  </li>
                  <li class="text-14 lw-normal text-content fw-medium">
                    <span class="text-heading text-capitalize"> Available Company Info: </span>
                    2
                  </li>
                  <li class="text-14 lw-normal text-content fw-medium">
                    <span class="text-heading text-capitalize"> Predefined Replies : </span>
                    33
                  </li>
                </ul>
                <form action="#" class="mt-10">
                  <div class="form-group">
                    <label>Training base model </label>
                    <Vue3Select
                      v-model="selected"
                      :options="SelectAgent"
                      class="radius-10"
                      placeholder="GPT-5 (2025-08-25)"
                    />
                  </div>
                  <div class="text-14 lw-normal text-content pt-10 pb-15">
                    This is the base model that will be used for training. Differents models have
                    different capbilites and price points.
                  </div>
                  <router-link
                    :to="{ name: 'train-ai-agent' }"
                    class="sg-btn sg-btn-dark radius-10 fw-medium"
                  >
                    <HugeiconsIcon :icon="AiBeautifyIcon" />
                    Re-Train & Fine-Tuning
                  </router-link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  DashboardCircleIcon,
  ArrowLeft02Icon,
  Alert01Icon,
  AiBeautifyIcon,
} from '@hugeicons/core-free-icons'
import Breadcrumb from '@/components/Breadcrumb.vue'
import SectionTitle from '@/components/SectionTitle.vue'

// BreadCrumb Data
const BreadcrumbItems = ref([
  { icon: DashboardCircleIcon, title: 'Dashboard', to: '/dashboard' },
  { icon: '', title: 'AI Agents', to: '/ai-agent' },
  { icon: '', title: 'Train AI Agent' },
])

// Section Title Data
const SectionTitleData = ref([
  {
    icon: ArrowLeft02Icon,
    to: '/ai-agent',
    title: 'SpaGreen Sales Agent',
    desc: 'Create a  new AI Agent Model with the latest content. Previous trained models will be deleted.',
  },
])

// Dropdown Login
const selected = ref(null)

const SelectAgent = ref([
  { label: 'GPT-5', value: 'GPT-5 (2025-08-25)' },
  { label: 'Support Agent', value: 'support_agent' },
  { label: 'Sales & Support Agent', value: 's&s_agent' },
])
</script>
