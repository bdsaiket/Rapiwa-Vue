<template>
  <div class="card px-20 py-20 radius-20 mb-20">
    <div class="card__header mb-3 pb-10 border-bottom">
      <h4 class="title">Basic Info</h4>
      <div class="btn__group">
        <router-link :to="{ name: 'train-ai-agent-add-company-info' }" class="sg-btn sg-btn-dark"
          >Add/Edit Basic Info
        </router-link>
      </div>
    </div>
    <div class="card__body">
      <ul class="d-grid gap-2 list-unstyled">
        <li class="text-14 lh-normal text-content fw-medium">
          <span class="me-1 text-heading text-capitalize">Company Name:</span>
          SpaGreen Creative
        </li>
        <li class="text-14 lh-normal text-content fw-medium">
          <span class="me-1 text-heading text-capitalize">Short Name:</span>
          SpaGreen
        </li>
        <li class="text-14 lh-normal text-content fw-medium">
          <span class="me-1 text-heading text-capitalize">Address:</span>
          Mirpur DOHS, Dhaka
        </li>
        <li class="text-14 lh-normal text-content fw-medium">
          <span class="me-1 text-heading text-capitalize">Contact No:</span>
          +880 1322-827799
        </li>
        <li class="text-14 lh-normal text-content fw-medium">
          <span class="text-heading text-capitalize">Contact Email:</span>
          info@spagreen.net
        </li>
        <li class="text-14 lh-normal text-content fw-medium">
          <span class="text-heading text-capitalize">Description:</span>
          SpaGreen Creative provides custom software and app solutions for ecommerce, movie portal,
          online payment gateway, hotel booking system etc.
        </li>
      </ul>
    </div>
  </div>
  <!-- Office Hour -->
  <div class="card px-20 py-20 radius-20 mb-20">
    <div class="card__header mb-3">
      <div class="d-flex align-items-center gap-3 flex-wrap">
        <h4 class="title">Office Hour</h4>
        <div class="form__checkbox">
          <input class="form-check-input" type="checkbox" id="24_hours_open" v-model="isChecked" />
          <label class="form-check-label" for="24_hours_open">24 Hours Open</label>
        </div>
      </div>
    </div>
    <div class="card__body">
      <!-- File Item Start -->
      <fieldset :disabled="isChecked">
        <div class="file__item" v-for="items in OfficeHourData" :key="items.id">
          <div class="title__area">
            <h5 class="title text-heading fw-medium">{{ items.title }}</h5>
          </div>
          <div class="hours__time">
            <Vue3Select v-model="items.selectedFrom" :options="HoursFrom" placeholder="From" />
            <span>To</span>
            <Vue3Select v-model="items.selectedTo" :options="HoursTo" placeholder="To" />
          </div>
          <div class="form__checkbox justify-content-sm-center">
            <input
              class="form-check-input"
              type="checkbox"
              :id="`weekend${items.id}`"
              v-model="items.isWeekend"
            />
            <label class="form-check-label" :for="`weekend${items.id}`">Weekend</label>
          </div>
        </div>
        <div class="btn__group">
          <button type="submit" class="sg-btn sg-btn-dark radius-10 fw-medium">Update</button>
        </div>
      </fieldset>
    </div>
  </div>
  <!-- Team -->
  <div class="card px-20 py-20 radius-20 mb-20">
    <div class="card__header mb-3">
      <h4 class="title">Teams</h4>
      <div class="btn__group">
        <router-link :to="{ name: 'train-ai-agent-add-team' }" class="sg-btn sg-btn-dark"
          >Add Team
        </router-link>
      </div>
    </div>
    <div class="card__body">
      <!-- File Item Start -->
      <div class="file__item" v-for="items in TeamData" :key="items.id">
        <div class="thumb">
          <img :src="items.thumb" :alt="items.title" />
        </div>
        <div class="title__area">
          <h5 class="title text-heading fw-medium">{{ items.title }}</h5>
        </div>
        <span class="text">{{ items.member }}</span>
        <div class="action__btn">
          <router-link :to="{ name: 'train-ai-agent-view-team' }" class="button">
            <HugeiconsIcon :icon="ViewIcon" />
          </router-link>
          <router-link :to="{ name: 'train-ai-agent-add-team' }" class="button">
            <HugeiconsIcon :icon="Edit03Icon" />
          </router-link>
          <button type="button" class="button delete">
            <HugeiconsIcon :icon="Delete02Icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Achievements  -->
  <div class="card px-20 py-20 radius-20 mb-20">
    <div class="card__header mb-3">
      <h4 class="title">Achievements</h4>
      <div class="btn__group">
        <router-link :to="{ name: 'train-ai-agent-add-achievements' }" class="sg-btn sg-btn-dark"
          >Add Achievement
        </router-link>
      </div>
    </div>
    <div class="card__body">
      <!-- File Item Start -->
      <div class="file__item" v-for="items in AchievementData" :key="items.id">
        <div class="thumb">
          <img :src="items.thumb" :alt="items.title" />
        </div>
        <div class="title__area">
          <h5 class="title text-heading fw-medium">{{ items.title }}</h5>
        </div>
        <span class="text">{{ items.member }}</span>
        <div class="action__btn">
          <router-link :to="{ name: 'train-ai-agent-view-achievements' }" class="button">
            <HugeiconsIcon :icon="ViewIcon" />
          </router-link>
          <router-link :to="{ name: 'train-ai-agent-add-achievements' }" class="button">
            <HugeiconsIcon :icon="Edit03Icon" />
          </router-link>
          <button type="button" class="button delete">
            <HugeiconsIcon :icon="Delete02Icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Awards -->
  <div class="card px-20 py-20 radius-20 mb-20">
    <div class="card__header mb-3">
      <h4 class="title">Awards</h4>
      <div class="btn__group">
        <router-link :to="{ name: 'train-ai-agent-add-award' }" class="sg-btn sg-btn-dark"
          >Add Award
        </router-link>
      </div>
    </div>
    <div class="card__body">
      <!-- File Item Start -->
      <div class="file__item" v-for="items in AwardData" :key="items.id">
        <div class="thumb">
          <img :src="items.thumb" :alt="items.title" />
        </div>
        <div class="title__area">
          <h5 class="title text-heading fw-medium">{{ items.title }}</h5>
        </div>
        <span class="text">{{ items.member }}</span>
        <div class="action__btn">
          <router-link :to="{ name: 'train-ai-agent-view-award' }" class="button">
            <HugeiconsIcon :icon="ViewIcon" />
          </router-link>
          <router-link :to="{ name: 'train-ai-agent-add-award' }" class="button">
            <HugeiconsIcon :icon="Edit03Icon" />
          </router-link>
          <button type="button" class="button delete">
            <HugeiconsIcon :icon="Delete02Icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Edit03Icon, Delete02Icon, ViewIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/vue'

