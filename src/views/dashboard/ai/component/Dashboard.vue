<template>
  <div class="row g-4 border-bottom mb-20 pb-20">
    <div class="col-lg-4 col-sm-6" v-for="(item, index) in MetricCardData" :key="index">
      <div class="metric__card d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-2">
          <div class="icon2" v-if="item.icon">
            <HugeiconsIcon :icon="item.icon" />
          </div>
          <h5 class="title mb-0">{{ item.title }}</h5>
        </div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>
  </div>
  <div class="card px-20 py-20 radius-16">
    <div class="card__header pb-3 mb-3 border-bottom">
      <h4 class="title">Last Trained job</h4>
    </div>
    <div class="card__body">
      <ul class="d-grid gap-2 ps-4">
        <li class="text-14 lw-normal text-content fw-medium">
          <span class="me-1 text-heading text-capitalize"> job ID: </span>
          XsbhjsJSDXNsxma2sxh
        </li>
        <li class="text-14 lw-normal text-content fw-medium">
          <span class="me-1 text-heading text-capitalize"> Training base model: </span>
          gpt-5-2025-08-12
        </li>
        <li class="text-14 lw-normal text-content fw-medium">
          <span class="me-1 text-heading text-capitalize"> Status: </span>
          <div class="badge badge-success">success</div>
        </li>
        <li class="text-14 lw-normal text-content fw-medium">
          <span class="me-1 text-heading text-capitalize"> Trained model: </span>
          gpt-5-2025-08-12:personal:pcrm-5143236:DCHBSC1s
        </li>
        <li class="text-14 lw-normal text-content fw-medium">
          <span class="text-heading text-capitalize"> Created at: </span>
          10-9-2025 5:02:30
        </li>
        <li class="text-14 lw-normal text-content fw-medium">
          <span class="text-heading text-capitalize"> Finished at: </span>
          10-9-2025 5:04:21
        </li>
      </ul>
    </div>
  </div>
  <div class="card px-20 py-20 radius-16">
    <div class="card__header">
      <h4 class="title">Trained model</h4>
      <div class="form-check form__checkbox">
        <input class="form-check-input" type="checkbox" id="enableTraining" checked />
        <label class="form-check-label" for="enableTraining"> Enable Training </label>
      </div>
    </div>
    <div class="card__body">
   
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  WhatsappIcon,
  Txt01Icon,
  HelpCircleIcon,
  Brain03Icon,
  ShoppingBag01Icon,
  CustomerSupportIcon,
} from '@hugeicons/core-free-icons'

// Metric Card Data
const MetricCardData = ref([
  {
    icon: WhatsappIcon,
    title: 'PDF',
    value: '1',
  },
  {
    icon: Txt01Icon,
    title: 'Text File',
    value: '1',
  },
  {
    icon: HelpCircleIcon,
    title: 'FAQ',
    value: '1',
  },
  {
    icon: Brain03Icon,
    title: 'Knowledge',
    value: '4',
  },
  {
    icon: ShoppingBag01Icon,
    title: 'Knowledge',
    value: '2',
  },
  {
    icon: CustomerSupportIcon,
    title: 'Service',
    value: '3',
  },
])
</script>
