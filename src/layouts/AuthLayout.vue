<template>
	<!-- Dashboard Main Start -->
	<div class="dashboard__main">
		<!-- Layout Wrapper Start -->
		<div class="layout__wrapper">
			<!-- Sidebar Menu -->
			<Sidebar />
			<!-- Layout Container Start -->
			<div class="layout__container">
				<!-- Header Start -->
				<Header />
				<!-- Layout Page Content Start -->
				<div class="layout__page">
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
	<!-- Dashboard Main End -->
</template>

<script setup>
import Sidebar from '@/layouts/includes/Sidebar.vue';
import Header from '@/layouts/includes/Header.vue';
</script>
