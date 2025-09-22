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
          <div class="col-lg-6">
            <div class="card px-20 py-20 radius-16">
              <div class="card__header pb-3 mb-3 border-bottom">
                <h4 class="title">Yoori Sales Agent</h4>
              </div>
              <div class="card__body">
                <div class="text-14 lw-normal text-content fw-medium mb-3">
                  <span class="me-1 text-heading text-capitalize">Team Status: </span>
                  <div class="badge badge-success">Active</div>
                </div>
                <ul class="d-grid gap-2 ps-4">
                  <li class="text-14 lw-normal text-content fw-medium">PDF (5)</li>
                  <li class="text-14 lw-normal text-content fw-medium">FAQ (50)</li>
                  <li class="text-14 lw-normal text-content fw-medium">Text File (10)</li>
                  <li class="text-14 lw-normal text-content fw-medium">Knowledge (50)</li>
                </ul>
                <div class="text-14 lw-normal text-content fw-medium my-2">
                  Connected WhatsApp Number:
                </div>
                <div id="whatsapp-numbers" class="d-flex flex-wrap gap-2">
                  <div v-for="(number, index) in whatsappNumbers" :key="index" class="number-tag">
                    <span>{{ number }}</span>
                    <button class="clear-number" @click="removeNumber(index)">
                      <HugeiconsIcon :icon="CancelCircleIcon" />
                    </button>
                  </div>
                </div>
                <div class="btn__group d-flex align-items-center gap-3 mt-30">
                  <a href="#" class="sg-btn sg-btn-primary fw-medium radius-10">
                    Open AI Configuration
                  </a>
                  <router-link
                    :to="{ name: 'train-ai-agent' }"
                    class="sg-btn sg-btn-gray fw-medium radius-10"
                  >
                    Train agent
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card px-20 py-20 radius-16">
              <div class="card__header pb-3 mb-3 border-bottom">
                <h4 class="title">SpaGreen Sales Agent</h4>
              </div>
              <div class="card__body">
                <div class="text-14 lw-normal text-content fw-medium mb-3">
                  <span class="me-1 text-heading text-capitalize">Team Status: </span>
                  <div class="badge badge-success">Active</div>
                </div>
                <ul class="d-grid gap-2 ps-4">
                  <li class="text-14 lw-normal text-content fw-medium">PDF (5)</li>
                  <li class="text-14 lw-normal text-content fw-medium">FAQ (50)</li>
                  <li class="text-14 lw-normal text-content fw-medium">Text File (10)</li>
                  <li class="text-14 lw-normal text-content fw-medium">Knowledge (50)</li>
                </ul>
                <div class="text-14 lw-normal text-content fw-medium my-2">
                  Connected WhatsApp Number:
                </div>
                <div id="whatsapp-numbers" class="d-flex flex-wrap gap-2">
                  <div v-for="(number, index) in whatsappNumbers" :key="index" class="number-tag">
                    <span>{{ number }}</span>
                    <button class="clear-number" @click="removeNumber(index)">
                      <HugeiconsIcon :icon="CancelCircleIcon" />
                    </button>
                  </div>
                </div>
                <div class="btn__group d-flex align-items-center gap-3 mt-30">
                  <a href="#" class="sg-btn sg-btn-primary fw-medium radius-10">
                    Open AI Configuration
                  </a>
                  <router-link
                    :to="{ name: 'train-ai-agent' }"
                    class="sg-btn sg-btn-gray fw-medium radius-10"
                  >
                    Train agent
                  </router-link>
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
import { ref } from 'vue'
import { DashboardCircleIcon, ArrowLeft02Icon, CancelCircleIcon } from '@hugeicons/core-free-icons'
import Breadcrumb from '@/components/Breadcrumb.vue'
import SectionTitle from '@/components/SectionTitle.vue'

// BreadCrumb Data
const BreadcrumbItems = ref([
  { icon: DashboardCircleIcon, title: 'Dashboard', to: '/dashboard' },
  { icon: '', title: 'AI Agents' },
])

// Section Title Data
const SectionTitleData = ref([
  {
    // icon: ArrowLeft02Icon,
    // to: '/dashboard',
    title: 'AI Agents',
    desc: 'Manage AI Agents',
    button_link: 'create-ai-agent',
    button_text: 'Create AI Agent',
  },
])

// Dropdown Login
const selected = ref(null)

// WhatsApp Numbers (reactive list)
const whatsappNumbers = ref(['01322-827799', '01322-827799'])

// Remove number by index
const removeNumber = (index) => {
  whatsappNumbers.value.splice(index, 1)
}

const SelectAgent = ref([
  { label: 'Sales Agent', value: 'sales_agent' },
  { label: 'Telegram', value: 'telegram' },
  { label: 'Facebook', value: 'facebook' },
])
</script>
