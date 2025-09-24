<template>
	<div class="section__title">
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

		<div class="btn__group d-flex align-items-center justify-content-center gap-4 flex-wrap"
			v-if="items.button_text">
			<div class="badge badge-success" v-if="items.badge">{{ items.badge }}</div>
			<router-link class="sg-btn sg-btn-dark radius-10" :to="{ name: items.button_link }">
				<HugeiconsIcon :icon="AiBeautifyIcon" />
				{{ items.button_text }}
			</router-link>
		</div>
	</div>
</template>

<script setup>
import { AiBeautifyIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/vue';
defineProps({
	items: {
		type: Object,
		required: true,
	},
})
</script>
