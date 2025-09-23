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
				<div class="row ">
					<div class="col-lg-3">
						<div class="agent__sidebar">
							<ul class="nav flex-column sidebar__menu">
								<li>
									<router-link :to="{ name: 'train-ai-agent' }">
										Dashboard
									</router-link>
								</li>
								<li>
									<router-link :to="{ name: 'train-ai-agent-pdf' }">
										PDF
									</router-link>
								</li>
								<li>
									<router-link to="/pdf">Text File</router-link>
								</li>
								<li>
									<router-link to="/faq">FAQ</router-link>
								</li>
								<li>
									<router-link to="/knowledge-base">Knowledge Base</router-link>
								</li>
								<li>
									<router-link to="/product">Product</router-link>
								</li>
								<li>
									<router-link to="/service">Service</router-link>
								</li>
								<li>
									<router-link to="/company-info">Company Info</router-link>
								</li>
								<li>
									<router-link to="/open-ai-configure">
										Open AI Configure
									</router-link>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-lg-9">
						<router-view></router-view>
					</div>
					<!-- <div class="col-12">
						<div class="btn__group">
							<button type="submit" class="sg-btn sg-btn-dark radius-10 fw-medium">Confirm</button>
						</div>
					</div> -->
				</div>
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
  { icon: '', title: 'AI Agents', to: '/ai-agent' },
  { icon: '', title: 'Train AI Agent' },
])

// Section Title Data
const SectionTitleData = ref([
  {
    icon: ArrowLeft02Icon,
    to: '/ai-agent',
    title: 'SpaGreen Sales Agent',
    desc: 'Train AI Agent Model with your knowledge base & predefined replies content for more accurate response',
    button_link: 'create-ai-agent',
    button_text: 'Train & Fine-Tuning',
    badge: 'Last Train: 1 days ago',
  },
])

// Dropdown Login
const selected = ref(null)

const SelectAgent = ref([
  { label: 'Sales Agent', value: 'sales_agent' },
  { label: 'Telegram', value: 'telegram' },
  { label: 'Facebook', value: 'facebook' },
])
</script>
