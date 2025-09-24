<template>
    <div class="card px-20 py-20 radius-20">
        <div class="card__header mb-3 ">
            <h4 class="title">Products</h4>
            <div class="btn__group">
                <router-link :to="{ name: 'add-product' }" class="sg-btn sg-btn-dark">Add
                    Product
                </router-link>
            </div>
        </div>
        <div class="card__body">
            <!-- File Item Start -->
            <div class="file__item" v-for="items in paginatedPdfData" :key="items.id">
                <div class="title__area">
                    <h5 class="title">{{ items.id }}. {{ items.title }}</h5>
                </div>
                <span class="text text-heading">{{ items.url }}</span>
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
                    <router-link :to="{ name: 'view-product' }" class="button">
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
            <Pagination :totalItems="PdfData.length" :perPage="perPage" v-model="currentPage" />
            <!-- Pagination End  -->
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Pagination from '@/components/Pagination.vue';
import { Edit03Icon, Delete02Icon, ViewIcon, } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/vue';

// PdfData

const PdfData = ref([
    { id: "1", title: "Yoori eCommerce CMS", url: "https://yoori.spagreen.net/", price: "$60.00", status: "" },
    { id: "2", title: "SaleBot ", url: "https://livedemo.salebo ...", price: "$60.00", status: "" },
    { id: "3", title: "Delix Courier Management", url: "https://delix.cloud/", price: "$60.00", status: "" },
    { id: "4", title: "SocialVibe", url: "https://socialvibe.spag ...", price: "$60.00", status: "" },
    { id: "5", title: "VidFlix ", url: "https://vidflix.app/", price: "$60.00", status: "" },
    { id: "6", title: "Yoori eCommerce CMS", url: "https://yoori.spagreen.net/", price: "$60.00", status: "" },
    { id: "7", title: "Yoori eCommerce CMS", url: "https://yoori.spagreen.net/", price: "$60.00", status: "" },
    { id: "8", title: "Yoori eCommerce CMS", url: "https://yoori.spagreen.net/", price: "$60.00", status: "" },
    { id: "9", title: "Yoori eCommerce CMS", url: "https://yoori.spagreen.net/", price: "$60.00", status: "" },
    { id: "10", title: "Yoori eCommerce CMS", url: "https://yoori.spagreen.net/", price: "$60.00", status: "" },
])

// Pagination Logic
const perPage = ref(5);
const currentPage = ref(1);

const paginatedPdfData = computed(() => {
    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return PdfData.value.slice(start, end);
});
</script>