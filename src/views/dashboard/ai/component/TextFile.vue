<template>
    <div class="card px-20 py-20 radius-20">
        <div class="card__header mb-3 ">
            <h4 class="title">Text Files</h4>
            <div class="btn__group">
                <router-link :to="{ name: 'train-ai-agent-add-text-file' }" class="sg-btn sg-btn-dark">Add text
                    File</router-link>
            </div>
        </div>
        <div class="card__body">
            <!-- File Item Start -->
            <div class="file__item" v-for="items in paginatedPdfData" :key="items.id">
                <div class="title__area">
                    <h5 class="title">{{ items.id }}. {{ items.title }}</h5>
                </div>
                <div class="all__badge">
                    <div v-if="items.status === 'Synced'" class="badge badge-success">
                        {{ items.status }}
                    </div>
                    <div v-else-if="items.status === 'Pending'" class="badge badge-warning">
                        {{ items.status }}
                    </div>
                    <div v-else-if="items.status === 'Cancel'" class="badge badge-danger">
                        {{ items.status }}
                    </div>
                    <div v-else class="badge badge-secondary">
                        Unknown Status
                    </div>
                </div>
                <span></span>
                <div class="action__btn">
                    <router-link :to="{ name: 'train-ai-agent-edit-text-file' }" class="button">
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
import { Edit03Icon, Delete02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/vue';

// PdfData

const PdfData = ref([
    { id: "1", title: "company_overview.txt", status: "Synced" },
    { id: "2", title: "Yearly Sales Record.txt", status: "Synced" },
    { id: "3", title: "company_Policy.txt", status: "Pending" },
    { id: "4", title: "Refund_Policy.txt", status: "Synced" },
    { id: "5", title: "Pricing_list.txt", status: "Cancel" },
    { id: "6", title: "Pricing_list.txt", status: "Synced" },
    { id: "7", title: "Pricing_list.txt", status: "Synced" },
    { id: "8", title: "Pricing_list.txt", status: "Synced" },
    { id: "9", title: "Pricing_list.txt", status: "Synced" },
    { id: "10", title: "Pricing_list.txt", status: "Synced" },
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