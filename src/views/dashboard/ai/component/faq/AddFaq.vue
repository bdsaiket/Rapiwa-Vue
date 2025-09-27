<template>
  <div class="card px-20 py-20 radius-16">
    <div class="card__header pb-3 mb-3 border-bottom">
      <h4 class="title">
        <router-link class="solid__btn" :to="{ name: 'train-ai-agent-faq' }">
          <HugeiconsIcon :icon="ArrowLeft02Icon" :size="22" />
        </router-link>
        Add FAQ
      </h4>
    </div>
    <div class="card__body">
      <form action="#">
        <div class="row g-3">
          <div class="col-12">
            <div class="form-group">
              <input
                type="text"
                name="ques"
                class="form-control"
                id="ques"
                placeholder="Question"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <textarea
                class="form-control"
                name="ans"
                id="ans"
                rows="5"
                placeholder="Answer"
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
</template>

<script setup>
import { ref } from 'vue'
import { HugeiconsIcon } from '@hugeicons/vue'
import { ArrowLeft02Icon } from '@hugeicons/core-free-icons'
</script>
