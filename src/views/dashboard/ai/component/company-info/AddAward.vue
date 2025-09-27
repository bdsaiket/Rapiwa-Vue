<template>
  <div class="card px-20 py-20 radius-20">
    <div class="card__header mb-3">
      <h4 class="title">
        <router-link class="solid__btn" :to="{ name: 'train-ai-agent-company-info' }">
          <HugeiconsIcon :icon="ArrowLeft02Icon" :size="22" />
        </router-link>
        Add Award
      </h4>
    </div>
    <div class="card__body">
      <div class="col-12">
        <form action="#">
          <div class="row g-3">
            <div class="col-sm-6">
              <div class="form-group">
                <input
                  type="text"
                  name="a_name"
                  class="form-control"
                  id="a_name"
                  placeholder="Award Name"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <Vue3Select
                  v-model="selected"
                  :options="SelectYear"
                  class="radius-10"
                  placeholder="Select year"
                />
              </div>
            </div>

            <div class="col-12">
              <div class="form-group">
                <textarea
                  class="form-control"
                  name="a_award"
                  id="a_award"
                  rows="5"
                  placeholder="About award"
                ></textarea>
              </div>
            </div>
            <div class="col-12">
              <div class="btn__group">
                <button type="submit" class="sg-btn sg-btn-dark radius-10 fw-medium">Add</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ArrowLeft02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/vue'

// Dropdown Login
const selected = ref(null)

const SelectYear = ref([
  { label: '2025', value: '2025' },
  { label: '2024', value: '2024' },
  { label: '2023', value: '2023' },
])
</script>
