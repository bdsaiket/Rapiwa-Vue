<template>
    <div class="card px-20 py-20 radius-20">
        <div class="card__header mb-3 ">
            <h4 class="title">Services</h4>
            <div class="btn__group">
                <router-link :to="{ name: 'add-service' }" class="sg-btn sg-btn-dark">Add Service
                </router-link>
            </div>
        </div>
        <div class="card__body">
            <!-- File Item Start -->
            <div class="file__item" v-for="items in paginatedServiceData" :key="items.id">
                <div class="title__area">
                    <h5 class="title">{{ items.id }}. {{ items.title }}</h5>
                </div>
                <span class="text text-heading">{{ items.phone }}</span>
                <span class="text text-heading">{{ items.email }}</span>
                <span class="text">{{ items.price }}</span>

                <div class="all__badge" v-if="items.status">
                    <div v-if="items.status === 'Synced'" class="badge badge-success">
                        {{ items.status }}
                    </div>
                    <div v-else-if="items.status === 'Pending'" class="badge badge-warning">
                        {{ items.status }}
                    </div>
                    <div v-else-if="items.status === 'Cancel'" class="badge badge-danger">
                        {{ items.status }}
                    </div>
                </div>
                <div class="action__btn">
                    <router-link :to="{ name: 'view-service' }" class="button">
                        <HugeiconsIcon :icon="ViewIcon" />
                    </router-link>
                    <router-link :to="{ name: '' }" class="button">
                        <HugeiconsIcon :icon="Edit03Icon" />
                    </router-link>
                    <button type="button" class="button delete">
                        <HugeiconsIcon :icon="Delete02Icon" />
                    </button>
                </div>
            </div>
            <!-- Pagination Start  -->
            <Pagination :totalItems="ServiceData.length" :perPage="perPage" v-model="currentPage" />
            <!-- Pagination End  -->
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Pagination from '@/components/Pagination.vue';
import { Edit03Icon, Delete02Icon, ViewIcon, } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/vue';

// ServiceData

const ServiceData = ref([
    { id: "1", title: "Software Installation", phone: "+88 01322-827799", email: "info@spagreen.net", price: "$100.00", status: "" },
    { id: "1", title: "Software Customization", phone: "+88 01322-827799", email: "info@spagreen.net", price: "$100.00", status: "" },
])

// Pagination Logic
const perPage = ref(5);
const currentPage = ref(1);

const paginatedServiceData = computed(() => {
    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return ServiceData.value.slice(start, end);
});
</script>