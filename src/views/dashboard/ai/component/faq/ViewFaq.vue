<template>
  <div class="card px-20 py-20 radius-16">
    <div class="card__header pb-3 mb-3 border-bottom">
      <h4 class="title">
        <router-link class="solid__btn" :to="{ name: 'train-ai-agent-faq' }">
          <HugeiconsIcon :icon="ArrowLeft02Icon" :size="22" />
        </router-link>
        View FAQ
      </h4>
    </div>
    <div class="card__body">
      <h5 class="text-black fw-medium text-14">1. Question: What is SpaGreen Creative?</h5>
      <div class="text-14 text-content">
        <span class="text-black mr-05">Answer:</span>
        SpaGreen Creative is a top software company in Bangladesh. SpaGreen Creative has been
        providing premium software services worldwide since 2018. Web application, Android app, and
        iOS app development services, in particular. We enjoy tackling difficult projects.

        <div class="mt-20">
          Working with a variety of businesses throughout our career has been our greatest
          satisfaction. We deliver excellent services to our clients as a result of our hard work.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { HugeiconsIcon } from '@hugeicons/vue'
import { ArrowLeft02Icon } from '@hugeicons/core-free-icons'
</script>
