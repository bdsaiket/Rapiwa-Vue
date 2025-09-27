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
		<div class="row">
			<div class="col-lg-12">
				<!-- Section Title Start -->
				<SectionTitle :items="SectionTitleData[0]" />
			</div>
			<div class="col-12">
				<form action="#" class="card px-20 py-20 mt-20">
					<div class="row gy-3">
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="form-group">
								<label for="f_name">First Name <span class="required">*</span></label>
								<input type="text" name="f_name" class="form-control" id="f_name"
									placeholder="Enter first name" value="Alex" />
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="form-group">
								<label for="l_name">last Name <span class="required">*</span></label>
								<input type="text" name="l_name" class="form-control" id="l_name"
									placeholder="Enter last name" value="Smith" />
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="form-group">
								<label for="w_number">WhatsApp Number<span class="required">*</span></label>
								<vue-tel-input v-model="phone" mode="international" :input-options="inputOptions"
									:enabled-country-code="true" :enabled-flags="true"
									:dropdown-options="dropdownOptions" placeholder="Search country and enter number" />
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="form-group">
								<label for="password">Password<span class="required">*</span></label>
								<input type="password" name="password" class="form-control" id="password"
									placeholder="Enter password" value="password" />
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="form-group">
								<label for="c_password">Confirm Password<span class="required">*</span></label>
								<input type="password" name="c_password" class="form-control" id="c_password"
									placeholder="Enter confirm password" value="password" />
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="form-group">
								<label>Upload Profile Photo</label>
								<FileUpload class="flex-row" />
							</div>
						</div>
						<div class="col-12">
							<div class="manage__header mt-20 pb-3 mb-3 border-bottom">
								<h5 class="text-16 fw-semibold text-heading mb-0">Manage Permissions</h5>
							</div>
							<div class="permission__wrapper d-flex align-content-center flex-wrap gap-4">
								<div class="form-switch">
									<label class="form-check-label" for="session">Session:</label>
									<input class="form-check-input" type="checkbox" role="switch" id="session"
										checked />
								</div>
								<div class="form-switch">
									<label class="form-check-label" for="manage_team">Manage Team:</label>
									<input class="form-check-input" type="checkbox" role="switch" id="manage_team"
										checked />
								</div>
								<div class="form-switch">
									<label class="form-check-label" for="manage_setting">Manage Setting:</label>
									<input class="form-check-input" type="checkbox" role="switch" id="manage_setting" />
								</div>
								<div class="form-switch">
									<label class="form-check-label" for="manage_ticket">Manage Ticket:</label>
									<input class="form-check-input" type="checkbox" role="switch" id="manage_ticket" />
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="btn__group mt-30">
								<button type="submit" class="sg-btn sg-btn-dark radius-10 fw-medium">
									Save Change
								</button>
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
import Breadcrumb from '@/components/Breadcrumb.vue'
import SectionTitle from '@/components/SectionTitle.vue'

import FileUpload from '@/components/FileUpload.vue'
import { ArrowLeft02Icon, DashboardCircleIcon } from '@hugeicons/core-free-icons/index'

// BreadCrumb Data
const BreadcrumbItems = ref([
	{ icon: DashboardCircleIcon, title: 'Dashboard', to: '/dashboard' },
	{ icon: '', title: 'Team Members', to: '/team' },
	{ icon: '', title: 'Edit Team Member' },
])

// Section Title Data
const SectionTitleData = ref([
	{
		icon: ArrowLeft02Icon,
		to: '/team',
		title: 'Edit Team Member',
		desc: '',
		button_link: '',
		button_text: '',
	},
])

// Phone Input
const phone = ref('')

// Optional config for better UX
const inputOptions = {
	showDialCode: true,
}

const dropdownOptions = {
	showFlags: true,
	showSearchBox: true,
	searchBoxPlaceholder: 'Search country',
}
</script>
