<template>
    <div class="card px-20 py-20 radius-20">
        <div class="card__header mb-3 ">
            <h4 class="title">OpenAI Configurations</h4>
        </div>
        <div class="card__body">
            <div class="col-12">
                <form action="#">
                    <div class="row gy-3">
                        <div class="col-lg-12">
                            <div class="form-group">
                                <input type="text" name="api_key" class="form-control"
                                    placeholder="Enter your API key" />
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-group">
                                <input type="text" name="secret_key" class="form-control"
                                    placeholder="Enter Secret key" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="btn__group ">
                                <button type="submit" class="sg-btn sg-btn-dark radius-10 fw-medium">Save</button>
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
import { Edit03Icon, Delete02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/vue';

</script>