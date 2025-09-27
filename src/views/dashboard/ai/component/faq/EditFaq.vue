<template>
  <div class="card px-20 py-20 radius-16">
    <div class="card__header">
      <h4 class="title">
        <router-link class="solid__btn" :to="{ name: 'train-ai-agent-faq' }">
          <HugeiconsIcon :icon="ArrowLeft02Icon" :size="22" />
        </router-link>
        Edit FAQ
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
                value="What is SpaGreen Creative?"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <textarea class="form-control" name="ans" id="ans" rows="5">
SpaGreen Creative is a top software company in Bangladesh. SpaGreen Creative has been providing premium software services worldwide since 2018. Web application, Android app, and iOS app development services, in particular. We enjoy tackling difficult projects. Working with a variety of businesses throughout our career has been our greatest satisfaction. We deliver excellent services to our clients as a result of our hard work.</textarea
              >
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
