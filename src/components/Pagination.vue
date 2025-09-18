<template>
    <div class="pagination__wrapper justify-content-end">
        <ul class="pagination">
            <li class="w-auto" :class="{ disabled: !hasPrevious }">
                <a href="#" @click.prevent="goToPrevious" class="px-15">Previous</a>
            </li>

            <li v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
                <a href="#" @click.prevent="goToPage(page)">{{ page }}</a>
            </li>

            <li class="w-auto" :class="{ disabled: !hasNext }">
                <a href="#" @click.prevent="goToNext" class="px-15">Next</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
    totalItems: {
        type: Number,
        required: true,
    },
    perPage: {
        type: Number,
        default: 5,
    },
    modelValue: {
        type: Number,
        default: 1,
    },
});

const emit = defineEmits(['update:modelValue']);

// Total pages
const totalPages = computed(() =>
    Math.ceil(props.totalItems / props.perPage)
);

const currentPage = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        if (value >= 1 && value <= totalPages.value) {
            emit('update:modelValue', value);
        }
    },
});

// Paginated data
const hasPrevious = computed(() => currentPage.value > 1);
const hasNext = computed(() => currentPage.value < totalPages.value);

// Paginated data
function goToPage(page) {
    currentPage.value = page;
}

function goToPrevious() {
    if (hasPrevious.value) currentPage.value--;
}
function goToNext() {
    if (hasNext.value) currentPage.value++;
}
</script>
