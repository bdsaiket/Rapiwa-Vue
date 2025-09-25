<template>
  <div class="card px-20 py-20 radius-16">
    <div class="card__header pb-3 mb-3 border-bottom">
      <router-link :to="{ name: 'train-ai-agent-knowledge-base' }" class="title">
        <HugeiconsIcon :icon="ArrowLeft02Icon" />Add Knowledge Base
      </router-link>
    </div>
    <div class="card__body">
      <form action="#">
        <div class="row g-3">
          <div class="col-12">
            <div class="form-group">
              <input
                type="text"
                name="title"
                class="form-control"
                id="title"
                placeholder="Write Title"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <textarea
                class="form-control"
                name="desc"
                id="desc"
                rows="5"
                placeholder="Description"
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
