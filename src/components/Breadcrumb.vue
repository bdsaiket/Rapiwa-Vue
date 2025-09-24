<!-- <template>
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
</script> -->

<template>
    <div class="breadcrumb__area">
        <ul class="breadcrumb__list">
            <li v-for="(item, index) in breadcrumbItems" :key="index" class="breadcrumb__link">
                <template v-if="index < breadcrumbItems.length - 1">
                    <router-link :to="item.path">
                        <HugeiconsIcon :icon="DashboardCircleIcon" />
                        {{ item.title }}
                    </router-link>
                    <!-- <span class="separator">/</span> -->
                    <HugeiconsIcon :icon="ArrowRight01Icon" />
                </template>
                <template v-else>
                    <span class="current-page">{{ item.title }}</span>
                </template>
            </li>
        </ul>
    </div>
</template>


<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { DashboardCircleIcon, ArrowRight01Icon } from '@hugeicons/core-free-icons'

const route = useRoute()

const breadcrumbItems = computed(() => {
    const items = []

    route.matched.forEach(record => {
        // Skip if breadcrumbTitle or title is explicitly false
        if (record.meta?.breadcrumbTitle !== false && record.meta?.title !== false) {
            const title =
                record.meta?.breadcrumbTitle ||
                record.meta?.title ||
                record.name ||
                formatPath(record.path)

            items.push({
                title: title,
                path: generatePath(record),
                icon: record.meta?.breadcrumbIcon
            })
        }
    })

    // Last Item No Link Need
    if (items.length > 0) {
        items[items.length - 1].path = null
    }

    return items
})


function formatPath(path) {
    const lastSegment = path.split('/').filter(segment => segment).pop()
    return lastSegment ?
        lastSegment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) :
        'Home'
}

function generatePath(record) {
    let path = record.path
    if (route.params && path.includes(':')) {
        Object.keys(route.params).forEach(param => {
            if (route.params[param]) {
                path = path.replace(`:${param}`, route.params[param])
            }
        })
    }
    return path
}
</script>