<template>
  <div class="card px-20 py-20 radius-20">
    <div class="card__header pb-3 mb-3 border-bottom">
      <h4 class="title">
        <router-link class="solid__btn" :to="{ name: 'train-ai-agent-company-info' }">
          <HugeiconsIcon :icon="ArrowLeft02Icon" :size="22" />
        </router-link>
        View Team
      </h4>
    </div>
    <div class="card__body">
      <img src="../../../../../../public/assets/images/ai-agent/ai-agent-team.jpg" alt="img" />

      <div class="text-14 lh-normal text-content mt-10">
        <span class="me-1 text-heading text-capitalize fw-medium">Team Name:</span>
        Software Development
      </div>
      <div class="text-14 lh-normal text-content mt-10">
        <span class="me-1 text-heading text-capitalize fw-medium">Team Member:</span>
        6
      </div>
      <div class="text-14 lh-normal text-content mt-10">
        <span class="me-1 text-heading text-capitalize fw-medium">Description:</span>
        SpaGreen Creative provides custom software and app solutions for ecommerce, movie portal,
        online payment gateway, hotel booking system etc.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ArrowLeft02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/vue'
</script>
