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
				<div class="row g-3">
					<div class="col-lg-6" v-for="(agent, index) in aiAgentData" :key="index">
						<div class="card px-20 py-20 radius-16">
							<div class="card__header pb-3 mb-3 border-bottom">
								<h4 class="title">{{ agent.agent_name }}</h4>
							</div>
							<div class="card__body">
								<div class="text-14 lw-normal text-content fw-medium mb-3">
									<span class="me-1 text-heading text-capitalize">Team Status: </span>
									<div class="badge badge-success">{{ agent.team_status }}</div>
								</div>
								<ul class="d-grid gap-2 ps-4">
									<li class="text-14 lw-normal text-content fw-medium">{{ agent.documents.pdf }}</li>
									<li class="text-14 lw-normal text-content fw-medium">{{ agent.documents.faq }}</li>
									<li class="text-14 lw-normal text-content fw-medium">{{ agent.documents.text_file }}
									</li>
									<li class="text-14 lw-normal text-content fw-medium">{{ agent.documents.knowledge }}
									</li>
								</ul>
								<div class="text-14 lw-normal text-content fw-medium my-2">
									Connected WhatsApp Number:
								</div>
								<div class="whatsapp-list d-flex flex-wrap gap-2">
									<div v-for="(number, idx) in agent.whatsapp_numbers" :key="idx" class="number-tag">
										<span>{{ number }}</span>
										<button class="clear-number" @click="removeNumber(index, idx)">
											<HugeiconsIcon :icon="CancelCircleIcon" />
										</button>
									</div>
								</div>
								<div class="btn__group d-flex align-items-center gap-3 mt-30">
									<a href="#" class="sg-btn sg-btn-primary fw-medium radius-10">
										Open AI Configuration
									</a>
									<router-link :to="{ name: 'train-ai-agent' }"
										class="sg-btn sg-btn-gray fw-medium radius-10">
										Train agent
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { DashboardCircleIcon, ArrowLeft02Icon, CancelCircleIcon } from '@hugeicons/core-free-icons'
import Breadcrumb from '@/components/Breadcrumb.vue'
import SectionTitle from '@/components/SectionTitle.vue'

// BreadCrumb Data
const BreadcrumbItems = ref([
	{ icon: DashboardCircleIcon, title: 'Dashboard', to: '/dashboard' },
	{ icon: '', title: 'Train AI Agent' },
])

// Section Title Data
const SectionTitleData = ref([
	{
		// icon: ArrowLeft02Icon,
		// to: '/dashboard',
		title: 'AI Agents',
		desc: 'Manage AI Agents',
		button_link: 'create-ai-agent',
		button_text: 'Create AI Agent',
	},
])

// All AI Agent 
const aiAgentData = ref([
	{
		agent_name: 'Yoori Sales Agent',
		team_status: 'Active',
		documents: {
			pdf: 'PDF (5)',
			faq: 'FAQ (50)',
			text_file: 'Text File (10)',
			knowledge: 'Knowledge (50)'
		},
		whatsapp_numbers: ['01322-827799', '01322-827799']
	},
	{
		agent_name: 'SpaGreen Sales Agent',
		team_status: 'Active',
		documents: {
			pdf: 'PDF (5)',
			faq: 'FAQ (50)',
			text_file: 'Text File (10)',
			knowledge: 'Knowledge (50)'
		},
		whatsapp_numbers: ['01322-827799', '01322-827799']
	}
]);

const removeNumber = (agentIndex, numberIndex) => {
	aiAgentData.value[agentIndex].whatsapp_numbers.splice(numberIndex, 1);
};

</script>
