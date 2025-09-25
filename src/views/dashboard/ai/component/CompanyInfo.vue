<template>
  <div class="card px-20 py-20 radius-16">
    <div class="card__header pb-3 mb-3 border-bottom">
      <router-link :to="{ name: 'train-ai-agent' }" class="title">
        <HugeiconsIcon :icon="ArrowLeft02Icon" />Add/Edit Basic Info
      </router-link>
    </div>
    <div class="card__body">
      <form action="#">
        <div class="row g-3">
          <div class="col-sm-6">
            <div class="form-group">
              <input
                type="text"
                name="f_name"
                class="form-control"
                id="f_name"
                value="SpaGreen Creative"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <input type="text" name="l_name" class="form-control" id="l_name" value="Creative" />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <input
                type="text"
                name="address"
                class="form-control"
                id="address"
                value="Mirpur DOHS, Dhaka"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <input
                type="text"
                name="number"
                class="form-control"
                id="number"
                value="+8801322-827799"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <input
                type="text"
                name="email"
                class="form-control"
                id="email"
                value="info@spagreen.net"
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