// 24 Hours Check All Disable
const isChecked = ref(false)
// Hours Dropdown Login
const HoursFrom = ref([
  { label: '09:00 am', value: '09:00_am' },
  { label: '10:00 am', value: '10:00_am' },
  { label: '11:00 am', value: '11:00_am' },
  { label: '12:00 pm', value: '12:00_pm' },
  { label: '01:00 pm', value: '01:00_pm' },
  { label: '02:00 pm', value: '02:00_pm' },
  { label: '03:00 pm', value: '03:00_pm' },
  { label: '04:00 pm', value: '04:00_pm' },
  { label: '05:00 pm', value: '05:00_pm' },
  { label: '06:00 pm', value: '06:00_pm' },
  { label: '07:00 pm', value: '07:00_pm' },
  { label: '08:00 pm', value: '08:00_pm' },
])

// If HoursTo is different, define it separately
const HoursTo = HoursFrom // Or create a separate list if needed

// Team Data
const OfficeHourData = ref([
  { id: '1', title: 'Saturday', selectedFrom: null, selectedTo: null, isWeekend: false },
  { id: '2', title: 'Sunday', selectedFrom: null, selectedTo: null, isWeekend: false },
  { id: '3', title: 'Monday', selectedFrom: null, selectedTo: null, isWeekend: false },
  { id: '4', title: 'Tuesday', selectedFrom: null, selectedTo: null, isWeekend: false },
  { id: '5', title: 'Wednesday', selectedFrom: null, selectedTo: null, isWeekend: false },
  { id: '6', title: 'Thursday', selectedFrom: null, selectedTo: null, isWeekend: false },
  { id: '7', title: 'Friday', selectedFrom: null, selectedTo: null, isWeekend: false },
])

// Team Data
const TeamData = ref([
  {
    id: '1',
    thumb: '../../../../../public/assets/images/user-avatar.jpg',
    title: 'Business Development',
    member: 'Members: 6',
  },
  {
    id: '2',
    thumb: '../../../../../public/assets/images/user-avatar.jpg',
    title: 'Software Development',
    member: 'Members: 6',
  },
])

// AchievementData
const AchievementData = ref([
  {
    id: '1',
    thumb: '../../../../../public/assets/images/user-avatar.jpg',
    title: '20 Thousand Plus Customers',
  },
  {
    id: '2',
    thumb: '../../../../../public/assets/images/user-avatar.jpg',
    title: '100k Products Sold',
  },
])

// AwardData
const AwardData = ref([
  {
    id: '1',
    thumb: '../../../../../public/assets/images/user-avatar.jpg',
    title: 'Best Envato Author',
    member: '2020',
  },
  {
    id: '2',
    thumb: '../../../../../public/assets/images/user-avatar.jpg',
    title: 'Proud BASIS Member',
    member: '2024',
  },
])
</script>
