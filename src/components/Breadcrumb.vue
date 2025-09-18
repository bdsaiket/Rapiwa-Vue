<template>
    <div class="breadcrumb__area">
        <ul class="breadcrumb__list">
            <li v-for="(item, index) in items" :key="index" class="breadcrumb__link">
                <template v-if="item.to">
                    <router-link :to="item.to">
                        <HugeiconsIcon v-if="item.icon" :icon="item.icon" />
                        {{ item.title }}
                    </router-link>
                </template>
                <template v-else>
                    <HugeiconsIcon v-if="item.icon" :icon="item.icon" />
                    {{ item.title }}
                </template>
            </li>
        </ul>
    </div>
</template>


<script setup>
defineProps({
    items: {
        type: Array,
        required: true
    }
});
</script>