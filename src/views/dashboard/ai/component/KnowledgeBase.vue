<template>
  <div class="card px-20 py-20 radius-20">
    <div class="card__header mb-3">
      <h4 class="title">All Knowledge Base</h4>
      <div class="btn__group">
        <router-link :to="{ name: 'train-ai-agent-add-knowledge-base' }" class="sg-btn sg-btn-dark"
          >Add Knowledge Base</router-link
        >
      </div>
    </div>
    <div class="card__body">
      <!-- File Item Start -->
      <div class="file__item" v-for="items in paginatedFaqData" :key="items.id">
        <div>
          <h5 class="text-black fw-medium text-14">{{ items.id }}. {{ items.question }}</h5>
          <div class="text-14 text-content">
            <span class="text-black mr-05">Answer:</span>{{ items.answer }}
          </div>
        </div>

        <div class="action__btn">
          <router-link :to="{ name: 'train-ai-agent-view-knowledge-base' }" class="button">
            <HugeiconsIcon :icon="ViewIcon" />
          </router-link>
          <router-link :to="{ name: 'train-ai-agent-edit-knowledge-base' }" class="button">
            <HugeiconsIcon :icon="Edit03Icon" />
          </router-link>
          <button type="button" class="button delete">
            <HugeiconsIcon :icon="Delete02Icon" />
          </button>
        </div>
      </div>
      <!-- Pagination Start  -->
      <Pagination :totalItems="FaqData.length" :perPage="perPage" v-model="currentPage" />
      <!-- Pagination End  -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Pagination from '@/components/Pagination.vue'
import { Edit03Icon, Delete02Icon, ViewIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/vue'

// FaqData

const FaqData = ref([
  {
    id: '1',
    question: 'Business development ideas',
    answer: 'SpaGreen Creative is a top software company in Bangladesh ...',
  },
  {
    id: '2',
    question: 'How to increase eCommerce business with us',
    answer: 'SpaGreen Creative is a top software company in Bangladesh ...',
  },
  {
    id: '3',
    question: 'AI can use all digital products & services',
    answer: 'SpaGreen Creative is a top software company in Bangladesh ...',
  },
  {
    id: '4',
    question: 'Make a successful business man',
    answer: 'SpaGreen Creative is a top software company in Bangladesh ...',
  },
  {
    id: '5',
    question: 'Better product better result ',
    answer: 'SpaGreen Creative is a top software company in Bangladesh ...',
  },
  {
    id: '6',
    question: 'Better product better result ',
    answer: 'SpaGreen Creative is a top software company in Bangladesh ...',
  },
])

// Pagination Logic
const perPage = ref(5)
const currentPage = ref(1)

const paginatedFaqData = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  const end = start + perPage.value
  return FaqData.value.slice(start, end)
})
</script>
