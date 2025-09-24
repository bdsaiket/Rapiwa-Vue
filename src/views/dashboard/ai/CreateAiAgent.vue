<template>
	<div class="container">
		<!-- Start Row -->
		<div class="row">
			<div class="col-12">
				<!-- Breadcrumb Start -->
				<Breadcrumb :items="BreadcrumbItems" />
				<!-- Breadcrumb End -->
			</div>
		</div>
		<!-- End Row -->
		<div class="row gy-4">
			<div class="col-lg-12">
				<!-- Section Title Start -->
				<SectionTitle :items="SectionTitleData[0]" />
			</div>
			<div class="col-12">
				<form action="#" class="card px-20 py-20 mt-20">
					<div class="row g-3">
						<div class="col-lg-6">
							<div class="form-group">
								<label for="a_name">Agent Name </label>
								<input type="text" name="a_name" class="form-control" id="a_name"
									placeholder="Enter Name" />
							</div>
						</div>
						<div class="col-lg-6">
							<div class="form-group">
								<label>Type </label>
								<Vue3Select v-model="selected" :options="SelectAgent" class="radius-10"
									placeholder="Select Type" />
							</div>
						</div>
						<div class="col-12">
							<div class="btn__group ">
								<button type="submit" class="sg-btn sg-btn-dark radius-10 fw-medium">Create</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { DashboardCircleIcon, ArrowLeft02Icon, Alert01Icon } from '@hugeicons/core-free-icons'
import Breadcrumb from '@/components/Breadcrumb.vue'
import SectionTitle from '@/components/SectionTitle.vue'

// BreadCrumb Data
const BreadcrumbItems = ref([
	{ icon: DashboardCircleIcon, title: 'Dashboard', to: '/dashboard' },
	{ icon: '', title: 'AI Agent', to: '/ai-agent' },
	{ icon: '', title: 'Create AI Agent' },
])

// Section Title Data
const SectionTitleData = ref([
	{
		icon: ArrowLeft02Icon,
		to: '/ai-agent',
		title: 'Create AI Agent',
		desc: '',
		button_link: '',
		button_text: '',
	},
])

// Dropdown Login
const selected = ref(null)

const SelectAgent = ref([
	{ label: 'Sales Agent', value: 'sales_agent' },
	{ label: 'Support Agent', value: 'support_agent' },
	{ label: 'Sales & Support Agent', value: 's&s_agent' },
])
</script>
