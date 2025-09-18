<template lang="html">
    <div class="teamCard text-center mt-4">
        <div class="teamCard__thumb">
            <img :src="member.avatar" alt="user" />
            <div class="badge fw-medium" :class="member.teamStatus ? 'badge-success' : 'badge-danger'">
                {{ member.teamStatus ? 'active' : 'Inactive' }}
            </div>
        </div>

        <div class=" teamCard__content">
            <h4 class="title">{{ member.name }}</h4>
            <div class="info__item">
                <a :href="`tel:${member.phone}`">{{ member.phone }}</a>
                <a :href="`mailto:${member.email}`">{{ member.email }}</a>
            </div>
        </div>

        <div class="teamCard__footer">
            <div class="btn__group">
                <router-link :to="member.to" class="sg-btn sg-btn-outline">
                    <HugeiconsIcon :icon="Edit03Icon" /> Edit
                </router-link>

                <button type="button" class="sg-btn"
                    :class="member.isBanned ? 'sg-btn-outline-danger' : 'sg-btn-outline-border'" @click="emitToggleBan">
                    <HugeiconsIcon :icon="UnavailableIcon" />
                    {{ member.isBanned ? 'Banned' : 'Ban' }}
                </button>
            </div>

            <div class="form-switch">
                <label class="form-check-label" :for="`team_status_${member.id}`">
                    Team Status:
                </label>
                <input class="form-check-input" type="checkbox" role="switch" :id="`team_status_${member.id}`"
                    :checked="member.teamStatus" @change="emitToggleTeamStatus" />
            </div>
        </div>
    </div>
</template>


<script setup>

import { Edit03Icon, UnavailableIcon } from '@hugeicons/core-free-icons'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    member: {
        type: Object,
        required: true
    },
})

const { member } = props
// const member = props.member

const emit = defineEmits(['toggle-ban', 'toggle-status'])

const emitToggleBan = () => {
    emit('toggle-ban', member)
}

const emitToggleTeamStatus = () => {
    emit('toggle-status', member)
}

</script>
<style lang="">

</style>