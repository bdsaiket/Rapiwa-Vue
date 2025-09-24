<template>
    <div class="card px-20 py-20 radius-20">
        <div class="card__header mb-3 ">
            <h4 class="title">
                <router-link class="solid__btn" :to="{ name: 'train-ai-agent-pdf' }">
                    <HugeiconsIcon :icon="ArrowLeft02Icon" :size=22 />
                </router-link>
                Edit PDF File
            </h4>

        </div>
        <div class="card__body">
            <div class="col-12">
                <form action="#">
                    <div class="row gy-3">
                        <div class="col-lg-12">
                            <div class="form-group">
                                <input type="text" name="pdf_title" class="form-control" placeholder="Write title"
                                    value="Company policies" />
                            </div>
                        </div>
                        <div class="col-lg-12 ">
                            <FileUpload />
                        </div>
                        <div class="col-12">
                            <div class="btn__group ">
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
import { HugeiconsIcon } from '@hugeicons/vue';

// Import File
import FileUpload from '@/components/FileUpload.vue';



</script>