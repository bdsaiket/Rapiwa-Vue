<template>
  <div class="card px-20 py-20 radius-20">
    <div class="card__header mb-3">
      <h4 class="title">
        <router-link class="solid__btn" :to="{ name: 'train-ai-agent-company-info' }">
          <HugeiconsIcon :icon="ArrowLeft02Icon" :size="22" />
        </router-link>
        Add/Edit Basic Info
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
                  name="f_name"
                  class="form-control"
                  id="f_name"
                  value="SpaGreen Creative"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <input
                  type="text"
                  name="l_name"
                  class="form-control"
                  id="l_name"
                  value="SpaGreen "
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <input
                  type="text"
                  name="address"
                  class="form-control"
                  id="address"
                  value="Mirpur DOHS, Dhaka "
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <input
                  type="text"
                  name="text"
                  class="form-control"
                  id="text"
                  value="+8801322-827799"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="email"
                  value="info@spagreen.net"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <FileUpload class="flex-row" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <textarea class="form-control" name="ans" id="ans" rows="5">
SpaGreen Creative provides custom software and app solutions for ecommerce, movie portal, online payment gateway, hotel booking system etc.</textarea
                >
              </div>
            </div>

            <div class="col-12">
              <div class="btn__group">
                <button type="submit" class="sg-btn sg-btn-dark radius-10 fw-medium">Update</button>
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

// Import File
import FileUpload from '@/components/FileUpload.vue'
</script>
