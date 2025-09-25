<template>
    <div class="card px-20 py-20 radius-20">
        <div class="card__header mb-3 ">
            <h4 class="title">
                <router-link class="solid__btn" :to="{ name: 'service' }">
                    <HugeiconsIcon :icon="ArrowLeft02Icon" :size=22 />
                </router-link>
                Add Service
            </h4>

        </div>
        <div class="card__body">
            <div class="col-12">
                <form action="#">
                    <div class="row g-3">
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                                <input type="text" name="service_name" class="form-control"
                                    placeholder="Service Name" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                                <input type="text" name="hourly_rate" class="form-control"
                                    placeholder="Hourly Rate $0.00" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                                <input type="url" name="quote_url" class="form-control" placeholder="Get Quotes URL" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                                <input type="number" name="contact_no" class="form-control" placeholder="Contact No" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                                <input type="email" name="contact_email" class="form-control"
                                    placeholder="Contact email" />
                            </div>
                        </div>
                        <div class="col-12">
                            <textarea name="description" class="form-control" cols="30" rows="6"
                                placeholder="Description"></textarea>
                        </div>
                        <div class="col-12">
                            <div class="btn__group ">
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
import { HugeiconsIcon } from '@hugeicons/vue';

// Import File
import FileUpload from '@/components/FileUpload.vue';



</script>