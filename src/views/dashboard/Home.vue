<template>
	<div class="container">
		<!-- Start Row -->
		<div class="row">
			<div class="col-12">
				<!-- Banner Wrapper Start -->
				<BannerGreeting />
				<!-- Banner Wrapper Start -->
			</div>
		</div>
		<!-- End Row -->
		<div class="row gy-4">
			<div class="col-lg-5">
				<!-- message Activity -->
				<MessageActivity />
			</div>
			<div class="col-lg-7">
				<!-- Log Statistics -->
				<logStatistic />
			</div>
		</div>
	</div>
</template>


<script setup>
import BannerGreeting from "@/components/BannerGreeting.vue";
import MessageActivity from "@/components/MessageActivity.vue";
import logStatistic from "@/components/logStatistic.vue";

</script>
