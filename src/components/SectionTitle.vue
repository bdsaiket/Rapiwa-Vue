<template>
    <div class="section__title ">
        <div class="title__area">
            <div class="d-flex align-items-center gap-3">
                <router-link :to="items.to" class="back" v-if="items.icon">
                    <HugeiconsIcon v-if="items.icon" :icon="items.icon" />
                </router-link>
                <div class="">
                    <h2 class="title" v-if="items.title">
                        {{ items.title }}
                    </h2>
                    <p v-if="items.desc">{{ items.desc }}</p>
                </div>
            </div>
        </div>

        <div class="btn__group" v-if="items.button_text">
            <router-link class="sg-btn sg-btn-dark radius-10" :to="{ name: items.button_link }">
                {{ items.button_text }}
            </router-link>
        </div>
    </div>
</template>

<script setup>
defineProps({
    items: {
        type: Object,
        required: true
    }
})
</script>
